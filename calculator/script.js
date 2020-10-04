const button = document.querySelector(".submit-btn");
const container = document.querySelector(".container");
let area, result;
button.addEventListener("click", function () {
  let len = document.querySelector(".input-length").value;
  let wid = document.querySelector(".input-width").value;
  if (len == "" || wid == "" || len <= 0 || wid <= 0) {
    alert("please input valid length and width number !");
  } else {
    area = Number(len) * Number(wid);
    alert(`Rectangle Area is ${area}`);
  }
});
