// document.getElementById('agreed').addEventListener('click', function() {
//     document.getElementById('output').innerHTML = 'Your data will be processing according to your agreement';
// })v


document.getElementById('send').addEventListener('click', function() {
    document.getElementById('send').style.backgroundColor = 'red';
}) 


// document.getElementById('message').addEventListener('i') 
var input = document.getElementById("message");
var output = document.getElementById("messageError"); 

function validateMessage() { 

    //alert("What a mess!")

    if(input.value.length > 9) {
        output.innerHTML = 'Message cannot be more than 10 symbols'; 
    } 
 
} 

function deleteErrorMessage() { 

    //alert("What a mess!")

    if(input.value.length < 10) {
        output.innerHTML = '';
    } 
    
 
} 



var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
var inputEmail = document.getElementById("email");
var outputEmail = document.getElementById("emailError"); 

function validateEmail() { 

    //alert("What a mess!")

    if(pattern.test(input.value)) {
        output.innerHTML = ''; 
    } 
    else {
        output.innerHTML = 'Ivalid email format';
    }
 
} 

function deleteEmailMessage() { 

    //alert("What a mess!")

    if(pattern.test(input.value)) {
        output.innerHTML = '';
    } 
    
 
} 




// var inputEmail = document.getElementById("email");
// var outputEmail = document.getElementById("emailError"); 

// document.getElementById('email').addEventListener('input', function() { 
//     var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(document.getElementById('email').pattern.test(value)) 
//         output.innerHTML = ''; 
//     else 
//         output.innerHTML = 'Ivalid email format';
        
// })
