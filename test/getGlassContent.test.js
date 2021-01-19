const getGlassContent = require("../lib/getGlassContent")


test("returns the exact needed array" , () =>{
    const array = [ [ 250 ], [ 250, 250 ], [ 62.5, 125, 62.5 ], [ 0, 0, 0, 0 ] ]
    expect(getGlassContent.getContentofIndex(3, 2, 1)).toEqual(array)
})

test("return any empty top glass if the water equals zero" , () =>{
    const array = [ [ 0 ], [ 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
    expect(getGlassContent.getContentofIndex(3, 2, 0)).toEqual(array)
})

test("returns an array with top zero if all values are zero" , () =>{
    const array = [ [0] ]
    expect(getGlassContent.getContentofIndex(0, 0, 0)).toEqual(array)
})