

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