export default function testResponsive(form) {
  const $form = document.getElementById(form);
  let tester;
  document.addEventListener('submit', (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = open(
        $form.url.value,
        'tester',
        `innerWidth=${$form.width.value},
         innerHeight=${$form.height.value}`
      );
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target === $form.close) tester.close();
  });
}
