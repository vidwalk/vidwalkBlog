Title: Using GSAP In Your Projects(Part 2)
Date: 2020-08-23
Slug: gsap-pages-part2
Summary: Horizontal Scrolling with ScrollTrigger
tldr: The code snippets can be used to create a page with horizontal scrolling and animations for great story-telling. The first gif is an example of that.

Everyone loves a good story. A good way to tell one is with a horizontal scrolling website. It can be quite complicated to build one, but with ScrollTrigger life's easier. I will show you how I ended up with this:

![Horizontal Scrolling](https://media.giphy.com/media/iD6ku6jRon4lPridzG/giphy.gif)

Inside the index.html I have:

```HTML
<div class="pin-spacer">
        <div class="container">
            <div class="description panel">
                <div>
                    <h1>Enter The Mind of The Virtuoso</h1>
                </div>
            </div>
            <section class="panel one">
                <h1 class="gun">One</h1>
            </section>
            <section class="panel two">
                <h1 class="gun">Two</h1>
            </section>
            <section class="panel three">
                <h1 class="gun">Three</h1>
            </section>
            <section class="panel four">
                <h1 class="gun">Four</h1>
            </section>
            <section class="panel voila">
                <h1 class="gun">Art is worth the pain</h1>
            </section>
        </div>
    </div>
```

We don't need anything fancy for this in terms of html. The secret is in the JS. For the barebones css, you need:

```css
.container {
  width: 600%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
}

.panel {
  -o-object-fit: cover;
     object-fit: cover;
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: left;
  -ms-flex-pack: left;
      justify-content: left;
  -webkit-box-align: left;
  -ms-flex-align: center;
      align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: left;
  color: white;
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
}

.panel h1 {
  font-size: 1.8em;
  color: black;
  padding-left: 2.5em;
}



html,
body {
  margin: 0;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  font-family: "Quicksand", Helvetica, Arial, sans-serif;
}

body {
  font: "Quicksand";
  overflow-x: hidden;
  overflow-y: scroll;
}

```

Other than that, you can add color to the panels by using background-color. Don't forget to link the scripts at the bottom of the body from [GreenSock ScrollTrigger](https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger#CDN). Now we have our barebones structure for the page. 

The first step is to register the plugin we are going to use. We can do that with:

```javascript
gsap.registerPlugin(ScrollTrigger);
```

To animate our panels, we have to get them. GSAP lets you create arrays out of the objects you want to work with. To get our panels in an array we use:

```javascript
let sections = gsap.utils.toArray(".panel");
```

Now comes the most difficult bit to understand. We are going to create an animation from a panel to another. It streches horizontally from the start of the first panel to the start of the last one without any easing. The container, that has the panels, is the trigger for the animation. The contents are static(won't move) and the animation depends on how much we've scrolled. The only thing that is animated is our view. The snap is then based on the number of sections we have in our panel. To make the animation smooth, we move it depending on the width of the container.

```javascript
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth
    }
});
```

I have added some text in there with the class gun. In a website with horizontal scrolling, there will be some animated texts or objects. We have the text animated with the following code:

```javascript
gsap.utils.toArray('.gun').forEach((el, i) => {
    gsap.from(el, {
        x: "100",
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: "el",
            start: (i + 1) * window.innerWidth,//get innerwidth of the section to start the animation at the right time
        }
    });
});
```

We form an array of all the items with class gun and for each object we set an animation that moves the item from right to left. The trigger will be the actual element. The thing that is special about this is that it uses the width of the viewport to set the animation. The animation will start when you reach the point of the panel specific for that animation. I didn't find any solutions for setting animations when horizontal scrolling is used with GSAP. This is how I ended up with my own solution.