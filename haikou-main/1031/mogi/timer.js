//タイマー表示要素を取得
const s_minute3 = document.getElementById("minute3");
const s_second3 = document.getElementById("second3");
//スタートボタンを取得
const s_startBtn3 = document.getElementById("startBtn3");
const s_resetBtn3 = document.getElementById("resetBtn3");
const s_stopBtn3 = document.getElementById("stopBtn3");
//終了時音楽
let audio = new Audio("../finish.mp3");
//カウントの秒数
let s_count3 = 180;

//スタートボタンクリックで処理を行う
s_startBtn3.addEventListener("click", () => {
  s_startBtn3.style.pointerEvents = "none";
  s_startBtn3.style.opacity = .5;
  s_resetBtn3.style.pointerEvents = "none";
  s_resetBtn3.style.opacity = .5;
  s_stopBtn3.style.pointerEvents = "auto";
  s_stopBtn3.style.opacity = 1;
  //一定時間おきに行いたい関数を宣言
  function s_countDown2() {
      if(s_count3 > 60) {
          //countが0より大きい場合はcountを1ずつ減らす
          s_count3--;
          let s_MinuteCount3 = Math.floor(s_count3 / 60);
          let s_SecondCount3 = s_count3 - ((Math.floor(s_count3 / 60)) * 60);
          //タイマー表示要素にcountの数値を表示
          s_minute3.textContent = "試合中";
          s_second3.textContent = "";//←いらない
      } else if(s_count3>0) {
          //countが0より大きい場合はcountを1ずつ減らす
          s_count3--;
          let s_MinuteCount3 = Math.floor(s_count3 / 60);
          let s_SecondCount3 = s_count3 - ((Math.floor(s_count3 / 60)) * 60);
          //タイマー表示要素にcountの数値を表示
          s_minute3.textContent = "1分前";
          s_second3.textContent = "";//←いらない
          //s_second3.textContent = s_SecondCount3 >= 10 ? `${s_SecondCount3}秒` : `0${s_SecondCount3}秒`;
      } else{
          //countが0以下になったら0を表示
          s_minute3.textContent = "そこまで";
          //s_second3.textContent = "00秒"
          console.log("タイマーが停止しました");
          clearInterval(s_countDownTimer3);
          s_resetBtn3.style.opacity = 1;
          s_resetBtn3.style.pointerEvents = "auto";
          s_stopBtn3.style.pointerEvents = "none";
          s_stopBtn3.style.opacity = .5;
          audio.play();
          s_count4 = -100;
      }
  }

  const s_countDownTimer3 = setInterval(s_countDown2,1000);

  s_stopBtn3.addEventListener("click", () => {
      clearInterval(s_countDownTimer3);
      s_startBtn3.style.pointerEvents = "auto";
      s_startBtn3.style.opacity = 1;
      s_resetBtn3.style.opacity = 1;
      s_resetBtn3.style.pointerEvents = "auto";
  })
});

s_resetBtn3.addEventListener("click", () => {
  s_startBtn3.style.pointerEvents = "auto";
  s_startBtn3.style.opacity = 1;
  s_count3 = 180;
  s_minute3.textContent = "3分";
  s_second3.textContent = "00秒";
  audio.pause();
  audio.currentTime = 0;  
});
// 曲の先頭に再生開始位置を戻す
