// Scrolling button
let customersOffset = document.querySelector('#contentContainer').offsetTop;

window.addEventListener('scroll', (event) => {
	if ((window.scrollY + window.innerHeight - 100) >= customersOffset) {
		if (!document.querySelector('#contentContainer').classList.contains('active')) {
			document.querySelector('#contentContainer').classList.add('active');
		}
	}
});


const anchors = document.querySelectorAll('a.contentContainer');
for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault()
		const blockID = anchor.getAttribute('href')
		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest'
		})
	})
};
















