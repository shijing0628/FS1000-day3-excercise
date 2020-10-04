function inputCheck() {
  let inputInfo = prompt("Please Login As:");
  if (inputInfo == "Admin") {
    console.log(inputInfo.value);
    let password = prompt("Please input password:");
    if (password == "TheMaster") {
      document.write("Welcome!");
    } else if (!password) {
      document.write("Canceled");
    } else {
      document.write("Wrong password");
    }
  } else if (!inputInfo) {
    document.write("Cancel");
  } else {
    document.write("I don't know you.");
  }
}
inputCheck();
