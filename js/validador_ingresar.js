$(document).ready(function() {
    $("#formulario-ingresar").validate({
      rules: {
       
        email:{
          required:true,
          emailCompleto:true
        },
        
        password:{
          required:true,
          minleght:5,
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