# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/Screenshot%202026-06-04%20at%205.04.02 PM.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vercel](https://vercel.com/) - Hosting

### What I learned

What I learned
This project gave me more hands-on practice with TypeScript, specifically passing arrays as props and mapping through them to render components dynamically.

For example I defined an array of nav links and article cards, passed them down as props, and mapped through them to render each item:

```TypeScript
const articles = [
  {
    number: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    image: retroPCs,
  },
  {
    number: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    image: laptops,
  },
  {
    number: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    image: gaming,
  },
];

<section className="articles container">
  {articles.map((article) => (
  <ArticleCard key="{article.number}" {...article} />
  ))}
</section>
```

This helped me get more comfortable with typing props correctly in TypeScript and thinking about data flow from parent to child components.

### Continued development

I want to continue improving my TypeScript skills, specifically around more complex type definitions and generics. I also want to get more comfortable with CSS Grid for intricate multi-column layouts that need to adapt across several breakpoints.
Going forward I plan to start working with Next.js and backend development — building full stack projects that connect a frontend to a real API and database.

### Useful resources

- [W3Schools](https://www.w3schools.com/) - Handy reference for quickly looking up CSS and HTML syntax during the build.
- [Claude](https://claude.ai/) - Used for debugging layout issues and talking through component structure decisions.

### AI Collaboration

Tools used: Claude (Anthropic)

How I used it: I used Claude primarily for debugging and talking through CSS layout issues — specifically a breakpoint problem where the article card description was getting too long relative to the image at 1024px. I also used it to talk through component structure and BEM naming decisions.
What worked well: Having a second set of eyes on specific problems was useful. Explaining the issue out loud helped me understand it better, and the back and forth helped me arrive at solutions faster than Googling alone.

What didn't work as well: AI suggestions don't always account for your specific file structure or design constraints — I still had to test and adjust everything myself to get it working correctly.

## Author

- Website - [Hector Ramirez](https://www.hectorramirez.dev/)
- Frontend Mentor - [@hectorlil48](https://www.frontendmentor.io/profile/hectorlil48)
- LinkedIn - [@hector-ramirez-6a6509170](https://www.linkedin.com/in/hector-ramirez-6a6509170/)
