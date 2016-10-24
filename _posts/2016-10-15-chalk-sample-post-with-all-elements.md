---
layout: post
title: "Chalk sample post with all elements"
description: "Have a look at all the predesigned elements you can use in Chalk."
og_image: "sample-image.jpg"
tags: [design, jekyll]
---

Chalk uses the default Jekyll syntax highlighting gem Rouge. It has a customized style for both light and dark theme.

{% highlight html %}
<!-- This is a comment -->

<div class="grid">
  <h1>This is a heading</h1>
  <p>
    This is a paragraph text.
  </p>
</div>
{% endhighlight %}

## Headings

Chalk includes 4 headings by default.

{% highlight markdown %}
## Heading first level
### Heading second level
#### Heading third level
{% endhighlight %}

## Lists

Unordered list example:

* Unordered list item 1
* Unordered list item 2
* Unordered list item 3
* Unordered list item 4

Order list example:

1. Order list item 1
2. Order list item 1
3. Order list item 1
4. Order list item 1

{% highlight markdown %}
* Unordered list item 1
* Unordered list item 2

1. Order list item 1
2. Order list item 1
{% endhighlight %}

## Quotes

A quote looks like this:

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna.

{% highlight markdown %}
> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna.
{% endhighlight %}

## Media

Images can include a retina version if you wish:

<img src="{% asset_path 'sample-image.jpg' %}" data-at2x="{% asset_path 'sample-image@2x.jpg' %}" alt="" />

{% highlight html %}
<img src="{% asset_path 'sample-image.jpg' %}" data-at2x="{% asset_path 'sample-image@2x.jpg' %}" alt="" />
{% endhighlight %}

Videos can be added and are responsive by default (4x3 by default, 16x9 with extra class).

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/0gqSRvx1Ioc" frameborder="0" allowfullscreen></iframe>
</div>

{% highlight html %}
<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/0gqSRvx1Ioc" frameborder="0" allowfullscreen></iframe>
</div>
{% endhighlight %}
