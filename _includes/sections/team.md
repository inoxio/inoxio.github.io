## Team

Wir sind Test-Profis aus Leidenschaft mit einer weit über 10-jährigen Berufserfahrung.

Unsere Kunden profitieren von einer breiten Wissenbasis und
unterschiedlichen Spezialisierungen in unserem Team.

{% assign colleagues = site.colleagues | sort: 'name' %}
{% for colleague in colleagues %}

  <div class="colleague">
    <h3 class="name">{{ colleague.name }} *</h3> 
    <span class="title">* {{colleague.title}}</span>
    <div class="content">
      <img src="{{ colleague.avatar | relative_url }}" />
      <div class="text">
        {{ colleague.content | markdownify }}
      </div>
    </div>
  </div>
{% endfor %}
