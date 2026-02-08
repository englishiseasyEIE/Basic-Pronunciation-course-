document.addEventListener('DOMContentLoaded', function () {

    // Create Toast Container
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999;';
    document.body.appendChild(toastContainer);

    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            background: ${type === 'success' ? '#4caf50' : '#f44336'};
            color: white;
            padding: 15px 25px;
            margin-bottom: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
        `;

        toastContainer.appendChild(toast);

        // Trigger reflow
        void toast.offsetWidth;

        // Show
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';

        // Hide after 3s
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for sticky header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form Submission Handler
    const form = document.getElementById('registration-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;

            // In a real application, you would send this data to a server
            // For this static landing page, we'll show a success message

            showToast(`Cảm ơn ${name}! Chúng tôi sẽ liên hệ sớm nhất.`, 'success');

            // Reset form
            form.reset();
        });
    }
});
