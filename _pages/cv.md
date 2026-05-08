---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
  .cv-actions {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    align-items: center;
    margin: 0.5rem 0 1.25rem;
  }
  .cv-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #2f7d95;
    color: #fff !important;
    border-radius: 4px;
    text-decoration: none !important;
    font-weight: 600;
    transition: background 0.2s ease;
  }
  .cv-btn:hover { background: #255e70; }
  .cv-btn.secondary {
    background: transparent;
    color: #2f7d95 !important;
    border: 1px solid #2f7d95;
  }
  .cv-btn.secondary:hover { background: #2f7d95; color: #fff !important; }

  .cv-viewer {
    width: 100%;
    height: 85vh;
    min-height: 600px;
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    background: #fafbfc;
  }

  /* 移动端降级：隐藏 iframe，显示占位卡片 */
  .cv-mobile-fallback { display: none; }
  @media (max-width: 768px) {
    .cv-viewer { display: none; }
    .cv-mobile-fallback {
      display: block;
      padding: 2rem 1rem;
      text-align: center;
      border: 1px dashed #bbb;
      border-radius: 6px;
      background: #fafbfc;
    }
  }
</style>

<div class="cv-actions">
  <a class="cv-btn" href="{{ base_path }}/files/cv.pdf" download>📥 Download PDF</a>
  <a class="cv-btn secondary" href="{{ base_path }}/files/cv.pdf" target="_blank" rel="noopener">Open in new tab</a>
</div>

<iframe class="cv-viewer" src="{{ base_path }}/files/cv.pdf#view=FitH" title="CV"></iframe>

<div class="cv-mobile-fallback">
  <p>📄 PDF preview is not available on mobile browsers.</p>
  <p><a class="cv-btn" href="{{ base_path }}/files/cv.pdf" target="_blank" rel="noopener">View / Download CV</a></p>
</div>
