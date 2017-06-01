import {calculate} from "./calc";
import * as moment from "moment"

import "./main.css";
import "./extra.scss";

const time = moment().format('MMMM Do YYYY, h:mm:ss a');

document.body.innerHTML = `
<div class="content">
    <h1>Welcome to FuseBox!</h1>
    <div class="datetime">${time}</div>
    <div>the result of Calculation is ${ calculate(5)}</div>
</div>`;
