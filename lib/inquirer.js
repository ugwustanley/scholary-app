const inquirer = require("inquirer")

module.exports = class Getinput {


    static getValues(){

        // this is the questions that the user will be asked
        const questions = [
            {
                name:'ith_value',
                type: 'number',
                message: "Enter ith value(milliliters): ",
                Validate: (value) =>{
                    if(value.length){
                        return true
                    }else{
                        return 'Please enter the ith value'
                    }
                }
            },
            {
                name:'jth_value',
                type: 'number',
                message: "Enter jth value(milliliters): ",
                Validate: (value) =>{
                    if(value.length){
                        return true
                    }else{
                        return 'Please enter the ith value'
                    }
                }
            }
            ,
            {
                name:'water',
                type: 'number',
                message: "Enter water volume(liters): ",
                Validate: (value) =>{
                    if(value.length){
                        return true
                    }else{
                        return 'Please enter the ith value'
                    }
                }
            }
        ]
        // this returns the user input after a prompt
        return inquirer.prompt(questions)
    }
}