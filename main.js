let myButton1 = document.getElementById("esercizio-1");

myButton1.addEventListener("click", function () {
  let ex1Number1 = prompt("scrivi il primo numero");
  let ex1Number2 = prompt("scrivi il secondo numero");
  let ex1output;

  console.log(ex1Number1);
  console.log(ex1Number2);

  if (ex1Number1 < ex1Number2) {
    ex1output = Math.floor(Math.random() * ex1Number2 + ex1Number1);
  } else {
    ex1output = Math.floor(Math.random() * ex1Number1 + ex1Number2);
  }

  console.log(ex1output);
});
