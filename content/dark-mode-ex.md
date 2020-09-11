Title: Dark Mode Example
Date: 2020-09-07
Slug: dark-mode-ex
Summary: Having dark mode on your website
tldr: The links and the plugin presented in the article will enable you to have dark mode on your page. The css bit gives you more control, but it is best kept for prototyping. The plugin might not always work, so again, think well before using it.

The source of inspiration for this article is the fact that many of the current apps and websites have an option for dark mode. A lot of people end up staying late on their phones or personal computers. The white light is strong and makes our eyes feel strained. One solution that was popularized was dark mode. 

In this article, [Dark mode with one line](https://dev.to/ekaterina_vu/dark-mode-with-one-line-of-code-4lkm), there is presented an easy way to add dark mode to your website. It is not ideal for production in most cases, but it can be great for prototyping, to know faster which colors should you have for your page. 

In this video, [Full Dark Mode with only 1 CSS PROPERTY?!](https://youtu.be/qimopjP6YoM), DesignCourse presents how to do exactly what is presented in the article and more! Watch him if you would like to try out the css method.

If you can't be bothered and want a quick solution, these is a very simple javascript library that can be used with simple websites. The only limitation is that you have to have to build a site with the idea of having a dark mode from the start. The other option is to adapt your project so the library works easily.

[DarkMode.js](https://darkmodejs.learn.uno/) is a lightweight plugin that does exactly what it says. The only thing you need is the following code in your script file:

```javascript
function addDarkmodeWidget() {
    new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);
```

And in your html file:

```html
<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></script>
```

You will have a nice widget on your page that will work fast. Off course it has options to customize the widget and the impact it has on your website. The options are:

```javascript
const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
```

While the style can be over-written by doing this:

```css
.darkmode--activated p, .darkmode--activated li {
  color: #000;
}

.button {
  isolation: isolate;
}

.darkmode--activated .logo {
  mix-blend-mode: difference;
}
```

The only caveat is that it will not work on internet explorer and the old edge. It will work on the new Edge as it is based on Chromium. Again, keep in mind that if you already have a finished product, it might take some customization for the plugin to work as you wish.