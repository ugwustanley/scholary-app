const messages = require("../lib/messages")

test("this should show that the intro message delivered successfully" , () =>{
    expect(messages.introMessage()).toBe(true)
})

test("this should show that the exit messsages delivered successfully" , () =>{
    expect(messages.exitMessage()).toBe(true)
})