let phno= document.getElementById("phno");
let pwd= document.getElementById("pwd");
let cpwd= document.getElementById("cpwd");
let strength= document.getElementById("strength");
//  let regemail=/^([A-Za-z0-9\.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ Used email as the type.
  


function validate1()
{
  
 let regp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
 
  if(regp.test(phno.value) )
  {
   return true;
  }
  else
  { alert("Enter Phone number in correct format.")
    return false;
   
  }
  
}

function pass()
{let regpwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
  if(regpwd.test(pwd.value))
  {strength.innerHTML="Success";
  strength.style.color="green";
  strength.style.border="2px solid green";
   return true;
  }
  else
  {strength.innerHTML="Password must contain minimum 8 characters, atleast 1 uppercase,1 lowercase and a number";
  strength.style.color="red";
  strength.style.border="2px solid red";
   return false;
  }
}


