Title: Using GSAP In Your Projects(Part 1)
Date: 2020-08-19
Slug: gsap-pages
Summary: Animate your pages quickly and without hassle with GSAP.
tldr: There are snippets of code in this article than when applied on the classes in your HTML will make the pages perform the animations for you. There are 2 ways of using gsap. Writing each animation separately or linking them by a timeline. Linking them by a timeline gives control over the sequence and timings in the animations.

GSAP is an animation javascript library. It is flexible and powerful. I haven't explored its full capabilities yet. As you could see when you opened this article, it has an animation that brings the text to its position. That was done with GSAP.

I will cover more examples, but for now I'm going to show you what I did to achieve this effect. In GSAP there are two main ways to do your animations: create them separately or use the timeline. Creating them separately makes them all go at the same time. The timeline is great for control.

For this webpage, I did something very simple. I created the timeline, I selected the class of the items I wanted to animate and then included the parameters for the animation. The code for that is here:

```javascript
var tl = gsap.timeline({defaults: {duration: 1 }});

tl.from(".post",{x:"-=50", stagger:.6,opacity:0})
  .from(".sidebar-sticky",{y:-50,stagger:.6,opacity:0},'-=2');
```

When creating the timeline, I set the default duration of the animation to 1. The next step was to select the class for my posts and make them move vertically from x:50, meaning from right to left. Adding a stagger to a multiple posts offsets the starting time of each target's animation. If I have multiple posts, it will wait for the others. I then add the class for the items in the sidebar with a pretty similar animation, but it goes from y:-50, meaning from top to bottom. '-=2' tells the animation to start 2 seconds earlier than when the last one finishes. I wanted to have no animation when I opened the post. This was enough to make it happen fast enough, such that it is not visible. Maybe there are better ways to do it.

This is the breakdown of the animations on this website at the current moment. I will do more in the future.