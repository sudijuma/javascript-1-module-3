// kitchen()  // run the code
//     .then()    // next step
//     .then()    // next step
//     .catch()   // error caught here
//     .finally() // end of the promise [optional]



// Async / Await in JS -> try, catch
// When we're using async/await, we use this format:

//👇 Magical keyword
async function kitchen() {

    try {
        await abc;
    }
    catch (error) {
        console.log("abc does not exist", error)
    }
    finally {
        console.log("Runs code anyways")
    }
}

kitchen()  // run the code
function getSomething(){
    console.log("hello I am result from api");
}

const result = document.querySelector(".result");

try {
    getSomething();
    result.innerHTML = "Successs";
}
catch (error) {
    console.log("abc does not exist", error)
    result.innerHTML = "nah there is an error"
}
finally {
    console.log("Runs code anyways")
}

kitchen()  // run the code