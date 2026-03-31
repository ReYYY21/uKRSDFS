emailjs.init('Jc6OnFazQCdP_dzM1');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm()) {
                sendEmail();
            }
        });
    }
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Будь ласка, заповніть всі обов\'язкові поля.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Введіть правильну email адресу.');
        return false;
    }

    return true;
}

function sendEmail() {
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const lang = document.querySelector('input[name="lang"]:checked').value;
    const interests = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(el => el.value).join(', ');
    const district = document.getElementById('district').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        language: lang,
        interests: interests || 'Не вибрано',
        district: district
    };

    emailjs.send('service_hbaslxe', 'template_z7xcoo6', templateParams)
        .then(function(response) {
            document.getElementById('response').innerHTML = '<p style="color: green;">✓ Дякуємо! Ваше повідомлення успішно надіслано.</p>';
            form.reset();
        }, function(error) {
            document.getElementById('response').innerHTML = '<p style="color: red;">✗ Помилка при відправці. Спробуйте ще раз.</p>';
        });
}

function calculate() {
    const name = document.getElementById('name').value;
    const length = name.length;
    alert(`Довжина вашого імені: ${length} символів.`);
}