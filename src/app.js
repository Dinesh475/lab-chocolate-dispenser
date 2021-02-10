var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
addChocolates=(candies, color, number)=>{
    if(number<=0)
        return "Number cannot be zero/negative";
    for(let i=0;i<number;i++)
        candies.unshift(color);
        
    return candies;        
}

//Progression 2: Remove ___ chocolates from the top the dispenser
removeChocolates = (candies, number)=>{
    let candy=[];
    if(number<=0)
        return "Number cannot be zero/negative";
    if(number>candies.length)
        return "Insufficient chocolates in the dispenser";  
    for(let i=0;i<number;i++)
        candy.push(candies.shift());
    return candy;       
}

//Progression 3: Dispense ___ chocolates
dispenseChocolates =(candies, number)=>{
    if(number<=0)
        return "Number cannot be zero/negative";
    if(number>candies.length)
        return "Insufficient chocolates in the dispenser";
    let candy=candies.slice(candies.length-number, candies.length);
    return candy.reverse();
}

//Progression 4: Dispense ___ chocolates of ____ color
dispenseChocolatesOfColor=(candies, number, color)=>{
    if(number<=0)
        return "Number cannot be zero/negative";
    if(number>candies.length)
        return "Insufficient chocolates in the dispenser";
    let candy=candies.slice(candies.length-number, candies.length);
    return candy;    
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
noOfChocolates=(candies)=>{
    let freq=[];
    for(let i=0; i<candies.length; i++)
        freq[i] = -1;
   
    for(let i=0; i<candies.length; i++){
        let count = 1;
        for(let j=i+1; j<candies.length; j++){
            if(candies[i]==candies[j]){
                count++;
                freq[j] = 0;
            }
        }
        if(freq[i] != 0){
            freq[i] = count;
        }
    }
    let output=freq.filter(element=> element !== 0);
    return output;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
// sortChocolateBasedOnCount=(candies)=>{
//     let freq=[], output=[];
//     for(let i=0; i<candies.length; i++)
//         freq[i] = -1;
   
//     for(let i=0; i<candies.length; i++){
//         let count = 1;
//         for(let j=i+1; j<candies.length; j++){
//             if(candies[i]==candies[j]){
//                 count++;
//                 freq[j] = 0;
//             }
//         }
//         if(freq[i] != 0){
//             freq[i] = count;
//         }
//     }
//     let frequency=freq.filter(element=> element !== 0);

//     function onlyUnique(value, index, self) {
//         return self.indexOf(value) === index;
//     }
      
//     var unique = candies.filter(onlyUnique);
//     for(let i=0;i<unique.length;i++)
//     {
//         for(let j=0;j<frequency[i];j++)
//             output.push(unique[i]);
//     }    
//     return output;
// }

//Progression 7: Change ___ chocolates of ____ color to ____ color


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
