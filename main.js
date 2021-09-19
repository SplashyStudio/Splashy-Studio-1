const {app, BrowserWindow} = require('electron');
function createWindow() {
    const win = new BrowserWindow({
        width: 1300,
        height: 725,
        minWidth: 1300,
        minHeight: 725,
        icon: 'ssIcon.png',
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile("index.html");
}
app.whenReady().then(createWindow);