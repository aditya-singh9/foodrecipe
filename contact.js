const firebaseConfig = {
  // your Config
};

// initialize firebase app
firebase.initializeApp(firebaseConfig);

// refrencing database
var contactFormDB = firebase.database().ref('contact-form');


document.getElementById('formSubmit').addEventListener('submit', submit);

function submit(e) {

  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const contact = document.getElementById('contact');
  const description = document.getElementById('description');
  const recipe = document.getElementById('recipe');

  console.log("form submitted")
  saveForm(name, email, contact, description, recipe);
  alert("form submitted successfully")

  document.getElementById('formSubmit').reset();
}

function saveForm(name, email, contact, description, recipe) {
  contactFormDB.push({
    Name: name,
    emailid: email,
    phone: contact,
    Recipe: recipe,
    desc: description,
  }).then(()=>{
    console.log("firebaseAdded")
  }).catch((e)=>{
    console.log(e);
  })
  console.log("Form Submitted")
}
