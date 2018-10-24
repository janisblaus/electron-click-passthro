let win = require('electron').remote.getCurrentWindow()
let el = document.getElementById('clickThroughElement')

el.addEventListener('mouseenter', () => {
	win.setIgnoreMouseEvents(true, {forward: true})
})
el.addEventListener('mouseleave', () => {
	win.setIgnoreMouseEvents(false)
})