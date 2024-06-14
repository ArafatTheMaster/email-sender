document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fromEmail = document.getElementById('fromEmail').value;
    var toEmail = document.getElementById('toEmail').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var statusElement = document.getElementById('status');

    // Replace the below URL with the URL of your deployed backend API
    var apiURL = 'https://your-backend-url.herokuapp.com/send';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', apiURL, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            statusElement.textContent = 'Email sent successfully!';
            statusElement.style.color = 'green';
        } else if (xhr.readyState === 4) {
            statusElement.textContent = 'Failed to send email.';
            statusElement.style.color = 'red';
        }
    };

    var data = JSON.stringify({
        from: fromEmail,
        to: toEmail,
        subject: subject,
        message: message
    });

    xhr.send(data);
});
