
var newObject = {
  height: document.getElementById("userHeight").value,
  character: document.getElementById("userChar").value,
}

function makeTree () {
   var height = document.getElementById("userHeight").value;
   var character = document.getElementById("userChar").value;
   if (height === "" || character === "") {
    alert("Both fields must have a value.")
   }
   console.log("height:", height);
   console.log("character:", character);

  var heightNum = parseInt(height);
  var line = "";

    /*prints top line of tree */
   for (var i = 0; i < heightNum; i++) {  
      line += " ";
    }
    line += character;

    console.log("final:", line);  

    /*prints rest of tree */
    for (var i=1; i< heightNum; i++) {
      line = line.substr(1);
      line += character;
      line += character;
      console.log("final:", line);
    }

    console.log("newObject", newObject);
}

var button = document.getElementById("button");

button.addEventListener("click", makeTree);

document.getElementById("userChar")
    .addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        makeTree();
    }
})

document.getElementById("userHeight")
    .addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        makeTree();
    }
})


