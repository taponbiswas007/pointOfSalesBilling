$(document).ready(function () {
    $(".item_list ul li button").click(function(){
          $(".item_list ul li button").removeClass('active')
        $(this).addClass('active');
      
    });
});