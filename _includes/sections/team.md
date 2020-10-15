## Team

Wir sind Test-Profis aus Leidenschaft mit einer fast 10-jährigen Berufs­erfahrung.

Dabei profitieren unsere Kunden von einer breiten Wissenbasis und 
unter­schiedlichen Spezialisierungen in unserem Team.

{% assign colleagues = site.colleagues | sort: 'name' %}
{% for colleague in colleagues %}
  <div class="colleague">
    <h3 class="name">{{ colleague.name }} *</h3> 
    <span class="title">* {{colleague.title}}</span>
    {{ colleague.content | markdownify }}
  </div>
{% endfor %}
