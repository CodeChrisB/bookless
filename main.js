const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
    //set window attribute
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true
        }
    })

    //get the start page
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    );
    // Open the DevTools.
    mainWindow.webContents.openDevTools()
    //remove the top task bar
    mainWindow.setMenu(null)
    
    mainWindow.on('closed', function() {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
    if (mainWindow === null) createWindow()
})