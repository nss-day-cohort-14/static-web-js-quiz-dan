
var values = {}

var htmlPage = document.getElementById('tree')
htmlPage.innerHTML = "";

var spaceValue;
var lineSubstr;

function getValues () {
  spaceValue= "&nbsp;";
  lineSubstr = 6;
  values.height = document.getElementById("userHeight").value;
  values.character = document.getElementById("userChar").value;
  values.console = document.getElementById("console");
  values.DOM = document.getElementById("DOM");
  if (document.getElementById("console").checked) {
    spaceValue = " ";
    lineSubstr = 1;
  }
}

function makeTree (values) {
  if ((values.console.checked === false) && (values.DOM.checked === false)) {
    alert("Select DOM or console.")
  }
  if (values.height === "" || values.character === "" ) {
    alert("Both fields must have a value.")
   }
   console.log("height:", values.height);
   console.log("character:", values.character);

  var heightNum = parseInt(values.height);
  var line = "";

    /*prints top line of tree */
  for (var i = 0; i < heightNum; i++) {  
      line += spaceValue;
    }
  line += values.character;

  console.log("final:", line);
  var htmlPage = document.getElementById('tree')
  if (document.getElementById("DOM").checked) {
  htmlPage.innerHTML = '<p style="font-family:courier; line-height:30%;">' + line + "</p>";
  }

    /*prints rest of tree */
  for (var i=1; i< heightNum; i++) {
      line = line.substr(lineSubstr);
      line += values.character;
      line += values.character;
      console.log("final:", line);
      if (document.getElementById("DOM").checked) {
      htmlPage.innerHTML += '<p style="font-family:courier; line-height:30%;">' + line + "</p>";
    }
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


document.getElementById("DOM")
  .addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    getValues();
    makeTree (values);
    }
})

document.getElementById("console")
 .addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    getValues();
    makeTree (values);
    }
})
