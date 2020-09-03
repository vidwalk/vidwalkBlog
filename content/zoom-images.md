Title: Zoom on Images Medium-Style
Date: 2020-08-30
Slug: zoom-images-js
Summary: Zoom on your images with a lightweight and fast library
tldr: Using the library you can zoom on desktop in the same way you do on Medium. A link at the end of the article will get you to a page where you can learn to use this library.

Sometimes you would like to see some details without having to download the file and do the manual work. Here comes [Medium Zoom](https://medium-zoom.francoischalifour.com/) to the rescue.

The first time I tried to find a good solution to this, I found some libraries that were clunky and had quite the work to be done. With this library, you can simply add whatever attribute you would like to your images and then call a function containing that attribute.

A very simple example is that you have a picture that you would like your users to zoom in. In my case it is a design I've been working on with Figma. Put the image in your html code and then add an attribute. I used zoom as my attribute.

```html
<img alt="Zoomed in Image of Figure" zoom src="/images/Frame1.png">
```
At the bottom of your body, put the following:

```html
<script src="https://cdn.jsdelivr.net/npm/medium-zoom/dist/medium-zoom.min.js"></script>
```

Now you don't have to worry about storage or speed. The cdn services are fast. This means it will also work well with your page's SEO.

For the javascript to enable the functionality, write the following code:

```javascript
  //Zoom on Images
  mediumZoom('[zoom]');
```

Now lets show you an example on this page:

<img  alt="Zoomed in Image of Figure" zoom src="https://vidwalk.github.io/vidwalkBlog/images/Frame1.png">

I used the same html code in this page with a different path to make it work. This is a nice feature for any article and it works without any frame drops. Other than this, it doesn't require any special css or tricks in the background. 

To learn more, go to [Medium Zoom Usage](https://github.com/francoischalifour/medium-zoom#usage).