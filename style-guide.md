# PING Style Guide

This designs were created to the following widths: 

- Mobile: 375px
- Desktop: 1440px

## Google Imports

```css
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;600;700&display=swap');
```

## Color

```css
--blue: hsl(223, 87%, 63%); 
--blue-hover: hsla(223, 87%, 63%, 0.2)
--pale-blue: hsl(223, 100%, 88%);
--gray: hsl(0, 0%, 59%); 
--very-dark-blue: hsl(209, 33%, 12%); 
--red: hsl(354, 100%, 67%);
--white: hsl(0, 0% 100%); 
```

## Icon Imports

```html
<!--https://ionicons.com/-->

<script defer type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script defer nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

<ion-icon name="logo-twitter" aria-hidden="true"></ion-icon>
<ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
<ion-icon name="logo-facebook" aria-hidden="true"></ion-icon>
```

## Shadows

```css
--button-shadow: 0px 5px 10px 2px hsla(223, 87%, 63%, 0.23);
```

## Gap

```css
--gap-0: 0px; 
--gap-1: 1px; 
--gap-1_25: 0.125rem; 
--gap-2_5: 0.25rem; 
--gap-3_75: 0.375rem; 
--gap-5: 0.5rem; 
--gap-6_25: 0.625rem; 
--gap-7_5: 0.75rem; 
--gap-8_75: 0.875rem; 
--gap-10: 1rem; 
--gap-12_5: 1.25rem; 
--gap-15: 1.5rem; 
--gap-17_5: 1.75rem; 
--gap-20: 2rem; 
--gap-22_5: 2.25rem; 
--gap-27_5: 2.75rem; 
--gap-30: 3rem;
--gap-35: 3.5rem; 
--gap-40: 4rem; 
--gap-50: 5rem; 
--gap-60: 6rem; 
--gap-70: 7rem; 
--gap-80: 8rem; 
--gap-90: 9rem; 
--gap-100: 10rem; 
--gap-110: 11rem; 
--gap-120: 12rem; 
--gap-130: 13rem; 
--gap-140: 14rem; 
--gap-150: 15rem; 
--gap-160: 16rem; 
--gap-180: 18rem; 
--gap-200: 20rem; 
--gap-240: 24rem;
```

## Display

```css
--hidden: none; 
--block: block; 
--inline: inline; 
--inline-block: inline-block; 
--flex: flex;
--inline-flex: inline-flex; 
--grid: grid; 
--inline-grid: inline-grid;
```

## Radius

```css
--radius-1: 2px; 
--radius-2: 4px; 
--radius-3: 6px;
--radius-4: 8px; 
--radius-5: 12px; 
--radius-6: 16px; 
--radius-7: 20px; 
--radius-8: 24px; 
--radius-9: 26px; 
--radius-10: 28px; 
--radius-11: 30px; 
--radius-12: 32px; 
--radius-13: 34px; 
--radius-14: 36px; 
--radius-15: 38px; 
--radius-16: 40px;
```

## Screen Readers

```css
--sr-only-width: 1px; 
--sr-only-height: 1px; 
--sr-only-padding: 0px; 
--sr-only-margin: -1px; 
--sr-only-border-width: 0; 
--sr-only-left: -1000px; 
--sr-only-top: auto;
```

## Typography

```css
--ff-libre-franklin: 'Libre Franklin', sans-serif;
--fw-300: 300; 
--fw-600: 600; 
--fw-700: 700; 
--line-height-none: 1; 
--line-height-tight: 1.25; 
--line-height-snug: 1.375; 
--line-height-normal: 1.5; 
--line-height-relaxed: 1.625; 
--line-height-loose: 2; 
--letter-spacing-tighter: -0.05em; 
--letter-spacing-tight: -0.025em; 
--letter-spacing-normal: 0em; 
--letter-spacing-wide: 0.025em; 
--letter-spacing-wider: 0.05em; 
--letter-spacing-widest: 0.1em; 
--fs-1: clamp(0.63rem, calc(0.60rem + 0.17vw), 0.75rem);
--fs-2: clamp(0.70rem, calc(0.66rem + 0.31vw), 0.94rem);
--fs-3: clamp(0.79rem, calc(0.72rem + 0.50vw), 1.17rem);
--fs-4: clamp(0.89rem, calc(0.78rem + 0.76vw), 1.47rem);
--fs-5: clamp(1.00rem, calc(0.84rem + 1.10vw), 1.83rem);
--fs-6: clamp(1.13rem, calc(0.91rem + 1.54vw), 2.29rem);
--fs-7: clamp(1.27rem, calc(0.96rem + 2.11vw), 2.86rem);
```

## Space

```css
--space-1: clamp(0.19rem, calc(0.19rem + 0.00vw), 0.19rem);
--space-2: clamp(0.31rem, calc(0.30rem + 0.08vw), 0.38rem);
--space-3: clamp(0.50rem, calc(0.49rem + 0.08vw), 0.56rem);
--space-4: clamp(0.63rem, calc(0.60rem + 0.17vw), 0.75rem);
--space-5: clamp(0.94rem, calc(0.90rem + 0.25vw), 1.13rem);
--space-6: clamp(1.25rem, calc(1.20rem + 0.33vw), 1.50rem);
--space-7: clamp(1.88rem, calc(1.80rem + 0.50vw), 2.25rem);
--space-8: clamp(2.50rem, calc(2.40rem + 0.66vw), 3.00rem);
--space-9: clamp(3.75rem, calc(3.61rem + 0.99vw), 4.50rem);
--space-1-2: clamp(0.19rem, calc(0.15rem + 0.25vw), 0.38rem);
--space-2-3: clamp(0.31rem, calc(0.26rem + 0.33vw), 0.56rem);
--space-3-4: clamp(0.50rem, calc(0.45rem + 0.33vw), 0.75rem);
--space-4-5: clamp(0.63rem, calc(0.53rem + 0.66vw), 1.13rem);
--space-5-6: clamp(0.94rem, calc(0.83rem + 0.74vw), 1.50rem);
--space-6-7: clamp(1.25rem, calc(1.06rem + 1.32vw), 2.25rem);
--space-7-8: clamp(1.88rem, calc(1.66rem + 1.49vw), 3.00rem);
--space-8-9: clamp(2.50rem, calc(2.12rem + 2.64vw), 4.50rem);
--space-4-6: clamp(0.63rem, calc(0.46rem + 1.16vw), 1.50rem);

```