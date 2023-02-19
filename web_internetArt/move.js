function setup(){
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw(){
  image(capture, 0, 0, width, width * capture.height / capture.width);
  filter(INVERT);
}





// 前表示のためのjsなので以下ノータッチ
  function init() {
    var wpr = document.getElementById("wrapper");
    var cvs = document.getElementById("everyone");
 
    cvs.width = wpr.offsetWidth;
    cvs.height = wpr.offsetHeight;
 
    window.alert("screen.width " + screen.width + "、" + "screen.height " + screen.height + "\n"
                 + "cvs.width " + cvs.width + "、" + "cvs.height " + cvs.height);
  }
 