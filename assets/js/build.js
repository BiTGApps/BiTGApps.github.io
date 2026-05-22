/* This file is part of The BiTGApps Project */

/*
 * Nested Map: Category -> Platform -> Version -> File Info
 */

const downloadLibrarySafe = new Map([
    ['CORE', new Map([
        ['ARM', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-15.0.0-20260517-105809-CORE.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-14.0.0-20260517-105809-CORE.zip' }],
            ['13.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-13.0.0-20260517-105809-CORE.zip' }],
            ['12.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-12.1.0-20260517-105809-CORE.zip' }],
            ['12.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-12.0.0-20260517-105809-CORE.zip' }],
            ['11.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-11.0.0-20260517-105809-CORE.zip' }],
            ['10.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-10.0.0-20260517-105809-CORE.zip' }],
            ['9.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-9.0.0-20260517-105809-CORE.zip' }],
            ['8.1.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-8.1.0-20260517-105809-CORE.zip' }],
            ['8.0.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-8.0.0-20260517-105809-CORE.zip' }],
            ['7.1.2', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-7.1.2-20260517-105809-CORE.zip' }],
            ['7.1.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-7.1.1-20260517-105809-CORE.zip' }]
        ])],
        ['ARM64', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-15.0.0-20260517-105809-CORE.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-14.0.0-20260517-105809-CORE.zip' }],
            ['13.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-13.0.0-20260517-105809-CORE.zip' }],
            ['12.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-12.1.0-20260517-105809-CORE.zip' }],
            ['12.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-12.0.0-20260517-105809-CORE.zip' }],
            ['11.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-11.0.0-20260517-105809-CORE.zip' }],
            ['10.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-10.0.0-20260517-105809-CORE.zip' }],
            ['9.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-9.0.0-20260517-105809-CORE.zip' }],
            ['8.1.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-8.1.0-20260517-105809-CORE.zip' }],
            ['8.0.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-8.0.0-20260517-105809-CORE.zip' }],
            ['7.1.2', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-7.1.2-20260517-105809-CORE.zip' }],
            ['7.1.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-7.1.1-20260517-105809-CORE.zip' }]
        ])]
    ])],
    ['MINI', new Map([
        ['ARM', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-15.0.0-20260517-105809-MINI.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-14.0.0-20260517-105809-MINI.zip' }],
            ['13.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-13.0.0-20260517-105809-MINI.zip' }],
            ['12.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-12.1.0-20260517-105809-MINI.zip' }],
            ['12.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-12.0.0-20260517-105809-MINI.zip' }],
            ['11.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-11.0.0-20260517-105809-MINI.zip' }],
            ['10.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-10.0.0-20260517-105809-MINI.zip' }],
            ['9.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-9.0.0-20260517-105809-MINI.zip' }],
            ['8.1.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-8.1.0-20260517-105809-MINI.zip' }],
            ['8.0.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-8.0.0-20260517-105809-MINI.zip' }],
            ['7.1.2', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-7.1.2-20260517-105809-MINI.zip' }],
            ['7.1.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-7.1.1-20260517-105809-MINI.zip' }]
        ])],
        ['ARM64', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-15.0.0-20260517-105809-MINI.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-14.0.0-20260517-105809-MINI.zip' }],
            ['13.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-13.0.0-20260517-105809-MINI.zip' }],
            ['12.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-12.1.0-20260517-105809-MINI.zip' }],
            ['12.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-12.0.0-20260517-105809-MINI.zip' }],
            ['11.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-11.0.0-20260517-105809-MINI.zip' }],
            ['10.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-10.0.0-20260517-105809-MINI.zip' }],
            ['9.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-9.0.0-20260517-105809-MINI.zip' }],
            ['8.1.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-8.1.0-20260517-105809-MINI.zip' }],
            ['8.0.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-8.0.0-20260517-105809-MINI.zip' }],
            ['7.1.2', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-7.1.2-20260517-105809-MINI.zip' }],
            ['7.1.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-7.1.1-20260517-105809-MINI.zip' }]
        ])]
    ])],
    ['OMNI', new Map([
        ['ARM', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-15.0.0-20260517-105809-OMNI.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-14.0.0-20260517-105809-OMNI.zip' }],
            ['13.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-13.0.0-20260517-105809-OMNI.zip' }],
            ['12.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-12.1.0-20260517-105809-OMNI.zip' }],
            ['12.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-12.0.0-20260517-105809-OMNI.zip' }],
            ['11.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-11.0.0-20260517-105809-OMNI.zip' }],
            ['10.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-10.0.0-20260517-105809-OMNI.zip' }],
            ['9.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-9.0.0-20260517-105809-OMNI.zip' }],
            ['8.1.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-8.1.0-20260517-105809-OMNI.zip' }],
            ['8.0.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-8.0.0-20260517-105809-OMNI.zip' }],
            ['7.1.2', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-7.1.2-20260517-105809-OMNI.zip' }],
            ['7.1.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-7.1.1-20260517-105809-OMNI.zip' }]
        ])],
        ['ARM64', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-15.0.0-20260517-105809-OMNI.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-14.0.0-20260517-105809-OMNI.zip' }],
            ['13.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-13.0.0-20260517-105809-OMNI.zip' }],
            ['12.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-12.1.0-20260517-105809-OMNI.zip' }],
            ['12.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-12.0.0-20260517-105809-OMNI.zip' }],
            ['11.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-11.0.0-20260517-105809-OMNI.zip' }],
            ['10.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-10.0.0-20260517-105809-OMNI.zip' }],
            ['9.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-9.0.0-20260517-105809-OMNI.zip' }],
            ['8.1.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-8.1.0-20260517-105809-OMNI.zip' }],
            ['8.0.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-8.0.0-20260517-105809-OMNI.zip' }],
            ['7.1.2', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-7.1.2-20260517-105809-OMNI.zip' }],
            ['7.1.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-7.1.1-20260517-105809-OMNI.zip' }]
        ])]
    ])],
    ['ROAR', new Map([
        ['ARM', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-15.0.0-20260517-105809-ROAR.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-14.0.0-20260517-105809-ROAR.zip' }],
            ['13.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-13.0.0-20260517-105809-ROAR.zip' }],
            ['12.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-12.1.0-20260517-105809-ROAR.zip' }],
            ['12.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-12.0.0-20260517-105809-ROAR.zip' }],
            ['11.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-11.0.0-20260517-105809-ROAR.zip' }],
            ['10.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-10.0.0-20260517-105809-ROAR.zip' }],
            ['9.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-9.0.0-20260517-105809-ROAR.zip' }],
            ['8.1.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-8.1.0-20260517-105809-ROAR.zip' }],
            ['8.0.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-8.0.0-20260517-105809-ROAR.zip' }],
            ['7.1.2', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-7.1.2-20260517-105809-ROAR.zip' }],
            ['7.1.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm-7.1.1-20260517-105809-ROAR.zip' }]
        ])],
        ['ARM64', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-15.0.0-20260517-105809-ROAR.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-14.0.0-20260517-105809-ROAR.zip' }],
            ['13.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-13.0.0-20260517-105809-ROAR.zip' }],
            ['12.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-12.1.0-20260517-105809-ROAR.zip' }],
            ['12.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-12.0.0-20260517-105809-ROAR.zip' }],
            ['11.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-11.0.0-20260517-105809-ROAR.zip' }],
            ['10.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-10.0.0-20260517-105809-ROAR.zip' }],
            ['9.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-9.0.0-20260517-105809-ROAR.zip' }],
            ['8.1.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-8.1.0-20260517-105809-ROAR.zip' }],
            ['8.0.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-8.0.0-20260517-105809-ROAR.zip' }],
            ['7.1.2', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-7.1.2-20260517-105809-ROAR.zip' }],
            ['7.1.1', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-7.1.1-20260517-105809-ROAR.zip' }]
        ])]
    ])],
    ['NANO', new Map([
        ['ARM64', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-15.0.0-20260517-105809-NANO.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-14.0.0-20260517-105809-NANO.zip' }]
        ])]
    ])],
    ['ATOM', new Map([
        ['ARM64', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-15.0.0-20260517-105809-ATOM.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-14.0.0-20260517-105809-ATOM.zip' }]
        ])]
    ])],
    ['PICO', new Map([
        ['ARM64', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-15.0.0-20260517-105809-PICO.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-14.0.0-20260517-105809-PICO.zip' }]
        ])]
    ])],
    ['FULL', new Map([
        ['ARM64', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-15.0.0-20260517-105809-FULL.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-14.0.0-20260517-105809-FULL.zip' }]
        ])]
    ])],
    ['TINT', new Map([
        ['ARM64', new Map([
            ['15.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-15.0.0-20260517-105809-TINT.zip' }],
            ['14.0', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-105809-release/BiTGApps-arm64-14.0.0-20260517-105809-TINT.zip' }]
        ])]
    ])],
    ['ADDON', new Map([
        ['ALL', new Map([
            ['AndroidAuto', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/AndroidAuto-20260517-115216.zip' }],
            ['Calculator', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Calculator-20260517-115216.zip' }],
            ['Calendar', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Calendar-20260517-115216.zip' }],
            ['Chrome', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Chrome-20260517-115216.zip' }],
            ['Contacts', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Contacts-20260517-115216.zip' }],
            ['DeskClock', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/DeskClock-20260517-115216.zip' }],
            ['WebView', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/WebView-20260517-115216.zip' }],
            ['Wellbeing', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Wellbeing-20260517-115216.zip' }]
        ])],
        ['ARM', new Map([
            ['Assistant', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Assistant-20260517-115216-ARM.zip' }],
            ['Dialer', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Dialer-20260517-115216-ARM.zip' }],
            ['Drive', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Drive-20260517-115216-ARM.zip' }],
            ['Gmail', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Gmail-20260517-115216-ARM.zip' }],
            ['GoogleTTS', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/GoogleTTS-20260517-115216-ARM.zip' }],
            ['Gboard', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/LatinIME-20260517-115216-ARM.zip' }],
            ['Maps', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Maps-20260517-115216-ARM.zip' }],
            ['Markup', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Markup-20260517-115216-ARM.zip' }],
            ['Messaging', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Messaging-20260517-115216-ARM.zip' }],
            ['Photos', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Photos-20260517-115216-ARM.zip' }]
        ])],
        ['ARM64', new Map([
            ['Assistant', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Assistant-20260517-115216-ARM64.zip' }],
            ['Dialer', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Dialer-20260517-115216-ARM64.zip' }],
            ['Drive', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Drive-20260517-115216-ARM64.zip' }],
            ['Gmail', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Gmail-20260517-115216-ARM64.zip' }],
            ['GoogleTTS', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/GoogleTTS-20260517-115216-ARM64.zip' }],
            ['Gboard', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/LatinIME-20260517-115216-ARM64.zip' }],
            ['Maps', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Maps-20260517-115216-ARM64.zip' }],
            ['Markup', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Markup-20260517-115216-ARM64.zip' }],
            ['Messaging', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Messaging-20260517-115216-ARM64.zip' }],
            ['Photos', { url: 'https://github.com/BiTGApps/release/releases/download/20260517-115216-addons/Photos-20260517-115216-ARM64.zip' }]
        ])]
    ])]
]);

// Helper to clear and populate a dropdown
function updateDropdownSafe(id, options, text) {
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

function populatePlatformsSafe() {
    const soft = document.getElementById('software-1').value;
    const platforms = soft ? Array.from(downloadLibrarySafe.get(soft).keys()) : [];
    updateDropdownSafe('platform-1', platforms, 'Select Platform');
    updateDropdownSafe('version-1', [], 'Select Version'); // Reset version
}

function populateVersionsSafe() {
    const soft = document.getElementById('software-1').value;
    const platforms = document.getElementById('platform-1').value;
    const versions = (soft && platforms) ? Array.from(downloadLibrarySafe.get(soft).get(platforms).keys()) : [];
    updateDropdownSafe('version-1', versions, 'Select Version');
}

function handleDownloadSafe() {
    const s = document.getElementById('software-1').value;
    const p = document.getElementById('platform-1').value;
    const v = document.getElementById('version-1').value;

    // Final fetch from the nested map
    const fileData = downloadLibrarySafe.get(s)?.get(p)?.get(v);

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
