function searchEnter(kcode,txtClientId, btnClientId) {
    if(kcode==13 && document.getElementById(txtClientId).value != '') {
        __doPostBack(btnClientId,'');
        return false;
    }
    if(kcode==13 && document.getElementById(txtClientId).value == '') {
        return false;
    }
    return true;
}
if(!toggleitem){
  var toggleitem = function(id) {
    document.getElementById(id).checked=!document.getElementById(id).checked;
  }
}


var calendarIds;
function addCalendarIds(targetID){
    (function($){
        if(!calendarIds){
            calendarIds = new Array();
        }
        if($.inArray(targetID, calendarIds) == -1){
            calendarIds.push(targetID);
        }
    })(jQuery);
}
function showCalendars(path){
    (function($){
        if(calendarIds){
            $.each(calendarIds, function(i, value) {
                showCalendar(value, path);
            });
        }
    })(jQuery);
}
function showCalendar(targetID, path) {
    (function($){
        $('#' + targetID).datepicker({
            showButtonPanel: true,
            showOn: "button",
            onSelect: function() {},
            buttonImage: path + "/images/calendar.png",
            buttonImageOnly: true
        });
    })(jQuery);
//  })(jqCalendar);
}


function loadAjaxzip3() {
    (function($){
        $.getScript('https://ajaxzip3.github.io/ajaxzip3.js');
    })(jQuery);
}