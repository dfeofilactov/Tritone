const electron = require('electron');
const url      = require('url');
const path     = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on("ready", function(){
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        frame: false,
        transparent: true,
        minWidth: 1000,
        minHeight: 600
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

app.on("closed", function () {
    mainWindow = null;
});

const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                click(){
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Dev',
        submenu: [
            {
                label: "devTools",
                click(item, focussedWindow){
                    focussedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]

    }
]
