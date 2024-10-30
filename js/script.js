$(document).ready(function($) {
  $(document).on('click','.tralier_btn',function(){
    var videoFile = $(this).attr("datasource");
    $('#video_tralier video').attr('src', videoFile);
    $('#video_tralier video')[0].play();
  });
});


$('#video_tralier').on('hide.bs.modal', function () {
 $('#video_tralier video')[0].pause();
 var videoFile = '';
 $('#video_tralier video').attr('src', videoFile);
});


$(window).on('load', function () {
  // $("#cover").fadeOut(200);
  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   $('#mob_videoBG')[0].play();
  }
  else{
    $('#videoBG')[0].play();
  }
});
