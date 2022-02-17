const pass = document.querySelector("#pass1");
const confirmPass = document.querySelector("#pass2");
const message = document.querySelector(".input span");

const confirm = () => {
  if (pass.value !== confirmPass.value) {
    pass.style.border = "1px solid var(--accent)";
    confirmPass.style.border = "1px solid var(--accent)";
    message.style.display = "block";
  } else {
    pass.style.border = "1px solid var(--mainBG)";
    confirmPass.style.border = "1px solid var(--mainBG)";
    message.style.display = "none";
  }
}
