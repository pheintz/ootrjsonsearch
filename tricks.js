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

$(document).ready(function () {
    const uniqueValues = new Set();

    tricksJson.tricks.forEach(trick => {
        uniqueValues.add(trick.name.toLowerCase());
        uniqueValues.add(trick.location.toLowerCase());
        trick.items.forEach(item => uniqueValues.add(item.toLowerCase()));
    });

    const autocompleteValues = Array.from(uniqueValues);

    $('#search').autocomplete({
        max: 5,
        source: function(request, response) {
            var results = $.ui.autocomplete.filter(autocompleteValues, request.term);
            response(results.slice(0, 8));
        },
        select: function (event, ui) {
            const query = ui.item.value.toLowerCase();
            const filteredTricks = tricksJson.tricks.filter(trick =>
                trick.name.toLowerCase() === query ||
                trick.location.toLowerCase() === query ||
                trick.items.map(item => item.toLowerCase()).includes(query)
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
                const embedUrl = trick.embed.replace("shorts/", "embed/");
                return `
                    <div class="trick-card-container">
                        <div class="trick-card">
                            <h2>${trick.name}</h2>
                            <div class="description"><strong>How to do it:</strong> ${trick.description.replace(/\n/g, '<br>')}</div>
                            <div class="video-container">
                                <iframe
                                    src="${embedUrl}" 
                                    title="YouTube video player" 
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                           <div class="tags-container">
                                <strong>Tags:</strong>
                                <div class="tag">${trick.location}</div>
                                <div class="tag">${trick.age}</div>
                                ${trick.items.map(item => `<div class="tag">${item}</div>`).join('')}
                            </div>                        </div>
                    </div>
                `;
            }).join('');

            $('#search-results').html(resultsHtml || `<p>No results found for "${query}"</p>`);

            if (filters.size > 0) {
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
        }
    });
});
