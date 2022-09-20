{% assign inverterGroupItemId = request.params['id'] %}

{% fetchxml shoppingCart %}
<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" returntotalrecordcount="true">
    <entity name="racs_shoppingcart">
        <attribute name="racs_shoppingcartid" />
        <attribute name="racs_name" />
        <attribute name="transactioncurrencyid" />
        <filter type="and">
            <condition attribute="modifiedon" operator="on-or-before" value='{{ now | date_add_days: 2 | date: "yyyy-MM-dd HH:mm:ss" }}' />
             <condition attribute="vel_scrapplication" operator="eq" value="{{inverterGroupItemId}}" />
        </filter>
        <link-entity name="transactioncurrency" from="transactioncurrencyid" to="transactioncurrencyid" link-type="outer" alias="tx">
            <attribute name="isocurrencycode" />
            <attribute name="transactioncurrencyid" />
        </link-entity>
        <link-entity name="racs_shoppingcartlineitem" from="racs_shoppingcartid" to="racs_shoppingcartid" link-type="outer" alias="ak">
            <attribute name="racs_shoppingcartlineitemid" />
        </link-entity>
    </entity>
</fetch>
{% endfetchxml %}
 
{% if shoppingCart.results.entities.size > 0 %}

{% endif %}

{{ my_query.xml | escape }}
{{ my_query.results.total_record_count }}
{{ my_query.results.more_records }}
{{ my_query.results.paging_cookie | escape }}
{% for result in my_query.results.entities %}
  {{ result.id | escape }}
{% endfor %}

var inverterItemStatus = "{{ itemStatus }}";

newArray =  [
    {% for item in feed.results.entities %}
      {
        "Contact_id": "{{ item.contactid }}",
        "Contact_Name": "{{ item.fullname }}",
        "Contact_Email": "{{ item.emailaddress1 }}",
        "Contact_First_Name": "{{ item.firstname }}",
		"RTW_id": "{{ item['returntoworklink'].cre08_returntowork_mqid.value }}",
		"RTW_FN": "{{ item['returntoworklink'].cre08_firstname }}",
		"RTW_CreatedOn": "{{ item['returntoworklink'].createdon }}",
       
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
  
  let tableString = "<tr>"
  for (let column in units[0]) {
    tableString += `<th scope="col">${column}</th>`
  }
  tableString += "</tr>"
  units.forEach(element => {
    tableString += '<tr scope="row">'
    for (let prop in element) {
      tableString += `<td>${element[prop]}</td>`
    }
    tableString += "</tr>"
  });
  document.querySelector('#tb').innerHTML = tableString;
