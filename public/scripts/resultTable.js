function myFunction() {
  let copyText = document.getElementById("copyText");
  copyText.select();
  document.execCommand("copy");
};

