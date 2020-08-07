var _loadedImages = 0,
    po1 = Power1.easeOut,
    po2 = Power2.easeOut,
    pi1 = Power1.easeIn,
    _imageArray = new Array('logo.svg', 'copy01.svg', 'copy02.svg', 'copy03.svg', 'copy04.svg', 'copy05.svg', 'copy06.svg', 'copy07.svg', 'copy08.svg', 'copy09.svg', 'copy012.svg', 'copy013.svg', 'cta_copy.svg','eyebrow.svg'),
    _tl;

this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;             
    if(_loadedImages == _imageArray.length) init();
}

function init(){ 
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', "style.css" );
    document.getElementsByTagName('head')[0].appendChild(css);
    _tl = new TimelineMax();
    css.addEventListener('load', initAnimations, false);
}

function initAnimations(){
    console.time('animationTotalTime')
    _tl
    .staggerTo('.copyF1', .3, {left:'-=300', ease:po2},0, '+=.5')
    .to('.copyF1', 0, {opacity:0, ease:po1}, '+=2')
    .staggerTo('.copyF2', .3, {left:'-=300', ease:po2},0, '-=.1')
    .to('.copyF2', 0, {opacity:0, ease:po1}, '+=1.8')
    .staggerTo('.copyF3', .3, {left:'-=300', ease:po2},0, '-=.1')
    .to('.copyF3', .3, {left:-300, ease:po1}, '+=1.8')
    .to('#logo',.3, {opacity:0, ease:po1},'-=.2')
    .to('#logo2', .6, { opacity:1,scale:1, transformOrigin:"center 20%", transformStyle:"preserve-3d", ease:po1}, '-=.1')
    .to('.copyF4',.3, {opacity:1, ease:po1})
    .to('.copyF4b',.3, {opacity:1, ease:po1},'+=.2')
    .to('#cta', .8, { opacity:1,onComplete:actionsButton,ease:pi1})
    .call(function(){console.timeEnd('animationTotalTime')})
}

function actionsButton(){
    _btnExit.addEventListener('mouseover', function(){ TweenMax.to('#cta',.5,{backgroundColor:'#fff',ease:po2})});
    _btnExit.addEventListener('mouseout', function(){ TweenMax.to('#cta',.5,{backgroundColor:'#fac705',ease:po2})});
}