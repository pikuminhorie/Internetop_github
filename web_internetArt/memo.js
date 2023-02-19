function setup() {
    // キャンバスをつくる
    createCanvas(windowWidth, windowHeight);
    background(255);
  }
  

  //01
  // 計算と表示
  function draw() {
    // ぬりつぶす
    fill(random(100, 255), 255, random(100, 255));
  
    // 円を描く
    ellipse(mouseX /2,mouseY/2,40);
    ellipse(mouseX, mouseY, 80);

  }