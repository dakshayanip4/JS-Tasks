const keyToFind1 = {name: "Bob"};
const keyToFind2 = { age: 25, occupation: "Artist" };
const keyToFind3 = { age: 30, occupation: "Artist" };
const arrayOfObjects = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", occupation: "Engineer" },
  { id: 3, country: "USA", hobby: "Reading" },
  { id: 4, name: "Charlie", age: 25, occupation: "Artist" },
  { id: 5, hobby: "Gardening", favoriteColor: "Green" },
];
var findKeyValues = (array, object) => {
  array.filter(obj => {
    let allmatch = true;
    for(var key in object) {
      if (obj[key] !== object[key]) {
        allmatch = false;
        break;
      }
    }
    if (allmatch) {
      console.log(obj); 
    }
  })
}
findKeyValues(arrayOfObjects, keyToFind1);
findKeyValues(arrayOfObjects, keyToFind2);
findKeyValues(arrayOfObjects, keyToFind3);
