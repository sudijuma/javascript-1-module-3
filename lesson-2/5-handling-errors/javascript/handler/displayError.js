//Want a function which take some message
//And it returns an html tag with this message

function displayError(message = "some error happened") {
    return `<div class= "error">${message}</div>`;
}