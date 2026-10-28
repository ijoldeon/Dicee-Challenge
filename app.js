// 1. HTML 요소 가져오기
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

const result = document.querySelector("#result");
const flag1 = document.querySelector("#flag1");
const flag2 = document.querySelector("#flag2");

const score1Text = document.querySelector("#score1");
const score2Text = document.querySelector("#score2");

const rollButton = document.querySelector("#rollButton");
const resetButton = document.querySelector("#resetButton");
const message = document.querySelector("#message");

// 2. 누적 점수
let score1 = 0;
let score2 = 0;

// 최대 점수 20점
const MAX_SCORE = 20;

// 게임 종료 여부
let gameOver = false;

// 3. 주사위 굴리기 버튼
rollButton.addEventListener("click", function () {
  // 게임이 종료되었다면 진행하지 않음
  if (gameOver) {
    message.textContent = "게임 종료! 점수 초기화를 눌러주세요.";
    return;
  }

  // 1부터 6까지 랜덤 숫자 만들기
  const random1 = Math.floor(Math.random() * 6) + 1;
  const random2 = Math.floor(Math.random() * 6) + 1;

  // 주사위 이미지 변경
  image1.setAttribute("src", `images/dice${random1}.png`);
  image2.setAttribute("src", `images/dice${random2}.png`);

  // 이전 깃발과 애니메이션 제거
  flag1.textContent = "";
  flag2.textContent = "";

  image1.classList.remove("winner");
  image2.classList.remove("winner");

  // 4. 승패 판정
  if (random1 > random2) {
    result.textContent = "🚩 Player 1 승리!";
    flag1.textContent = "🚩";

    score1++;

    image1.classList.add("winner");

    message.textContent = "Player 1이 이겼습니다!";
  } else if (random2 > random1) {
    result.textContent = "🚩 Player 2 승리!";
    flag2.textContent = "🚩";

    score2++;

    image2.classList.add("winner");

    message.textContent = "Player 2가 이겼습니다!";
  } else {
    result.textContent = "무승부!";

    message.textContent = "다시 주사위를 굴려 보세요!";
  }

  // 5. 누적 점수 화면에 표시
  score1Text.textContent = score1;
  score2Text.textContent = score2;

  // 6. 20점 도달 시 게임 종료
  if (score1 >= MAX_SCORE || score2 >= MAX_SCORE) {
    gameOver = true;

    if (score1 >= MAX_SCORE) {
      result.textContent = "🏆 Player 1 최종 우승!";
      flag1.textContent = "🏆";
    } else {
      result.textContent = "🏆 Player 2 최종 우승!";
      flag2.textContent = "🏆";
    }

    message.textContent = "20점 달성! 점수 초기화 버튼으로 다시 시작하세요.";
  }
});

// 7. 점수 초기화 버튼
resetButton.addEventListener("click", function () {
  // 점수 0으로 초기화
  score1 = 0;
  score2 = 0;

  // 게임 종료 상태 해제
  gameOver = false;

  score1Text.textContent = score1;
  score2Text.textContent = score2;

  // 주사위 이미지 초기화
  image1.setAttribute("src", "images/dice1.png");
  image2.setAttribute("src", "images/dice1.png");

  // 깃발 제거
  flag1.textContent = "";
  flag2.textContent = "";

  // 애니메이션 제거
  image1.classList.remove("winner");
  image2.classList.remove("winner");

  // 안내 문구 초기화
  result.textContent = "주사위를 굴려보세요!";
  message.textContent = "점수가 초기화되었습니다!";
});
