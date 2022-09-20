readApi("/_api/salesorders?$filter=(_quoteid_value%20eq%203d45b42c-d4d7-ec11-a7b6-00224815721c)&$top=1");

function readApi(URL) {
    (function (webapi, $) {
        function safeAjax(ajaxOptions) {
            var deferredAjax = $.Deferred();
            shell.getTokenDeferred().done(function (token) {
                // add headers for ajax
                if (!ajaxOptions.headers) {
                    $.extend(ajaxOptions, {
                        headers: {
                            "__RequestVerificationToken": token
                        }
                    });
                } else {
                    ajaxOptions.headers["__RequestVerificationToken"] = token;
                }
                $.ajax(ajaxOptions)
                    .done(function (data, textStatus, jqXHR) {
                        validateLoginSession(data, textStatus, jqXHR, deferredAjax.resolve);
                    }).fail(deferredAjax.reject); //ajax
            }).fail(function () {
                deferredAjax.rejectWith(this, arguments); // on token failure, pass the token ajax and args
            });
            return deferredAjax.promise();
        }
        webapi.safeAjax = safeAjax;
    })(window.webapi = window.webapi || {}, jQuery)
    webapi.safeAjax({
        type: "GET",
        url: URL,
        contentType: "application/json",
        success: function (res) {
            console.log(res);
            console.log(res.value[0].salesorderid);
        }
    });
}
