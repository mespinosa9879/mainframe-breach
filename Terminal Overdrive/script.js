const output = document.getElementById('output');
const input = document.getElementById('input');
const progressSpan = document.getElementById('progress');
const timerDisplay = document.getElementById('timer-display');

let index = 0;
let timeLeft = 30;
let timerInterval = null;
let isChallengeMode = false;

const sourceCode = `/* INITIALIZING MAINFRAME BREACH... */\nimport os\nimport sys\n\ndef bypass_security():\n    print("Accessing Encrypted Layers...")\n    layers = ["Firewall", "Kernel", "Database"]\n    for layer in layers:\n        print(f"Bypassing {layer}...")\n    return "SYSTEM COMPROMISED"\n\nbypass_security()`;

function toggleChallenge() {
    isChallengeMode = !isChallengeMode;
    resetGame();
    alert(isChallengeMode ? "CHALLENGE MODE: ON (30s limit)" : "CHALLENGE MODE: OFF");
}

function startTimer() {
    timeLeft = 30;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `TIME REMAINING: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("SYSTEM LOCKED: CONNECTION LOST");
            resetGame();
        }
    }, 1000);
}

input.addEventListener('input', () => {
    if (isChallengeMode && index === 0 && !timerInterval) startTimer();

    if (index < sourceCode.length) {
        let chunk = sourceCode.slice(index, index + 3);
        output.innerText += chunk;
        index += 3;
        progressSpan.innerText = Math.min(Math.floor((index / sourceCode.length) * 100), 100);
        window.scrollTo(0, document.body.scrollHeight);
    } else {
        clearInterval(timerInterval);
        output.innerHTML += "<br><span style='color:white'>[SUCCESS: DATA EXTRACTED]</span>";
    }
    input.value = "";
});

function resetGame() {
    index = 0;
    output.innerText = "";
    clearInterval(timerInterval);
    timerInterval = null;
    timerDisplay.innerText = "";
    progressSpan.innerText = "0";
}