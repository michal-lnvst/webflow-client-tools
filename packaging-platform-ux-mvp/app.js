const variantButtons = document.querySelectorAll('[data-variant]');
const variantPanels = document.querySelectorAll('[data-variant-panel]');

variantButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.variant;

    variantButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');

    variantPanels.forEach((panel) => {
      panel.classList.toggle('is-hidden', panel.dataset.variantPanel !== target);
    });
  });
});

const chipButtons = document.querySelectorAll('.chip');
chipButtons.forEach((chip) => {
  chip.addEventListener('click', () => {
    chipButtons.forEach((item) => item.classList.remove('is-active'));
    chip.classList.add('is-active');
  });
});

const scopeTabs = document.querySelectorAll('[data-scope]');
const scopePanels = document.querySelectorAll('[data-scope-panel]');

scopeTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.scope;

    scopeTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    scopePanels.forEach((panel) => {
      panel.classList.toggle('is-hidden', panel.dataset.scopePanel !== target);
    });
  });
});
