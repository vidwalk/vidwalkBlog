Title: Using Shoelace
Date: 2020-08-16
Slug: shoelace-example
Summary: Example of Using Shoelace Web Components
tldr: Shoelace has multiple framework-agnostic web components that are easily customizable and available at their website. There are snippets in the article that can be copy and pasted for an example. Use Shoelace or any other component provider to speed up your development.

Shoelace is a collection of web components that are easily customizable. Components are here to solve the problem of encapsulating styles and behaviors into reusable building blocks for the multitude of frameworks available at the moment.

Even to apparently simple things as tooltips and inputs, there are a lot of variables involved to make them top notch. Building quality items takes time, which also costs firms and people money. We all spent considerable amount of time on a project trying to make it look just right because it felt off. Shoelace comes to solve part of the problem by saving you the time, money and nerves with pre-built components that just work. 

Trying out Shoelace for yourself is **quick**. In a folder, create an index.html file with basic code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shoelace Test</title>
</head>
<body>
    
</body>
</html>
```

Go to [Shoelace Installation](https://shoelace.style/getting-started/installation) and copy the tags from their page. You can copy and paste the following code to be ready to go:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shoelace Test</title>

    <!--Shoelace CSS file-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.13/dist/shoelace/shoelace.css">
</head>
<body>
    


    <!--Shoelace JS File-->
    <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.13/dist/shoelace/shoelace.esm.js"></script>
</body>
</html>
```

Now you are ready to try out some of the components. 

Their main page hosts the code for all their components. Lets first try the icons. You can navigate to [Shoelace Icons](https://shoelace.style/components/icon) and look over the select a certain icon. I like mouse2. Setting the name attribute to the icon we want will give us the result. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shoelace Test</title>

    <!--Shoelace CSS file-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.13/dist/shoelace/shoelace.css">
</head>
<body>
    
    <sl-icon name="mouse2"></sl-icon>

    <!--Shoelace JS File-->
    <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.13/dist/shoelace/shoelace.esm.js"></script>
</body>
</html>
```

It's nice, but it could be better. Lets make the icon bigger. To do that, lets create a css file for our page. Create a main folder in which we will have our css file. Your index.html should look like this:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shoelace Test</title>

    <!--Shoelace CSS file-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.13/dist/shoelace/shoelace.css">
    <!--Main css file-->
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    
    <sl-icon name="mouse2"></sl-icon>

    <!--Shoelace JS File-->
    <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.13/dist/shoelace/shoelace.esm.js"></script>
</body>
</html>
```

In the main.css file, we will set the **font-size** to make the icon bigger. The following will do it for you:

```css
sl-icon{
    font-size: 8rem;
}
```

The component sl-icon also has a src attribute. It means we can use our own SVG files. Currently they only support SVG. I used Icon8 to get a SVG file of a bitcoin. It will still follow the CSS code we have. To add your own SVG, replace name with src in sl-icon.

```html
<sl-icon src="icons8-bitcoin.svg"></sl-icon>
```


There are multiple components to explore and use in your own page. I am using Details for the TL;DR. To change the color to match the whole website, you have to add in your css file attributes. The way I did it to get the color of the border:

```css
sl-details::part(base){
  border: 1px solid #ffd803;
  }
```

By using part, we can access specific parts of the component directly. The CSS parts are mentioned at the end of the description for each component.

I will be trying to integrate more components in the future to speed up my development process.