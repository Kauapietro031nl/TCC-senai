document.addEventListener('DOMContentLoaded', function() {
  
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn d-lg-none';
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector('.main-header').prepend(mobileMenuBtn);
  
  mobileMenuBtn.addEventListener('click', function() {
      document.querySelector('.sidebar').classList.toggle('active');
  });
  

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
      item.addEventListener('click', function() {
          navItems.forEach(i => i.classList.remove('active'));
          this.classList.add('active');
          
          if (window.innerWidth < 576) {
              document.querySelector('.sidebar').classList.remove('active');
          }
      });
  });
  
  
  const adminProfile = document.getElementById('adminProfile');
  if (adminProfile) {
      adminProfile.addEventListener('click', function() {
          this.classList.toggle('active');
      });
      
      
      const dropdownIcon = document.getElementById('adminDropdown');
      if (dropdownIcon) {
          dropdownIcon.addEventListener('click', function(e) {
              e.stopPropagation();
              window.close(); 
          });
      }
  }
  

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
      logoutBtn.addEventListener('click', function(e) {
          e.preventDefault();
         
          console.log('Logout clicked');
          window.location.href = 'login.html';
      });
  }
  

  function handleResize() {
      if (window.innerWidth >= 576) {
          document.querySelector('.sidebar').classList.remove('active');
      }
  }
  
  window.addEventListener('resize', handleResize);
});