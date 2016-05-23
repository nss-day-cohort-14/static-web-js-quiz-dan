
var values = {}

function getValues () {
  values.height = document.getElementById("userHeight").value;
  values.character = document.getElementById("userChar").value;
  /*console.log(values.height);
  console.log(values.character); */
}

function makeTree (values) {
  if (values.height === "" || values.character === "") {
    alert("Both fields must have a value.")
   }
   console.log("height:", values.height);
   console.log("character:", values.character);

  var heightNum = parseInt(values.height);
  var line = "";

    /*prints top line of tree */
  for (var i = 0; i < heightNum; i++) {  
      line += "&nbsp;";
    }
  line += values.character;

  console.log("final:", line);
  var htmlPage = document.getElementById('tree')
  htmlPage.innerHTML = '<p style="font-family:courier; line-height:30%;">' + line + "</p>";

    /*prints rest of tree */
  for (var i=1; i< heightNum; i++) {
      line = line.substr(6);
      line += values.character;
      line += values.character;
      console.log("final:", line);
      htmlPage.innerHTML += '<p style="font-family:courier; line-height:30%;">' + line + "</p>";
    }

  console.log("values", values);
}

var button = document.getElementById("button");

button.addEventListener("click", function() {
  getValues();
  makeTree (values);
})

document.getElementById("userChar")
  .addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
      getValues();
       makeTree (values);
    }
})

document.getElementById("userHeight")
 .addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    getValues();
    makeTree (values);
    }
})
