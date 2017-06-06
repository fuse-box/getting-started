import {hello} from "./hello";
import * as moment from "moment"

const time = moment().format('MMMM Do YYYY, h:mm:ss a');
const name: string = `Mr. Mike`;
console.log(hello(name));
console.log(time);

