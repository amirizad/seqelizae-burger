$('#burgername').keyup(function(){
  if($(this).val()){
    $('#submit').removeAttr('disabled');
  } else {
    $('#submit').attr('disabled', 'disabled');
  }
});

listChange();

function listChange(){
  var count = $('#devoured').children().length;
  if( count > 0){
    $('#delete').removeAttr('disabled');
  } else {
    $('#delete').attr('disabled', 'disabled');
  }
};