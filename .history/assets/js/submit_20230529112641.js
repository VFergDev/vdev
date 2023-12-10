const submitContactForm = ()=>{
    Email.send({
      Host : "smtp.gmail.com",
      Port : "465",
      Username : "colormehighco@gmail.com",
      Password : "ximhzscrxucoyvrh",
      To : 'djveev86@gmail.com',
      From : document.getElementById("email").value,
      Subject : document.getElementById("subject").value,
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  }


//   html for attributes