gsap.registerPlugin(ScrollSmoother,ScrollTrigger)

window.onload = function() {
	let preloader = document.getElementById('preloader');
	preloader.classList.add('hide-preloader');
	setTimeout(function() {
		preloader.classList.add('hidden-preloader');
	},500)
}

if (ScrollTrigger.isTouch !==1){
	ScrollSmoother.create ({
		wrapper: '.scrollsmoother',
		content:'.scrollsmoother-container',
		smooth: 2.5,
		effects:true
	})
}


// sound

let soundimg = document.querySelector('.sound-img'),
		audio = document.querySelector('.sound')
		audio.volume = 0.2;

soundimg.addEventListener('click', e => {
	soundimg.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})
window.onfocus = function () {
	soundimg.classList.contains('paused') ? audio.pause() : audio.play()
}
window.onblur = function() {
	audio.pause()
}


