export default function filter(id, idInput) {
    const $elements = document.querySelectorAll(id);
    let $input = document.getElementById(idInput);
    let regexp;
    document.addEventListener('keyup', (e) =>{
        if ($input.value === '') showElements($elements);
        if (e.target === $input && $input.value != '') {
            regexp = new RegExp($input.value, 'i');
            hiddenElements($elements, regexp);
        }
    });
}

const hiddenElements = ((elements, regexp) => {
    showElements(elements);
    elements.forEach(element =>{
        if (!element.textContent.match(regexp)) {
            element.classList.add('hidden');
        }
    });
});

const showElements = (elements => {
    elements.forEach(element =>{
        element.classList.remove('hidden');
    });
});