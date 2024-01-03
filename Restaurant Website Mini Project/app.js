
const searchicon1= document.querySelector('#searchicon1');
const srchicon1= document.querySelector('#srchicon1');
const search1= document.querySelector('#searchinput1');

searchicon1.addEventListener('click',function(){
    search1.style.display = 'flex';
    searchicon1.style.display ='none';
})

const searchicon2= document.querySelector('#searchicon2');
const srchicon2= document.querySelector('#srchicon2');
const search2= document.querySelector('#searchinput2');

searchicon2.addEventListener('click',function(){
    search2.style.display = 'flex';
    searchicon2.style.display ='none';
})

const bar =document.querySelector('.fa-bars');
const cross =document.querySelector('#hdcross');
const headerbar =document.querySelector('.headerbar');

bar.addEventListener('click', function(){
     setTimeout(()=>{
        cross.style.display= 'block' ;

     },200);
     headerbar.style.right='0%';
})

cross.addEventListener('click',function(){
    cross.style.display= 'none';
    headerbar.style.right= '-100%';
})



let signupBtn=document.getElementById("signupBtn");
let signiBtn=document.getElementById("signinBtn");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");

signinBtn.onclick=function(){

        nameField.style.maxHeight ="0";
        title.innerHTML= "Sign In";
        signupBtn.classList.add('disable');
        signinBtn.classList.remove('disable');
 }

signupBtn.onclick=function(){

    nameField.style.maxHeight ="60px";
    title.innerHTML= "Sign Up";
    signupBtn.classList.remove('disable');
    signinBtn.classList.add('disable');
                       
}

const homeBox = document.querySelector('.container')
      
function homeF(){
    homeBox.style.display= 'block';
    
    
}

function crossbtn(){
    homeBox.style.display= 'none';
}

function closeForm()
{
    document.getElementsByClassName(".container")
    .style.display="none";
}

