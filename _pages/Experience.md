---
layout: page
permalink: /experience/
title: Experience
description: Professional work experience and volunteer contributions
nav: true
nav_order: 5
---

My professional experience and volunteer work across academia, research, and industry.

## Work Experience

<div class="container-fluid">
  <div class="row">
    {% assign work_experiences = site.experiences | where: "category", "Work" | sort: "importance" %}
    {% for exp in work_experiences %}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              <a href="{{ exp.url }}">{{ exp.title }}</a>
            </h5>
            <p class="card-text">{{ exp.description }}</p>
          </div>
          <div class="card-footer bg-light">
            <a href="{{ exp.url }}" class="btn btn-sm btn-primary" role="button">View Details</a>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

---

## Volunteer Work

<div class="container-fluid">
  <div class="row">
    {% assign volunteer_experiences = site.experiences | where: "category", "Volunteer" | sort: "importance" %}
    {% for exp in volunteer_experiences %}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              <a href="{{ exp.url }}">{{ exp.title }}</a>
            </h5>
            <p class="card-text">{{ exp.description }}</p>
          </div>
          <div class="card-footer bg-light">
            <a href="{{ exp.url }}" class="btn btn-sm btn-primary" role="button">View Details</a>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>