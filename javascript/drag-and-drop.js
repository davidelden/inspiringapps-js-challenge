import { DotElements, DropZoneElements, CongratulateUser } from '/javascript/modules/LogoBuilderModule.js';

const dotElems = new DotElements,
			dzElems = new DropZoneElements,
			congrats = new CongratulateUser,
			dots = dotElems.dots,
			dropZoneRules = dzElems.dropZoneRules;

let dragged = null;

function onDragStart(ev) {
	const target = ev.target,
				imgSrc = target.src;

	dragged = target;

	ev.dataTransfer.setData('text/uri-list', imgSrc);
	ev.dataTransfer.setData('text/plain', imgSrc);
}

function onDragEnter(ev) {
	let target = ev.target,
			canAccept = canAcceptDot(dragged, target);

	if (canAccept) {
		target.style.background = 'rgba(0,255,0,0.25)';
	} else {
		target.style.background = 'rgba(255,0,0,0.25)';
	}
}

function onDragOver(ev) {
	let target = ev.target;

	ev.preventDefault();
	ev.dataTransfer.dropEffect = 'move';
}

function onDragLeave(ev) {
	let target = ev.target;

	resetBackgroundColor(target);
}

function onDrop(ev) {
	let target = ev.target,
			data = ev.dataTransfer.getData('text/plain');

	ev.preventDefault();
	if (dropZoneHasDot(target)) {
		return;
	}
	takeValidDot(dragged, target);
	resetBackgroundColor(target);
}

function canAcceptDot(dot, target) {
	if (target && target.nodeName == 'DIV') {
		let canAccept = dropZoneRules[target.id]['canAccept'];
		return canAccept === dot.alt ? true : false;
	}
}

function takeValidDot(dot, target) {
	if (canAcceptDot(dot, target)) {
		target.appendChild(document.getElementById(dot.id));
	}
	dotCount() === 0 ? congrats.insertCongratulations() : null;
}

function dropZoneHasDot(target) {
	return target.children.length > 0 ? true : false;
}

function dotCount() {
	return document.getElementById('dot-wrapper').children.length;
}

function resetBackgroundColor(target) {
	target.style.background = '';
}

function resetDots() {
	let dotWrapper = document.getElementById('dot-wrapper'),
			dropZones = document.getElementsByClassName('dropzone');

	dotWrapper.innerHTML = "";
	dots.dotCount = 0;
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
	dropZone.addEventListener('dragstart', onDragStart);
	dropZone.addEventListener('dragenter', onDragEnter);
	dropZone.addEventListener('dragover', onDragOver);
	dropZone.addEventListener('dragleave', onDragLeave);
	dropZone.addEventListener('drop', onDrop);
	reset.addEventListener('click', resetDots);
}

dotElems.insertDots(dots.dotLayout);
dzElems.insertDropZones();
addEventListeners();
