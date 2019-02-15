function Randomize() {
    var imageNum = Math.floor(Math.random() * 5) + 1;
	var imagePath = "images/";
    $(".random-banner").attr({ "src": imagePath + "banner" + imageNum + ".jpg",});
}

window.onload = Randomize;
