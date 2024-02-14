// console.log('hi file')

// step -1 : add even listener with the submit button
document.getElementById('btn-submit').addEventListener('click',function()
{
    console.log("ok")
    // step-2 email find
    // .value to gate form input value
     const emailField = document.getElementById('user-email');
     const email = emailField.value;

     console.log(email);

    // step-3 password find
     
     const pallwordFild = document.getElementById('user-password');
     const password = pallwordFild.value;
     console.log(password)

     // step -4 : verifide email and password

     if (email=='sattar@gmail.com' && password=='sattar')
     {
        window.location.href='bank.html';
     }
     else
     {
        alert('Dur ho . Tui amar sontan Na !!!')
     }
})