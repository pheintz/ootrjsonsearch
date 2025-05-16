var outputJSON = {};
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
            html += '<div style="margin-left: 20px;">';
            html += `<label for="${putSpacesInCamelCase(fullKey)}">${putSpacesInCamelCase(key)}: </label>`;
            html += `<input data-min="${minMax[0]}" data-max="${minMax[1]}" type="checkbox" id="${fullKey}" class='randomize-check' name="${fullKey}" ${value ? 'checked' : ''}><br>`;
            html += '</div>';
        }
        
    }
    return html;
}

function generateConfigForDownload(objectToReplace) {
    const outputJSON = structuredClone(objectToReplace); // Deep clone to avoid modifying original

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const path = checkbox.getAttribute('name'); // e.g., "gCheats.infiniteHealth"
        const min = checkbox.getAttribute('data-min');
        const max = checkbox.getAttribute('data-max');

        let value;
        if (min !== null && max !== null) {
            value = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
        } else {
            value = checkbox.checked;
        }

        // Set value in nested object using path
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