# Style Guide

## 1. Color System

### Backgrounds

- **Background / Primary** → `#F4F7F5`
  - Main canvas: carousel slides,bpage background
- **Background / Card** → `#FFFFFF`
  - Code Card, Callouts, elevated surfaces

### Text

- **Text / Primary** → `#1F2A26`
  - Headings, body text, code, CTA text
- **Text / Secondary** → `#6C7A73`
  - Labels (e.g. Problem / Fix), meta info, captions, supporting text

### Accent

- **Accent / Neon Mint** → `#3CFFD6`
  - Use sparingly for: CTA accent line, highlights, dividers, glow

### Borders

- **Border / Subtle** → `#E3E8E5`
  - 1px only; mostly for cards on a light background

------------------------------------------------------------------------

## 2. Typography System

### Fonts

- **Headings** — Space Grotesk
- **Body** — Inter
- **Code** — JetBrains Mono

### Headings (Space Grotesk)

- **H1 (Slide title):** 44px / 700 / line-height 120%
- **H2 (Section title):** 30px / 600 / line-height 130%
- **H3 (Callout):** 22px / 600 / line-height 140%

### Body (Inter)

- **Body Large:** 16px / 500 / line-height 150%
- **Body Regular:** 14px / 400 / line-height 150%
- **Caption:** 12px / 400 / line-height 140%

### Code (JetBrains Mono)

- **Code block:** 13px / 400 / line-height 150%
- **Inline code:** 12px / 400 / line-height 140%

------------------------------------------------------------------------

## Visual Style

### Core Look

-   light background (Primary `#F4F7F5`)
-   lots of white space
-   cards with subtle 1px borders
-   neon mint accents used sparingly
-   minimal icons

### Accent Treatment

-   thin strokes and accent lines
-   soft glow at low opacity (10–20%)
-   never overpower content

### Accent Symbols

✦ ♡ ★\
(use only one per design)

------------------------------------------------------------------------

## Website Style Rules

### Layout

-   light UI by default (Background Primary)
-   card-based sections (Background Card, Border Subtle)
-   generous spacing

### Buttons

- **Primary (CTA):** Neon Mint background, Text Primary, 1px border, 14px radius, 12px 20px padding
- **Outline:** Transparent background, border and hover use Accent

``` css
/* Primary */
background: #3CFFD6;
color: #1F2A26;
border: 1px solid #E3E8E5;
border-radius: 14px;
padding: 12px 20px;
```

### Hover Effects

-   subtle glow (accent)
-   soft lift
-   smooth transitions
