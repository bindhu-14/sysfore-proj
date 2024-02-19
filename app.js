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


