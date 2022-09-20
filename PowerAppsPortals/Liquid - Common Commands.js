retrieve an artist record and store the record in a variable called artist
{% assign artist = entities['musdyn_artist'][request.params.id] %}
{{ artist.musdyn_name }}
 
 Outputting Choice fields/optionsets
{{ artist.statuscode.value }}
{{ artist.statuscode.label }}
 
Outputting Lookup fields
{{ artist.createdby.id }}
{{ artist.createdby.name }}
 
Outputting Number fields
{{ artist.musdyn_revenue | round: 2 }}
 
Outputting Date fields
{{ artist.musdyn_firstalbumreleasedate | date: 'MMMM dd, yyyy' }}
 
Error Handling:

{% if request.params.id %} 
  {% assign artist = entities['musdyn_artist'][request.params.id] %} 
  {{ artist.musdyn_name }} 
{% endif %} We could take that further with an else clause e.g. {% if request.params.id %} {% assign artist = entities['musdyn_artist'][request.params.id] %} {{ artist.musdyn_name }} {% else %} Sorry, I wasn't sure which artist you were looking for - that or there's been a glitch in the matrix... {% endif %}
