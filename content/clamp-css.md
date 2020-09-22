Title: Fitted Text With CSS
Date: 2020-09-22
Slug: clamp-css
Summary: A great replacement for the JS libraries and tricks to get the text to fit on your page
tldr: The clamp() CSS function clamps a value between an upper and lower bound. clamp() enables selecting a middle value within a range of values between a defined minimum and maximum. It takes three parameters: a minimum value, a preferred value, and a maximum allowed value.

In a past article, I presented Fitty. It is a JS library that makes the text fit its container. A good alternative to that is the clamp function which can achieve a similar functionality. I recommend following this step by step to see the effects.

The first example will be built with the following:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/main.css">
    <title>Clamp Test</title>
</head>

<body>
    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quasi.</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure libero quas nobis eveniet amet exercitationem.
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita totam, saepe, nobis amet quae fugiat,
        beatae nihil error ducimus doloremque nemo accusamus corporis sint dolore! Officia quo dicta consectetur placeat
        at, necessitatibus facilis incidunt delectus, adipisci ut quis? Fugit!</p>
</body>

</html>
``` 

If you are to open this with the live server extension in VS Code, you are going to see a page with ugly text. A first step to fix this is adding some css to our body.

```css
body {
    margin: clamp(.5em, 4em, 8em);
}
```

A step towards a better looking website! If we can do this to the body, we can do the same to the other tags. Lets check what happens when just one of our headings uses clamp on font-size.

```css
h1 {
    font-size: clamp(24px, 2vw, 40px);
}
```

We can see how it scales based on our view without media-queries or anything special except clamp. Lets do the same to the others now.

```css
h2 {
    font-size: clamp(18px, 1.5vw, 30px);
}

p {
    font-size: clamp(12px, 1vw, 18px);
}
```

Now if you check your website, it is definetely a step in the right direction. If you play around with the size of the page you see that it behaves well. Clamp saves you from frustration and wasted time as it is only css. clamp() takes three parameters: a minimum value, a preferred value, and a maximum allowed value. For most of the view size, it will use the preffered value, but as soon as it reaches a bound, it stops. The preffered value must be a value between the minimum and maximum. I recommend going through [Clamp Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp).