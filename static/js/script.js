document.addEventListener('DOMContentLoaded', function () {
    let sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav, {edge: "right"});
    let accordian = document.querySelectorAll('.collapsible');
    M.Collapsible.init(accordian);
    let tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips);
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy", yearRange: 3, showClearBtn: true, i18n: {
            done: "Select"
        }
    });
    let selection = document.querySelectorAll('select');
    M.FormSelect.init(selection);

    validateMaterializeSelect();

    function validateMaterializeSelect() {
        let classValid = "border-bottom: 1px solid #4caf50; box-shadow: 0 1px 0 0 #4caf50;";
        let classInvalid = "border-bottom: 1px solid #f44336; box-shadow: 0 1px 0 0 #f44336;";
        let selectValidate = document.querySelector("select.validate");
        let selectWrapperInput = document.querySelector(".select-wrapper input.select-dropdown");
        if (selectValidate.hasAttribute("required")) {
            selectValidate.style.cssText = "display: block; height: 0; padding: 0; width: 0; position: absolute;";
        }
        selectWrapperInput.addEventListener("focusin", (e) => {
            e.target.parentNode.addEventListener("change", () => {
                ulSelectOptions = e.target.parentNode.childNodes[1].childNodes;
                for (let i = 0; i < ulSelectOptions.length; i++) {
                    if (ulSelectOptions[i].className == "selected" && ulSelectOptions[i].hasAttribute != "disabled") {
                        e.target.style.cssText = classValid;
                    }
                }
            });
        });
        selectWrapperInput.addEventListener("click", (e) => {
            ulSelectOptions = e.target.parentNode.childNodes[1].childNodes;
            for (let i = 0; i < ulSelectOptions.length; i++) {
                if (ulSelectOptions[i].className == "selected" && ulSelectOptions[i].hasAttribute != "disabled" && ulSelectOptions[i].style.backgroundColor == "rgba(0, 0, 0, 0.03)") {
                    e.target.style.cssText = classValid;
                } else {
                    e.target.addEventListener("focusout", () => {
                        if (e.target.parentNode.childNodes[3].hasAttribute("required")) {
                            if (e.target.style.borderBottom != "1px solid rgb(76, 175, 80)") {
                                e.target.style.cssText = classInvalid;
                            }
                        }
                    });
                }
            }
        });
    }
});

function confirmComplete() {
    if (confirm("Are you sure you wish to complete this task?")) {
        return true;
    } else {
        return false;
    }
}

function confirmDelete() {
    if (confirm("Are you sure you wish to delete this task?")) {
        return true;
    } else {
        return false;
    }
}