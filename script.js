/*
 * Logika utama Game Diagnostik Bahasa Indonesia.
 * Aplikasi ini tidak memerlukan server atau pustaka tambahan sehingga bisa dibuka langsung melalui index.html.
 */

"use strict";

// ========================= KONFIGURASI DAN DOM =========================
const QUESTION_TIME = 45;
const CHOICE_LETTERS = ["A", "B", "C", "D", "E"];

const elements = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  studentForm: document.getElementById("student-form"),
  studentName: document.getElementById("student-name"),
  studentClass: document.getElementById("student-class"),
  studentNumber: document.getElementById("student-number"),
  formMessage: document.getElementById("form-message"),
  questionCount: document.getElementById("question-count"),
  questionCategory: document.getElementById("question-category"),
  questionTitle: document.getElementById("question-title"),
  answerOptions: document.getElementById("answer-options"),
  progressBar: document.getElementById("progress-bar"),
  timerBox: document.getElementById("timer-box"),
  timerText: document.getElementById("timer-text"),
  feedback: document.getElementById("feedback"),
  resultScore: document.getElementById("result-score"),
  resultCategory: document.getElementById("result-category"),
  resultSummary: document.getElementById("result-summary"),
  resultName: document.getElementById("result-name"),
  resultClass: document.getElementById("result-class"),
  resultNumber: document.getElementById("result-number"),
  resultCorrect: document.getElementById("result-correct"),
  resultWrong: document.getElementById("result-wrong"),
  restartButton: document.getElementById("restart-button")
};

let gameState = createInitialState();

// ============================= UTILITAS DATA ============================
function createInitialState() {
  return {
    player: { name: "", className: "", number: "" },
    questions: [],
    currentIndex: 0,
    correctAnswers: 0,
    secondsLeft: QUESTION_TIME,
    timerId: null,
    answerLocked: false
  };
}

function shuffle(items) {
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[index]];
  }

  return shuffledItems;
}

function getCategory(score) {
  if (score >= 86) return "Sangat Siap";
  if (score >= 71) return "Siap";
  if (score >= 56) return "Cukup";
  if (score >= 41) return "Perlu Bimbingan";
  return "Perlu Pendampingan Intensif";
}

// ============================ ALUR HALAMAN ==============================
function showScreen(screenName) {
  const screens = {
    start: elements.startScreen,
    quiz: elements.quizScreen,
    result: elements.resultScreen
  };

  Object.entries(screens).forEach(([name, screen]) => {
    const isActive = name === screenName;
    screen.hidden = !isActive;
    screen.classList.toggle("screen-active", isActive);
  });
}

function startGame(event) {
  event.preventDefault();
  elements.formMessage.textContent = "";

  if (!elements.studentForm.checkValidity()) {
    elements.formMessage.textContent = "Lengkapi nama, kelas, dan nomor absen terlebih dahulu.";
    elements.studentForm.reportValidity();
    return;
  }

  gameState = createInitialState();
  gameState.player = {
    name: elements.studentName.value.trim(),
    className: elements.studentClass.value.trim(),
    number: elements.studentNumber.value.trim()
  };

  // Menyalin data untuk menjaga bank soal asli, lalu mengacak soal dan opsinya.
  gameState.questions = shuffle(QUESTIONS).map((question) => ({
    ...question,
    options: shuffle(question.options)
  }));

  showScreen("quiz");
  renderQuestion();
}

function restartGame() {
  clearInterval(gameState.timerId);
  gameState = createInitialState();
  elements.studentForm.reset();
  elements.formMessage.textContent = "";
  showScreen("start");
  elements.studentName.focus();
}

// ========================= RENDER SOAL DAN OPSI =========================
function renderQuestion() {
  const currentQuestion = gameState.questions[gameState.currentIndex];
  const totalQuestions = gameState.questions.length;

  gameState.answerLocked = false;
  elements.questionCount.textContent = `SOAL ${gameState.currentIndex + 1} DARI ${totalQuestions}`;
  elements.questionCategory.textContent = currentQuestion.category;
  elements.questionTitle.textContent = currentQuestion.question;
  elements.progressBar.style.width = `${((gameState.currentIndex + 1) / totalQuestions) * 100}%`;
  elements.feedback.textContent = "";
  elements.feedback.className = "feedback";
  elements.answerOptions.replaceChildren();

  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    const letter = document.createElement("span");
    const optionText = document.createElement("span");

    optionButton.type = "button";
    optionButton.className = "answer-option";
    optionButton.dataset.isCorrect = option.isCorrect;
    optionButton.setAttribute("aria-label", `Pilihan ${CHOICE_LETTERS[index]}: ${option.text}`);
    letter.className = "choice-letter";
    letter.textContent = CHOICE_LETTERS[index];
    optionText.textContent = option.text;

    optionButton.append(letter, optionText);
    optionButton.addEventListener("click", () => selectAnswer(optionButton, false));
    elements.answerOptions.append(optionButton);
  });

  elements.questionTitle.focus();
  startTimer();
}

// ============================== TIMER SOAL ===============================
function startTimer() {
  clearInterval(gameState.timerId);
  gameState.secondsLeft = QUESTION_TIME;
  updateTimerDisplay();

  gameState.timerId = window.setInterval(() => {
    gameState.secondsLeft -= 1;
    updateTimerDisplay();

    if (gameState.secondsLeft <= 0) {
      selectAnswer(null, true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(gameState.secondsLeft / 60);
  const seconds = String(gameState.secondsLeft % 60).padStart(2, "0");
  elements.timerText.textContent = `${minutes}:${seconds}`;
  elements.timerBox.classList.toggle("timer-warning", gameState.secondsLeft <= 10);
}

// ============================= PENILAIAN JAWABAN =========================
function selectAnswer(selectedButton, timeExpired) {
  if (gameState.answerLocked) return;

  gameState.answerLocked = true;
  clearInterval(gameState.timerId);

  const optionButtons = [...elements.answerOptions.querySelectorAll(".answer-option")];
  const correctButton = optionButtons.find((button) => button.dataset.isCorrect === "true");
  const isCorrect = selectedButton?.dataset.isCorrect === "true";

  optionButtons.forEach((button) => {
    button.disabled = true;
  });

  correctButton.classList.add("correct");

  if (isCorrect) {
    gameState.correctAnswers += 1;
    elements.feedback.textContent = "Benar! Jawabanmu tepat.";
    elements.feedback.classList.add("feedback-correct");
    playFeedbackSound(true);
  } else {
    if (selectedButton) selectedButton.classList.add("wrong");
    elements.feedback.textContent = timeExpired ? "Waktu habis. Jawaban yang benar sudah ditandai." : "Belum tepat. Perhatikan jawaban yang benar.";
    elements.feedback.classList.add("feedback-wrong");
    playFeedbackSound(false);
  }

  // Jeda singkat memberi kesempatan siswa melihat umpan balik sebelum soal berikutnya.
  window.setTimeout(goToNextQuestion, 1250);
}

function goToNextQuestion() {
  gameState.currentIndex += 1;

  if (gameState.currentIndex >= gameState.questions.length) {
    showResults();
    return;
  }

  renderQuestion();
}

// ============================ EFEK SUARA WEB AUDIO =======================
function playFeedbackSound(isCorrect) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  const audioContext = new AudioContextClass();
  const now = audioContext.currentTime;
  const notes = isCorrect ? [523.25, 659.25] : [220, 174.61];

  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const startTime = now + index * 0.12;

    oscillator.type = isCorrect ? "sine" : "sawtooth";
    oscillator.frequency.setValueAtTime(frequency, startTime);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.16, startTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.12);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(startTime);
    oscillator.stop(startTime + 0.13);
  });

  window.setTimeout(() => audioContext.close(), 500);
}

// ============================== HASIL AKHIR ===============================
function showResults() {
  clearInterval(gameState.timerId);
  elements.progressBar.style.width = "100%";

  const totalQuestions = gameState.questions.length;
  const wrongAnswers = totalQuestions - gameState.correctAnswers;
  const score = Math.round((gameState.correctAnswers / totalQuestions) * 100);
  const category = getCategory(score);

  elements.resultScore.textContent = score;
  elements.resultCategory.textContent = category;
  elements.resultSummary.textContent = `Kamu telah menyelesaikan seluruh ${totalQuestions} soal diagnostik.`;
  elements.resultName.textContent = gameState.player.name;
  elements.resultClass.textContent = gameState.player.className;
  elements.resultNumber.textContent = gameState.player.number;
  elements.resultCorrect.textContent = gameState.correctAnswers;
  elements.resultWrong.textContent = wrongAnswers;

  showScreen("result");
}

// ============================ EVENT APLIKASI ==============================
elements.studentForm.addEventListener("submit", startGame);
elements.restartButton.addEventListener("click", restartGame);
