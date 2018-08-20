$(document).ready(function(){
    $("#reset_btn").click(function(){
        $("#main").animate({left:"22.5%"},400); 
        $("#main").animate({left:"30%"},500); 
        $("#validateform").css("visibility","hidden");
        $("#validateform").animate({left:"25%"},400);
        
        $("#resetform").animate({left:"17%"},400);
        $("#resetform").animate({left:"30%"},500);
        $("#resetform").css("visibility","visible");
    }); 
    

});








