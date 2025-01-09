function addPayment() {
    document.querySelector('.addPayment').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';

}
function closeAddPayment() {
    document.querySelector('.addPayment').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
}
function addPaymentLink() {
    document.querySelector('.addPaymentLink').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';

}
function closeAddPaymentLink() {
    document.querySelector('.addPaymentLink').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
}
// function checkAll(e) {
//     var checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     if (e.checked) {
//         for (var i = 0; i < checkboxes.length; i++) {
//             checkboxes[i].checked = true;
//         }
//     } else {
//         for (var i = 0; i < checkboxes.length; i++) {
//             checkboxes[i].checked = false;
//         }
//     }
// }
var checkAll = document.getElementById('checkAll');
var serviceOtherInput = document.getElementById('other-payments');

checkAll.addEventListener('change', function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
    }
    if (this.checked) {
        serviceOtherInput.style.display = 'flex';
    } else {
        serviceOtherInput.style.display = 'none';
    }
});

var serviceother = document.getElementById('serviceother');
serviceother.addEventListener('change', function () {
    if (this.checked) {
        serviceOtherInput.style.display = 'flex';
    } else {
        serviceOtherInput.style.display = 'none';
    }
});

$(document).ready(function () {
    $('#mySelect').select2({
        placeholder: "Select an option",
        allowClear: true
    });
});