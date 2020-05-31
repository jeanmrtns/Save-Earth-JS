$(document).ready(function(){
    $("#botao").click(function(){

        //Getting IDs values
        var nome     = $("#input-nome").val();    
        var idade    = $("#input-idade").val();   /* Convertendo para inteiro */ idade = parseInt(idade);
        var endereco = $("#input-endereco").val();     
        var cpf      = $("#input-cpf").val();

        //Checkboxes
        var armas           = $("#checkarmas").is(':checked');
        var dirige          = $("#checkveiculo").is(':checked');
        var contato_com_ets = $("#checkcontato").is(':checked');

        //From a selector
        var tipo_sanguineo = $("#tipo-sanguineo").val();
         

        //$.post(SERVER-LINK, VARIABLES ATTRIBUTION, SERVER-CALLBACK FUNTION)
        $.post('https://bilu-back.herokuapp.com/cadastros', {
            nome: nome,
            idade: idade,
            endereco: endereco,
            cpf: cpf,
            armas: armas,
            dirige: dirige,
            contato_com_ets: contato_com_ets,
            tipo_sanguineo: tipo_sanguineo,
        },

        function(data, status){
            console.log("Data: ");
            console.log(data);
            console.log("Status: ");
            console.log(status);
        });
    });
});