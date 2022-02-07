//Funtcion expression

const showPetName = function (name) {
    console.log("the pet name is: " + name);
}
//Fat arrow funtcion, funtcion expression
//const showPetNameTwo = () => console.log("the pet name is: ");
const showPetNameTwo = (name, age) => console.log("the pet name is: " + name + " the age is: " + age);

showPetName("Rhino");
showPetNameTwo("Dino", 4);

//const showPetNameTwo = (name, age) => console.log("the pet name is: " + name + "the age is:" + age);
const name = "Sudi";
const age = 35;
console.log(`My name is ${name} and im ${age}yrs old`)

const animalName = "Giraffe";

function showMeTheAnimals() {
    console.log("The animal name is: " + animalName);
}
showMeTheAnimals();

console.log(animalName);


{
    const fame = "Sudi";
    const hids = "yes";
    let thisVar = 21;
    var myName = "Hoodie";
    console.log(thisVar);
    console.log(fame);
    console.log(hids);
}
//console.log(thisVar);
console.log(myName);

const myObject = {
    amount: 4560,
    number: 30,
    myFunction: function () {
        console.log(this.amount);
    }
}
myObject.myFunction();



const pet = "rhino";

let isDangerous;

if (pet === "rhino") {
    isDangerous = true;
} else {
    isDangerous = false;
}

const isDangerou = pet === "rhino" ? true : "tönt";
console.log(pet)

isDangerous = pet === "sudi" && pet === "rhino";