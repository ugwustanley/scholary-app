
const { styleboxen } = require("./styling")
const styling = require("./styling")

module.exports = class Messages {

    static introMessage(){
        //intro messages to be logged to the console
        const message1 = 'This is the beginning of this CLI application'
        const message2 = 'Note that the rows and columns represented by the ith and jth value starts with 0 as shown in the test diagram \n'
        //styled intro messages
        const styledMessage1 = styling.styleboxen(message1)
        const styledMessage2 = styling.styleChalkYellow(message2)
        //logging of messages
        console.log(styledMessage1)
        console.log(styledMessage2)
        return true
    }

    static exitMessage(){

        //exit message to be logged
        const message = "Thanks for using this application"

        const styledMessage = styling.styleboxen(message)

        console.log(styledMessage)
        return true
    }

   
}