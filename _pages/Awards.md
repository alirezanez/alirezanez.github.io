---
layout: page
permalink: /Awards/
title: Awards
description: Academic excellence, research recognition, and professional achievements
nav: true
nav_order: 4
---

My awards and recognition across academic, research, and professional domains.

<div class="container-fluid">
  <div class="row">
    {% assign sorted_awards = site.awards | sort: "importance" %}
    {% for award in sorted_awards %}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100">
          {% if award.img %}
            <img class="card-img-top" src="{{ award.img | prepend: site.baseurl }}" alt="{{ award.title }}">
          {% endif %}
          <div class="card-body">
            <h5 class="card-title">
              <a href="{{ award.url }}">{{ award.title }}</a>
            </h5>
            <p class="card-text">{{ award.description }}</p>
          </div>
          <div class="card-footer bg-light">
            <a href="{{ award.url }}" class="btn btn-sm btn-primary" role="button">View Details</a>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>