$(" #secondSource").hide();
$(" #videoSource").hide();
$(" #output").hide();

$('#frmCreateSource').validator();

$(function () {
    $.each(list.templateDisplay, function (i, item) {
        $('#templateDisplay').append($('<option>', { 
            value: item.id,
            text : item.value
        }));
    });
    $.each(list.templateMobile, function (i, item) {
        $('#templateMobile').append($('<option>', { 
            value: item.id,
            text : item.value
        }));
    });
    $.each(list.optAdformatsDisplay, function (i, item) {
        $('#optAdformatsDisplay').append($('<option>', { 
            value: item.id,
            text : item.value
        }));
    });
    $.each(list.optAdformatsMobile, function (i, item) {
        $('#optAdformatsMobile').append($('<option>', { 
            value: item.id,
            text : item.value
        }));
    });
    $('#btnCopy').on('click', function () {
        copyFunction();
    });
    $('#btnOpen').on('click', function () {
        openFunction();
    });
    $('#btnReset').on('click', function () {
        resetForm();
    });
    $("#optTypes").change(function() {
    selectedType = $(this).val();
        switch (selectedType) {
            case 'display':
                $("#optTemplates").children('#templateDisplay').show();
                $("#optTemplates").children('#templateMobile').hide();
                $("#optAdformats").children('#optAdformatsDisplay').show();
                $("#optAdformats").children('#optAdformatsMobile').hide();
                break;

            case 'mobile':
                $("#optTemplates").children('#templateMobile').show();
                $("#optTemplates").children('#templateDisplay').hide();
                $("#optAdformats").children('#optAdformatsMobile').show();
                $("#optAdformats").children('#optAdformatsDisplay').hide();
                break;

            case 'video':
                $("#optTemplates").children('#templateMobile').show();
                $("#optTemplates").children('#templateDisplay').show();
                $("#optAdformats").children('#optAdformatsMobile').hide();
                $("#optAdformats").children('#optAdformatsDisplay').hide();
                break;
        }
    });

    $("#optTemplates").change(function() {
    selectedType = $(this).val();
        switch (selectedType) {
            case 'dantri-pc': case 'phunutoday-pc': case 'thethao247-pc':
                $("#optAdformats").children('#optAdformatsDisplay').show();
                $("#optAdformats").children('#optAdformatsMobile').hide();
                $("#optTypes").val('display');
                break;

            case 'dantri-mb': case 'phunutoday-mb': case 'thethao247-mb':
                $("#optAdformats").children('#optAdformatsMobile').show();
                $("#optAdformats").children('#optAdformatsDisplay').hide();
                $("#optTypes").val('mobile');
        }
    });

    $("#optAdformats").change(function() {
    selectedType = $(this).val();
        switch (selectedType) {
            case 'billboard': case 'balloon': case '3d-post-carousel': case 'masthead-mb': case 'inpage': case 'firstview': case 'footer': case 'on-image-mb':
                $("#mainSource").show();
                $("#secondSource").hide();
                $("#videoSource").hide();
                break;
            
            case 'in-native': case 'in-takeover': case 'in-carousel': case 'on-image-pc':
                $("#mainSource").show();
                $("#secondSource").show();
                $("#videoSource").hide();
                $("#txtBannerVideo").val('');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                break;

            case 'in-inread':
                $("#mainSource").show();
                $("#videoSource").show();
                $("#secondSource").hide();
                $("#txtBanner2").val('');
                break;
        }
    });
});

function resetForm() {
    $('#frmCreateSource').trigger("reset");
    $('#optTypes, #optTemplates, #optAdformats').prop('selectedIndex',0);
    $("#optTemplates").children('#templateDisplay').show();
    $("#optTemplates").children('#templateMobile').show();
    $("#optAdformats").children('#optAdformatsDisplay').show();
    $("#optAdformats").children('#optAdformatsMobile').show();
    $(" #secondSource").hide();
    $(" #videoSource").hide();
    $("#output").hide();
    $('#txtOutput').trigger(':reset');
};

function openFunction() {
    var textURL = document.getElementById("txtOutput");
    textURL.select();
    window.open(textURL.value);
};

function copyFunction() {
    var copyText = document.getElementById("txtOutput");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
};

$('#frmCreateSource').submit(function(e) {
    e.preventDefault();
    var messageAlert = 'alert-success';
    var messageText = "Link generated successfully";

    var template = $("#optTemplates").val();
    var format = $("#optAdformats").val();
    var sourceURL = $("#txtBanner").val();
    var additionSourceURL = $("#txtBanner2").val();
    var videoSourceURL = $("#txtBannerVideo").val();
    var url = window.location.href;
    var p = url.search("index.");
    var prefix = "https://demo.yomedia.vn/"

    if (p != -1) {
      url = url.substring(0, p);
    }

    let adformatURL = url + 'sites/'  + template + '/index.html' + `?f=${format}&b=` + prefix + `${sourceURL}`;
    additionSourceURL ? adformatURL = adformatURL + '&c=' + prefix + `${additionSourceURL}` : adformatURL;
    videoSourceURL ? adformatURL = adformatURL + `&c=` + prefix + `${videoSourceURL}` : adformatURL;

    $("#output").show();
    $("#txtOutput").empty();
    $("#txtOutput").append(adformatURL);
    
    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
    $('#frmCreateSource').find('.messages').html(alertBox);

});
