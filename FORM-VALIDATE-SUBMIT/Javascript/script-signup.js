const Username = document.querySelector('#username')// id selector;
const Email = document.querySelector('#email')// id selector;
const Password = document.querySelector('#password')// id selector;
const confirmPassword = document.querySelector('#confirm-password')// id selector;
// addind an event listener to the form using its id
const form = document.querySelector('#signup')
 form.addEventListener('submit', function(e) {
    e.preventDefault(); /* The use of this event listener is to stop your data to be sent to the server 
    when the information written in fields is not correct*/   

// Modifying the submit Event handler method . Since values will get modified therefore will use let
let isUsernameValid = checkUsername(),
 isEmailvalid = checkEmail(),
  isPasswordValid  = checkPassword(),
  isConfirmPasswordValid = checkConfirmPassword(); 

  let isFormValid = isUsernameValid &&
                    isEmailvalid    &&
                    isPasswordValid &&
                    isConfirmPasswordValid;
            if(isFormValid){
                alert('Successfully registered. Now please login with your details')
                location.assign("./login.html");
                }          
 }  
 );                         
// this isRequired func is used to check whether the input is provided or not
const isRequired = (value) => value === '' ? false : true; // Reusable function
const isBetween = (length, min, max) => length < min || length > max ? false: true; // Reusable function
// check if email entered is valid
const isEmailValid = (email) => { // Rusable function 
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
}
// check if password entered is secured
   const isPasswordSecured = (password) => // Reusable function
   {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
   }
// Create function and show error message / success msg on screen
//    error message
const showError = (input, message) => //Reusable function
{
const formField =  input.parentElement; // parentElement is the form-field class
formField.classList.remove('success');
formField.classList.add('error');
// now select the 'small' tag from the form-field class to show error in its content
const error = formField.querySelector('small'); //since <small> is a tag selector
error.textContent = message;
} 
//     success message
const showSuccess = (input) => // Reusable function
{
    const formField =  input.parentElement; // parentElement is the form-field class
    formField.classList.remove('error');
    formField.classList.add('success');
    // now select the 'small' tag from the form-field class to show error in its content
    const error = formField.querySelector('small'); //since <small> is a tag selector
    error.textContent = '';
}                    
// DEVELOPING INPUT FIELD VALIDATING FUNCTION

// 1) Validate Username
const checkUsername = () =>
{
    let valid = false;
    const min = 3;
    const max = 25;

   const username =  Username.value.trim();
   if(!isRequired(username)){
    showError(Username, 'Username cannot be blank');
   } 
   else if(!isBetween(username.length, min, max))
   {
     showError(Username, `Username must be of minimum ${min} and maximum ${max} characters long`);
   }
   else{
    showSuccess(Username)
      valid = true;
     }
     return valid;
}

// 2) Validate Email Id
const checkEmail = () =>
{
    let valid = false;

    const email = Email.value.trim();
    if(!isRequired(email)){
        showError(Email, 'Email Id cannot be blank');
    }
    else if(!isEmailValid(email))
    {
        showError(Email, 'Email Invalid!')
    }
    else{showSuccess(Email);
        valid = true;
    }return valid;
}

// 3) Validate Password field
const checkPassword = () =>{
    let valid = false;

    const password = Password.value.trim();

    if(!isRequired(password)){
        showError(Password, 'Password is required');
    }
    else if(!isPasswordSecured(password)){
        showError(Password, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    }
    else{
        showSuccess(Password);
        valid = true;
    }return valid;
}

//4 Validate Confirm Password
const checkConfirmPassword = () =>
{
    valid = false;
    const ConfirmPassword = confirmPassword.value.trim();
    const password = Password.value.trim();
    if(!isRequired(ConfirmPassword))
    {
        showError(confirmPassword, 'Please Re-enter your password')
    }
    else if(password !== ConfirmPassword)
    {
        showError(confirmPassword, 'Password do not match, please try again!');
    }
    else{
        showSuccess(confirmPassword);
        valid = true;
    }
       return valid;
}
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));

// Already have an account? login ->
function navigateToLoginPage()
{
    location.assign("./login.html");
}
 

