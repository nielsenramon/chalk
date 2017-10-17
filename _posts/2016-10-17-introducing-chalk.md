---
layout: post
title: "Introducing chalk"
description: "Chalk is a high quality, completely customizable, performant and 100% free blog template for Jekyll."
thumb_image: "documentation/sample-image.jpg"
tags: [web, jekyll]
---

{% include image.html path="documentation/chalk-intro.png" path-detail="documentation/chalk-intro@2x.png" alt="Chalk intro" %}

[Download Chalk here!](https://github.com/nielsenramon/chalk)

#### Features:
  - Dark and Light theme.
  - Filter on tags.
  - Customizable pagination.
  - Beautified link sharing in Facebook and other social media.
  - Automatic time to read post indicator.
  - Automatic RSS feed.
  - About page.
  - 404 page.
  - SEO optimized.
  - PageSpeed optimized.
  - Cross browser support (supports all modern browsers).
  - Media embed for videos.
  - Enlarge images on click.
  - Support for local fonts

#### Integrations
  - [Google Analytics](https://analytics.google.com/analytics/web/)
  - [Google Fonts](https://fonts.google.com/)
  - [Disqus](https://disqus.com/)
  - [Ionicons](http://ionicons.com/)
  - Social media links

#### Used tools
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [Circle CI](https://circleci.com/)
  - [Html-proofer](https://github.com/gjtorikian/html-proofer)
  - [Jekyll](https://jekyllrb.com/)
  - [Jekyll assets](https://github.com/jekyll/jekyll-assets)
  - [Jekyll Sitemap](https://github.com/jekyll/jekyll-sitemap)
  - [HTML5 Boilerplate](https://html5boilerplate.com/) (Influenced by)
  - [Kickster](https://kickster.nielsenramon.com/)
  - [Retina.js](https://imulus.github.io/retinajs/)
  - [STACSS](https://stacss.nielsenramon.com/)
  - [Yarn](https://yarnpkg.com)

{% include image.html path="documentation/enlarge.gif" path-detail="documentation/enlarge@2x.gif" alt="Enlarge image feature" %}

## Installation

If you haven't installed the following tools then go ahead and do so (make sure you have [Homebrew](https://brew.sh/) installed):

{% highlight bash %}
brew install ruby
brew install npm
{% endhighlight %}

On windows, install Ruby and Node with the installers found here:

  - [Ruby](https://rubyinstaller.org/)
  - [Node.js](https://nodejs.org/en/download/)

Next setup your environment:

{% highlight bash %}
bin/setup
{% endhighlight %}

## Development

Run Jekyll:

{% highlight bash %}
bundle exec jekyll serve
{% endhighlight %}

## Deploy to GitHub Pages

Before you deploy, commit your changes to any working branch except the `gh-pages` one then run the following command:

{% highlight bash %}
bin/deploy
{% endhighlight %}

**Important note**: Chalk does not support the standard way of Jekyll hosting on GitHub Pages. You need to deploy your working branch (can be any branch, for .github.io users: use another branch than master) with the `bin/deploy` script. This is because Chalk uses Jekyll plugins that aren't supported by GitHub pages. The `bin/deploy` script will automatically build the entire project, then push it to the `gh-pages` branch of your repo. The script creates that branch for you so no need to create it yourself.

You can find more info on how to use the `gh-pages` branch and a custom domain [here](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/).

[View this](https://github.com/nielsenramon/kickster#automated-deployment-with-circle-ci) for more info about automated deployment with Circle CI.

_If you have any questions about using or configuring Chalk please create an issue <a href="" title="here" rel="noreferrer noopener" target="_blank">here</a>!_
