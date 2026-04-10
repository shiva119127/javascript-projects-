let email = document.querySelector("#email");
let m10 = document.querySelector("#m10");
let m11 = document.querySelector("#m11");
let pre = document.querySelector("#pre");
let form = document.querySelector("#form");
email.addEventListener("blur", function () {
  if (email.value.includes("@") && email.value.includes(".")) {
    document.getElementById("emailMsg").textContent = "Valid Email ✅";
  } else {
    document.getElementById("emailMsg").textContent = "Enter a valid Email ❌";
  }
});
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let v1 = Number(m10.value);
  let v2 = Number(m11.value);
  let v3 = Number(pre.value);

  if (v1 == 0 || v2 == 0 || v3 == 0) {
    document.getElementById("result").textContent =
      "Please fill all fields properly";
    return;
  }

  let predicted = v1 * 0.2 + v2 * 0.35 + v3 * 0.45;

  document.getElementById("result").textContent =
    "Predicted Marks: " +
    predicted.toFixed(0) +
    " - " +
    (Number(predicted.toFixed(0)) + 5);
});