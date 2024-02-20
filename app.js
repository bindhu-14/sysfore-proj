function validateAndSubmit() {
    // Get form data
    var fname = document.getElementById('fname').value.trim();
    var lname = document.getElementById('lname').value.trim();
    var mname = document.getElementById('mname').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var comments = document.getElementById('comments').value.trim();

    //only dob not working


  
    // Validate the data
    if (fname === '' || lname ===''|| mname===''|| email === '' || phone === '' || comments ==='') {
      alert('Please fill out all required fields.');
      return;
    }
  
    // Name validation (should not contain numbers)
    if (/\d/.test(fname)||/\d/.test(mname)||/\d/.test(lname)) {
      alert('Name should not contain numbers.');
      return;
    }
  
    // Phone number validation (should have at least 10 digits)
    if (!/^\d{10,}$/.test(phone)) {
      alert('Please enter a valid phone number with at least 10 digits.');
      return;
    }
  
    // Email validation (simple check for demonstration)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    // alert("form submitted");

    submitForm();

}






function submitForm() {
    var form_data ={
        firstname : document.getElementById("fname").value,
        middlename : document.getElementById("mname").value,
        lastname : document.getElementById("lname").value,
        date_of_birth : document.getElementById("dob").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        gender : document.getElementById("gender").value,
        bloodgroup : document.getElementById("bloodgroup").value,
        comments : document.getElementById("comments").value,
    };

var datastring= JSON.stringify(form_data);

localStorage.setItem('form_data',datastring);
window.location.href = "display.html";
}


