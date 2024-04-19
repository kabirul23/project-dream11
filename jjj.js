const selectElements = document.querySelectorAll('select');

selectElements.forEach((select) => {
  select.addEventListener('change', () => {
    const selectedOption = select.options[select.selectedIndex];
    selectElements.forEach((otherSelect) => {
      if (otherSelect!== select) {
        const option = otherSelect.querySelector(`option[value="${selectedOption.value}"]`);
        if (option) {
          otherSelect.remove(option.index);
        }
      }
    });
  });
});