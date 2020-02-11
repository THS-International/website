# Documentation of components

#### Desktop Menu
Top navigation menu for desktop

`DesktopMenu.tsx`

---

#### Drawer Menu
Hamburger navigation menu for mobile and tablet

`drawer.tsx`

---

#### Event Calendar
Interactive calendar displaying events from google calender fetched from cms. Uses the plugin 'Full Calendar'.

`EventsCalendar.tsx`

---

#### FAQ
Consists of sub-components Faq box and Faq card. An FAQ box has a title and a category and displays one or more FAQ cards. Uses bootstrap. Imports FAQ information from CMS using gatsby.

`FaqBox.tsx`

`FaqCard.tsx`

---

#### Footer
Displays social media information. 

`Footer.tsx`

--- 

#### Hamburger Icon
Creates the hamburger icon that displays the drawer menu when clicked.

`hamburger.tsx`

`hamburger.css`

---

#### Header
Displays top menu and logo depending on screen size. Takes a prop to displays logo was white if true.

`header.tsx`

---

#### Image Loader
Fetches all images and displays the image passed in as a prop. Used when image to be loaded is unknown in buildtime. 

`ImageLoader.tsx`

---

#### Layout
Template for pages. Displays header and footer and displays children inbetween. Prop for header is false. 

`layout.tsx`

---

#### News
Consists of sub-components News Card and News Generator. News generator generates news cards using data from gatsby query.

`newscard.tsx`

`NewsGenerator.tsx`

---

#### Instagram Slider
Displays a carousel of instagram images fetched from instagram account specified in gatsyb-config.js

`pictureSlider.tsx`

---

#### News Pagination
Displays links for pagination. Designed to work with news page. 

`PaginationLinks.tsx`