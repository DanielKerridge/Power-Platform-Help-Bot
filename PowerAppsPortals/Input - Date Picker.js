// on submit button click
// click the button on the hidden form
$( "#openSubmitPackButton" ).click(function() {
  
    // set that status to completed
    $("#vel_formpackstatus").val('948610003');
    var dateValue = Date();
    // clear the datepicker
    $('#vel_completedon').next().data("DateTimePicker").clear();
    // Get the submit field
    var $submitField = $("#vel_completedon");
    // Get the display field
    var $displayField = $submitField.nextAll(".datetimepicker").children("input");
    // Get the display date format
    var dateFormat = $displayField.attr("data-date-format");
    // Set the submit field. Remember this needs to be in UTC and the format must be exact.
    $submitField.val(moment.utc(dateValue).format("YYYY-MM-DDTHH:mm:ss.SSSSSSS"));
    // Set the display field using the page's date format
    $displayField.val(moment(dateValue).format(dateFormat));
    // click the form submit button
    $("#UpdateButton").click();
  
});
