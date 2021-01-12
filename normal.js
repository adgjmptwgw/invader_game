
// レーザービームを出す→○秒後、自動的に消える(初期レーザー)
$('#shot').on('click', function () {
  $('.laser').show()
});

$('#shot').on('click', function () {
  setTimeout(function () {
    $('.laser').hide()
  }, 200);
});


// レーザービームを出す→○秒後、自動的に消える(レーザーレベル2)
$('#shot').on('click', function () {
  $('.laser2').show()
});

$('#shot').on('click', function () {
  setTimeout(function () {
    $('.laser2').hide()
  }, 200);
});


// レーザービームを出す→○秒後、自動的に消える(レーザーレベル3)
$('#shot').on('click', function () {
  $('.laser3').show()
});

$('#shot').on('click', function () {
  setTimeout(function () {
    $('.laser3').hide()
  }, 200);
});

// レーザービームを出す→○秒後、自動的に消える(レーザーレベル3)
$('#shot').on('click', function () {
  $('.laser100').show()
});

$('#shot').on('click', function () {
  setTimeout(function () {
    $('.laser100').hide()
  }, 200);
});

// アラート集
// alert('迫りくるインベーダーから地球を守れ！！');
// alert('インベーダーが地球に達したら負けです');
// alert('クリックでレーザー攻撃、矢印キーで移動してください。');



// アラート(じゃんけん開始タイマー)
// let alertmsg = function () {
//   alert("じゃんけんを３回行い、1回勝つ度にレーザーが強化されます");
// }


//宝箱メニューを数秒後に表示
const janken = document.getElementById('janken');

janken.style.display = 'none';
let jankentimer = function () {
  if (janken.style.display == 'none') {
    janken.style.display = 'flex';
  }
}

//開封後の宝箱画像を隠しておく
$('#openGift').hide();
$('#openLost').hide();

//レーザーレベルを定義
let level = 1;
//IDに"invader"が付いているものを配列へ代入＆documentを取得
let invaders_ID = [];
invaders_ID = $('[id^=invader]');

//爆弾アイテムで使用する為、定義    ※shot=bodyのID
let shot = document.getElementById('shot');

//爆破後に背景色を元に戻す処理
let explosionTimer2 = function () {
  shot.style.backgroundColor = 'black';
}

//スペシャルアイテムの爆弾タイマー。爆発すると画面が赤背景になる。
let explosionTimer = function () {
  for (let i = 0; i < invaders_ID.length; i++) {
    invaders_ID[i].style.display = 'none';
    shot.style.backgroundColor = 'red';
    setTimeout(explosionTimer2, 500)
  }
}




//宝箱の乱数
$('#closeGift').on('click', function () {
  const number = Math.floor(Math.random() * 3)
  //宝箱の中身の処理

  if (number == 0) {
    $('#result').text('レーザーレベルは強化されません');
    $('#result2').text('ハズレ⤵︎⤵︎⤵︎');
    $('#closeGift').hide();
    $('#openLost').show();

  } else if (number == 1) {
    $('#result').text('レーザーレベルが強化されました');
    $('#result2').text('アタリ！！！');
    level += 1;
    $('#closeGift').hide();
    $('#openGift').show();

  } else if (number == 2) {
    $('#result').text('9秒後に画面上の全てのインベーダーが死滅します');
    $('#result2').text('爆弾を手に入れた！！');
    setTimeout(explosionTimer, 9000) //爆弾タイマー
    $('#closeGift').hide();
    $('#bom').show();
  }




  // 強化されたレーザーを実装
  if (level == 2) {
    $('#laser').remove()
    var element2 = document.createElement('div');
    element2.className = 'laser2';
    var parent2 = document.getElementById('laser2');
    parent2.appendChild(element2);

  } else if (level == 3) {
    $('#laser2').remove()
    var element3 = document.createElement('div');
    element3.className = 'laser3';
    var parent3 = document.getElementById('laser3');
    parent3.appendChild(element3);

    // } else if (level >= 100) {
    //   var element100 = document.createElement('div');
    //   element100.className = 'laser100';
    //   var parent100 = document.getElementById('laser100');
    //   parent100.appendChild(element100);
  }

});

// 宝箱画面が開く時、閉まっている宝箱にリセットする
$('#closeGift').on('click', function () {
  setTimeout(giftTimer2, 3000);
});

let giftTimer2 = function () {
  $('#result').text('宝箱を開けてみよう！');
  $('#result2').text('結果は？');
  $('#closeGift').show();
  $('#openGift').hide();
  $('#openLost').hide();
  $('#bom').hide();
}

// 宝箱をクリックしてから○秒後にお宝画面を消す
$('#closeGift').on('click', function () {
  setTimeout(giftTimer, 2000);
});

let giftTimer = function () {
  janken.style.display = 'none';
}


//インベーダー（第1波）の出現時間設定
let invader1 = document.getElementById('invader1');
invader1.style.display = 'none';
let invadertimer = function () {
  if (invader1.style.display == 'none') {
    invader1.style.display = 'flex';
  }
}

//ゲームオーバータイマーで使うclassの取得
let invaders = $('[class^=invader]');
console.log(invaders);
let game_over = document.querySelector('.game_over');

//ゲームオーバータイマー
let alertmsg1 = function gameOver() {
  if (invaders[0].style.display != 'none') {
    if (invaders_ID[0].style.display == 'flex') {
      // if ($(this).hasClass("active")) {
      //   $(this).children("p").addClass("hoge");
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
      
    }
  }
}

//インベーダー（第2波）の出現時間設定
let invader2 = document.getElementById('invader2');
invader2.style.display = 'none';
let invadertimer2 = function () {
  if (invader2.style.display == 'none') {
    invader2.style.display = 'flex';
  }
}

let alertmsg2_1 = function gameOver() {
  if (invaders[1].style.display != 'none' || invaders[2].style.display != 'none') {
    if (invaders_ID[1].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

let alertmsg2_2 = function gameOver() {
  if (invaders[3].style.display != 'none') {
    if (invaders_ID[1].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}


//インベーダー（第3波）の出現時間設定
let invader3 = document.getElementById('invader3');
invader3.style.display = 'none';
let invadertimer3 = function () {
  if (invader3.style.display == 'none') {
    invader3.style.display = 'flex';
  }
}

let alertmsg3_1 = function gameOver() {
  if (invaders[4].style.display != 'none' || invaders[5].style.display != 'none') {
    if (invaders_ID[2].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

let alertmsg3_2 = function gameOver() {
  if (invaders[6].style.display != 'none') {
    if (invaders_ID[2].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

let alertmsg3_3 = function gameOver() {
  if (invaders[7].style.display != 'none') {
    if (invaders_ID[2].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

//インベーダー（第4波）の出現時間設定
let invader4 = document.getElementById('invader4');
invader4.style.display = 'none';
let invadertimer4 = function () {
  if (invader4.style.display == 'none') {
    invader4.style.display = 'flex';
  }
}

let alertmsg4_1 = function gameOver() {
  if (invaders[8].style.display != 'none' || invaders[9].style.display != 'none' || invaders[10].style.display != 'none' ||
    invaders[11].style.display != 'none' || invaders[12].style.display != 'none') {
    if (invaders_ID[3].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

let alertmsg4_2 = function gameOver() {
  if (invaders[13].style.display != 'none') {
    if (invaders_ID[3].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

//インベーダー（第5波）の出現時間設定
let invader5 = document.getElementById('invader5');
invader5.style.display = 'none';
let invadertimer5 = function () {
  if (invader5.style.display == 'none') {
    invader5.style.display = 'flex';
  }
}

let alertmsg5_1 = function gameOver() {
  if (invaders[15].style.display != 'none' || invaders[16].style.display != 'none' || invaders[17].style.display != 'none') {
    if (invaders_ID[4].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

let alertmsg5_2 = function gameOver() {
  if (invaders[18].style.display != 'none') {
    if (invaders_ID[4].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

let alertmsg5_3 = function gameOver() {
  if (invaders[14].style.display != 'none' || invaders[19].style.display != 'none') {
    if (invaders_ID[4].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

//インベーダー（第6波）の出現時間設定
let invader6 = document.getElementById('invader6');
let invaderC = document.querySelector('.invaderC')
invader6.style.display = 'none';
invaderC.style.display = 'none';

let invadertimer6 = function () {
  if (invader6.style.display == 'none') {
    invader6.style.display = 'flex';
    invaderC.style.display = 'flex';
  }
}

let alertmsg6_1 = function gameOver() {
  if (invaders[21].style.display != 'none' || invaders[23].style.display != 'none') {
    if (invaders_ID[5].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

let alertmsg6_2 = function gameOver() {
  if (invaders[22].style.display != 'none') {
    if (invaders_ID[5].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

let alertmsg6_3 = function gameOver() {
  if (invaders[20].style.display != 'none') {
    if (invaders_ID[5].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

//インベーダー（第7波）の出現時間設定
let invader7 = document.getElementById('invader7');
invader7.style.display = 'none';
let invadertimer7 = function () {
  if (invader7.style.display == 'none') {
    invader7.style.display = 'flex';
  }
}

let alertmsg7_1 = function gameOver() {
  if (invaders[25].style.display != 'none') {
    if (invaders_ID[6].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

let alertmsg7_2 = function gameOver() {
  if (invaders[28].style.display != 'none') {
    if (invaders_ID[6].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

let alertmsg7_3 = function gameOver() {
  if (invaders[26].style.display != 'none' || invaders[27].style.display != 'none') {
    if (invaders_ID[6].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

//インベーダー（第8波）の出現時間設定
let invader8 = document.getElementById('invader8');
invader8.style.display = 'none';
let invadertimer8 = function () {
  if (invader8.style.display == 'none') {
    invader8.style.display = 'flex';
  }
}

let alertmsg8_1 = function gameOver() {
  if (invaders[29].style.display != 'none' || invaders[31].style.display != 'none') {
    if (invaders_ID[7].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}

let alertmsg8_2 = function gameOver() {
  if (invaders[30].style.display != 'none' || invaders[32].style.display != 'none') {
    if (invaders_ID[7].style.display == 'flex') {
      shot.style.backgroundColor = 'red';
      shot.style.backgroundImage = 'none';
      game_over.style.display = 'block';
      invaders.remove();
      janken.remove();
      $('#player').addClass('display-none');
    }
  }
}


//ゲームオーバー後の再プレイ
$('.play_again').on('click', function () {
  document.location.reload();
});

//スタートボタン
$('#startbtn').on('click', function () {
  //インベーダー出現時間設定
  setTimeout(invadertimer, 1000);
  setTimeout(invadertimer2, 15000);
  setTimeout(invadertimer3, 25000);
  setTimeout(invadertimer4, 35000);
  setTimeout(invadertimer5, 55000);
  setTimeout(invadertimer6, 70000);
  setTimeout(invadertimer7, 80100);
  setTimeout(invadertimer8, 90100); 

  //負け判定タイマー
  setTimeout(alertmsg1, 11000);   //ノーマルタイプ
  setTimeout(alertmsg2_1, 25000); //ノーマルタイプ
  setTimeout(alertmsg2_2, 20000); //Aタイプ
  setTimeout(alertmsg3_1, 35000); //ノーマルタイプ
  setTimeout(alertmsg3_2, 30100); //Aタイプ
  setTimeout(alertmsg3_3, 28000); //Bタイプ
  setTimeout(alertmsg4_1, 45000); //ノーマルタイプ 
  setTimeout(alertmsg4_2, 40000); //Bタイプ 
  setTimeout(alertmsg5_1, 65000); //ノーマルタイプ  
  setTimeout(alertmsg5_2, 60000); //Aタイプ 
  setTimeout(alertmsg5_3, 58000); //Bタイプ 
  setTimeout(alertmsg6_1, 80000); //ノーマルタイプ 
  setTimeout(alertmsg6_2, 75000); //Aタイプ 
  setTimeout(alertmsg6_3, 73000); //Bタイプ 
  setTimeout(alertmsg7_1, 90000); //ノーマルタイプ  
  setTimeout(alertmsg7_2, 85000); //Aタイプ 
  setTimeout(alertmsg7_3, 83000); //Bタイプ 
  setTimeout(alertmsg8_1, 95000); //Aタイプ
  setTimeout(alertmsg8_2, 93000); //Bタイプ

  //勝ち判定タイマー
  setTimeout(alertmsg_win, 97000);

  //宝箱メニューアラートの出現時間設定
  setTimeout(jankentimer, 6000);
  setTimeout(jankentimer, 14000);
  setTimeout(jankentimer, 30000);
  setTimeout(jankentimer, 47000);
  setTimeout(jankentimer, 65000);

  //スタートボタンを押すとスタートボタン自身が消える
  document.getElementById('startbtn').style.display = 'none';
  document.querySelector(".title").classList.add("display-none");
  $('#player').removeClass('display-none');
});

let win = document.querySelector('.win')
let alertmsg_win = function () {
  shot.style.backgroundColor = 'yellow';
  shot.style.backgroundImage = 'none';
  win.style.display = 'block';
  invaders.remove();
  janken.remove();
  $('#player').addClass('display-none');
  }












document.onkeydown = kdown;	//キーが押されたらdown関数を実行
document.onkeyup = kup;		//キーが話されたらup関数を実行

var x = 557;	//画像のx座標 Y = 600 あたりがいいかも
var y = 580;	//画像のy座標 X = 600
var move = 130	//移動量

//押されたキーによってこの値が1になったり0になったりする
var left = 0;
var up = 0;
var right = 0;
var down = 0;

function kdown(e) {
  //押されたキーの判別
  if (e.keyCode == 37) {
    left = 1;
  }
  // if (e.keyCode == 38) {
  //   up = 1;
  // }
  if (e.keyCode == 39) {
    right = 1;
  }
  // if (e.keyCode == 40) {
  //   down = 1;
  // }

  //x軸,y軸の更新
  if (left == 1) {
    x = x - move;
  }
  if (right == 1) {
    x = x + move;
  }
  if (up == 1) {
    y = y - move;
  }
  if (down == 1) {
    y = y + move;
  }

  //実際の移動
  document.getElementById("player").style.left = x + "px";
  document.getElementById("player").style.top = y + "px";
}

function kup(e) {
  if (e.keyCode == 37) {
    left = 0;
  }
  if (e.keyCode == 38) {
    up = 0;
  }
  if (e.keyCode == 39) {
    right = 0;
  }
  if (e.keyCode == 40) {
    down = 0;
  }
}



//40体分の体力  ※敵の体力ゲージを定義
let physical_gage = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
// let invaders = []; 

$('body').on('click', function () {
  //全てのインベーダーを配列にいれる。※[class^=ｘ]  ’ｘ’というワードが入っているclassだけが配列として入ってくる
  // invaders = $('[class^=invader]');
  //画面に表示されているかを判定する「.is(':visible')」 ※今回は使わない
  //戦闘機の座標を取得
  let myself = $('.plane').offset();
  let myPosi = myself.left;
  console.log(myPosi);

  for (let i = 0; i < invaders.length; i++) {
    //敵の全座標を取得   
    let rect = invaders[i].getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const enemyPosi = rect.left + scrollLeft;
    console.log(enemyPosi);

    //自分と敵の座標が同じであれば、敵の体力を減らす＋敵の色が少し変化する
    if (enemyPosi == myPosi) {
      //レーザーが命中した際に少し色が薄くなる
      // const invader6 = document.querySelector('.invader6');
      invaders[i].style.opacity = 0.3;

      //タイマー
      let damagetimer = function () {
        invaders[i].style.opacity = 1.0;
      }
      setTimeout(damagetimer, 200);

      //レーザーレベルにより与えるダメージが変わる処理
      console.log(level);
      if (level == 1) {
        physical_gage[i] -= 1;
      } else if (level == 2) {
        physical_gage[i] -= 2;
      } else if (level >= 3) {
        physical_gage[i] -= 3;
      }
      console.log(physical_gage);
    }
    //体力が0以下になると敵が消滅する
    // もし、invaderが攻撃されていたらinvaderの体力を減らす
    if (physical_gage[i] <= 0) {
      invaders[i].style.display = 'none';
    }
  }

  var se = $('.btnsound');
    se[0].currentTime = 0;
    se[0].play();

});

//最初クリックした時に変な位置にテレポートする為、応急処置
$('#startbtn').one('click', function () {
  $('#player').hide();
  setTimeout(firstTimer, 250);
});

let firstTimer = function () {
  $('#player').show();
}


