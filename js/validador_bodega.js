$(document).ready(function() {
  
  // Agregar método de validación para que un campo sólo acepte 
  // letras y espacios en blanco, pero no números ni símbolos,
  // ideal para campos como nombres y apellidos
  $.validator.addMethod("soloLetras", function(value, element) {

    return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);

  }, "Sólo se permiten letras y espacios en blanco.");


  // Validar Números con % como descuentos pa
  $.validator.addMethod("soloNumeros", function(value, element) {

    return this.optional(element) || /^[0-9]+%*$/.test(value);

  }, "Sólo se permiten números.");

  // Validar formulario de productos
  $('#formulario_bodega').validate(
    {
      rules: {
       
        categoria:{
          required: true,
        },
        nombre: {
          required: true,
        },
        cantidad: {
          required: true,
          number: true,
          min: 0
        },
       
       
      },
      messages: {  
          
        categoria: {
          required: 'La categoría es un campo requerido'
        },
        nombre: {
          required: 'El nombre es un campo requerido',
        },
       
        cantidad: {
          required: 'La cantidad es un campo requerido',
          number: 'La cantidad debe ser un número',
          min: 'La cantidad debe ser mayor o igual a 0'
        },
        
        
      }
    }
  );
});