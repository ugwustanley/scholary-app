
const chalk = require("chalk")
const boxen = require("boxen")

const definedStyle = {
    margin: 1,
    padding:1,
    borderStyle: "round",
    borderColor : "white",
    backgroundColor: "gray",
    textAlign: "center"
}

module.exports = class Styling{
    //this method styles the given text green and gives it a border
    static styleboxen(text){
        const coloredText = chalk.green.bold(text);
        const boxenStyle = boxen(coloredText , definedStyle);
        return boxenStyle
    }
   //this method styles the given test yellow
    static styleChalkYellow(text){
         const coloredText = chalk.yellow(text)
         return coloredText
    }
    // this method styles the give text blue
    static styleChalkblue(text){
        const coloredText = chalk.blue(text)
        return coloredText
   }
}