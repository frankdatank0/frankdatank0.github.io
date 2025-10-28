---
layout: single
title: "Projects"
permalink: /projects/
classes: wide
---

<div class="proj-term">
  <pre id="proj-screen" aria-live="polite"></pre>
  <div class="prompt"><span class="ps1">$</span> <span id="proj-cmd"></span><span class="typing-cursor">█</span></div>
</div>

<script>
(function(){
  const msg = "This page is under construction...\nCheck back soon.";
  const el = document.getElementById('proj-screen');
  let i = 0;
  (function type(){ 
    if(i < msg.length){ el.textContent += msg[i++]; setTimeout(type, 22); }
  })();
})();
</script>

