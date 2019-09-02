---
layout: default
title: "Tags"
description: "Tag cloud from all the posts"
permalink: /tags
sitemap: false
---

<div class="tags-page">
  <h1 class="tags-page-header">
    Tags
  </h1>

  {% assign my_tags = site.collections | where: "label", "my_tags" | first %}

  {% assign sorted_tags = site.tags | sort %}

  {% for tag in sorted_tags %}

    {% assign tag_slug = tag | first %}
    {% assign upcase_tag_slug = tag_slug | upcase %}
    {% assign no_of_posts = tag | last | size %}

      {% for my_tag in my_tags.docs %}
        {% if tag_slug == my_tag.slug %}
          {% assign tag_name = my_tag.name %}
        {% endif %}
      {% endfor %}
      {% assign upcase_tag_name = tag_name | upcase %}

    {% if upcase_tag_slug != "PROJECT" %}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a class="tag-cloud" href="{{ 'tag/' | relative_url }}{{ tag_slug }}" title="See all posts by {{ upcase_tag_name }} tag"
      style="font-size: {{ no_of_posts  |  times: 15 | plus: 120  }}%">
        <span>{{ upcase_tag_name }}<small>({{ no_of_posts }})</small></span>
      </a>
    {% endif %}

  {% endfor %}
</div>
