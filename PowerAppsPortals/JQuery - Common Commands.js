Add class disabled
$('#vel_quantity').addClass('disabled');

remove class
$( "a.create-action" ).removeClass( "disabled" );

Click a button
$('.btn.btn-default.pull-right.remove-value').click();

Closest:
$('#AttachFile').closest('.tr').insertBefore("table > tbody > tr:nth-child(6)")

Hide Closest table row:
$('#AttachFile').closest('.tr').hide()
