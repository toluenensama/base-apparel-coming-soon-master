# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](/Screenshots/Screenshot-desktop.png)
![](/Screenshots/Screenshot-mobile.png)





## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind Flexbox
- Tailwind CSS Grid
- Mobile-first workflow
- JavaScript



### What I learned

I used tailwind css grid and made it responsive, I used  `grid grid-col-1` for the mobile view and made it responsive at the lg break-point using `lg:grid lg:grid-cols-12 lg:justify-items-start` I made the columns 12 so that I can make the images to the ext width ratio 7:5 at the lg braekpoint. I also made the image have `row-span-2` so that it contains the whole screen height.

For image, I used the `<picture></picture>` tag to make the browser choose between the images depending on the screen width.
  

```html
      <picture class="lg:row-span-2 lg:col-span-5">
        <source media="(min-width: 1024px)" srcset="/images/hero-desktop.jpg">
        <img src="/images/hero-mobile.jpg" alt="" srcset="" class="w-full h-auto">
      </picture>

```
The form functionality was implemented using javascript. I disabled the browser's default validation using `event.preventDefault()` then made a validation function for emails which chacks the email format and validates it with conventional email formats. 


```js
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
```

The error text and icon were hardcoded to the html but the class `hidden` waas added which sets `display: none;` hence making it not visible. When there is an errror in the email submitted the `hidden` class is removed from both the error text and error icon, hence, making them visible.


### Continued development

I will like to focuse more on building bigger projects using flexbox and css grid. And in the nearest future i will like to build projects with express.js backend. 


### Useful resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs/) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.



## Author

- Github - [Toluenesama](https://github.com/toluenensama)

