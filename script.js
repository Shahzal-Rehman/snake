document.addEventListener('DOMContentLoaded', function() {
    const emailFormContainer = document.getElementById('email-form-container');
    const emailForm = document.getElementById('email-form');
    const inboxDiv = document.getElementById('inbox');
    const loginForm = document.getElementById('login-form');

    // Predefined user accounts
    const users = [
        { username: 'admin', password: 'password' },
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' },
        { username: 'user4', password: 'password4' },
        { username: 'user5', password: 'password5' }
        // Add more user accounts here if needed
    ];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the entered username and password match any predefined account
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Show email form if login is successful
            emailFormContainer.style.display = 'block';
            fetchInbox();
        } else {
            alert('Invalid username or password');
        }
    });

    // Email sending functionality
    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const to = 'shahzalrehman0302@gmail.com'; // Email address to send the email to
        const subject = document.getElementById('subject').value;
        const body = document.getElementById('body').value;

        // In a real application, you would send the email data to the backend server
        // and handle the email sending logic there

        alert(`Email sent to: ${to}\nSubject: ${subject}\nBody: ${body}`);
        fetchInbox(); // Fetch inbox after sending email (for demonstration)
    });

    // Fetch inbox functionality
    function fetchInbox() {
        // In a real application, you would fetch the user's inbox data from the backend server
        // and update the UI accordingly

        // For demonstration purposes, we'll just display a static list of emails
        const emails = [
            { from: 'admin2@mlsapro.com', subject: 'Test Email 1', body: 'This is a test email 1' },
            { from: 'admin3@mlsapro.com', subject: 'Test Email 2', body: 'This is a test email 2' },
            { from: 'admin4@mlsapro.com', subject: 'Test Email 3', body: 'This is a test email 3' },
            { from: 'admin5@mlsapro.com', subject: 'Test Email 4', body: 'This is a test email 4' },
            { from: 'admin6@mlsapro.com', subject: 'Test Email 5', body: 'This is a test email 5' }
            // Add more example emails here if needed
        ];

        // Display the emails in the inbox
        inboxDiv.innerHTML = '<h3>Inbox</h3>';
        emails.forEach(email => {
            inboxDiv.innerHTML += `
                <div>
                    <strong>From:</strong> ${email.from}<br>
                    <strong>Subject:</strong> ${email.subject}<br>
                    <strong>Body:</strong> ${email.body}<br>
                </div>
                <hr>
            `;
        });
    }
});
