
 const form = document.getElementById('form');
 const name = document.getElementById('name');
 const email = document.getElementById('email');
 const errorMessage = document.getElementById('error');



//RESET VISIBILITY
function reset(){
    errorMessage.style.visibility = 'hidden';
}

reset(); 

//VALIDATE DATA

function checkInput(){

    //VALIDATE NAME
    if (name.value === '' || name.value === null){
        
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = 'Please input your name';        
        errorMessage.classList.add('error');
        
        
        //SET TIME OUT FOR MESSAGE
        setTimeout(function(){
            reset();
                        }, 1000);
        

    }

    //VALIDATE EMAIL
    if (email.value === '' || email.value === null){
        
        errorMessage.style.visibility = 'visible';
       errorMessage.innerHTML = 'Please input your email address';       
       errorMessage.classList.add('error');

       //SET TIME OUT FOR MESSAGE
       setTimeout(function(){
        reset();

                    }, 1000);
 
     }
 
}

//SUBMIT FORM

form.addEventListener ('submit', function(e){ 
      
    checkInput();
    e.preventDefault();     
    
});









