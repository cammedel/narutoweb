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
  $('#formulario_productos').validate(
    {
      rules: {
        id: {
          required: true,
          number: true,
          min: 1,
        },
        categoria:{
          required: true
        },
        nombre: {
          required: true,
        },
        descripcion: {
          required: true,
          minlength: 10,
          maxlength: 200
        },
        precio: {
          required: true,
          number: true,
          min: 0
        },
        desc_subscriptor: {
          required: true,
          number: true,
          min: 0,
          max: 100
        },
        desc_oferta: {
          required: true,
          number: true,
          min: 0,
          max: 100
        },
      },
      messages: {  
        id: {
          required: "El ID es un campo requerido",
          number: "El ID debe ser un número",
          min: "El ID debe ser mayor o igual a 1"
        },   
        categoria: {
          required: "La categoría es un campo requerido"
        },
        nombre: {
          required: 'El nombre es un campo requerido',
        },
        descripcion: {
          required: 'La descripción es un campo requerido',
          minlength: 'La descripción debe tener un mínimo de 10 caracteres',
          maxlength: 'La descripción debe tener un máximo de 200 caracteres'
        },
        precio: {
          required: 'El precio es un campo requerido',
          number: 'El precio debe ser un número',
          min: 'El precio debe ser mayor o igual a 0'
        },
        desc_subscriptor: {
          required: 'El descuento es un campo requerido',
          number: 'El descuento debe ser un número',
          min: 'El descuento debe ser mayor o igual a 0',
          max: 'El descuento debe ser menor a 100'
        },
        desc_oferta: {
          required: 'El descuento es un campo requerido',
          number: 'El descuento debe ser un número',
          min: 'El descuento debe ser mayor o igual a 0',
          max: 'El descuento debe ser menor a 100'
        },
      }
    }
  );
});