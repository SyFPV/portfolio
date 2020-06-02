<!DOCTYPE html>
<html>

<head>
  <title>Programming STEM Project - [TEMPLATE]</title>
  <style>
    /* styles for layout */
    .center {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    div.center {
      width: 800px;
    }

    /* styles for colors and fonts */
    .answer {
      color: red;
      font-weight: bold;
    }
  </style>
</head>

<body>
  <div class="center">
    <h5>K  F  C</h5>
    <p>
      Type your value in the box and click the unit you want to convert to.
    </p>
    <p>
      INPUT VALUE:&nbsp;<input type="text1" id="input1">℃
      <input type="button" onclick="getInput1()" value="to ℉">
      <input type="button" onclick="getInput2()" value="to K"><br>
      OUTPUT:&nbsp;<span id="output1" class="answer1"></span><br><br>

      INPUT VALUE:&nbsp;<input type="text2" id="input2">℉
      <input type="button" onclick="getInput3()" value="to ℃">
      <input type="button" onclick="getInput4()" value="to K"><br>
      OUTPUT:&nbsp;<span id="output2" class="answer2"></span><br><br>
      
      INPUT VALUE:&nbsp;<input type="text3" id="input3">K
      <input type="button" onclick="getInput5()" value="to ℃">
      <input type="button" onclick="getInput6()" value="to ℉"><br>
      OUTPUT:&nbsp;<span id="output3" class="answer3"></span><br><br>
    </p>
  </div>
</body>
<script>
 
  function getInput1() {
    let inputField = document.getElementById("input1");
    let input = inputField.value;
    writeOutput1(+input * 9/5 + 32 + "℉"); // <-- replace this with YOUR CODE
  }

  function getInput2() {
    let inputField = document.getElementById("input1");
    let input = inputField.value;
    writeOutput1(+input + 273.15 + "K"); // <-- replace this with YOUR CODE
  }
  
  function getInput3() {
    let inputField = document.getElementById("input2");
    let input = inputField.value;
    writeOutput2((+input - 32) * 5/9 + "℃");// <-- replace this with YOUR CODE
  }
  
  function getInput4() {
    let inputField = document.getElementById("input2");
    let input = inputField.value;
    writeOutput2((+input - 32) * 5/9 + 273.15 + "K");// <-- replace this with YOUR CODE
  }
  
  function getInput5() {
    let inputField = document.getElementById("input3");
    let input = inputField.value;
    writeOutput3(+input - 273.15 + "℃"); // <-- replace this with YOUR CODE
  }
  
  function getInput6() {
    let inputField = document.getElementById("input3");
    let input = inputField.value;
    writeOutput3((+input - 273.15) *  9/5 + 32 + "K"); // <-- replace this with YOUR CODE(400K − 273.15) × 9/5 + 32
  }


  // This function will write some text to the output span on the page.
  function writeOutput1(text1) {
    let outputSpan = document.getElementById("output1");
    outputSpan.innerText = text1;
  }
  function writeOutput2(text2) {
    let outputSpan = document.getElementById("output2");
    outputSpan.innerText = text2;
  }
  function writeOutput3(text3) {
    let outputSpan = document.getElementById("output3");
    outputSpan.innerText = text3;
  }
  

</script>

</html>