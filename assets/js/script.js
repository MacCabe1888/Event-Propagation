const [bubble, capture, stopBubble, stopCapture, once] = [
  document.querySelectorAll(".bubble"),
  document.querySelectorAll(".capture"),
  document.querySelectorAll(".bubble-stop"),
  document.querySelectorAll(".capture-stop"),
  document.querySelectorAll(".once")
];

const clicks = [0, 0, 0];

function info(e) {
  alert(`Event: ${e.type}\nTarget: ${[...e.target.classList][1]}\nThis: ${[...this.classList][1]}`);
  if (this.classList[0].includes("stop")) e.stopPropagation();
  if (this.classList[0] == "once") {
    const n = parseInt([...this.classList][1].substr(-1, 1));
    const i = n - 1;
    clicks[i]++;
    if (clicks[i] < n) this.addEventListener("click", info, { once: true });
    alert("Try clicking on me again!");
  }
}

bubble.forEach(div => div.addEventListener("click", info));
capture.forEach(div => div.addEventListener("click", info, { capture: true }));
stopBubble.forEach(div => div.addEventListener("click", info));
stopCapture.forEach(div => div.addEventListener("click", info, { capture: true }));
once.forEach(button => button.addEventListener("click", info, { once: true }));
