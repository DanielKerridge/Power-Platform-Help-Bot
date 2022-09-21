Hide dropdown box select box options
$("#vel_phasetype option[value=282000000]").hide();

Change the html selected attribute using jquery
if($("#vel_phasetype").val() == 282000000) {
  $("#vel_phasetype option[value=282000000]").removeAttr("selected");
  $('#vel_phasetype option[aria-label="Blank"]').attr("selected","selected");
}

