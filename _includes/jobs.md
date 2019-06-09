## Jobs

Wir suchen Verstärkung.

Werde Teil unseres Teams und sorge gemeinsam mit uns für mehr Software­qualität.

### Das sind Wir

Wir sind Test-Profis mit einer über 10-jährigen Berufs­erfahrung, die im Februar 
2007 ihre eigene Firma gründeten. Als externer Dienstleister unterstützen wir 
unsere Kunden meist direkt vor Ort in den Testteams.

Besonderes Know-How haben wir uns über die Jahre in den Bereichen Agiles 
Test­management, Test­­automatisierung sowie bei Last-, Performance- und 
Stress­tests angeeignet.

### Unterwegs in Deutschland
Als Berater für Softwarequalität sind wir für unsere Kunden im gesamten 
Bundesgebiet im Einsatz.

Dies erfordert von uns - und später auch von dir - Aufgeschlossenheit, Mobilität 
und Flexibilität.

Die positive Kehrseite besteht darin, stets mit ebenso motivierten Experten 
zusammen zu arbeiten. Dies führt zu einem beiderseitigen Wissensaustausch von 
dem du genauso profitierst wie das Projekt, für welches du arbeitest.

### Das bieten Wir

In unserem Unternehmen arbeiten alle gemeinsam auf Augenhöhe. Du wirst in unser 
Team integriert und wir profitieren gegenseitig von unserer Erfahrung.

Wir wissen was man braucht, um gute Arbeit leisten zu können: ein attraktives 
Gehalt und eine spannende Aufgabe. Zusätzlich bieten wir dir regelmäßige 
Weiterbildungen, moderne Technik und einen Firmenwagen.

Auch außerhalb der Firma kümmern wir uns um dich: Kindergartenzuschuss oder 
betriebliche Altersvorsorge machen diesen Job auch für deine Familie interessant.

### Das bietest Du

Du bist ein Problemlöser, gehst gern Dingen auf den Grund und hast einen 
ausgeprägten Sinn für Qualität.

Du weißt einerseits wie man Software testet, andererseits aber auch wie man 
Software entwickelt.

Du bist auf deinem Gebiet ein Experte.

Du bist jung oder jung geblieben.

{% assign jobs = site.jobs | sort: 'name' %}
{% for job in jobs %}
  <div class="job">
      <h3 class="name">Wir suchen: {{ job.name }}</h3> 
      {{ job.summary | markdownify }}
      <a href="{{ job.url }}">Mehr über diese Stelle erfahren ...</a>
   </div>
{% endfor %}
