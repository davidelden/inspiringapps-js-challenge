import { DotElements, DropZoneElements } from '/javascript/modules/LogoBuilderModule.js';

const dotElems = new DotElements,
			dzElems = new DropZoneElements,
			dots = dotElems.dots,
			dropZoneRules = dzElems.dropZoneRules;

let dragged = null;

function onDragStart(ev) {
	const target = ev.target,
				imgSrc = target.src;

	dragged = target;

	ev.dataTransfer.effectAllowed = 'move';
	ev.dataTransfer.setData('text/uri-list', imgSrc);
	ev.dataTransfer.setData('text/plain', imgSrc);
}

function onDragOver(ev) {
	let target = ev.target;

	ev.preventDefault();
	ev.dataTransfer.dropEffect = 'move';
}

function onDrop(ev) {
	let target = ev.target,
			data = ev.dataTransfer.getData('text/plain');

	ev.preventDefault();
	if (dropZoneHasDot(target)) {
		return;
	}
	takeValidDot(dragged, target);
}

function takeValidDot(dot, target) {
	if (dropZoneRules[target.id]) {
		let canAccept = dropZoneRules[target.id]['canAccept'];

		if (canAccept === dot.alt) {
			target.appendChild(document.getElementById(dot.id));
		}
	}
}

function dropZoneHasDot(target) {
	return target.children.length > 0 ? true : false;
}

function resetDots() {
	let dotWrapper = document.getElementById('dot-wrapper'),
			dropZones = document.getElementsByClassName('dropzone');

	dotWrapper.innerHTML = "";
	dotElems.insertDots(dots.dotLayout);

	for (var i = 0; i < dropZones.length; i++) {
		dropZones[i].innerHTML = "";
	}
}

function addEventListeners() {
	const dots = document.querySelector('.dots'),
				dropZone = document.querySelector('.dropzones'),
				reset = document.getElementById('reset');

	dots.addEventListener('dragstart', onDragStart);
	dropZone.addEventListener('dragover', onDragOver);
	dropZone.addEventListener('drop', onDrop);
	reset.addEventListener('click', resetDots);
}

dotElems.insertDots(dots.dotLayout);
dzElems.insertDropZones();
addEventListeners();
