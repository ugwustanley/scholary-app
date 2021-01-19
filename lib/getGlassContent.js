
 
module.exports =  class GlassContent {

    static PyramidAsArray( ith_value ){
         // this simply creates a multidimensional array based on the given glass row value e.g [[0] , [0, 0] , [0, 0, 0]]

           // first we declare an array for the rows and columns in the pyramid
           let glass_array = []
        
           // a zero(0) is pushed to represent every glass in every row and column
             for(let row = 1 ; row <=  ith_value + 1 ; row++){
                   let column_array = []

                   for(let  column = 0 ; column < row ; column++){
    
                         column_array.push(0)
                   }
               glass_array.push(column_array)

              }

         // return the resulting pyramid-like multidimensional array
         return glass_array
    }


    static getContentofIndex( ith_value  , jth_value , total__water){
       
        total__water *= 1000

        // this grabs the already created array
        let glass_array = this.PyramidAsArray(ith_value)

        //variable to get overflowing water
        let overflow = 0

        //
        for( let row = 0 ; row < ith_value + 1 ; row++){

            for( let column = 0 ; column < glass_array[row].length ; column++){

                //filling the first top glass with water
                glass_array[0][0] = total__water

                //checking if each glass is filled or if everyglass has been filled
                if(glass_array[row][column] > 250 && glass_array[row + 1] !== undefined){

                    //set the overflow to equal the current water in glass minus its capacity
                     overflow = glass_array[row][column] - 250
                     
                   //  give the glass the exact capacity that it can hold
                     glass_array[row][column] = 250
                     glass_array[0][0] = 250
                   
                     //fill the glasses below the current glass on the left and right
                     glass_array[row + 1][column] += overflow / 2

                     glass_array[row + 1][column + 1] += overflow / 2
                }
            }            

        }
        // because the first glass is always set to total_water we need to set it back to 250ml after the whole looping
        glass_array[0][0] > 250 ? glass_array[0][0] = 250 : glass_array[0][0] = glass_array[0][0]
       // glass_array[0][0] = 250
        // note that ith_value and jth_value starts from 0 and not the conventional 1
      
   //   console.log(glass_array) 
   //  let finalGlassContent =    glass_array[ith_value - 1][jth_value - 1] > 250 ?  250 : glass_array[ith_value - 1][jth_value - 1]
     // return the final glass content value 
     return glass_array      //[ith_value][jth_value]
    }
 
 
}



////console.log(GlassContent.PyramidAsArray(3))

// please note that the ith_value and jth_value all starts from 0 and not 1 as shown in the test diagram
//
//console.log(GlassContent.getContentofIndex( 3 , 2 , 1))

