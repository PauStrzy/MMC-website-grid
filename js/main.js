const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const navOptions = document.querySelectorAll('.nav__link')

function showNav() {
	navMobile.classList.toggle('nav-mobile--active')
	navBtn.classList.toggle('is-active')
	document.body.classList.toggle('no-scroll')
}

const letScroll = () => {
	document.body.classList.remove('no-scroll')
}

navOptions.forEach(element => {
	element.addEventListener('click', letScroll)
})

navBtn.addEventListener('click', showNav)
// navOptions.addEventListener('click', letScroll)
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
