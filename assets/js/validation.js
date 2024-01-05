function validateForm(){
    const name=document.getElementById('Sname').value;
    const password=document.getElementById('Spassword').value;
    if (name ==='') {
        alert ('The form needs to be filled up!' + 'Please enter a valid name');
        console.log('name');
        return false;
    } 
    if (password === '') {
        alert( 'Please enter a password');
        onsole.log('password');
        return false;
    }
    else
    alert('Succesefully completed!'); 
         // Hide the form
         var myForm = document.getElementsByClassName('myform');
         if (myForm.length > 0) {
           myForm[0].style.display = 'none';
         }
     
         return true;
    
    }





