const alertMessage = document.querySelector('.alert-msg');



document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formInformation = new FormData(document.querySelector('form'));
    const email = formInformation.get('email');
    const password = formInformation.get('password')
   if(email==='admin@admin.com' && password==='123456'){
    alertMessage.setAttribute('style','color:green;')
    alertMessage.innerText = 'Login Successful';
    
    setTimeout(() => {
        alertMessage.innerText = '';
        
    }, 2000);
    
    
}
else{

    alertMessage.innerText = 'Incorrect Credentials';
    alertMessage.setAttribute('style','color:red;')
    
    setTimeout(() => {
        alertMessage.innerText = '';
        
    }, 2000);
}

})