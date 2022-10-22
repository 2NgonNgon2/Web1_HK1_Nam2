const backToTop = document.querySelector('.back-to-menu');

      window.addEventListener('scroll' , () => {
        if (window.pageYOffset > 500) {
           backToTop.classList.add("open");
        } else {
          backToTop.classList.remove("open");
        }
      })