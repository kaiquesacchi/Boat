const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  // Cria uma janela de navegação.
  const win = new BrowserWindow({
    width: 1200,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Carrega o index.html.
  win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
}

// Chamado ao fim da inicialização do Electron, quando pode criar a janela.
app.whenReady().then(createWindow);

// Mata o processo ao fechar as janelas.
app.on('window-all-closed', () => {
  // No macOS é comum para aplicativos e sua barra de menu
  // permaneçam ativo até que o usuário explicitamente encerre com Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // Recria a janela ao ser selecionado na barra de tarefas.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
