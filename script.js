window.onload = function() {
    document.querySelectorAll('.news-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200);
    });
};

function myFunction() {
    var x = document.getElementById("mynavigation");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendMail();
        });
    }
});

function sendMail() {

    emailjs.sendForm(
        'service_rx4dvc9', 
        'template_wj85rkx', 
        '#contact-form'
    ).then(alert(`Sent`));
}