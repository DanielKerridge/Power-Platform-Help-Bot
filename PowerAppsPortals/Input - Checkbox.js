Set a checkbox
$("#ispriceoverridden_1").prop("checked", true);

Checkbox on change:
// if Photo Upload = Yes
$("#vel_uploadphoto_1").change(function() {
  if(this.checked) {
    // check for file attached already
    if($('#vel_attachment').val() == ""){
      // currenlty no attachment
      // shows option to add new file
      $('#AttachFile').closest('.tr').show();
    } else {
      // show attachement link to file
      $('#vel_attachment').closest('tr').show();
    }
  }
});

Check if checkbox is checked:
$('#vel_uploadphoto_0').is(':checked')
$('#vel_uploadphoto_1').is(':checked')
