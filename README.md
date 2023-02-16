## Calculator

![ezgif com-crop (1)](https://user-images.githubusercontent.com/94214512/219129493-9ffea868-0359-4296-88d3-8d99cb69a321.gif)

### Goals of the project

1. Make a simple and basic calculator app

### Langauges

HTML, CSS, JavaScript

### Features

I made this calculator in two different ways.
The first way using onClick events. The onclick event calls a function when buttons are clicked. The other way I created the calculator was to use "new Function" syntax.

1. onClick event<br>
   This method can caculate numbers with one operator only and cannot chain operators. You can see all the different results by clicking different operator buttons. After you calculate the initial result, you can press the equal sign again to store the value and continue with another calculation.

   ![readmecalculator](https://user-images.githubusercontent.com/94214512/219222129-cf4bb3bb-7e76-417e-82f7-ec1d3472ea76.jpg)

```html
<!-- ....codes -->
<div class="row">
  <div class="btn" onclick="inputNum(7)">7</div>
  <div class="btn" onclick="inputNum(8)">8</div>
  <div class="btn" onclick="inputNum(9)">9</div>
  <div class="btn total" onclick="inputEqual()">=</div>
</div>

<div class="row">
  <div class="btn" onclick="inputNum(4)">4</div>
  <div class="btn" onclick="inputNum(5)">5</div>
  <div class="btn" onclick="inputNum(6)">6</div>
  <div class="btn" onclick="inputOperator('+')">+</div>
</div>
<!-- ....codes -->
```

```js
let left = null;
let operator = null;
let right = null;
let result = false;
let resultValue = "";
let isEqualclicked = false;

function save() {
  //
  const input = document.querySelector("#top-input");
  let value = "";
  //setting left, operator, right value
  input.value = value; //final value goes to the input.value
  if (result) {
    // After a user clicks the equal sign then this conditional is executed according to which operator is in input.value

    switch (operator) {
      case "+":
        resultValue = parseInt(left) + parseInt(right);
        break;

      case "-":
        resultValue = parseInt(left) - parseInt(right);
        break;

      case "*":
        resultValue = parseInt(left) * parseInt(right);
        break;

      case "/":
        resultValue = parseInt(left) / parseInt(right);
        break;
    }

    value = value + "=" + resultValue; // total calculated value goes to the input.value and updates
    input.value = value;
  }
}
function inputNum(num) {
  //when a user clicks a button, the button's number will be passed
  //...
}
function inputOperator(op) {
  // when a user clicks an operator (+,*,/) button, the button's operator will be passed
  //this logic helps to calculate subtraction
  if (left === null && op === "-") {
    left = "-";
    save();
    return;
  }
  if (left === "-" && op === "-") {
    return;
  }
  if (op === "-" && operator !== null && right === null) {
    right = "-";
    save();
    return;
  }
  operator = op;
  save();
}
function inputEqual() {
  // when a user clicks an equal sign (=) button, the button's equal sign will be passed
  isEqualclicked = true;
  if (left === null || right === null || !operator) {
    return;
  }

  if (result) {
    //when a user clicks the equal sign again, the calculated result is assigned to the left variable and all other variables are reset
    left = resultValue;
    right = null;
    resultValue = null;
    operator = null;
    result = false;
    isEqualclicked = false;
  } else {
    result = true;
  }
  save();
}
```

2. "new Function" syntax <br>
   This one can calculate numbers with multiple operators.
   When I used new Function syntax, I could write really short code compared to the first one, but there's some debugging needed like when text.charAt(0) and text.charAt(1) are also 0.

```js
const btns = document.querySelectorAll(".btn");
const btnSpreads = [...btns];
let text = "";

btnSpreads.forEach((btn) => {
  btn.addEventListener("click", () => {
    let resultValue = btn.innerHTML;
    input.value = input.value + resultValue;
    text = input.value;
  });
});

function evaluate(fn) {
  const resultEval = new Function("return " + fn)();

  if (Number.isNaN(resultEval) || !Number.isFinite(resultEval)) {
    alert("Numbers that JavaScript cannot represent😰");
    return "";
  } else {
    return resultEval;
  }
}

total.addEventListener("click", () => {
  try {
    //if you just assign the text (variable) in evaluate function and call, you will get 'the invalid assignment left-hand side' error
    //so make sure '=' should be extracted and assign in evaluate function.
    let allInputs = text.replace("=", "");
    input.value = evaluate(allInputs);
  } catch (err) {
    alert("Please enter valid input ex) 1 + 2 = 💩");
    input.value = "";
  }
});
```

### Self-reflection

Making this app was a good way to practice multiple methods. I can't imagine how complicated it is to make a real calculator which has more functions. I enjoyed coding this from scratch.
