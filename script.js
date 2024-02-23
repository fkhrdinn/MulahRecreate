
function captureInputValues() {
    var selectedOption = document.getElementById('number').value;
    var mobileNumber = document.getElementById('mobile_number').value;

   
    sessionStorage.setItem('mobileNumber', selectedOption + mobileNumber);
}

function capturePage2InputValues() {
    // Get the values of the input fields
    var name = document.getElementById('name').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var email = document.getElementById('email').value;

    // Log the values (you can perform further actions here)
    sessionStorage.setItem('capturedName', name);
    sessionStorage.setItem('capturedBirthday', day + '/' + month + '/' + year);
    sessionStorage.setItem('capturedEmail', email);
}
