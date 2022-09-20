https://learn.microsoft.com/en-us/power-apps/maker/portals/liquid/portals-entity-tags
https://learn.microsoft.com/en-us/power-apps/maker/portals/liquid/liquid-objects

retrieve an artist record and store the record in a variable called artist
{% assign artist = entities['musdyn_artist'][request.params.id] %}
{% assign incident = entities.incident['ef9fa2af-dedf-ec11-a81b-002248154671'] %}
{{ artist.musdyn_name }}
 
 Get the first item returned from the fetchxml
{% assign itemDatasource = inverterItemStatus.results.entities[0].vel_datasource.label %}
 
 Outputting Choice fields/optionsets
{{ artist.statuscode.value }}
{{ artist.statuscode.label }}
 
Outputting Lookup fields
{{ artist.createdby.id }}
{{ artist.createdby.name }}
 
Outputting Number fields
{{ artist.musdyn_revenue | round: 2 }}
{% assign price_split = page.products[0].price | round: 2 | split: "." %}
 
Outputting Date fields
{{ artist.musdyn_firstalbumreleasedate | date: 'MMMM dd, yyyy' }}
 
Error Handling:
{% if request.params.id %}
 {% assign artist = entities['musdyn_artist'][request.params.id] %}
 {{ artist.musdyn_name }}
{% else %}
 Sorry, I wasn't sure which artist you were looking for - that or there's been a glitch in the matrix...
{% endif %}

Logged in users Account ID: 
{{ user.parentcustomerid.id }}
Logged in users Account Name: 
{{ user.parentcustomerid.Name }}
 
Site Markers
{% assign my_sitemarker = sitemarkers["My Site Marker"] %}
{% if my_sitemarker %} 
 <a href={{ my_sitemarker.url }}>{{ my_sitemarker.adx_name }}</a>
{% endif %}

Site Snippets
{{ snippets["knowledge/browserKb"] | default: resx['Browse_The_KB'] | escape }}
{% editable snippets "GetHelp/Heading" default: resx['Get_Help_DefaultText'] %}
 
 {{ page[title] }}
 <h1>{{ page.title | escape }}</h1>
 {% for crumb in page.breadcrumbs %}
  <li><a href={{ crumb.url | escape }}>{{ crumb.title | escape }}</a></li>
 {% endfor %}
 
{% assign occurances = event.occurrences.from[today].to[advance_date] %}
{% assign occurances = event.occurrences.min[today].max[advance_date] %}

{% chart id:"EE3C733D-5693-DE11-97D4-00155DA3B01E" viewid:"00000000-0000-0000-00AA-000010001006" %}
{% powerbi authentication_type:"powerbiembedded" path:"https://app.powerbi.com/groups/00000000-0000-0000-0000-000000000000/reports/00000000-0000-0000-0000-000000000001/ReportSection01" %}
{% powerbi authentication_type:"AAD" path:"https://app.powerbi.com/groups/00000000-0000-0000-0000-000000000000/reports/00000000-0000-0000-0000-000000000001/ReportSection01" %}

{% entitylist name:My List %}
Loaded list {{ entitylist.adx_name }}.
{% endentitylist %}

{% entityview logical_name:'contact', name:"Active Contacts" %}
Loaded entity view with {{ entityview.total_records }} total records.
{% endentityview %}

{% entityview my_view = logical_name:'contact', name:"Active Contacts" %}
Loaded entity view with {{ my_view.total_records }} total records.
{% endentityview %}

{% entitylist id:page.adx_entitylist.id %}
{% entityview %}
Loaded default view of the list associated with the current page, with {{ entityview.total_records }} total records.
{% endentityview %}
{% endentitylist %}
