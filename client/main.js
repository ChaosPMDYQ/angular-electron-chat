const {
  app,
  BrowserWindow,
} = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile('./dist/angular-electron-chat/index.html');

  // 打开开发者工具
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});
