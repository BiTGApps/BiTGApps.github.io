/* This file is part of The BiTGApps Project */

/*
 * Nested Map: Category -> Platform -> Version -> File Info
 */

const downloadLibrary = new Map([
    ['CORE', new Map([
        ['ARM', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-16.0.0-20260517-105809-CORE.zip' }]
        ])],
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-124149-release/BiTGApps-arm64-16.0.0-20260517-124149-CORE.zip' }]
        ])]
    ])],
    ['MINI', new Map([
        ['ARM', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-16.0.0-20260517-105809-MINI.zip' }]
        ])],
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-124149-release/BiTGApps-arm64-16.0.0-20260517-124149-MINI.zip' }]
        ])]
    ])],
    ['OMNI', new Map([
        ['ARM', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-16.0.0-20260517-105809-OMNI.zip' }]
        ])],
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-124149-release/BiTGApps-arm64-16.0.0-20260517-124149-OMNI.zip' }]
        ])]
    ])],
    ['ROAR', new Map([
        ['ARM', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-16.0.0-20260517-105809-ROAR.zip' }]
        ])],
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-124149-release/BiTGApps-arm64-16.0.0-20260517-124149-ROAR.zip' }]
        ])]
    ])],
    ['NANO', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-124149-release/BiTGApps-arm64-16.0.0-20260517-124149-NANO.zip' }]
        ])]
    ])],
    ['ATOM', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-124149-release/BiTGApps-arm64-16.0.0-20260517-124149-ATOM.zip' }]
        ])]
    ])],
    ['PICO', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-124149-release/BiTGApps-arm64-16.0.0-20260517-124149-PICO.zip' }]
        ])]
    ])],
    ['FULL', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-124149-release/BiTGApps-arm64-16.0.0-20260517-124149-FULL.zip' }]
        ])]
    ])],
    ['TINT', new Map([
        ['ARM64', new Map([
            ['16.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-124149-release/BiTGApps-arm64-16.0.0-20260517-124149-TINT.zip' }]
        ])]
    ])],
    ['ADDON', new Map([
        ['ALL', new Map([
            ['AndroidAuto', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/AndroidAuto-20260517-123732.zip' }],
            ['Calculator', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Calculator-20260517-123732.zip' }],
            ['Calendar', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Calendar-20260517-123732.zip' }],
            ['Chrome', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Chrome-20260517-123732.zip' }],
            ['Contacts', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Contacts-20260517-123732.zip' }],
            ['DeskClock', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/DeskClock-20260517-123732.zip' }],
            ['WebView', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/WebView-20260517-123732.zip' }],
            ['Wellbeing', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Wellbeing-20260517-123732.zip' }]
        ])],
        ['ARM64', new Map([
            ['Assistant', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Assistant-20260517-123732-ARM64.zip' }],
            ['Dialer', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Dialer-20260517-123732-ARM64.zip' }],
            ['Drive', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Drive-20260517-123732-ARM64.zip' }],
            ['Gmail', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Gmail-20260517-123732-ARM64.zip' }],
            ['GoogleTTS', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/GoogleTTS-20260517-123732-ARM64.zip' }],
            ['Gboard', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/LatinIME-20260517-123732-ARM64.zip' }],
            ['Maps', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Maps-20260517-123732-ARM64.zip' }],
            ['Markup', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Markup-20260517-123732-ARM64.zip' }],
            ['Messaging', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Messaging-20260517-123732-ARM64.zip' }],
            ['Photos', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-123732-addons/Photos-20260517-123732-ARM64.zip' }]
        ])]
    ])]
]);

// Helper to clear and populate a dropdown
function updateDropdown(id, options, text) {
    const el = document.getElementById(id);
    el.innerHTML = `<option value="" hidden>${text}</option>`;
    options.forEach(opt => {
        let o = document.createElement('option');
        o.value = opt;
        o.textContent = opt;
        el.appendChild(o);
    });
    el.disabled = options.length === 0;
}

function populatePlatforms() {
    const soft = document.getElementById('software-0').value;
    const platforms = soft ? Array.from(downloadLibrary.get(soft).keys()) : [];
    updateDropdown('platform-0', platforms, 'Select Platform');
    updateDropdown('version-0', [], 'Select Version'); // Reset version
}

function populateVersions() {
    const soft = document.getElementById('software-0').value;
    const platforms = document.getElementById('platform-0').value;
    const versions = (soft && platforms) ? Array.from(downloadLibrary.get(soft).get(platforms).keys()) : [];
    updateDropdown('version-0', versions, 'Select Version');
}

function handleDownload() {
    const s = document.getElementById('software-0').value;
    const p = document.getElementById('platform-0').value;
    const v = document.getElementById('version-0').value;

    // Final fetch from the nested map
    const fileData = downloadLibrary.get(s)?.get(p)?.get(v);

    if (fileData) {
        const a = document.createElement('a');
        a.href = fileData.url;
        a.download = fileData.name;   // HTML5 download attribute
        document.body.appendChild(a); // Append
        a.click();                    // Trigger
        document.body.removeChild(a); // Remove
    } else {
        alert("Please select all options to fetch the download link.");
    }
}
