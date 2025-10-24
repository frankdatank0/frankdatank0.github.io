// assets/js/terminal-intro.js
(function () {
  const KEY = "introSeen_v1";
  if (localStorage.getItem(KEY)) return;

  // lock background styling via CSS selector html.intro-active …
  document.documentElement.classList.add("intro-active");

  // Build overlay
  const overlay = document.createElement("div");
  overlay.id = "intro-terminal";
  overlay.innerHTML = `
    <div class="term">
      <div class="bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
      <pre class="screen" aria-live="polite"></pre>
      <div class="prompt">
        <span class="ps1">$</span>
        <input id="intro-cmd" type="text" autofocus spellcheck="false" autocomplete="off" placeholder="type ./run">
      </div>
      <div class="hint" id="intro-hint"></div>
    </div>`;
  document.addEventListener("DOMContentLoaded", () => document.body.appendChild(overlay));

  // Typewriter
  const message = 'hey thanks for stopping by! type "./run" to get started\n';
  function type(el, text, i = 0, speed = 22, cb) {
    if (i >= text.length) return cb && cb();
    el.textContent += text[i];
    setTimeout(() => type(el, text, i + 1, speed, cb), speed);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector("#intro-terminal .screen");
    const input  = document.getElementById("intro-cmd");
    type(screen, message, 0, 22, () => input && input.focus());

    input.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const val  = input.value.trim();
      const hint = document.getElementById("intro-hint");

      if (val === "./run") {
        hint.textContent = "starting…";
        localStorage.setItem(KEY, "1");
        overlay.classList.add("closing");
        setTimeout(() => {
          document.documentElement.classList.remove("intro-active");
          window.location.href = "/"; // change to "/blog/" if you want
        }, 350);
      } else {
        hint.textContent = `command not found: ${val}`;
        hint.classList.add("error");
      }
    });
  });
})();

