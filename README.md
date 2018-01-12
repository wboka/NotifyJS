# NotifyJS

Simple pure JavaScript plugin to use the new Notification API available in supported browsers with a fall-back to a basic native alert().

## Notification API Desktop Support

Feature | Chrome | Edge | Firefox | Opera | Safari
--------|--------|------|---------|-------|-------
Basic | 32+ | YES | 22+ | 25+ | 6+
Web Workers | 45+ | YES | 41+ | 32+ | NO
Secure Origin Only (https) | 62+ | NO | NO | 49+ | NO

## Examples

```javascript
var a = new Notify("Hey");
var n = new Notify();
```