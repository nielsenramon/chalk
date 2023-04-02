---
layout: post
title: "Minimalistic dev setup"
description: "This article documents the process of setting up my simple and minimal dev environment on a new machine."
---
So, I just got a new corporate laptop and I'm setting it up to make it feels
like $HOME. Thought it'd be cool to write down the steps in case I need to do
it again later. This blog will serve as a reference for future setups.

- Brew

    The first step is definitely to install [homebrew](https://brew.sh/).

{% highlight bash %}
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
{% endhighlight %}

- iterm2

{% highlight bash %}
$ brew install --cask iterm2
{% endhighlight %}

- zsh

{% highlight bash %}
$ brew install zsh
{% endhighlight %}

- oh-my-zsh

{% highlight bash %}
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
{% endhighlight %}

- tmux

{% highlight bash %}
$ brew install tmux 
{% endhighlight %}

- Vimplug

    🌺 Minimalist Vim Plugin Manager: [Vimplug](https://github.com/junegunn/vim-plug). Please check out the repo
    to see how to add and install vim plugins.

{% highlight bash %}
$ curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
{% endhighlight %}

- Overwrite default vim and tmux config file with my configuration:
    
    One can check out my dotfile repo at [here](https://github.com/LxYuan0420/dotfiles).

{% highlight bash %}
$ wget https://raw.githubusercontent.com/LxYuan0420/dotfiles/main/.vimrc
$ wget https://raw.githubusercontent.com/LxYuan0420/dotfiles/main/.tmux.conf

$ mv .vimrc ~/.vimrc
$ mv .tmux.conf ~/.tmux.conf

$ vim ~/.vimrc
# use command `:PlugInstall` to install vim plugins
{% endhighlight %}

Personally, I like to move around between tmux panes with alt-hjkl (or
cmd+hjkl), similar to the vim binding. However, if you are using mac os, you
need do some extra steps to make that happen.

1. Hover to top left
2. Select key > key bindings > + 
3. Select `Send Hex Code` at action
4. Enter the following hotkeys and hex sequence one by one:

{% highlight html %}
# for Mac iterm2 Cmd-hjkl move tmux pane
# iterm2 > Preference > keys > +
#Mac hotkey      Hex sequence            Purpose
#Cmd-h           0x02 0x1B 0x5B 0x44     Move to pane at left
#Cmd-j           0x02 0x1B 0x5B 0x42     Move to pane below
#Cmd-k           0x02 0x1B 0x5B 0x41     Move to pane above
#Cmd-l           0x02 0x1B 0x5B 0x43     Move to pane at right
{% endhighlight %}

Image for reference:
{% include image.html path="documentation/send-hex-code.png" path-detail="documentation/send-hex-code.png" alt="Sample image for send hex code on mac" %}

