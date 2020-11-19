const path = require('path');

module.exports = {
    "iconUrl":  path.join(__dirname, "/asset/ico/favicon.ico"),
    "loadingGif": path.join(__dirname, "/asset/img/loading.gif"),
    "out":"./dist",
    "packagerConfig": {
        "icon": path.join(__dirname, "/asset/ico/favicon.ico"),
        "out":"./dist"
    },
    "makers": [{
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "electron_quick_start"
            }
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
                "darwin"
            ]
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {}
        },
        {
            "name": "@electron-forge/maker-rpm",
            "config": {}
        }
    ]
}