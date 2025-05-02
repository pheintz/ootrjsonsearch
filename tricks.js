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
const $searchResults = $('#search-results');
const $searchInput = $('#search');


$(document).ready(function () {
    const autoCompleteSet = new Set();

    tricksJson.tricks.forEach(trick => {
        autoCompleteSet.add(trick.name.toLowerCase());
        autoCompleteSet.add(trick.location.toLowerCase());
        trick.items.forEach(item => autoCompleteSet.add(item.toLowerCase()));
    });

    const autocompleteValues = Array.from(autoCompleteSet);

    $('#search').autocomplete({
        source: function (request, response) {
            let results = $.ui.autocomplete.filter(autocompleteValues, request.term);
            response(results.slice(0, 8));
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

    function handleSearch(query) {
        const filteredTricks = tricksJson.tricks.filter(trick =>
            trick.name.toLowerCase().includes(query) ||
            trick.location.toLowerCase().includes(query) ||
            trick.items.some(item => item.toLowerCase().includes(query))
        );

        let resultsHtml = "";
        const filters = new Set();

        filteredTricks.forEach(trick => {
            trick.items.forEach(item => filters.add(item.toLowerCase()));
            if (trick.location) {
                filters.add(trick.location.toLowerCase());
            }
            if (trick.age) {
                filters.add(trick.age.toLowerCase());
            }
        });

        if (filters.size > 0) {
            resultsHtml += `<div class='filter-container'>`;
            filters.forEach(filter => {
                resultsHtml += `<div class="filter-button">${filter}</div>`;
            });
            resultsHtml += `</div>`;
        }

        resultsHtml += filteredTricks.map(trick => {
            let embed = CreateEmbedIframe(trick.embed);
            return `
            <div class="trick-card-container">
                <article class="trick-card">
                    <h2>${trick.name}</h2>
                    <div class="description"><strong>How to do it:</strong> ${trick.description.replace(/\n/g, '<br>')}</div>
                    ${embed}
                    <div class="tags-container">
                        <strong>Tags:</strong>
                        <div class="tag">${trick.location}</div>
                        <div class="tag">${trick.age}</div>
                        ${trick.items.map(item => `<div class="tag">${item}</div>`).join('')}
                    </div>
                </article>
            </div>
        `;
        }).join('');

        $searchResults.html(resultsHtml || `<p>No results found for "${query}"</p>`);

        if (filters.size > 0) {
            initFilterButtons();
        }
    }

    function CreateEmbedIframe(embedUrl) {
        const isTwitch = embedUrl.includes("twitch.tv");
        const parentParam = isTwitch ? "&parent=www.ootrjsonsearch.org" : "";
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
});