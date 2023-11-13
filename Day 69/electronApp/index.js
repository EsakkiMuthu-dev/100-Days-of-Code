const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the index.html file
  mainWindow.loadFile('index.html');

  // Open the DevTools (remove this line in production)
  mainWindow.webContents.openDevTools();

  // Event handler for when the window is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Create the main window when the app is ready
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Create a new window when the app is activated (on macOS)
app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
