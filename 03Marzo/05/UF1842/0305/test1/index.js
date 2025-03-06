// var figlet = require("figlet"); // usar este si tenemos el package.json configurado con type: commonjs
import figlet from 'figlet';

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});