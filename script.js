document.addEventListener('DOMContentLoaded', function() {
    const emailFormContainer = document.getElementById('email-form-container');
    const emailForm = document.getElementById('email-form');
    const inboxDiv = document.getElementById('inbox');
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                emailFormContainer.style.display = 'block';
                fetchInbox();
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const to = 'shahzalrehman0302@gmail.com'; // Email address to send the email to
        const subject = document.getElementById('subject').value;
        const body = document.getElementById('body').value;

        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ to, subject, body })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchInbox();
        })
        .catch(error => console.error('Error:', error));
    });

    function fetchInbox() {
        fetch('/inbox')
        .then(response => response.json())
        .then(data => {
            inboxDiv.innerHTML = '<h3>Inbox</h3>';
            data.forEach(email => {
                inboxDiv.innerHTML += `
                    <div>
                        <strong>From:</strong> ${email.from}<br>
                        <strong>To:</strong> ${email.to}<br>
                        <strong>Subject:</strong> ${email.subject}<br>
                        <strong>Body:</strong> ${email.body}<br>
                    </div>
                    <hr>
                `;
            });
        })
        .catch(error => console.error('Error:', error));
    }
});
