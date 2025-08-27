function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}

let stepIndex = 0;
const steps = document.querySelectorAll('#instructions li');

function startCooking() {
    if (stepIndex < steps.length) {
        steps.forEach(step => step.style.background = 'transparent');
        steps[stepIndex].style.background = '#ffeb3b';
        const progress = ((stepIndex + 1) / steps.length) * 100;
        document.querySelector('.progress').style.width = progress + '%';
        stepIndex++;
    }
    if (stepIndex === steps.length) {
        alert('Cooking complete!');
        stepIndex = 0;
        document.querySelector('.progress').style.width = '0%';
    }
}