$(document).ready(function () {
    
    $('.carousel').carousel();
    $("[rel=tooltip]").tooltip();

    var $container = $('.product-container');
    $container.imagesLoaded( function(){
    	$container.masonry();
	});
    menu();
});

function menu(){
    $.ajax({
        url: "/menu",
        dataType: "JSON",
        success: function (data) {
            var xhtml='';
            var pathname = window.location.pathname;
            if(pathname=="/"){
                active="active";
                xhtml='<li class="'+active+'"><a href="">Home</a></li>';
            }else{
                xhtml='<li class=""><a href="">Home</a></li>';
            }
            
            $.each(data,function(item){
                xhtml+='<li><a href="/ctg/'+data[item].name+'">'+data[item].name +'</a></li>';
            })
            $(".nav-pills").html(xhtml);
            
        }
    });
}