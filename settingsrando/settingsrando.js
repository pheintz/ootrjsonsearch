var outputJSON = {};
const topRowSongs = [
    "CVars.gRandoSettings.StartingEponasSong",
    "CVars.gRandoSettings.StartingSariasSong",
    "CVars.gRandoSettings.StartingSongOfStorms",
    "CVars.gRandoSettings.StartingSongOfTime",
    "CVars.gRandoSettings.StartingZeldasLullaby",
    "CVars.gRandoSettings.StartingSunsSong",
];

const bottomRowSongs = [
    "CVars.gRandoSettings.StartingBoleroOfFire",
    "CVars.gRandoSettings.StartingMinuetOfForest",
    "CVars.gRandoSettings.StartingNocturneOfShadow",
    "CVars.gRandoSettings.StartingPreludeOfLight",
    "CVars.gRandoSettings.StartingRequiemOfSpirit",
    "CVars.gRandoSettings.StartingSerenadeOfWater"
]
function renderInputs(obj, parentKey = '') {
    let html = '';
    for (const key in obj) {
        const fullKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];
        
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            if (key !== 'InjectItemCounts' && key !== 'CVars' && key !== 'gEnhancements' && key !== 'ExtraTraps') {
                html += `<strong>${key}</strong>`;
            }
            html += renderInputs(value, fullKey);
        } else if (typeof value === 'string') {
            var minMax = value.split('-');
            var min = minMax[0];
            var max = minMax.length > 1 ? minMax[1] : "";
            html += '<div style="margin-left: 20px;">';
            html += `<label for="${putSpacesInCamelCase(fullKey)}">${putSpacesInCamelCase(key)}: </label>`;
            html += `<input data-min="${min}" data-max="${max}" type="checkbox" id="${fullKey}" class='randomize-check' name="${fullKey}" ${value ? 'checked' : ''}><br>`;
            html += '</div>';
        }
        
    }
    return html;
}

function generateConfigForDownload(objectToReplace) {
    const outputJSON = structuredClone(objectToReplace);

    const checkboxes = document.querySelectorAll('.randomize-check');

    checkboxes.forEach(checkbox => {
        const path = checkbox.getAttribute('name'); 
        const min = checkbox.getAttribute('data-min');
        const max = checkbox.getAttribute('data-max');

        let value;
        if (min && max) {
            value = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
        }
        else if (path) { 
            if (path.includes('EnabledTricks')) {
                // Do nothing. Keep all tricks in logic.
                value = min;
            }
            else if (path.includes('ExcludedLocations')) {
                // frogs in the rain coin toss
                if ((Math.floor(Math.random() * 2) == 0)) {
                    value = min;
                }
                else {
                    value = "";
                }
            }
        }
        const keys = path.split('.');
        let current = outputJSON;
        for (let i = 0; i < keys.length - 1; i++) {
            if (!(keys[i] in current)) current[keys[i]] = {};
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
    });
    downloadJsonAsFile(outputJSON, 'settingsrando.json');
}

function downloadJsonAsFile(jsonData, filename) {
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function putSpacesInCamelCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2');
};

function RandomizeSongs() {
    // Randomize top row songs
    var shuffleTopSongs = coinToss();
    const topLength = topRowSongs.length;
    const topRandomIndex = Math.floor(Math.random() * topLength);
    topRowSongs.forEach((song, index) => {
        const element = document.querySelector(`[id="${song}"]`);
        if (element) {
            let minmax;
            if (shuffleTopSongs) {
                minmax = (index === topRandomIndex) ? "1" : "0";
            } else {
                minmax = "0";
            }
            element.setAttribute('data-min', minmax);
            element.setAttribute('data-max', minmax);
        }
    });

    // Randomize bottom row songs
    var shuffleBottomSongs = coinToss();
    const bottomLength = bottomRowSongs.length;
    const bottomRandomIndex = Math.floor(Math.random() * bottomLength);
    bottomRowSongs.forEach((song, index) => {
        const element = document.querySelector(`[id="${song}"]`);
        if (element) {
            let minmax;
            if (shuffleBottomSongs) {
                minmax = (index === bottomRandomIndex) ? "1" : "0";
            } else {
                minmax = "0";
            }
            element.setAttribute('data-min', minmax);
            element.setAttribute('data-max', minmax);
        }
    });
}

function coinToss() {
    return Math.floor(Math.random() * 2) == 0;
}

const deepSearch = (target, value) => {
    if (typeof target === 'object') {
        for (let key in target) {
            if (typeof target[key] === 'object') {
                deepSearch(target[key]);
            } else {
                if (key === 'name') {
                    target[key] = value;
                }
            }
        }
    }
    return target
}