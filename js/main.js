// HAMBURGER MENU

function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// EMAILJS FORM FOR CUSTOMER

const btn = document.getElementById('submit-button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_v4l1aym';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'submit';
                alert("Thanks for getting in touch. We'll be in contact soon! Check your inbox please!");
            }, (err) => {
                btn.value = 'submit';
                alert(JSON.stringify(err));
            });
    });

emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#form')
    .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
        console.log('FAILED...', error);
    });