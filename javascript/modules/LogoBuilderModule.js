class DotElements {
	constructor() {
		this.dots = {
				dotCount: 0,
				black: {
					alt: 'black dot',
					src: '/images/ia-logo/ia-logo-dot-black.png'
				},
				blue: {
					alt: 'blue dot',
					src: '/images/ia-logo/ia-logo-dot-blue.png'
				},
				green: {
					alt: 'green dot',
					src: '/images/ia-logo/ia-logo-dot-green.png'
				},
				red: {
					alt: 'red dot',
					src: '/images/ia-logo/ia-logo-dot-red.png'
				},
				dotLayout: ['blue', 'red', 'green', 'black', 'black']
			}
	}

	buildDotImgElem(dotColor) {
		let dot = this.dots[dotColor],
				img = document.createElement('img');

		this.dots.dotCount++;

		img.setAttribute('id', `dot${this.dots.dotCount}`);
		img.setAttribute('alt', dot.alt);
		img.setAttribute('draggable', true);
		img.setAttribute('src', dot.src);

		return img;
	}

	insertDots(dotArr) {
		dotArr.forEach(color => {
			let dot = this.buildDotImgElem(color),
					div = document.getElementById('dot-wrapper');

			div.appendChild(dot);
		})
	}
}
 export { DotElements };
