
//how to get query param

//ex 1
console.log(document.location.search);

// ?name=sudi
const queryString = document.location.search;

//in order to get the value
const params = new URLSearchParams(queryString);
console.log(params.get("name"))
const myNameParam = params.get("name");


//I want to check that I have a param named name
if(!params.has("school")){
    console.log("I dont have the params");
}

//consolo.log i have a param
else if(params.get("school") === "noroff"){
    console.log("okay the param is noroff")
}
//I want to check that thjos param is equal to noroff
//okay the param is noroff
else {
    document.location.href = "second.html";
}

//else redirectr to anohter page