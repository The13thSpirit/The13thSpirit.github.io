/*Resize or scale*/
var firstHeroHeight;
if (document.getElementById("hero").clientHeight) {
  firstHeroHeight = document.getElementById("hero").clientHeight;
} else {
  firstHeroHeight = 1200;
};
var resize = function(e){
  //how we will resize e
  var i, layers, scaleMeasure = (document.documentElement.offsetWidth) / 1920;
  console.log(scaleMeasure);
  layers = document.getElementsByClassName(e);
  for (var i = 0; i < layers.length; i++) {
    layers[i].style.height = firstHeroHeight * scaleMeasure + "px";
  };
};
(function(){
  var time;
  window.onresize = function(){
    if (time)
      clearTimeout(time);
    time = setTimeout(function(){
      resize("layer");
    },20);
};
})();
window.onload = resize("layer");
/*Parallax*/
(function() {
  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });
}).call(this);

function renderSection(sectionId) {
  var allSections = document.getElementsByTagName("section"),
    bgColor, mobile, classArr, layerArr;
  window.scrollTo(0,0);
  for (var i = 0; i < allSections.length; i++) {
    allSections[i].style.display = "none";
  }

  if (sectionId == "contacts") {
    bgColor = "#8B3C06";
    mobile = "mobileContacts";
    document.getElementById("contacts").style.display = "block";

  } 
  else if (sectionId == "about") {
    bgColor = "#6f7c2c";
    mobile = "mobileAbout";
    document.getElementById("about").style.display = "block";

  }
  document.getElementById("content").style.backgroundColor = bgColor;
  document.body.style.backgroundColor = bgColor;

  document.getElementById("hero-mobile").className = mobile;

  layerArr = document.getElementById("hero").children;
  for (var j = 0; j < layerArr.length; j++) {
    classArr =  document.getElementById(layerArr[j].id).className.split(" ");
    classArr[0] = sectionId;
    console.log(classArr, layerArr[j]);
    document.getElementById(layerArr[j].id).className = classArr.join(" ");
  }
}