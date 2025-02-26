$(document).ready(function () {
    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };

    let locations = {};
    let jsonItemList = [];
    let clickedItems = JSON.parse(localStorage.getItem("clickedItems")) || {};

    const goModeItems = [
        "Light Arrow",
        "Master Sword",
        "Progressive Magic Meter",
        "Progressive Bow"
    ];

    const keyItems = [
        "Megaton Hammer",
        "Mirror Shield",
        "Boomerang",
        "Progressive Hookshot"
    ];

    $("#jsonUpload").on("change", function (event) {
        $("#ResultContainer").html("");
        $("#autocomplete").val("").prop("disabled", true);
        clickedItems = {};
        localStorage.clear();

        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                try {
                    const parsedData = JSON.parse(e.target.result);
                    if (parsedData.locations && typeof parsedData.locations === "object") {
                        locations = parsedData.locations;

                        jsonItemList = [...new Set(
                            Object.values(locations).map(val => val?.item || val)
                        )];

                        LoadKeyItems(goModeItems, "GoModeItemContainer");
                        LoadKeyItems(keyItems, "KeyItemContainer");

                        $("#autocomplete").prop("disabled", false);

                        $("#autocomplete").autocomplete({
                            source: jsonItemList,
                            minLength: 2,
                            delay: 100,
                            select: function (event, ui) {
                                const matchingKeys = getMatchingKeys(ui.item.value);
                                AppendMatchingItems(matchingKeys, "ResultContainer");
                                $("#ResultHeader").html(ui.item.value);
                            }
                        });
                    } else {
                        alert("Uploaded JSON must contain a 'locations' object.");
                    }
                } catch (error) {
                    alert("Error parsing JSON. Ensure the file contains valid JSON.");
                }
            };

            reader.readAsText(file);
        } else {
            alert("No file selected.");
        }
    });

    function getMatchingKeys(searchValue) {
        return Object.keys(locations).filter(key => {
            const val = locations[key];
            return val?.item === searchValue || val === searchValue;
        });
    }

    function LoadKeyItems(items, containerId) {
        const container = $("#" + containerId);
        container.empty(); // Clear previous content
        items.forEach((listItem, index) => {
            const headerId = `${containerId}-header-${index}`;
            const subContainerId = `${containerId}-sub-${index}`;

            container.append(`<div class='key-category'><h3 id="${headerId}">${listItem}</h3><div id="${subContainerId}" class="sub-container"></div></div>`);
            const matchingItems = getMatchingKeys(listItem);
            AppendMatchingItems(matchingItems, subContainerId);
        });
    }

    function AppendMatchingItems(matchingKeys, containerId) {
        const containerList = $("#" + containerId);
        containerList.empty(); // Clear previous content
        if (matchingKeys.length > 0) {
            matchingKeys.forEach((key, index) => {
                const displayValue = locations[key]?.item || locations[key];
                const isClicked = clickedItems[key] || false;

                containerList.append(`
                                <div id="${containerId}-item-${index}"
                                    class="result ${isClicked ? 'shown' : ''}"
                                    data-key="${key}">
                                    ${isClicked ? key : "Reveal Item Location"}
                                </div>
                            `);
            });

            // Attach click event listener dynamically
            containerList.find(".result").off("click").on("click", function () {
                const key = $(this).data("key");
                if (!clickedItems[key]) {
                    clickedItems[key] = true;
                    localStorage.setItem("clickedItems", JSON.stringify(clickedItems));
                    $(this).html(key).addClass("shown");
                }
            });
        } else {
            containerList.append("<div class='no-results'>No matching keys found.</div>");
        }
    }
});

function ChangeCounter(num) {
    var current = parseInt($("#hint-number").html());
    current += num;
    if (current < 0)
        current = 0;
    $("#hint-number").html(current);
}