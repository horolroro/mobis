
import './sub.js'

const cards = document.querySelectorAll('.card')
const links = document.querySelectorAll('.link')

links.forEach(elm => {

    elm.addEventListener('mouseover', () => {
        //console.log('over')
        removeActiveClasses()
        addInActiveClass()
        elm.parentNode.classList.add('active')
        elm.parentNode.classList.remove('inactive')
    })

    elm.addEventListener('mouseleave', () => {
        //console.log('leave')
        removeActiveClasses();
        addNormalClass()

        cards.forEach(elm => {
            elm.classList.remove('inactive')
        });
    })

})

function removeActiveClasses() {
    cards.forEach(elm => {
        elm.classList.remove('active')
    })
}

function addInActiveClass(){
    cards.forEach(elm => {
        elm.classList.add('inactive')
    })
}

function addNormalClass(){
    cards.forEach(elm => {
        elm.classList.add('normal')
    })
}

