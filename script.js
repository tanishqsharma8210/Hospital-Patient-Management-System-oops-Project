function scrollToSection(id) {
    var element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function bookAppointment() {
    var name = document.getElementById('patientName').value;
    var doctor = document.getElementById('doctorSelect').value;
    var date = document.getElementById('dateSelect').value;

    var message = "Appointment request submitted for " + name +
                  " with " + doctor + " on " + date +
                  ". (Demo only - no backend connected.)";

    document.getElementById('appointmentMessage').innerText = message;
    return false; // prevent real form submission
}