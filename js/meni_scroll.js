// $(window).scroll(function () { 
//     var top = $(window).scrollTop();
//     if (top>=60){
//         $("header").addClass('bojahedera');
//     }
//     // else if ($("header").hasClass('bojahedera'))
//     // {
//     //     $("header").removeClass('bojahedera');
//     // }    
// });

// $(window).scroll(function () { 
//     var top1 = $(window).scrollTop();
//     if (top1<=-50 && top1>=-500) {
//         $("header").addClass('bezboje');  
//     }
// });

$(document).ready(function(){
    $("#dugme").click(function(){
      $("#p1").show(3000);
    });
  });