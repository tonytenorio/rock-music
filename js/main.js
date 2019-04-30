document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

$(document).ready(function(){

    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if(value === 'all') {
          $('.filter').show(300);
        } else {
          $('.filter').not('.' + value).hide(300);
          $('.filter').filter('.' + value).show(300);
        }
    });
    
    $('.gallery-list-item').click(function() {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

    $('#date').text(new Date().getFullYear());
});
