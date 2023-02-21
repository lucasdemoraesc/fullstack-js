import { Headphone } from "./headphone";
import { translate } from "./translate";

console.log(translate("Hi"));
console.log(translate("10"));
console.log(translate("true"));
console.log(translate("How are you?"));

const headphone = new Headphone("Sony", "USB-C", 299);
console.log(headphone);
