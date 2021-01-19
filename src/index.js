// webpack can't bundle this #!/usr/bin/env node
 
 const inquirer = require("../lib/inquirer")
 const messages = require("../lib/messages")
 const getGlassContent = require("../lib/getGlassContent")
 const Styling = require("../lib/styling")

class Application {

    static async getcredeintial(){
      //introduction and guide message
          messages.introMessage()
      // ask for user input
          const credentials = await inquirer.getValues()

     // get all values from credentials
       let ith_value , jth_value , water;
     // check if inputs are input
       if(isNaN(credentials.ith_value)){
          ith_value = 0
          jth_value = 0
          water = 0
          console.log('aohpohoknlion')
       }else{
        ith_value = credentials.ith_value
        jth_value = credentials.jth_value
        water = credentials.water
       }
     
      // get the content of the glass with the given ith and jth value
          const glasscontent = getGlassContent.getContentofIndex(  ith_value , jth_value  , water )
      //styled message to be logged
          const  message1 = Styling.styleChalkblue("The amount of liquid in the glass at the given ith and jth value is: ")
          const   message2 = Styling.styleChalkblue("Glass pyramid represented as an array:")
      // logging the recieved data to the console
          console.log(message1 , glasscontent[ith_value][jth_value])
          console.log(message2 , glasscontent)
      //exit messsage
      messages.exitMessage()
     
    }
 }


 Application.getcredeintial()