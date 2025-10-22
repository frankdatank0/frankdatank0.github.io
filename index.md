---
layout: splash
title: "Offensive Security"
header:
  overlay_color: "#000"
  overlay_filter: "0.35"
  overlay_image: /assets/images/mesh.jpg
  actions:
    - label: "Latest writeups"
      url: /writeups/
    - label: "Projects"
      url: /projects/
intro: 
  - excerpt: >
      Notes and tooling from real red team work. Web vulns, cloud misconfig, IPv6 recon, weird services.
feature_row:
  - image_path: /assets/images/term1.png
    alt: Recon
    title: Recon at scale
    excerpt: Masscan/Nmap pipelines, IPv6 heuristics, banner fuzzing.
    url: /writeups/
    btn_label: Read
  - image_path: /assets/images/web1.png
    alt: Web
    title: Web exploitation
    excerpt: Smuggling, desyncs, SSRF chains, auth bypass.
    url: /blog/
    btn_label: Posts
  - image_path: /assets/images/tools1.png
    alt: Tools
    title: Tools
    excerpt: Small sharp utilities for operators.
    url: /projects/
    btn_label: See tools
---
{% include feature_row id="intro" type="center" %}
{% include feature_row %}
