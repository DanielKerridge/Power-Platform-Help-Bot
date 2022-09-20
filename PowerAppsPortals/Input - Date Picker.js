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

On date picker change
var dpcontrol = $('#vel_commissioningdate').parent();
$(dpcontrol).on("dp.change", function (e) {
  if ($('#vel_datasource').val() != '282000001')
  $("#vel_state").val('282000003');
});

set min date for a date picker
$("#cracc_hatchdate").next().data("DateTimePicker").minDate(moment(HatchDateMinus2));

show today button
$('#ID_OF_YOUR_FIELD').next().data("DateTimePicker").showTodayButton(true);

clear the datepicker
$('#vel_commissioningdate').next().data("DateTimePicker").clear()

view all date picker options in dev tools
$('#vel_commissioningdate').next().data("DateTimePicker")

Get format of date picker
$('#vel_completedon').next().data("DateTimePicker").date()

Set the date value for a date picker:
https://bernado-nguyen-hoan.com/2018/07/24/how-to-set-value-for-date-time-field-by-javascript-in-crm-portal/

