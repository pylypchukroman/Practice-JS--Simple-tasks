const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password }
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Все поля должны быть заполнены");
//   }
//     const email = elements.email.value;
//     const password = elements.password.value;
//     const formData = {
//         email,
//         password,
//     };
// console.log(formData);
// //   console.log(`Email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

      if (email === "" || password === "") {
    return alert("Все поля должны быть заполнены");
  }

    const formData = {
        email,
        password,
    };
    console.log(formData);

}
