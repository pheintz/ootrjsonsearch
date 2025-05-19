/**
 * tricks.js
 * 
 * This script handles the search and filtering functionality for tricks data.
 * It uses jQuery to dynamically populate an autocomplete search bar and display
 * filtered results based on user input. The data is sourced from `tricksList.js`
 * via the global `window.getTricks` function.
 * 
 * Features:
 * - Autocomplete search for trick names, locations, and items.
 * - Dynamic filtering of results based on selected tags.
 * - Embeds YouTube videos for each trick.
 * - Displays additional metadata such as location, age, and items.
 * 
 * Dependencies:
 * - jQuery
 * - jQuery UI (for autocomplete functionality)
 * - tricksList.js (provides the `getTricks` function)
 */

const tricksJson = window.getTricks();

const autoCompleteSet = new Set();

tricksJson.tricks.forEach(trick => {
    autoCompleteSet.add(trick.name.toLowerCase());
    autoCompleteSet.add(trick.location.toLowerCase());
    trick.tags.forEach(item => autoCompleteSet.add(item.toLowerCase()));
});
const autocompleteValues = Array.from(autoCompleteSet);
const autocompleteFuse = new Fuse(autocompleteValues, {
    includeScore: true,
    ignoreLocation: true,
    threshold: 0.3,
    useExtendedSearch: true
});
const trickFuse = new Fuse(tricksJson.tricks, {
    keys: ['name', 'location', 'tags'],
    includeScore: true,
    ignoreLocation: true,
    threshold: 0.3,
    useExtendedSearch: true
});


const $searchResults = $('#search-results');
const $searchInput = $('#search');
const baseShareUrl = window.location.href.split('?')[0] + '?trick=';


$(document).ready(function () {
    $('#search').autocomplete({
        source: function (request, response) {
            const results = autocompleteFuse.search(request.term);
            const suggestions = results.map(r => r.item).slice(0, 8);
            response(suggestions);
        },
        select: function (event, ui) {
            handleSearch(ui.item.value.toLowerCase());
        }
    });

    $('#search').keypress(function (event) {
        if (event.key === "Enter") {
            const query = $(this).val().toLowerCase();
            handleSearch(query);
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const trickParam = urlParams.get('trick');
    if (trickParam) {
        handleSearch(trickParam.toLowerCase());
    }
});

function CreateEmbedIframe(embedUrl) {
    const isTwitch = embedUrl.includes("twitch.tv");
    const parentParam = isTwitch ? "&parent=ootrjsonsearch.org" : "";
    return `
           <div class="video-container">
               <iframe
                   src="${embedUrl.replace("shorts/", "embed/")}${parentParam}"
                   frameborder="0"
                   allowfullscreen
                   ${isTwitch ? 'scrolling="no"' : ''}
                   ${!isTwitch ? 'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"' : ''}>
               </iframe>
           </div>
       `;
}

function initFilterButtons() {
    const activeTags = new Set();
    $('.filter-button').click(function () {
        const filter = $(this).text().toLowerCase();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            activeTags.delete(filter);
        } else {
            $(this).addClass('active');
            activeTags.add(filter);
        }
        $('.trick-card-container').each(function () {
            const cardTags = $(this).find('.tag').map(function () {
                return $(this).text().toLowerCase();
            }).get();

            const matchesAll = Array.from(activeTags).every(tag => cardTags.includes(tag));

            if (activeTags.size === 0 || matchesAll) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
}

function filterTricks(query) {
    if (!query.trim()) return tricksJson.tricks;

    const fuseResults = trickFuse.search(query);
    return fuseResults.map(result => result.item);
}

function extractFilters(tricks) {
    const filters = new Set();
    tricks.forEach(trick => {
        trick.tags.forEach(item => filters.add(item.toLowerCase()));
        if (trick.location) filters.add(trick.location.toLowerCase());
        if (trick.age) filters.add(trick.age.toLowerCase());
    });
    return filters;
}

function renderFilters(filters) {
    let html = `<div class='filter-container'>`;
    filters.forEach(filter => {
        html += `<div class="filter-button">${filter}</div>`;
    });
    html += `</div>`;
    return html;
}

function renderTrickCards(tricks) {
    var separator = tricks.length > 1 ? "top-border" : "";
    return tricks.map(trick => {
        const embed = CreateEmbedIframe(trick.embed);
        const shareUrl = `${baseShareUrl}${encodeURIComponent(trick.name)}`;

        return `
        <div class="trick-card-container ${separator}">
            <article class="trick-card">
                <h2 class="trick-header">
                    ${trick.name}
                    <img class="trick-icon" src="../img/copy-link.svg" data-url="${shareUrl}" title="Copy Share Link" />
                </h2>
                <div class="description"><strong>How to do it:</strong> ${trick.description.replace(/\n/g, '<br>')}</div>
                ${embed}
                <div class="tags-container">
                    <strong>Tags:</strong>
                    <div class="tag">${trick.location}</div>
                    <div class="tag">${trick.age}</div>
                    ${trick.tags.map(item => `<div class="tag">${item}</div>`).join('')}
                </div>
            </article>
        </div>
        `;
    }).join('');
}

function bindShareButtons() {
    document.querySelectorAll('.trick-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const url = icon.getAttribute('data-url');
            if (url) ShareModule.show(url);
        });
    });
}

function handleSearch(query) {
    const filteredTricks = filterTricks(query);
    const filters = extractFilters(filteredTricks);

    const htmlParts = [];

    if (filters.size > 0) {
        htmlParts.push(renderFilters(filters));
    }

    if (filteredTricks.length > 0) {
        htmlParts.push(renderTrickCards(filteredTricks));
    }

    const resultsHtml = htmlParts.join('');
    $searchResults.html(resultsHtml || `<p>No results found for "${query}"</p>`);

    if (filteredTricks.length > 0) {
        initFilterButtons();
        bindShareButtons(); // bind click events on .trick-icon
    }
}


function listTricksAsDirectory() {
    // Group tricks by location
    const tricksByLocation = {};
    tricksJson.tricks.forEach(trick => {
        const location = trick.location || 'Unknown';
        if (!tricksByLocation[location]) {
            tricksByLocation[location] = [];
        }
        tricksByLocation[location].push(trick);
    });

    // Sort locations alphabetically
    const sortedLocations = Object.keys(tricksByLocation).sort((a, b) => a.localeCompare(b));

    // Build HTML with headers for each location
    let html = '<div id="directory">';
    sortedLocations.forEach(location => {
        html += `<h3>${location}</h3>
        <div class="directory-list">
            <ul>`;
            tricksByLocation[location]
                .sort((a, b) => a.name.localeCompare(b.name))
                .forEach(trick => {
                    html += `<li class="directory-item">${trick.name}</li>`;
                });
            html += `</ul>
        </div>`;
    });
    html += '</div>';

    $('#search-results').html(html);

    $('.directory-item').click(function () {
        const trickName = $(this).text().toLowerCase();
        // Find the exact trick by name (case-insensitive)
        const trick = tricksJson.tricks.find(t => t.name.toLowerCase() === trickName);
        if (trick) {

            // Show the result in a modal
            const $modal = $('#trick-modal');
            if ($modal.length === 0) {
                // Create modal if it doesn't exist
                $('body').append(`
                    <div id="trick-modal" class="modal">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <div id="modal-body"></div>
                        </div>
                    </div>
                `);
            }
            $('#modal-body').html(renderTrickCards([trick]));
            $('#trick-modal').show();
            $('body').css('overflow', 'hidden');
            $('#trick-modal .close').click(function () {
                $('#trick-modal').hide();
                $('body').css('overflow', 'auto');
            });
            $('#trick-modal').on('click', function (e) {
                if (e.target === this) {
                    $(this).hide();
                    $('body').css('overflow', 'auto');
                }
            });
            bindShareButtons();
        }
    });
}