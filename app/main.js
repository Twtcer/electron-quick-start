// Modules to control application life and create native browser window
const {
  app,
  Tray,
  BrowserWindow
} = require('electron')
const path = require('path')

let tray = null;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    maximizable: true,
    // backgroundColor: '#2e2c29',
    icon: path.dirname(__dirname+"/asset/ico/favicon.ico")
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  });

  // var childWinow = new BrowserWindow({
  //   width: 500,
  //   height: 500,
  //   maximizable: false,
  //   backgroundColor: '#fff',
  //   parent: mainWindow,
  //   modal: true
  // });

  // childWinow.once('ready-to-show', () => {
  //   childWinow.show()
  // })

  // and load the index.html of the app.
  mainWindow.loadFile('app/index.html')

  // Open the DevTools.
  //  mainWindow.webContents.openDevTools()

  // mainWindow.loadURL('https://github.com')

  //  mainWindow.loadURL("https://electron.org.cn/demo.html")

  //  mainWindow.on('closed',function(){mainWindow=null;})
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  // window.addEventListener('DOMContentLoaded', () => {
  //   var  btn = document.getElementById('btn1');
  //   btn.click=function()
  //   {
  //     console.log('success');
  //   }
  // });

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  //托盘图标
  app.on('ready', () => {
    let icon = path.join(__dirname, "/asset/ico/favicon.ico");
    let loading = path.join(__dirname, "/asset/img/loading.gif");
    if (tray == null) {
      tray = new Tray(icon);
    } else {
      tray = new Tray(loading);
    }
    tray.setPressedImage(loading);
  });


})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
