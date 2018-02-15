
var firefly = document.getElementById('f1') 

// Create a tween
var tween = TweenLite.to(firefly, 2, {
 x: 100,
 ease: Power1.easeInOut,
 // onComplete: myFunction,
 // onCompleteParams: [element, 'param2']
});
