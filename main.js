// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 1
let myButton1 = document.getElementById("esercizio-1");

myButton1.addEventListener("click", function () {
  let ex1Number1 = parseInt(prompt("scrivi il primo numero"));
  let ex1Number2 = parseInt(prompt("scrivi il secondo numero"));
  let ex1output = "ex1";

  if (ex1Number1 < ex1Number2) {
    ex1output = Math.floor(
      Math.random() * (ex1Number2 - ex1Number1 + 1) + ex1Number1
    );
  } else {
    ex1output = Math.floor(
      Math.random() * (ex1Number1 - ex1Number2 + 1) + ex1Number2
    );
  }

  console.log(ex1output);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 2
let myButton2 = document.getElementById("esercizio-2");

myButton2.addEventListener("click", function () {
  let ex2text1 = prompt("scrivi il prima parola");
  let ex2text2 = prompt("scrivi il seconda parola");
  let ex2output = "ex2";

  if (ex2text1.length > ex2text2.length) {
    ex2output = ex2text1;
  } else if (ex2text2.length > ex2text1.length) {
    ex2output = ex2text2;
  } else {
    ex2output = ex2text1 + " + " + ex2text2;
  }

  console.log(ex2output);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 3
let myButton3 = document.getElementById("esercizio-3");

myButton3.addEventListener("click", function () {
  let ex3array = [];
  while (ex3array.length < 10) {
    ex3array.push(prompt("inserisci un elemento"));
  }

  let ex3output = ex3array;

  console.log(ex3output);
  console.log(ex3output.length);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 4
let myButton4 = document.getElementById("esercizio-4");

myButton4.addEventListener("click", function () {
  let ex4output = "ex4";

  console.log(ex4output);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 5
let myButton5 = document.getElementById("esercizio-5");

myButton5.addEventListener("click", function () {
  let ex5output = "ex5";

  console.log(ex5output);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 6
let myButton6 = document.getElementById("esercizio-6");

myButton6.addEventListener("click", function () {
  let ex6output = "ex6";

  console.log(ex6output);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 7
let myButton7 = document.getElementById("esercizio-7");

myButton7.addEventListener("click", function () {
  let ex7output = "ex7";

  console.log(ex7output);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// esercizio 8
let myButton8 = document.getElementById("esercizio-8");

myButton8.addEventListener("click", function () {
  let ex8output = "ex8";

  console.log(ex8output);
});
