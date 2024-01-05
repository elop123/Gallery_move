
         function validateForm2() {
            const fname = document.getElementById('fname').value;
            const lname = document.getElementById('lname').value;
            const ldate = document.getElementById('ldate').value;
            const ltime = document.getElementById('ltime').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
    
            // Simple validation for each field
            if (fname === '' || lname === '' || ldate === '' || ltime === '' || email === '' || password === '') {
                alert('All fields must be filled out');
                return false;
            }
    
            // Email validation
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Invalid email address');
                return false;
            }
    
            // Password length validation
            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return false;
            }
            else
            alert('Succesefully completed!'); 
                 // Hide the form
                 var myForm = document.getElementsByClassName('myform');
                 if (myForm.length > 0) {
                   myForm[0].style.display = 'none';
                 }
    
            // If all validations pass, the form is submitted
            return true;
        }
         
    
    