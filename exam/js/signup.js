var lastname = document.forms["form"]["Lname"];
var firstname = document.forms["form"]["Fname"];


var lnform = document.getElementById("lnf")
var fnform = document.getElementById("fnf")
var male = document.getElementById("male")
var female = document.getElementById("female")
var check = document.getElementById('chkb')
var err = document.getElementById('errormsg')



function validateEmail(){
  var email = document.forms["form"]["email"];
  var emform = document.getElementById("emf")
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.value.match(pattern)) {

    err.style.display="block";
    err.style.color="#44d62c"
    err.innerHTML = "Valid Email Address"
    emform.classList.add("valid")
    emform.classList.remove("invalid")
  }
  if (email.value==""){
    err.style.display="none";
    emform.classList.remove("invalid")
    emform.classList.remove("valid")
  }
  else{

    err.style.display="block";
    err.innerHTML = "Invalid Email Address"
    emform.classList.add("invalid")
    emform.classList.remove("valid")
  }
  
}
function validatePassword(){
var pwrd = document.forms["form"]["Pword"]
var pwf = document.getElementById("pwf")
var pwer = document.getElementById("pwder")
 var weak = /[a-z]/;
 var med =  /\d+/;
 var strong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

 
 if ( pwrd.value.length <=3
   && pwrd.value.match(weak)
   || pwrd.value.match(med)
   || pwrd.value.match(strong)) {
   
    pwf.classList.add("weak");
    pwf.classList.remove("med");
    pwf.classList.remove("strong");
    pwer.style.display="block";
    pwer.style.color="orangered"
    pwer.innerHTML="Password weak"
    
   

 }

 if ( pwrd.value.length >=6
  && pwrd.value.match(weak)
  && pwrd.value.match(med)
  || pwrd.value.match(strong)) {

    pwf.classList.add("med");
    pwf.classList.remove("weak");
    pwf.classList.remove("strong");
   pwer.style.display="block";
   pwer.style.color="orange";
   pwer.innerHTML="Password moderate"
   
  }

  if ( pwrd.value.length >=8
    && pwrd.value.match(weak)
    && pwrd.value.match(med)
    && pwrd.value.match(strong)) {
  
      pwf.classList.add("strong");
      pwf.classList.remove("weak");
      pwf.classList.remove("med");
     pwer.style.display="block";
     pwer.style.color="#44d62c";
     pwer.innerHTML="Password strong"
     
    }
    if(pwrd.value==""){
        pwer.style.display="none";
    }
}


function validateForm(){
  if (lastname.value=="") {
    err.style.display="block";
    err.innerHTML="Please insert a valid Name"
    lnform.classList.add("invalid")
    return false;
  }
  if (firstname.value=="") {
    err.style.display="block";
    err.innerHTML="Please insert a valid Name"
    fnform.classList.add("invalid")
    
    return false;
  }
  if (female.checked==false && male.checked==false) {
    err.style.display="block";
    err.innerHTML="Please specify your gender"
    return false;
  }
  if(check.checked==false){
    err.style.display="block";
    err.innerHTML="Please accept terms and conditions"
    return false;
  }

  alert('Sucess')
  
}


