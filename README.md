# localStorage-by-IndexedDB-shim
makes available localStorage functions by using IndexedDB

_______________________________
![logo_msedge](http://static.dnaindia.com/sites/default/files/styles/half/public/2015/12/07/402206-microsoft-edge-logo.jpg?itok=-4FTLJur)

The library polls indexedDB with interval from options (start of the file, parameter `poll_time`, even minified), saves it and gives You ability to use it like normal regular `localStorage`! 200ms by default.

For the sake of EDGE support, where we cannot replace native `localStorage`, the library makes own variable (`localStorageShim` by default, but can be changed easily by changing it in one of first lines :)

In types the library behave like standard `localStorage`: makes ALL just strings. Even Objects. Be careful.

Example:

```javascript
  // Here the library or <script> tag.

  localStorageShim.getItem(14); // -> undefined
  
  localStorageShim.setItem(14, 42)  // -> undefined
  localStorageShim.setItem('next to all', 43)  // -> undefined
  
  localStorageShim.getItem(14)  // -> "42"
```

... page reloads, browser reloads, or it's another tab from that source...

```javascript
  localStorageShim.getItem(14)  // -> "42"
  localStorageShim.setItem('next to all') // -> "43"
```
