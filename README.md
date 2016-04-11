Codypaste
=========
Paste code without any surrounding line numbers

# Example
This
```javascript
1. const electron = require("electron");
2. const app = electron.app;
3. const Menu = electron.Menu;
4. const Tray = electron.Tray;
5. const cb = require("electron").clipboard;
```
should be converted to this
```javascript
 const electron = require("electron");
 const app = electron.app;
 const Menu = electron.Menu;
 const Tray = electron.Tray;
 const cb = require("electron").clipboard;
```


# Build
* npm install
* gulp build
