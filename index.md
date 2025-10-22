---
layout: splash
title: "Welcome to Fran's Page"
header:
  overlay_color: "#000"
  overlay_filter: "0.15"
  overlay_image: /assets/images/punk-banner.png
  actions:
    - label: "Checkout Blogs"
      url: /blog/
    - label: "More About Me"
      url: /about/

intro:
  - excerpt: >
      Notes and tooling from real red team work. Web vulns, silly misconfigs, recon, weird services.
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

