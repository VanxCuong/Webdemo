$(document).ready(function () {
    
    $('.carousel').carousel();
    $("[rel=tooltip]").tooltip();

    var $container = $('.product-container');
    $container.imagesLoaded( function(){
    	$container.masonry();
	});
    menu();
    sumTotal();
});
function sumTotal(){
    $('input[name="txtQuantity"]').change(function(){
        var id=$(this).attr("idsp");
        var sl=$(this).val();
        $.ajax({
            type: "GET",
            url: "/ctg/update/"+id+"/"+sl,
            dataType: "html",
            success: function (response) {
                if(response=="oke"){
                    location.reload();
                }
            }
        });
    })
}
format=function(money){
    money=money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.");
    return money;
}
function menu(){
    $.ajax({
        url: "/menu",
        dataType: "JSON",
        success: function (data) {
            var xhtml='';
            var pathname = window.location.pathname;
            if(pathname=="/"){
                active="active";
                xhtml='<li class="'+active+'"><a href="/">Home</a></li>';
            }else{
                xhtml='<li class=""><a href="/">Home</a></li>';
            }
            var pathHTML=pathname.split("/");
            $.each(data,function(item){
                if(pathHTML[2]==data[item].name){
                    xhtml+='<li class="active" ><a  href="/ctg/'+data[item].name+'">'+data[item].name +'</a></li>';
                }else{
                    xhtml+='<li><a href="/ctg/'+data[item].name+'">'+data[item].name +'</a></li>';
                }
            })
            $(".nav-pills").html(xhtml);
            
        }
    });
}