// check textarea
$(document).keyup(function(e) {
      var inputViu = $('#viu_message')
      if(inputViu.val() != ''){
        $('#viu_msgtitle').addClass('active');
      }
      else {
        $('#viu_msgtitle').removeClass('active');
      }
});


$(document).keyup(function(e) {
      var inputViuTV = $('#viutv_message')
      if(inputViuTV.val() != ''){
        $('#viutv_msgtitle').addClass('active');
      }
      else {
        $('#viutv_msgtitle').removeClass('active');
      }
});

$(document).keyup(function(e) {
      var inputNowTV = $('#nowtv_message')
      if(inputNowTV.val() != ''){
        $('#nowtv_msgtitle').addClass('active');
      }
      else {
        $('#nowtv_msgtitle').removeClass('active');
      }
});

$(document).keyup(function(e) {
      var inputNowE = $('#nowe_message')
      if(inputNowE.val() != ''){
        $('#nowe_msgtitle').addClass('active');
      }
      else {
        $('#nowe_msgtitle').removeClass('active');
      }
});

$(document).keyup(function(e) {
      var inputPccw = $('#pccw_message')
      if(inputPccw.val() != ''){
        $('#pccw_msgtitle').addClass('active');
      }
      else {
        $('#pccw_msgtitle').removeClass('active');
      }
});
