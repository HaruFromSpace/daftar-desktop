// What Daftar's page can ask of the Windows app: show a notification,
// whether it starts with Windows, and the title bar's colours.
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('daftarDesktop', {
  notify: (note) => ipcRenderer.send('daftar:notify', {
    title: String(note?.title || ''),
    body: String(note?.body || ''),
    url: String(note?.url || ''),
  }),
  // Starting with Windows, as also set from the tray menu.
  autostart: {
    get: () => ipcRenderer.invoke('daftar:autostart'),
    set: (on) => ipcRenderer.invoke('daftar:autostart', Boolean(on)),
  },
  // `on` when the page draws the title bar itself (32px tall, with the
  // window buttons over its right end). colors() sets the buttons' colours.
  titlebar: {
    on: ipcRenderer.sendSync('daftar:titlebar-on') === true,
    height: 32,
    colors: (color, symbol) => ipcRenderer.send('daftar:titlebar', { color: String(color), symbol: String(symbol) }),
  },
});
