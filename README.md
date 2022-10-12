# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot1.jpg)
![](./screenshot2.jpg)
![](./screenshot3.jpg)
![](./screenshot4.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I started to get a better understanding of flexbox and when and why it works or not. 

I learned I need a lot more practise and learning with JS. 

I played around with some border shading. 

This was the first JS code I wrote, I used the console to check working out as it went along. The other function I found a lot more tricky to deal with and get working but this below was the first piece which reinforced that I did actually know a little JS and it worked.   

```js
submit.addEventListener('click', displayCardSubmitted);

function displayCardSubmitted() {
    card_rating.classList.add("hide");
    card_submitted.classList.remove("hide");
    // console.log("clicked")
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Learning/practise, learning and more learning and more practise.

### Useful resources

- [Example resource 1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) - The console.log was great for showing where there was an issue in the code and had the link direct to MDN to tell me I had forgotten a ) or a ; and on what line the issue was.
- [Example resource 2](https://getcssscan.com/css-box-shadow-examples) - Some nice examples to play around with the border shading.

## Author

- Frontend Mentor - [@iklmonkey](https://www.frontendmentor.io/profile/iklmonkey)

