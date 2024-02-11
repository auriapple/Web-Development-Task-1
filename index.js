document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var passwordError = document.getElementById('passwordError');
    var contactNumber = document.getElementById('contactNumber').value;
    var contactNumberError = document.getElementById('contactNumber').nextElementSibling;
    var birthday = new Date(document.getElementById('birthday').value);
    var ageError = document.getElementById('birthday').nextElementSibling;

    // Password validation
    if (password !== confirmPassword) {
        passwordError.style.display = 'block';
        event.preventDefault(); 
    } else {
        passwordError.style.display = 'none';
    }

    // Contact number validation
    if (!validateContactNumber(contactNumber)) {
        contactNumberError.style.display = 'block';
        event.preventDefault(); 
    } else {
        contactNumberError.style.display = 'none';
    }

    // Age validation
    if (!validateAge(birthday)) {
        ageError.style.display = 'block';
        event.preventDefault(); 
    } else {
        ageError.style.display = 'none';
    }
});

function validateContactNumber(contactNumber) {
    var contactNumberRegex = /^\d{11}$/;
    return contactNumberRegex.test(contactNumber);
}

function validateAge(birthday) {
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthday.getFullYear();
    var monthDiff = currentDate.getMonth() - birthday.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthday.getDate())) {
        age--;
    }
    return age >= 18;
}
