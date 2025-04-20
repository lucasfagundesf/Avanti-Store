document.querySelectorAll('.parent-group').forEach(parent => {
    const parentMenu = parent.querySelector('.parent-menu'); // Seleciona o menu pai
    const childGroups = parent.querySelectorAll('.child-group'); // Seleciona os grupos filhos
  
    // Exibe o menu pai ao passar o mouse
    parent.addEventListener('mouseover', () => {
      if (parentMenu) {
        parentMenu.classList.remove('opacity-0', 'invisible');
        parentMenu.classList.add('opacity-100', 'visible');
      }
    });
  
    // Oculta o menu pai ao sair do mouse
    parent.addEventListener('mouseout', () => {
      if (parentMenu) {
        parentMenu.classList.add('opacity-0', 'invisible');
        parentMenu.classList.remove('opacity-100', 'visible');
      }
    });
  
    // Para cada grupo filho, adiciona eventos de hover
    childGroups.forEach(child => {
      const childMenu = child.querySelector('.child-menu'); // Seleciona o menu filho
  
      // Exibe o menu filho ao passar o mouse
      child.addEventListener('mouseover', () => {
        if (childMenu) {
          childMenu.classList.remove('opacity-0', 'invisible');
          childMenu.classList.add('opacity-100', 'visible');
        }
      });
  
      // Oculta o menu filho ao sair do mouse
      child.addEventListener('mouseout', () => {
        if (childMenu) {
          childMenu.classList.add('opacity-0', 'invisible');
          childMenu.classList.remove('opacity-100', 'visible');
        }
      });
    });
  });