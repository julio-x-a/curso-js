const d = document
const $form = d.querySelector('.contact-form');

export default  function contactFormValidation() {    
    createElements();    
    d.addEventListener('keyup', (e) => {
        if (e.target.matches('.contact-form [required]')) {
            let $input = e.target, value = $input.value;
            let pattern = $input.pattern || $input.dataset.pattern;
            
            if(pattern && value !== "") {
                return value.match(pattern)
                ? d.getElementById($input.name).classList.remove('is-active')
                : d.getElementById($input.name).classList.add('is-active');                     
            }
            if (!pattern) {
                return value === ''
                ? d.getElementById($input.name).classList.remove('is-active')
                : d.getElementById($input.name).classList.remove('is-active');
            }
        }
    });
    
    d.addEventListener('submit', (e) => {
        e.preventDefault();
        const $loader = d.querySelector('.contact-form-loader');
        const $response = d.querySelector('.contact-form-response');
        $loader.classList.remove('none');
        setTimeout(() => {
            $loader.classList.add('none');
            $response.classList.remove('none');
            $form.reset()
        }, 3000);
    });
}

function createElements() {
    const $inputs = d.querySelectorAll('.contact-form [required]');
    
    $inputs.forEach(input => {
        const $span = d.createElement('span');
        $span.textContent =  `* ${input.title}`;
        $span.id = input.name;
        $span.classList.add('contact-form-error', 'none')
        input.insertAdjacentElement('afterend', $span);
    });   
}