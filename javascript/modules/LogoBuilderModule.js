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

class DropZoneElements {
	constructor() {
		this.dropZoneRules = {
				target1: {
					canAccept: 'black dot'
				},
				target2: {
					canAccept: 'red dot'
				},
				target3: {
					canAccept: 'blue dot'
				},
				target4: {
					canAccept: 'green dot'
				},
				target5: {
					canAccept: 'black dot'
				},
			}
	}

	buildDropZoneElem(id) {
		let div = document.createElement('div');

		div.setAttribute('id', id);
		div.setAttribute('class', 'dropzone');

		return div;
	}

	insertDropZones() {
		let ids = Object.keys(this.dropZoneRules),
				div = document.getElementById('dropzone-wrapper');

		ids.forEach(id => {
			let dz = this.buildDropZoneElem(id);

			div.appendChild(dz);
		})
	}
}

class CongratulateUser {
	constructor() {
		this.span = document.createElement('span');
		this.span.innerText = 'Congratulations! You fixed the Innovative Apps logo!'
	}

	getSpan() {
		return this.span;
	}

	insertCongratulations() {
		let div = document.getElementById('dot-wrapper');

		div.appendChild(this.getSpan());
	}
}

 export { DotElements, DropZoneElements, CongratulateUser };
