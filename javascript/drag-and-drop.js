import { DotElements, DropZoneElements } from '/javascript/modules/LogoBuilderModule.js';

const dotElems = new DotElements,
			dzElems = new DropZoneElements,
			dots = dotElems.dots,
			dropZoneRules = dzElems.dropZoneRules;

dotElems.insertDots(dots.dotLayout);
dzElems.insertDropZones();
