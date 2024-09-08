

/* ====================================================
 * LAYOUT: volunteer.php
 * ----------------------------------------------------
 * Version: 1
 * Author: Steven Magallanes
 * Summary: The Volunteer page has a toggle area for each
 * item that is shown, along with a plus sign that converts
 * to a minus when clicked.
 * ====================================================*/
$(function () {
    $(".volunteer-item-collapse").on("show.bs.collapse", function () {
        var m_btn = $(this).parent().find(".volunteer-collapse-btn");
        m_btn.removeClass("fa-plus").addClass("fa-minus");
    });
    $(".volunteer-item-collapse").on("hide.bs.collapse", function () {
        var m_btn = $(this).parent().find(".volunteer-collapse-btn");
        m_btn.removeClass("fa-minus").addClass("fa-plus");
    });
});



/* Disable weekends and Holidays in Gravity form datepicker */ 
if (typeof window.gform !== "undefined") {
    gform.addFilter( 'gform_datepicker_options_pre_init', function( optionsObj, formId, fieldId ) {
        if ( formId == 10 && fieldId == 6 ) {
            optionsObj.firstDay = 1;
            optionsObj.beforeShowDay = function(date) {
            var day = date.getDay();
            var array = ["01-01","01-21","02-18","05-27","07-04","09-02","10-14","11-11","11-28","12-25"];
            var string = jQuery.datepicker.formatDate('mm-dd', date);
            return [ !(array.indexOf(string) != -1 || day == 0 || day == 6) ];
            }
        }
        return optionsObj;
    });
    
    
}

jQuery(document).ready(function(e) {
    setTimeout(function() {
        jQuery(".wpb_animate_when_almost_visible").addClass("wpb_start_animation");    
    }, 1000);
});

