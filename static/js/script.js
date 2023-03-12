  document.addEventListener('DOMContentLoaded', function() {
    let sideNav= document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav, {edge: "right"});
    let accordian = document.querySelectorAll('.collapsible');
    M.Collapsible.init(accordian);
    let tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips);
  });