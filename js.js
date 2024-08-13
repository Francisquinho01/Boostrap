$(document).ready(function () {
    
    $('#Tel').mask('(00) 00000-0000');

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true 
            },
            tel: {
                required: true,
                minlength: 14 
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            tel: {
                required: "Por favor, insira o telefone",
                minlength: "Por favor, insira um telefone válido"
            }
        },
        submitHandler: function(form) {
            
            if ($('#form').valid()) {
           
              alert("Cadastro realizado com SUCESSO")
                form.submit(); 
            }

        }
    });
});
