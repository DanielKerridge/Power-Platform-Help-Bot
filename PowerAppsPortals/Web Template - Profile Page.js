{% assign profile_nav = weblinks["User Account Menu"] %}

<div class="container">
    <div class="page-heading">
        {% block breadcrumbs %}
            {% include 'Breadcrumbs' %}
        {% endblock %}
        {% block title %}
            {% include 'Page Header' %}
        {% endblock %}
    </div>
</div>

<div class="container">
	<div class="row">
		<div class="col-md-4">

            <div class="well profile-info">    
                        <img src="/xrm-adx/images/contact_photo.png" alt="{{ user.fullname | escape }} graphic/image">
                        <div class="userFullName">{{ user.fullname | escape }}</div>
            </div>

            {% if profile_nav %}

                <div class="xrm-editable-adx_weblinkset xrm-entity">
                    <div class="weblinks-depth-3 weblinks list-group" data-weblinks-depth="3">
                        {% for link in profile_nav.weblinks %}
                            <a class="weblink list-group-item {% if page.url == link.url %}active{% endif %}" href="{{ link.url | escape }}" title="{{ link.tooltip | escape }}" aria-label="{{ link.tooltip | escape }}"><span class="weblink-name">{{ link.name | escape }}</span></a>
                        {% endfor %}
                    </div>
                </div>

            {% endif %}

		</div>
		<div class="col-md-8" id="mainContent">

			{% block main %}
                {% include 'Page Copy' %}
            {% endblock %}

		</div>
	</div>
</div>
