window.onload = formValidation;

function formValidation() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("The form has passed validation tests. This form is only a sample implementation for my web design final project.");
      return false;
   }
   
}