# AB Atienza Construction Services - website

## Folder structure

```
index.html          Home
about.html          About
services.html       Services
projects.html       Projects
quote.html          Get a free quote
contact.html        Contact

portal/
  login.html        Login page (no accounts yet: Log in checks the fields and shows a message)

css/
  styles.css        Shared: size scale, top bar, nav bar, buttons, CTA, footer, form controls
  about.css, services.css, projects.css, quote.css, contact.css   One file per page
  login.css                                                       Login page
  mobile.css        Phone layout: one breakpoint (800px), loaded last on every page

js/
  main.js                                                         Home
  about.js, services.js, projects.js, quote.js, contact.js        One file per page
  login.js                                                        Login page (password eye button, Log in message)
  validate.js                                                     Shared form checks: name, phone, email. Used by contact, quote, login

images/
  builds/  clients/  collage/  recent-projects/  services/        Photos by topic
  ab-logo.svg, ab-logo-footer.svg, before.jpg, after.jpg, team.jpg, team2.jpg
```

Each page loads `css/styles.css` first, then its own CSS, then `css/mobile.css`, and its own JS at the bottom.

## Forms

The Get a Quote form and the Contact form check the fields and show a thank-you
message. They do not save or send anything.

## Still sample data

The four reviews on the home page (the names and photos are yours, the text is
sample text), the quote estimate rates at the top of `js/quote.js`, and the license
number in the footer. Replace them with real information before the final presentation.
