// Write your Javascript code.


var animteHTML = function init () {
    var elements,
        windowHeight
    var init = function () {
        elements = document.getElementsByClassName('featurelist_inner ')
        windowHeight = window.innerHeight
        _addEventHandlers() 

    }

    var _addEventHandlers = function () {
        window.addEventListener('scroll', _checkPosition)
        window.addEventListener('resize', init)
    }

    var _checkPosition = function () {
        for (var i = 0; i < elements.length; i++) {
            var posFromTop = elements[i].getBoundingClientRect().top
            if (posFromTop - windowHeight <= 0) {
                elements[i].className = elements[i].className.replace('element-hidden', 'slideInRight')
            }
        }
    }
    return {
        init: init
    }
}
animteHTML().init()