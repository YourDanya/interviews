function addEvent(el, event, callback, isCapture = false) {
    if (!el || !event || !callback || typeof callback !== 'function') return

    if (typeof el === 'string') {
        el = document.querySelector(el)
    }
    el.addEventListener(event, callback, isCapture)
}

addEvent(document, 'DOMContentLoaded', () => {
    const child = document.querySelector('.child')
    const parent = document.querySelector('.parent')
    const grandparent = document.querySelector('.grandparent')

    addEvent(child, 'click', function(e) {
        console.log('child')
    })

    addEvent(parent, 'click', function(e) {
        console.log('parent')
    })

    addEvent(grandparent, 'click', function(e) {
        console.log('grandparent')
    })

    addEvent('html', 'click', function(e) {
        console.log('html')
    })

    addEvent(document, 'click', function(e) {
        console.log('document')
    })

    addEvent(window, 'click', function(e) {
        console.log('window')
    })
})

