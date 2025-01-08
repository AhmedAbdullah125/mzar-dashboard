function addPayment() {
    document.querySelector('.addPayment').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';

}
function closeAddPayment() {
    document.querySelector('.addPayment').style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
}


$(document).ready(function () {
    $('#mySelect').select2({
        placeholder: "Select an option",
        allowClear: true
    });
});