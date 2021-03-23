$(document).ready(function(){
    let i=1;
    $("a").click(function(){
        let $input = $(this).parent().find('input');
        this.href += $input.val();
    });
    $("article").click(function(){
        $(this).addClass("active");
        $(".openbg").addClass("active");
        $("fechar").addClass("active");
    });
    $("fechar").click(function(){
        $("article").removeClass("active");
        $(".openbg").removeClass("active");
        $("fechar").removeClass("active");
        let $input = $input.val()=1;
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

});