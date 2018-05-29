# PreLoad

a component to preload images

## Installation
```bash
npm i my-preload -S
```

## Usage
```html
<div data-pre="images/preload.jpg"></div>
```
```javascript
import {PreLoad} from 'my-preload';

var pre = new PreLoad({preSelector:'[data-pre]'});
pre.preload([
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg'
]);
```   

## Params

Parameter | Type |Default| Description
--------- | ---- | ------|-----------
data-pre    | `string` |  | dom element's attr to store pre url 
preSelector | `string` | [data-pre] | the dom's selector to preload image use data-pre attribute, used in document.querySelectorAll
callback(img) | `function` | null | function to call after image loaded, parameter is the image object


