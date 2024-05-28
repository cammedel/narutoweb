$(document).ready(function() {

  $.validator.addMethod("emailCompleto", function(value, element) {

    
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;

  
    return regex.test(value);

  }, 'El formato del correo no es válido');

    $("#formulario-ingresar").validate({
      rules: {
       
        email:{
          required:true,
          emailCompleto:true
        },
        
        password:{
          required:true,
          minlength:5,
          maxlength:15,
        },
       
      },
      
      email: {
          required: "El correo es un campo requerido",
          email: "El formato del correo no es válido",
        },
        password: {
          required: "La contraseña es un campo requerido",
          minlength: "La contraseña debe tener un mínimo de 5 caracteres",
          maxlength: "La contraseña debe tener un máximo de 15 caracteres",
        },
        
     
  });
});