const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "CSS_advanced");
const STYLES = path.join(ROOT, "styles");

function write(name, content) {
  fs.writeFileSync(path.join(STYLES, name), content, "utf8");
}

function normalizeBlock() {
  const normalizePath = "C:/Users/Elvis/Desktop/quickserve-rwanda-app/node_modules/@csstools/normalize.css/normalize.css";
  return fs.readFileSync(normalizePath, "utf8").trimEnd();
}

const base = [];
base.push(`html { scroll-behavior: smooth; }`);
base.push(`body { color: #161616; }`);
base.push(`a { color: #161616; }`);
base.push(`.visually-hidden { display: none; }`);
base.push(`.card-category { color: #D73953; }`);
base.push(`.section-tagline { color: #D73953; }`);
base.push(`:root {
  --color-primary: #d73953;
  --color-black: #090909;
  --color-white: #ffffff;
  --color-light-grey: #f3f3f3;
  --color-dark-grey: #353535;
  --text-color: var(--color-black);
}

body,
a {
  color: var(--text-color);
}

.card-category,
.section-tagline {
  color: var(--color-primary);
}`);
base.push(`:root {
  --font-family-base: Helvetica Neue, Helvetica, Arial, sans-serif;
  --font-family-title: Helvetica Neue, Helvetica, Arial, sans-serif;
}

body {
  font-family: var(--font-family-base);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-family-title);
}`);
base.push(`:root {
  --font-size-small: 1.2rem;
  --font-size-medium: 1.6rem;
  --font-size-large: 1.8rem;
  --font-size-x-large: 2.3rem;
  --font-size-xx-large: 4.8rem;
}

html {
  font-size: 62.5%;
}

body {
  font-size: var(--font-size-medium);
}`);
base.push(`:root {
  --font-weight-regular: 400;
  --font-weight-bold: 700;
}

body {
  font-weight: var(--font-weight-regular);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: var(--font-weight-bold);
}`);
base.push(`:root {
  --font-family-base: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  --font-family-title: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
}`);
base.push(`:root {
  --line-height-small: 1.2;
  --line-height-base: 1.5;
  --line-height-big: 1.8;
}

body {
  line-height: var(--line-height-base);
}`);
base.push(`a {
  text-decoration: none;
}`);
base.push(`:root {
  --section-header-align: center;
}

.section-header {
  text-align: var(--section-header-align);
}

.section-tagline {
  color: var(--color-primary);
}`);
base.push(`:root {
  --section-tagline-transform: uppercase;
}

.section-tagline {
  font-family: var(--font-family-title);
  text-transform: var(--section-tagline-transform);
  font-weight: var(--font-weight-bold);
}`);
base.push(`:root {
  --section-title-margin: 0;
  --section-title-color: var(--color-black);
}

.section-title {
  font-family: var(--font-family-title);
  font-size: var(--font-size-xx-large);
  font-weight: var(--font-weight-bold);
  margin: var(--section-title-margin);
  color: var(--section-title-color);
}

.section-tagline {
  color: var(--color-primary);
}`);
base.push(`a[href] {
  text-decoration: none;
}

a[href]:visited {
  font-style: italic;
}

a[href]:hover {
  text-decoration: underline;
}

a[href]:active {
  background-color: var(--color-light-grey);
}`);

const normalize = normalizeBlock();
write("1-style.css", base[0] + "\n");
write("2-style.css", [base[0], base[1], base[2], base[3], base[4], base[5]].join("\n") + "\n");
write("3-style.css", base.slice(0, 7).join("\n") + "\n");
write("4-style.css", base.slice(0, 8).join("\n") + "\n");
write("5-style.css", base.slice(0, 9).join("\n") + "\n");
write("6-style.css", base.slice(0, 10).join("\n") + "\n");
write("7-style.css", base.slice(0, 11).join("\n") + "\n");
write("8-style.css", base.slice(0, 12).join("\n") + "\n");
write("9-style.css", base.slice(0, 13).join("\n") + "\n");
write("10-style.css", base.slice(0, 14).join("\n") + "\n");
write("11-style.css", base.slice(0, 15).join("\n") + "\n");
write("12-style.css", base.slice(0, 16).join("\n") + "\n");
write("13-style.css", base.slice(0, 17).join("\n") + "\n");
write("14-style.css", normalize + "\n\n" + base.slice(0, 17).join("\n") + "\n");

const styles15 = [
  normalize,
  `*,
*::before,
*::after {
  box-sizing: border-box;
}`,
  ...base.slice(0, 17),
];
write("15-style.css", styles15.join("\n\n") + "\n");

const styles16 = [
  ...styles15,
  `.container {
  width: 960px;
  margin-left: auto;
  margin-right: auto;
}`,
];
write("16-style.css", styles16.join("\n\n") + "\n");

const styles17 = [
  ...styles16,
  `:root {
  --section-padding: 5rem 0;
  --section-header-padding: 0 0 3rem;
  --section-body-padding: 0 0 3rem;
  --section-footer-padding: 3rem 0 0;
  --section-footer-align: center;
  --footer-padding: 5rem 0 1rem;
}

.section {
  padding: var(--section-padding);
}

.section-header {
  padding: var(--section-header-padding);
  text-align: var(--section-header-align);
}

.section-body {
  padding: var(--section-body-padding);
}

.section-footer {
  padding: var(--section-footer-padding);
  text-align: var(--section-footer-align);
}

.footer {
  padding: var(--footer-padding);
}`,
];
write("17-style.css", styles17.join("\n\n") + "\n");

const styles18 = [
  ...styles17,
  `:root {
  --nav-item-font-family: var(--font-family-title);
  --nav-item-font-weight: var(--font-weight-bold);
  --nav-item-font-size: var(--font-size-medium);
  --nav-item-letter-spacing: 0.4rem;
  --nav-item-display: inline-block;
  --nav-item-margin: 0 0 3rem;
  --nav-item-link-hover: var(--color-primary);
}

.navbar-menu {
  float: right;
}

nav {
  margin: 0;
  padding: 0;
}

nav ul {
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
}

nav .nav-item {
  font-family: var(--nav-item-font-family);
  font-weight: var(--nav-item-font-weight);
  font-size: var(--nav-item-font-size);
  letter-spacing: var(--nav-item-letter-spacing);
  display: var(--nav-item-display);
  margin: var(--nav-item-margin);
}

nav .nav-link {
  display: block;
  padding: 0.5rem 1rem;
}

nav .nav-link:hover {
  color: var(--nav-item-link-hover);
}`,
];
write("18-style.css", styles18.join("\n\n") + "\n");

const styles19 = [
  ...styles18,
  `:root {
  --section-tagline-margin: 0;
}

.section-tagline {
  margin: var(--section-tagline-margin);
}

ul.row {
  margin: 0;
  padding: 0;
  list-style: none;
}

.col-1-3 {
  width: 33.33%;
  float: left;
  padding: 0.5rem;
}

.col-1-2 {
  width: 50%;
  float: left;
  padding: 0.5rem;
}

.footer-copyright {
  margin: 0;
  font-size: var(--font-size-small);
  color: var(--text-color);
}

.footer ul {
  text-align: right;
}`,
];
write("19-style.css", styles19.join("\n\n") + "\n");

const styles20 = [
  ...styles19,
  `.row::after {
  content: "";
  display: table;
  clear: both;
}`,
];
write("20-style.css", styles20.join("\n\n") + "\n");

const styles21 = [
  ...styles20,
  `[class^="col-"] {
  float: left;
  padding: 0.5rem;
}

.col-1-3 {
  width: 33.33%;
}

.col-1-2 {
  width: 50%;
}`,
];
write("21-style.css", styles21.join("\n\n") + "\n");

const styles22 = [
  ...styles21,
  `[data-section-theme="dark"] {
  --text-color: var(--color-white);
  --section-title-color: var(--color-white);
  background-color: var(--color-black);
}`,
];
write("22-style.css", styles22.join("\n\n") + "\n");

const styles23 = [
  ...styles22,
  `.footer-address {
  color: var(--text-color);
}

.social-link {
  display: block;
}

.social-link svg {
  fill: var(--text-color);
}`,
];
write("23-style.css", styles23.join("\n\n") + "\n");

const styles24 = [
  ...styles23,
  `.card-services .card-title {
  margin: 0;
}

.card-services a {
  display: block;
  padding: 2rem;
  background-color: var(--color-light-grey);
}

.card-services a:hover {
  color: var(--color-white);
  background-color: var(--color-primary);
  text-decoration: none;
}`,
];
write("24-style.css", styles24.join("\n\n") + "\n");

const styles25 = [
  ...styles24,
  `:root {
  --button-display: inline-block;
  --button-padding: 1.5rem 3rem;
  --button-border: 0.2rem solid var(--color-primary);
  --button-color: var(--color-black);
  --button-text-decoration: none;
  --button-font-size: var(--font-size-large);
  --button-hover-color: var(--color-white);
  --button-hover-text-decoration: none;
  --button-hover-background: var(--color-primary);
}

.button {
  display: var(--button-display);
  padding: var(--button-padding);
  border: var(--button-border);
  font-size: var(--button-font-size);
  color: var(--button-color);
  text-decoration: var(--button-text-decoration);
}

.button:hover {
  color: var(--button-hover-color);
  text-decoration: var(--button-hover-text-decoration);
  background-color: var(--button-hover-background);
}

[data-section-theme="dark"] {
  --button-color: var(--color-white);
}`,
];
write("25-style.css", styles25.join("\n\n") + "\n");

const styles26 = [
  ...styles25,
  `.card-testimonial {
  text-align: center;
}

.card-testimonial .card-avatar {
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
}

.card-testimonial .card-quote cite {
  display: block;
  padding-top: 1rem;
  color: var(--color-primary);
}`,
];
write("26-style.css", styles26.join("\n\n") + "\n");

const styles27 = [
  ...styles26,
  `.section-hero {
  background-size: 90rem auto;
}

.section-hero .section-title {
  margin-bottom: 5rem;
}

.section-hero .section-inner {
  padding: 10rem 40rem 2rem 0;
}`,
];
write("27-style.css", styles27.join("\n\n") + "\n");

const styles28 = [
  ...styles27,
  `:root {
  --header-padding: 4rem 0 0;
  --header-logo-position: relative;
  --header-logo-link-display: inline-block;
  --header-logo-link-position: absolute;
  --header-logo-link-top: -1rem;
  --header-logo-link-left: 0;
}

.header {
  padding: var(--header-padding);
}

.header-logo {
  position: var(--header-logo-position);
}

.header-logo a {
  display: var(--header-logo-link-display);
  position: var(--header-logo-link-position);
  top: var(--header-logo-link-top);
  left: var(--header-logo-link-left);
}`,
];
write("28-style.css", styles28.join("\n\n") + "\n");

const styles29 = [
  ...styles28,
  `:root {
  --nav-item-link-hover: var(--color-white);
}

.nav .nav-link {
  position: relative;
}

.nav .nav-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 20%;
  background-color: var(--color-white);
  transition: var(--transition-duration) var(--transition-cubic-bezier);
}

.nav .nav-item:hover .nav-link::before {
  background-color: var(--color-primary);
  width: 100%;
}`,
];
write("29-style.css", styles29.join("\n\n") + "\n");

const styles30 = [
  ...styles29,
  `.card-work .card-outer {
  position: relative;
  overflow: hidden;
}

.card-work .card-image {
  height: 30rem;
  width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

.card-work .card-inner {
  position: absolute;
  top: -0.1rem;
  right: -0.1rem;
  left: -0.1rem;
  z-index: 1;
}

.card-work:hover .card-inner {
  background-color: rgba(0, 0, 0, 0.7);
}

.card-work .card-title {
  margin: 0;
  text-align: center;
  opacity: 0;
  height: 100%;
  position: relative;
}

.card-work .card-title a {
  display: block;
  text-decoration: none;
  padding-top: 45%;
}

.card-work .card-title a::after {
  content: "";
  position: absolute;
  inset: 0;
}

.card-work:hover .card-title {
  opacity: 1;
}`,
];
write("30-style.css", styles30.join("\n\n") + "\n");

const styles31 = [
  ...styles30,
  `.card-testimonial .card-quote {
  position: relative;
}

.card-testimonial .card-quote::before {
  content: "\\201C";
  position: absolute;
  top: -4.5rem;
  left: -1rem;
  color: #efeded;
  font-size: 10rem;
  z-index: -1;
}`,
];
write("31-style.css", styles31.join("\n\n") + "\n");

const styles32 = [
  ...styles31,
  `:root {
  --transition-duration: 0.3s;
  --transition-cubic-bezier: cubic-bezier(0.17, 0.67, 0, 1.01);
}

.card-work:hover .card-image {
  transform: scale(1.2);
  transition: var(--transition-duration) var(--transition-cubic-bezier);
}

.card-work:hover .card-outer {
  transform: scale(0.95);
}

.nav .nav-link::before {
  transition: var(--transition-duration) var(--transition-cubic-bezier);
}

.button {
  transition-duration: var(--transition-duration);
  transition-property: color, background-color;
}

.card-work .card-inner {
  transition: var(--transition-duration) var(--transition-cubic-bezier);
}

.card-work:hover .card-image {
  transition: var(--transition-duration) var(--transition-cubic-bezier);
}`,
];
write("32-style.css", styles32.join("\n\n") + "\n");

