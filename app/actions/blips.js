export function addBlip(blipID,xPos,yPos) {
	return {
		type: 'ADD_BLIP',
		blipID,
		xPos,
		yPos
	}
}
export function editBlip(blipID,text) {
	return {
		type: 'EDIT_BLIP',
		blipID,
		text
	}
}
export function deleteBlip(index) {
	return {
		type: 'DELETE_BLIP',
		index
	}
}
