import {sum} from './other';
//для того что бы webpack смог увидеть css файлы
import "../css/main.css"
let hi = 1;
let res = sum(3, 6);
console.log(`res =${res}`);