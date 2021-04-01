var cardinal = {
  init: function() {
      this.cacheDom();
      this.bindEvents();
  },
  cacheDom: function() {
      this.navToggle = document.querySelector('.nav-toggle');
  },
  bindEvents: function() {
      this.navToggle.addEventListener('click', this.toggleNav.bind(this));
  },
  toggleNav: function() {
      this.navToggle.classList.toggle('nav-open');
      this.navToggle.parentElement.classList.toggle('nav-open');
  }
};

cardinal.init();