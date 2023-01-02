// // // const student = {
// // //     name: 'shimi',
// // //     age: 16,
// // //     grade: 10,
// // //     classes: ['Math','History','English']
// // // }
// // // console.log(student.name);


// // // const book = {
// // //     title: 'the amulet of samarkand',
// // //     author: 'jonathan stroud',
// // //     year: 2003,
// // //     genere: 'young adult fantasy',
// // //     publisher: 'Doubleday',
// // //     pages: 462,
// // //     isbn: "0-7868-1959-X"
// // // }
// // // book.rating = 5;

// // // const car = {
// // //     make: "Tesla",
// // //      model: "Model S",
// // //      year: 2020,
// // //      color: "Red",
// // //      features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
// // // };
   
// // // console.log(car.features[1]);


// // // const store = {
// // //     name: 'My Store',
// // //     location: 'New York, NY',
// // //     categories: ['clothing', 'electronics', 'furniture'],
// // //     products: [
// // //       {
// // //         name: 'T-shirt',
// // //         price: 20,
// // //         quantity: 50
// // //       },
// // //       {
// // //         name: 'Smartphone',
// // //         price: 500,
// // //         quantity: 25
// // //       },
// // //       {
// // //         name: 'Couch',
// // //         price: 300,
// // //         quantity: 10
// // //       }
// // //     ]
// // // };
  
// // // function getTotalPriceByProductName(store, productName) {
// // //     let totalPrice = 0;
  
// // //     for (const product of store.products) {
// // //       if (product.name === productName) {
// // //         totalPrice += product.price * product.quantity;
// // //       }
// // //     }
  
// // //     return totalPrice;
// // //   }
  
// // //   console.log(getTotalPriceByProductName(store, 'Smartphone'));


// // // function listProperties(obj) {
// // //     for (let property in obj){
// // //         if (obj.hasOwnProperty(property)){
// // //             console.log(property + ": " + obj[property]);
// // //         }
// // //     }
// // // }
// // // function getObjectLength(obj) {
// // //     return Object.keys(obj).length;
// // //   }  

// // // const person = {
// // //     age: 20,
// // //     height: 1.7,
// // //     name: 'daniel'
// // // }

// // // listProperties(person);
// // // console.log(getObjectLength(person));


// // // let client = "John";

// // // const groceries = {
// // //     fruits : ["pear", "apple", "banana"],
// // //     vegetables: ["tomatoes", "cucumber", "salad"],
// // //     totalPrice : "20$",
// // //     other : {
// // //         paid : true,
// // //         meansOfPayment : ["cash", "creditCard"]
// // //     }
// // // }


// // // function displayGroceries() {
// // //     for (let i = 0; i < groceries.fruits.length; i++) {
// // //         console.log(groceries.fruits[i]);
// // //     }
// // //     return;
// // // }
// // // displayGroceries();

// // // function cloneGroceries() {
// // //     let user = client;
// // //     const shoping = groceries;
// // //     console.log(user);
// // //     console.log(shoping);
// // // }
// // // client = 'Betty'
// // // groceries.totalPrice = '35$'
// // // groceries.other.paid = false;
// // // cloneGroceries();


// // // EX2 - 
// // // const books = [
// // //     {
// // //       title: 'The Great Gatsby',
// // //       author: 'F. Scott Fitzgerald',
// // //       alreadyRead: true
// // //     },
// // //     {
// // //       title: 'To Kill a Mockingbird',
// // //       author: 'Harper Lee',
// // //       alreadyRead: false
// // //     },
// // //     {
// // //       title: 'Pride and Prejudice',
// // //       author: 'Jane Austen',
// // //       alreadyRead: true
// // //     }
// // //   ];
  
// // //   for (let i = 0; i < books.length; i++) {
// // //     console.log(`${books[i].title} by ${books[i].author}`);
// // //     if (books[i].alreadyRead) {
// // //         console.log(`you already read "${books[i].title}" by ${books[i].author}`);
// // //     }
// // //     else console.log(`you still need to read "${books[i].title}" by ${books[i].author}`);
// // //   }


// const myPenguin = {
//     name: 'Skipper',
//     origin: 'Penguins of Madagascar',
//     author: 'Eric Darnell and Tom McGrath'
//   };
// console.log(`Hello, I'm a penguin and my name is ${myPenguin.name}`);
// myPenguin.canFly = false;
// myPenguin.chirp = function() {
//     console.log("CHIRP CHIRP! Is this what penguins sound like?" );
// }
// myPenguin.sayHello = function(){
//     console.log(`Hello, I'm a penguin and my name is ${this.name}!`);
// }
// myPenguin.sayHello();
// myPenguin.name = "Penguin McPenguinFace";
// myPenguin.sayHello();
// myPenguin.fly = function(){
//     if (this.canFly) console.log("I can fly!");
//     else console.log("No flying for me!");
// }
// myPenguin.fly();
// myPenguin.canFly = true;
// myPenguin.fly();

// for (const key in myPenguin) {
//     if (Object.hasOwnProperty.call(myPenguin, key)) {
//         console.log(key);
//     }
// }

// for (const key in myPenguin) {
//     if (Object.hasOwnProperty.call(myPenguin, key)) {
//         console.log(myPenguin[key]);
//     }
// }

// myPenguin.favoriteFoods = ['Fish', 'Krill', 'Plankton'];
// console.log(myPenguin.favoriteFoods[1]);
// let firstFavFood = myPenguin.favoriteFoods[0];
// myPenguin.favoriteFoods.push('Crab');
// myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1] = 'Pineapples';
// let lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1];
// for (let i = 0; i < myPenguin.favoriteFoods.length; i++) {
//     console.log(myPenguin.favoriteFoods[i]);
// }

// const gunter = {
//     name: "Gunter",
//     origin: "Adventure Time",
//     canFly: false,
//     sayHello: function () {
//       console.log("QUACK!!!");
//     },
//   };
  
//   const ramon = {
//     name: "Ramón",
//     origin: "Happy Feet",
//     canFly: true,
//     sayHello: function () {
//       console.log("Estoy encantado de conocerle.");
//     },
//   };
  
//   const fred = {
//     name: "Fred",
//     origin: "Sitting Ducks",
//     canFly: false,
//     sayHello: function () {
//       console.log("Hi there!");
//     },
//   };
  
// const penguins = [gunter,ramon,fred] 
// console.log(penguins[0]);
// const secondPenguin = penguins[1];
// console.log(penguins[2].name);
// penguins.push(myPenguin);
// console.log(penguins.length);
// penguins[0].canFly = true;
// penguins[0].sayHello();

// for (let i = 0; i < penguins.length; i++) {
//     console.log(penguins[i].name);
// }

// for (let i = 0; i < penguins.length; i++) {
//     penguins[i].sayHello();
// }

// for (let i = 0; i < penguins.length; i++) {
//     penguins[i].numberOfFeet = 2;
// }

// for (let i = 0; i < penguins.length; i++) {
//     if (penguins[i].canFly){
//         console.log(`${penguins[i].name} can fly!`);
//     }
// }

const school = {
    name: 'Springfield Elementary School',
    location: 'Springfield',
    students: [
      {
        name: 'Bart Simpson',
        age: 10,
        grade: 5,
        classes: ['music', 'science', 'english']
      },
      {
        name: 'Lisa Simpson',
        age: 8,
        grade: 3,
        classes: ['math', 'english', 'music']
      }
    ],
    teachers: [
      {
        name: 'Mrs. Krabappel',
        subject: 'english',
        gradeLevels: [5, 6]
      },
      {
        name: 'Mr. Burns',
        subject: 'math',
        gradeLevels: [3, 4, 5]
      }
    ]
  }

function isStudentInTeachersClass (studentName, teacherName) {
    for (const student of school.students) {
        if (student.name === studentName){
            for (const teacher of school.teachers) {
                if (teacher.name === teacherName) {
                    for (let i = 0; i < student.classes.length; i++) {
                        if (student.classes[i] == teacher.subject) {
                            for (let j = 0; j < teacher.gradeLevels.length; j++) {
                                if (teacher.gradeLevels[j] == student.grade) {
                                    return true;
                                }
                            }
                        }
                    }
                }       
            }
        }   
    }
    return false;
}  

console.log(isStudentInTeachersClass('Bart Simpson','Mrs. Krabappel'));
console.log(isStudentInTeachersClass('Bart Simpson', 'Mr. Burns'));
console.log(isStudentInTeachersClass('Lisa Simpson', 'Mr. Burns'));
console.log(isStudentInTeachersClass('Lisa Simpson','Mrs. Krabappel'));

// EX8 - 
// Write a function that takes a genre as an argument and returns the titles of all the books in that genre.

const library = {
  name: "Springfield Public Library",
  location: "Springfield",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Novel",
      publisher: "Charles Scribner's Sons",
      pages: 180,
      isbn: "978-0-7432-6555-2",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Novel",
      publisher: "J.B. Lippincott & Co.",
      pages: 281,
      isbn: "978-0-044-93349-2",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      genre: "Novel",
      publisher: "Little, Brown and Company",
      pages: 214,
      isbn: "978-0-316-76953-3",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Novel",
      publisher: "T. Egerton",
      pages: 279,
      isbn: "978-0-141-19031-4",
    },
  ],
};

function allInGenre(bookGenre) {
    let bookList =[];
    for (const book of library.books) {
        if (book.genre == bookGenre) {
            bookList.push(book.title);
        }   
    }
    return bookList;
}


console.log(allInGenre("Novel"));


