// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron')



var mainWindow;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)


function createWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({width: 500, height: 750,frame: false,transparent: true, alwaysOnTop: true})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}
