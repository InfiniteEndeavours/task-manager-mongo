document.addEventListener('DOMContentLoaded', function () {
    let sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav, {edge: "right"});
    let accordian = document.querySelectorAll('.collapsible');
    M.Collapsible.init(accordian);
    let tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips);
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker,
        {
            format: "dd mmmm, yyyy",
            yearRange: 3,
            showClearBtn: true,
            i18n: {
                done: "Select"
            }
        });
    let selection = document.querySelectorAll('select');
    M.FormSelect.init(selection);
});