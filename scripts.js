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

        var dia  = data.getDate();           
        var mes  = data.getMonth();
        var ano4 = data.getFullYear();


    });
});