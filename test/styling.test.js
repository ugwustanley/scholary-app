const styling = require("../lib/styling")

test("this should return aq styled text not equal to the input", () =>{
    expect(styling.styleboxen("sample text")).not.toBe("sample text")
})

test("this should return a yellow colored text not equal to the input", () =>{
    expect(styling.styleChalkYellow("sample text")).not.toBe("sample text")
})

test("this should return a blue colored text not equal to the input", () =>{
    expect(styling.styleChalkblue("sample text")).not.toBe("sample text")
})