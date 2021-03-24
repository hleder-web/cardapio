$(document).ready(function(){
    $(".openbg2").addClass("active");
    $("a").click(function(){
        let $input = $(this).parent().find('input');
        let $nome = $("#name");
        let $endereco = $("#endereco");
        this.href += $input.val() + "%0AMeu%20nome%20é:"+ $nome.val() + "%0AMeu%20endereço%20é:" +$endereco.val();
        
    });
    $("article").click(function(){
        $(this).addClass("active");
        $(".openbg").addClass("active");
        $("fechar").addClass("active");
    });
    $(".openbg").click(function(){
        $("article").removeClass("active");
        $(".openbg").removeClass("active");
        $("fechar").removeClass("active");
       
    });
 
  
    $('.minus').click(function () {
        let $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        console.log( $input.val());
        return false;
        
        
    });
    $('.plus').click(function () {
        let $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        console.log( $input.val());
        return false;
    });
    $('#salvar').click(function () {
        if( $("#name").val()=="" || $("#endereco").val() == ""){
            var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }else{
            $('.formulario').fadeToggle();
            $(".openbg2").removeClass("active");
        }
       
    console.log($("#name").val());
    console.log($("#endereco").val());
    });

});
