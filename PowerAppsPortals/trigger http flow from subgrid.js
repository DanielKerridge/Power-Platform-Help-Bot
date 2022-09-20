$(document).ready(function () {
  
  $(".subgrid [data-ref-entity='vel_invertergroup']").on("loaded", function () {
     $(this).children(".view-grid").find("tr[data-id]").each(function (i, e){
         // get the ID of the row
        var id = $(this).attr("data-id");
        $(this).find(".dropdown-menu").each(function (i, e){
            // add to the context menu
            $(this).append('<li role="none"><a class="delete-link" onclick="callPowerAutomate(\'' + id + '\');" role="menuitem" tabindex="-1" href="#" title="Delete" aria-setsize="4" aria-posinset="2"><span class="fa fa-trash-o fa-fw" aria-hidden="true"></span>Delete Workflow</a></li>');
        });
     });
  });
  
});

function callPowerAutomate(id){
  
    var objInverterGroup = {};
    objInverterGroup.invertergroupitemid = id;
    var stringJSON = JSON.stringify(objInverterGroup);
    var httpTriggerUrl = "https://prod-13.australiasoutheast.logic.azure.com:443/workflows/a9ec3de6cfb84713aa023829e83181bf/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=_TXRcNCPfAQD2OpdsfvhaobZpZCWFtcxlnlj9QGsCbg";
    
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: httpTriggerUrl,
        data: stringJSON,
        async: true,
        beforeSend: function (XmlHttpRequest) {
            XmlHttpRequest.setRequestHeader("Accept", "application/json");
            XmlHttpRequest.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            XmlHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
            XmlHttpRequest.setRequestHeader("OData-Version", "4.0");
        },
        success: function (data, textStatus, XmlHttpRequest) {
            $('tr [data-id="'+ id +'"]').hide();
            alert(id);
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert(xmlHttpRequest.responseJSON.error.message);
        }
    });
  
}
