console.log('Are you ready?')

// https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation

const usernameInput = document.getElementById('username')

usernameInput.addEventListener("input", () => {
    usernameInput.setCustomValidity("");
    usernameInput.checkValidity();
  });
  
  usernameInput.addEventListener("invalid", () => {
    if (usernameInput.value === "") {
      usernameInput.setCustomValidity("Enter your username!");
    } else {
      usernameInput.setCustomValidity(
        "Usernames can only contain upper and lowercase letters. Try again!"
      );
    }
  });