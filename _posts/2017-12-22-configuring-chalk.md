---
layout: post
title: "How to configure Chalk"
description: "Learn more about the config file for Chalk and how to set it up properly."
tags: [web, jekyll]
---

The `_config.yml` file is the most important one. It contains the basic setup of your project.
Some parts are preconfigured and shouldn't be touched as the comments state.
Of course if you are familiar with Jekyll you can change whatever you want.

Note: You do not _have_ to change anything. Chalk works out of the box. I do recommend changing the `_config.yml` to suit your needs.

### Mandatory settings

{% highlight yml %}
# Mandatory settings

blog_theme: light # Or use dark
name: Chalk
paginate: 25
url: # add your site url (format: https://example.com)
{% endhighlight %}

* `blog_theme`: 2 options here, `light` or `dark`. Choose which design you prefer.
* `name`: Used as the page title and throughout your project as the default name.
* `paginate`: Define how much posts should be shown on the homepage for each page.
* `url`: Your production url (https://example.com).

### Optional settings

{% highlight yml %}
# Optional settings

about_enabled: false # Change to true if you wish to show an icon in the navigation that redirects to the about page
baseurl: # Set if blog doesn't sit at the root of the domain (format: /blog)
discus_identifier: # Add your Disqus identifier
ga_analytics: # Add your GA Tracking Id
local_fonts: false # Change to true if you wish to use local fonts
rss_enabled: true # Change to false if not
scrollappear_enabled: true # Change to false to disable
social:
  dribbble: # Add your Dribbble handle
  facebook: # Add your Facebook handle
  flickr: # Add your Flickr handle
  github: # Add your GitHub handle
  linkedin: # Add your LinkedIn handle
  twitter: # Add your Twitter handle
  email: # Add your Email address
  bitcoin: # Add your Bitcoin link or address
  ethereum: # Add your Ethereum link or address
  gitlab: # Add your GitLab handle
  youtube: # Add your Youtube handle
  twitch: # Add your Twitch handle
  discord: # Add you Discord server invitation ID
  tumblr: # Add your Tumblr handle
  bitbucket: # Add your Bitbucket handle
  docker: # Add your Docker Hub handle
  instagram: # Add your Instagram handle
  keybase: # Add your Keybase handle
  medium: # Add your Medium handle
  spotify: # Add your Spotify handle
  stackoverflow: # Add your Stack Overflow ID number
  steam: # Add your Steam handle
{% endhighlight %}

* `about_enabled`: If you wish to put the about page link in the top navigation in between the social icons set to true.
* `discus_identifier`: If you like to use Disqus for comments on each blog post, you can add the Disqus identifier here and it will popup automatically.
* `ga_analytics`: Add Google Analytics Tracking ID here, it uses the Google Tag Manager snippet.
* `local_fonts`: By default Chalk uses Google Fonts but if you wish to use local fonts this is the fallback.
* `rss_enabled`: When set to `true`, the rss icon in the top navigation will show up and people will be able to subscribe to your rss feed.
* `scrollappear_enabled`: If set to `true`, some elements appear with fade-in effect when visible for the first time, i.e., when scrolling down.
* `social`: Add you social links in here. When filled in they will show up in the navigation.

### Other settings

Other than the `_config.yml` you can change a lot more in the project.

#### Tags

To add tags you must add a file with the tag name in `_my_tags`.
In the file you add 2 variables: `slug` used to reference the tag and `name` which is displayed in the article header.

{% highlight yml %}
# _my_tags/design.md
---
slug: design
name: Design
---
{% endhighlight %}

#### SCSS

You can change colors, fonts, sizes in the `_assets/stylesheets/_variables.scss` file.
For each specific theme (light or dark) you can change the variables in `_assets/stylesheets/dark.scss` and `_assets/stylesheets/light.scss`.

{% highlight scss %}
// =============================================================================
// Variables
// =============================================================================

// Typography
// =============================================================================

$sans-serif: "Lato", Helvetica, Arial, sans-serif;
$serif: "Cormorant Garamond", Courier, serif;
$base-font-family: $sans-serif;
$base-font-weight: 400;
$base-font-weight-bold: 700;

// Colors
// =============================================================================

// Brand colors

$brand-success: #1fbf92;
$brand-danger: #e74b3c;
$brand-primary: #3449ed;
$brand-warning: #f1c90b;

// Sizes
// =============================================================================

// Grid

$columns: 12;
$max-width: 650px;
$gutter: 20px;
$one-column: 100% / $columns;
$negative-gutter: 0 - $gutter;

// Font sizes

$base-font-size: 16px;
$base-line-height: 1.8;

// Box sizes

$base-border-radius: 4px;

// Effects
// =============================================================================

$base-transition-speed: .2s;
{% endhighlight %}

#### Fonts

Chalk uses Google Fonts by default. You can change the font in `_assets/javascripts/webfonts.js` and in `404.html`.

{% highlight javascript %}
WebFont.load({
  google: {
    families: ['Cormorant Garamond:700', 'Lato:300,400,700']
  }
});
{% endhighlight %}

Don't forget that Chalk also supports local fonts if enabled in `config.yml`!

#### Footer

Changing the text in the footer is easy. It can be found in `_includes/footer.html`.

_If you have any questions about using or configuring Chalk please create an issue <a href="" title="here" rel="noreferrer noopener" target="_blank">here</a>!_
