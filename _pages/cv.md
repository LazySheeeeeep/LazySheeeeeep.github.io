---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="cv-actions">
  <a class="cv-btn" href="{{ base_path }}/files/cv.pdf" download><i class="fas fa-download"></i> Download PDF</a>
  <a class="cv-btn cv-btn--secondary" href="{{ base_path }}/files/cv.pdf" target="_blank" rel="noopener"><i class="fas fa-up-right-from-square"></i> Open in new tab</a>
</div>

<div class="cv-frame">
  <iframe class="cv-viewer" src="{{ base_path }}/files/cv.pdf#toolbar=0&navpanes=0&view=FitH" title="CV of {{ site.author.name }}" loading="lazy"></iframe>
</div>

<div class="cv-mobile-fallback">
  <p><i class="fas fa-file-pdf"></i> PDF preview isn't available on mobile browsers.</p>
  <p><a class="cv-btn" href="{{ base_path }}/files/cv.pdf" target="_blank" rel="noopener"><i class="fas fa-up-right-from-square"></i> View / Download CV</a></p>
</div>
