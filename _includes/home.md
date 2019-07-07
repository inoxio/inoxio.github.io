<section class="title">
  <div class="text">
    Willkommen bei inoxio
    <h1>Softwarequalität von Anfang bis Ende</h1>
    Hohe Softwarequalität nur durch Tests sicherstellen zu wollen, ist wie ...
    <div id="claims">
      {% assign claims = site.claims %}
      {% for claim in claims %}
        <div class="claim">
          {{ claim.content | markdownify }}
        </div>
      {% endfor %}
    </div>
  </div>
  
  <div class="image">
    <img src="/assets/placeholder.png" />
  </div>
</section>
