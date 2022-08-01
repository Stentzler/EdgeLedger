const navbar = document.getElementById('navbar')
let scroll = false

window.onscroll = function() {
    if(window.pageYOffset > 480){
        navbar.classList.remove('top')
        if(!scroll){
            navbar.style.transform = 'translateY(-70px)'
        }
        setTimeout(function(){
            navbar.style.transform = 'translateY(0px)'
            scroll = true
        },600)
    } else {
        navbar.classList.add('top')
        scroll = false;
    }
}

//Smooth Scrolling
$('#navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault()

        const hash = this.hash

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 68
            }, 800
        )
    }
})