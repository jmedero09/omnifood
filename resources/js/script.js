$(document).ready(function(){

//     $('h1').click(function(){
//         $(this).css('background-color','#ff0000');
//     });

// });

// var waypoint = new Waypoint({
//   element: document.getElementById('px-offset-waypoint'),
//   handler: function(direction) {
//     notify('I am 20px from the top of the window')
//   },
//   offset: 20 

    $('.js--section-features').waypoint(function(direction){
        if(direction=='down'){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'60px;'
    });



 })