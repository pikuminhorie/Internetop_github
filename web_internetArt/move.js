// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
    // キャンバスをつくる
    createCanvas(windowWidth, windowHeight);
  
  // 背景をぬりつぶす
    background(255);
  }
  

  //01
  // 計算と表示
  function draw() {
    // ぬりつぶす
    fill(random(100, 255), 255, random(100, 255));
  
    // 円を描く
    ellipse(mouseX, mouseY, 100);
  }
  

//02

//03




// 前表示のためのjsなので以下ノータッチ
  function init() {
    var wpr = document.getElementById("wrapper");
    var cvs = document.getElementById("everyone");
 
    cvs.width = wpr.offsetWidth;
    cvs.height = wpr.offsetHeight;
 
    window.alert("screen.width " + screen.width + "、" + "screen.height " + screen.height + "\n"
                 + "cvs.width " + cvs.width + "、" + "cvs.height " + cvs.height);
  }
 