function reorderForMobile() {
    const header = document.querySelector('.header');
    let contView = document.getElementById('contView');
    if (window.innerWidth < 768) {
        if (!contView) {
            contView = document.createElement('div');
            contView.id = 'contView';
            contView.appendChild(document.querySelector('.logo'));
            contView.appendChild(document.querySelector('.login'));
            header.insertBefore(contView, document.querySelector('.search'));
        }
    } else {
        if (contView) {
            const logo = document.querySelector('.logo');
            const login = document.querySelector('.login');
            header.insertBefore(logo, header.firstChild);
            header.appendChild(login);
            contView.remove();
        }
    }
  }

  window.addEventListener('resize', reorderForMobile);