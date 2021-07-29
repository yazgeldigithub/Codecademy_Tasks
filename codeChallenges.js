//Reverse array without reverse() method
function reverseArray(arr) {
    let reversedArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  //Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.
  function greetAliens(arr) {
    for(let i = 0; i < arr.length; arr++){
      console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    }
  }
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  greetAliens(aliens);
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function convertToBaby(arr){
    const babyArray = []
    for(i = 0; i < arr.length; i++){
      babyArray.push('baby ' + arr[i])
    }
    return babyArray;
  } 
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const numbers = [5, 3, 9, 30];

  const smallestPowerOfTwo = arr => {
        let results = [];
        // The 'outer' for loop - loops through each element in the array
        for (let i = 0; i < arr.length; i++) {
              number = arr[i];
  
              // The 'inner' while loop - searches for smallest power of 2 greater than the given number
              let j = 1;
              while (j < number) {
                    j = j * 2;
              }
              results.push(j);
        }
        return results
  }
  
  console.log(smallestPowerOfTwo(numbers)) 
  // Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

  const politelyDecline = (veg) => {
        console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
  }
  
  // Checkpoint 1 solutions:
  const declineEverything = arr => {
    arr.forEach(politelyDecline)
  }
  
  /*
  // As a function declaration:
  function declineEverything(arr) {
        arr.forEach(politelyDecline)
  }
  */
  
  
  // Checkpoint 2 solutions:
  // Using an anonymous function and string interpolation:
  const acceptEverything = arr => {
    arr.forEach(e => {
      console.log(`Ok, I guess I will eat some ${e}.`)
    })
  }
  
  /*
  // Using a named function and string concatenation:
  const grudginglyAccept = veg => {
        console.log('Ok, I guess I will eat some ' + veg + '.');
  }
  const acceptEverything = arr => {
        arr.forEach(grudginglyAccept)
  }
  
  // Using a loop:
  const acceptEverything = arr => {
   for(let i = 0; i<arr.length; i++){
      console.log(`Ok, I guess I will eat some ${arr[i]}.`)
   }
  }
  */

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare) 

/*
// Using an anonymous function:
const squareNums = arr => arr.map(e => e * e)

// As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare)
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const shoutGreetings = arr => arr.map(element => element.toUpperCase() + '!')

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sortYears = arr =>{
    return arr.sort().reverse()
  }
  const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
  
  console.log(sortYears(years))
  // Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

/*
// Alternate solution:
// Using a function declaration, loop, and helper function:
function isTheDinnerVegan(arr) {
      const isVegan = (food) => {
            if (food.source === 'plant') {
                  return true;
            }
            return false;
      }
      for(let i = 0; i<arr.length; i++){
            if (!isVegan(arr[i])){
                  return false 
            }
      }
      return true
}
*/

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

/*
// As a function declaration AND using a named function:
function sortSpeciesByTeeth(arr) {
      const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
      return arr.sort(compareTeeth)
}
*/

console.log(sortSpeciesByTeeth(speciesArray))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

/*
// Alternate solution:
// As a function declaration using a loop:
function findMyKeys(arr) {
      let index = -1;
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'keys') {
                  index = i
                  break
            }
      }
      return index
}
*/
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Final solution:
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    }
}

/*
// Solution to checkpoint 1:
const dogFactory = (name, breed, weight) => {
      return {
            name: name,
            breed: breed,
            weight: weight
      }
}

// Solution to checkpoint 2:
const dogFactory = (name, breed, weight) => {
      return {
            _name: name,
            _breed: breed,
            _weight: weight,
            get name() {
                  return this._name;
            },
            set name(newName) {
                  this._name = newName;
            },
            get breed() {
                  return this._breed;
            },
            set breed(newBreed) {
                  this._breed = newBreed;
            },
            get weight() {
                  return this._weight;
            },
            set weight(newWeight) {
                  this._weight = newWeight;
            }
      }
}

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1. Factorialize a Number With Recursion

function factorialize(num) {
    // If the number is less than 0, reject it.
    if (num < 0) 
          return -1;
      
    // If the number is 0, its factorial is 1.
    else if (num == 0) 
        return 1;
      
    // Otherwise, call the recursive procedure again
      else {
          return (num * factorialize(num - 1));
          /* 
          First Part of the recursion method
          You need to remember that you won’t have just one call, you’ll have several nested calls
          
          Each call: num === "?"        	         num * factorialize(num - 1)
          1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
          2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
          3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
          4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
          5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
          
          Second part of the recursion method
          The method hits the if condition, it returns 1 which num will multiply itself with
          The function will exit with the total value
          
          5th call will return (5 * (5 - 1))     // num = 5 * 4
          4th call will return (20 * (4 - 1))    // num = 20 * 3
          3rd call will return (60 * (3 - 1))    // num = 60 * 2
          2nd call will return (120 * (2 - 1))   // num = 120 * 1
          1st call will return (120)             // num = 120
          
          If we sum up all the calls in one line, we have
          (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
          */
      }
  }
  factorialize(5);

  //2. Factorialize a Number with a WHILE loop

  function factorialize(num) {
    // Step 1. Create a variable result to store num
    var result = num;
     
    // If num = 0 OR num = 1, the factorial will return 1
    if (num === 0 || num === 1) 
      return 1; 
   
    // Step 2. Create the WHILE loop 
    while (num > 1) { 
      num--; // decrementation by 1 at each iteration
      result = result * num; // or result *= num; 
      /* 
                      num           num--      var result      result *= num         
      1st iteration:   5             4            5             20 = 5 * 4      
      2nd iteration:   4             3           20             60 = 20 * 3
      3rd iteration:   3             2           60            120 = 60 * 2
      4th iteration:   2             1          120            120 = 120 * 1
      5th iteration:   1             0          120
      End of the WHILE loop 
      */
    }
       
    // Step 3. Return the factorial of the provided integer
    return result; // 120
  }
  factorialize(5);

  //3. Factorialize a Number with a FOR loop

  function factorialize(num) {
    // If num = 0 OR num = 1, the factorial will return 1
    if (num === 0 || num === 1)
      return 1;
    
    // We start the FOR loop with i = 4
    // We decrement i after each iteration 
    for (var i = num - 1; i >= 1; i--) {
      // We store the value of num at each iteration
      num = num * i; // or num *= i;
      /* 
                      num      var i = num - 1       num *= i         i--       i >= 1?
      1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
      2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
      3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
      4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
      5th iteration: 120               0                120
      End of the FOR loop 
      */
    }
    return num; //120
  }
  factorialize(5);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Write a function subLength() that takes 2 parameters, a string and a single character. 
The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.
*/

function subLength(str, char) {
    let length = 0;
    const occuranceCount = Array
      .from(str)
      .filter((c) => c.toLowerCase() === char.toLowerCase())
      .length
    if (occuranceCount === 2) {
      const regex = new RegExp(`${char}(.*)${char}`)
      length = str.match(regex)[0].length
    }
    console.log(length)
    return length;
  }
  
  subLength('Saturday', 'a'); // returns 6
  subLength('summer', 'm'); // returns 2
  subLength('digitize', 'i'); // returns 0
  subLength('cheesecake', 'k'); // returns 0

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Write a function groceries() that takes an array of object literals of grocery items. 
The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
*/

const groceries = function(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length-1; i++) {
      newArr.push(arr[i].item)
    }
    if (arr.length > 2) {
      let newArr2 = [];
      for (let j = 0; j <= newArr.length-3; j++) {
        newArr2.push(newArr[j]);
  };
     return newArr2.join(', ') + `, ${newArr[newArr.length-2]} and ${newArr[newArr.length-1]}`;
    } else if (arr.length === 2) {
      return newArr.join(' and ');
    } else {
      return newArr.join(', ');
    };
  
  };
  
  console.log(groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}]));
  
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
  // returns 'Carrots, Hummus, Pesto and Rigatoni'
   
  console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
  // returns 'Bread and Butter'
   
  console.log(groceries( [{item: 'Cheese Balls'}] ));
  // returns 'Cheese Balls'