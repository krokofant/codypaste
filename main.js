"use strict";

const electron = require("electron");
const app = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;
const cb = require("electron").clipboard;

var tray = null,
    contextMenu,
    regexFilter = new RegExp("^\\s*\\d+\\.?", "gm"),
    cbContent = cb.readText();

function watchClipboard() {
    var newCbContent = cb.readText();
    if (isActive() && cbContent !== newCbContent) {
        cbContent = newCbContent.replace(regexFilter, "");
        cb.writeText(cbContent);
        console.log("Removed line numbers");
        console.log(cbContent);
    }
}

function isActive() {
    return contextMenu.items.filter((item) => item.id === "active")[0].checked;
}

app.on("ready", function() {
    tray = new Tray(__dirname + "/icon.png");
    contextMenu = Menu.buildFromTemplate([
        {
            id: "active",
            label: "Activated",
            type: "checkbox",
            checked: true
        },
        {
            label: "Quit",
            type: "normal",
            click: function() {
                tray.destroy();
                app.quit();
            }
        }
    ]);

    tray.setContextMenu(contextMenu);
    tray.setToolTip("Codypaste - Remove line numbers from clipboard");

    setInterval(watchClipboard, 300);
});



