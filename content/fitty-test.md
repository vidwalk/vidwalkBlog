Title: Fitted with Fitty
Date: 2020-08-26
Slug: fitty-text
Summary: Fit your text to its parent container with Fitty.
tldr: Fitty makes your headers and text fit their containers. It is a small library with a small impact on speed. It can be used as easy as having one element with "id="my-element"" and writing in your .js file "fitty('#my-element');"

Fitty is a small-sized javascript script that scales text so it fits to its parent container. There are no dependencies and it is straightforward to use. A very quick example given by the creator is:

```html
<div id="my-element">Hello World</div>

<script src="fitty.min.js"></script>
<script>
fitty('#my-element');
</script>
```

And it works, just like that. I created a bigger example for this:

![Fitty at work](https://media.giphy.com/media/LpdKVavZ3808Yy64je/giphy.gif) 

The html for this is:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
        <div class="container">
            <section class="panel one">
                <div class="text-fit">
                    <h1 >One</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium.</h1>
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis officiis sit
                        quidem culpa ea aperiam optio cum aut, sed enim totam. Hic ratione fugit ab animi amet minus
                        cum!</h1>
                </div>
            </section>
            <section class="panel two">
                <div class="text-fit">
                    <h1 >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos explicabo adipisci quo laudantium minima dolorum cum veritatis inventore, molestias temporibus doloremque harum odit ducimus? Iure distinctio explicabo temporibus illum pariatur adipisci similique. Alias, numquam inventore illo deserunt excepturi aperiam corrupti fuga exercitationem soluta quis expedita.</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi totam harum, suscipit, numquam doloribus consequuntur minus illo quibusdam ex magni eveniet ullam aspernatur nesciunt deserunt officiis aliquid porro. Soluta, obcaecati. Laboriosam, alias nam accusamus non magni iure facere laborum cumque. Fugit voluptatibus ex odio sit.</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quis sunt alias quam neque placeat impedit magni odit, eaque saepe, amet laboriosam reiciendis eius voluptas dolor in expedita. Eveniet veniam, earum nostrum qui atque obcaecati culpa eos sint ratione sequi enim sit est eligendi consectetur?</h3>
                </div>
            </section>
            <section class="panel three">
                <div class="text-fit">
                    <h1>One</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </section>
            
        </div>
    <script src="/js/fitty.min.js"></script>
    <script src="/js/main.js"></script>
</body>

</html>
```

With the following css:
```css
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Quicksand", Helvetica, Arial, sans-serif;
}

.panel {
  height: 100vh;
  color: black;
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

.two {
  background-color: #4545d3;
  color: white;
}

.text-fit {
  padding: 12em;
  display: inline-block;
  white-space: nowrap;
}
```

Nothing too special. Now for the javascript, it can't get simpler than this:

```javascript
fitty('.text-fit')
```

To this you can add multiple options depending on your use case. For example, if you don't want your text to ever be smaller or bigger than a certain size, you can set limits to it(which are translated in pixels):

```javascript
fitty('#my-element', {
  minSize: 12,
  maxSize: 48
});
```

If you want to keep track of what the code is doing to the text, you can use:

```javascript
var fitted = fitty('.text-fit');

//get one of the elements
var elem = fitted[0].element;

//add a listener to the selected element
elem.addEventListener('fit', function(e) {

  // log the detail property to the console
  console.log(e.detail);

});
```

Even though it is a small library, it has quite a few options to make sure that it works for you. The link for the repository is [Fitty Main Repo](https://github.com/rikschennink/fitty). I recommend taking a look if your use case is more complex that what I've shown here.