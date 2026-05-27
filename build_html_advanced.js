const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const OUT = path.join(ROOT, "html_advanced");

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

function page(headLines, body) {
  const head = headLines.map((line) => `  ${line}`).join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body>
${body}
</body>
</html>
`;
}

function section(id, content) {
  return `<section id="${id}">
${content}
</section>`;
}

function outerDiv(content) {
  return `<div>
${content}
</div>`;
}

function comment(text) {
  return `<!-- ${text} -->`;
}

function navLinks(asList) {
  const items = [
    ["Home", "/"],
    ["Services", "#services"],
    ["Works", "#works"],
    ["About", "#about"],
    ["Latest news", "#latest_news"],
    ["Testimonials", "#testimonials"],
    ["Contact", "#contact"],
  ];

  if (asList) {
    const lis = items.map(([label, href]) => `      <li><a href="${href}">${label}</a></li>`).join("\n");
    return `<nav>
    <ul>
${lis}
    </ul>
  </nav>`;
  }

  const links = items.map(([label, href]) => `    <a href="${href}">${label}</a>`).join("\n");
  return `<nav>
${links}
  </nav>`;
}

function headerHtml(stage) {
  if (stage < 7) {
    return "<header>Header</header>";
  }

  let logo = "";
  if (stage >= 35) {
    logo = '<a href="/"><img src="logo-black.png" alt="Techium logo" width="160" height="40"></a>';
  } else if (stage >= 18) {
    logo = '<a href="/"><span>Techium</span></a>';
  } else if (stage >= 14) {
    logo = "<span>Techium</span>";
  }

  let nav = "<nav></nav>";
  if (stage >= 24) {
    nav = navLinks(true);
  } else if (stage >= 20) {
    nav = navLinks(false);
  }

  let inner = logo ? `${logo}\n  ${nav}` : nav;
  if (stage >= 15) {
    inner = outerDiv(inner);
  }

  return `<header>
${inner}
</header>`;
}

function footerHtml(stage) {
  if (stage < 15) {
    return "<footer>Footer</footer>";
  }

  if (stage < 21) {
    return `<footer>
<div>
    Footer
  </div>
</footer>`;
  }

  const socialList = `<div>
    <ul>
      <li><a href="https://www.facebook.com/HolbertonSchool/">Facebook</a></li>
      <li><a href="https://twitter.com/holbertonschool">Twitter</a></li>
      <li><a href="https://www.instagram.com/holbertonschool/">Instagram</a></li>
    </ul>
  </div>`;

  const socialLinks = `<div>
    <a href="https://www.facebook.com/HolbertonSchool/">Facebook</a>
    <a href="https://twitter.com/holbertonschool">Twitter</a>
    <a href="https://www.instagram.com/holbertonschool/">Instagram</a>
  </div>`;

  const secondary = `<div>
    <ul>
      <li><a href="#">Terms of Use</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Cookie Policy</a></li>
    </ul>
  </div>`;

  const facebookIcon = `<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"><title>Facebook icon</title><path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/></svg>`;
  const twitterIcon = `<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"><title>Twitter icon</title><path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/></svg>`;
  const instagramIcon = `<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>`;

  const address = stage >= 35
    ? `<img src="logo-black.png" alt="Techium logo" width="160" height="40">
  <address>234 Washington Street<br>Urbana, Illinois</address>`
    : `<address>234 Washington Street<br>Urbana, Illinois</address>`;

  const firstDiv = stage >= 37
    ? `<div>
    <ul>
      <li><a href="https://www.facebook.com/HolbertonSchool/">${facebookIcon}</a></li>
      <li><a href="https://twitter.com/holbertonschool">${twitterIcon}</a></li>
      <li><a href="https://www.instagram.com/holbertonschool/">${instagramIcon}</a></li>
    </ul>
  </div>`
    : stage >= 24
      ? socialList
      : socialLinks;
  const middle = stage >= 27
    ? `<hr>
  <p>© 2020 Techium, made with ♥ by students at Holberton School.</p>`
    : "";
  const secondDiv = stage >= 25 ? secondary : "";

  return `<footer>
${address}
${firstDiv}
${middle ? `${middle}\n` : ""}${secondDiv}
</footer>`;
}

function heroSection(stage) {
  let content = stage < 9 ? "Hero section" : "<h2>We help you build your brand!</h2>";
  if (stage >= 22) {
    content += "\n<a href=\"#\">Get started</a>";
  }
  if (stage >= 15) {
    content = outerDiv(content);
  }
  return section("hero-section", content);
}

function servicesSection(stage) {
  if (stage < 9) {
    return section("services", stage >= 15 ? outerDiv("Services section") : "Services section");
  }

  const titles = [
    "Design & Concept",
    "Digital Strategy",
    "Content Strategy",
    "UX Design",
    "Web Development",
    "Social Media",
  ];
  const h3s = titles.map((title) => stage >= 23 ? `<h3><a href="#">${title}</a></h3>` : `<h3>${title}</h3>`).join("\n");
  const heading = "<h2>Services</h2>";
  const paragraph = stage >= 12 ? "\n<p>We work with you</p>" : "";
  let content;
  if (stage >= 16) {
    content = `<header>
${heading}${paragraph}
</header>
<div>
${h3s}
</div>`;
  } else {
    content = `${heading}${paragraph}\n${h3s}`;
  }
  if (stage >= 15) {
    content = outerDiv(content);
  }
  return section("services", content);
}

function worksSection(stage) {
  if (stage < 9) {
    return section("works", stage >= 15 ? outerDiv("Works section") : "Works section");
  }

  const titles = ["Interior Design", "Web Development", "Personal Brand"];
  const articles = titles.map((title, idx) => {
    const image = stage >= 36 ? `<div><img src="images/pic-work-0${idx + 1}.jpg" alt=""></div>\n` : "";
    const heading = stage >= 23 ? `<h3><a href="#">${title}</a></h3>` : `<h3>${title}</h3>`;
    return `<article>
${image}${heading}
</article>`;
  }).join("\n");
  const heading = "<h2>Works</h2>";
  const paragraph = stage >= 12 ? "\n<p>Take a look in our portfolio</p>" : "";
  let content;
  if (stage >= 16) {
    content = `<header>
${heading}${paragraph}
</header>
<div>
${articles}
</div>`;
  } else {
    content = `${heading}${paragraph}\n${articles}`;
  }
  if (stage >= 15) {
    content = outerDiv(content);
  }
  return section("works", content);
}

function aboutSection(stage) {
  if (stage < 9) {
    return section("about", stage >= 15 ? outerDiv("About section") : "About section");
  }

  const titles = ["Who are we", "Our culture", "How we work"];
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!",
  ];
  const parts = [];
  if (stage >= 36) {
    parts.push('<div><img src="images/pic-about-us.jpg" alt="" width="460" height="447"></div>');
  }
  titles.forEach((title, idx) => {
    parts.push(`<h3>${title}</h3>`);
    if (stage >= 12) {
      parts.push(`<p>${paragraphs[idx]}</p>`);
    }
  });
  const heading = "<h2>About Us</h2>";
  const sectionParagraph = stage >= 12 ? "\n<p>Everything about us</p>" : "";
  let content;
  if (stage >= 16) {
    content = `<header>
${heading}${sectionParagraph}
</header>
<div>
${parts.join("\n")}
</div>`;
  } else {
    content = `${heading}${sectionParagraph}\n${parts.join("\n")}`;
  }
  if (stage >= 22) {
    content += '\n<a href="about.html">Learn more about us</a>';
  }
  if (stage >= 15) {
    content = outerDiv(content);
  }
  return section("about", content);
}

function latestNewsSection(stage) {
  if (stage < 9) {
    return section("latest_news", stage >= 15 ? outerDiv("Latest news section") : "Latest news section");
  }

  const titles = [
    "Hoc loco tenere se Triarius non potuit.",
    "Ut alios omittam, hunc appello, quem ille unum secutus est.",
    "Bestiarum vero nullum iudicium puto.",
  ];
  const categories = ["Career", "Digital Life", "Social"];
  const summaries = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur bene. Quid enim est a Chrysippo praetermissum in Stoicis? Pugnant Stoici cum Peripateticis. Prioris generis est docilitas, memoria; Apparet statim, quae sint officia, quae actiones.",
  ];
  const authors = ["Kelly D.", "William A.", "Frances J."];

  const articles = titles.map((title, idx) => {
    const bits = [];
    if (stage >= 36) {
      bits.push(`<div><img src="images/pic-blog-0${idx + 1}.jpg" alt="" width="305" height="205"></div>`);
    }
    if (stage >= 12) {
      bits.push(`<p>${categories[idx]}</p>`);
    }
    bits.push(stage >= 23 ? `<h3><a href="#">${title}</a></h3>` : stage >= 10 ? `<h3>${title}</h3>` : `Article ${idx + 1}`);
    if (stage >= 12) {
      bits.push(`<p>${summaries[idx]}</p>`);
    }
    if (stage >= 31) {
      bits.push(`<small>By ${authors[idx]}</small>`);
    }
    return `<article>
${bits.join("\n")}
</article>`;
  }).join("\n");

  const heading = "<h2>Latest news</h2>";
  let content;
  if (stage >= 16) {
    content = `<header>
${heading}
</header>
<div>
${articles}
</div>`;
  } else {
    content = `${heading}\n${articles}`;
  }
  if (stage >= 15) {
    content = outerDiv(content);
  }
  return section("latest_news", content);
}

function testimonialsSection(stage) {
  if (stage < 9) {
    return section("testimonials", stage >= 15 ? outerDiv("Testimonials section") : "Testimonials section");
  }

  const rows = [
    ["Yuri Y.", "I am completely blown away. Thanks to Techium, we've just launched our 5th website!"],
    ["Dorrie S.", "Thank you so much for your help. Techium company is awesome!"],
    ["Sven H.", "I love your system. Definitely worth the investment. I'd be lost without Techium company."],
  ];

  const articles = rows.map(([author, quote], idx) => {
    const bits = [];
    if (stage >= 36) {
      bits.push(`<img src="images/pic-person-0${idx + 1}.jpg" alt="${author} avatar" width="100" height="100">`);
    }
    if (stage >= 29) {
      bits.push(`<blockquote>${quote}</blockquote>`);
      bits.push(`<cite>${author}</cite>`);
    } else {
      bits.push(`Testimonial ${idx + 1}`);
    }
    return `<article>
${bits.join("\n")}
</article>`;
  }).join("\n");

  const heading = "<h2>Testimonials</h2>";
  const paragraph = stage >= 12 ? "\n<p>We are more than a digital company</p>" : "";
  let content;
  if (stage >= 16) {
    content = `<header>
${heading}${paragraph}
</header>
<div>
${articles}
</div>`;
  } else {
    content = `${heading}${paragraph}\n${articles}`;
  }
  if (stage >= 15) {
    content = outerDiv(content);
  }
  return section("testimonials", content);
}

function contactSection(stage) {
  if (stage < 9) {
    return section("contact", stage >= 15 ? outerDiv("Contact section") : "Contact section");
  }

  const first = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?";
  const second = "We like to know new people";
  const heading = "<h2>Contact</h2>";

  let content;
  if (stage >= 16) {
    content = `<header>
${heading}
${stage >= 12 ? `<p>${first}</p>` : ""}
</header>
<div>
${stage >= 12 ? `<p>${second}</p>` : ""}
</div>`;
  } else {
    content = `${heading}${stage >= 12 ? `\n<p>${first}</p>\n<p>${second}</p>` : ""}`;
  }
  if (stage >= 22) {
    content += '\n<a href="contact.html">Get in touch</a>';
  }
  if (stage >= 15) {
    content = outerDiv(content);
  }
  return section("contact", content);
}

function renderIndex(stage, title) {
  if (stage === 0) {
    return "<!DOCTYPE html>\n<html lang=\"en\"></html>\n";
  }

  const head = [];
  if (stage >= 2) {
    head.push('<meta charset="utf-8">');
    head.push('<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">');
    head.push(`<title>${title}</title>`);
    head.push('<meta name="description" content="Techium is a digital agency">');
    head.push('<link rel="icon" type="image/x-icon" href="./favicon.ico">');
    head.push('<link rel="icon" type="image/png" href="./favicon.png">');
  } else {
    head.push(`<title>${title}</title>`);
  }

  if (stage === 1) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
</body>
</html>
`;
  }

  if (stage === 3) {
    return page(head, [
      headerHtml(stage),
      "<main>Main content</main>",
      "<footer>Footer</footer>",
    ].join("\n"));
  }

  if (stage === 4) {
    return page(head, [
      headerHtml(stage),
      "<main>Main content<aside>Aside</aside></main>",
      "<footer>Footer</footer>",
    ].join("\n"));
  }

  const sections = [];
  if (stage >= 8) {
    sections.push("<h1>Homepage</h1>");
  }

  if (stage >= 17) sections.push(comment("Hero section"));
  sections.push(heroSection(stage));

  if (stage >= 17) sections.push(comment("Services section"));
  sections.push(servicesSection(stage));

  if (stage >= 17) sections.push(comment("Works section"));
  sections.push(worksSection(stage));

  if (stage >= 17) sections.push(comment("About Us section"));
  sections.push(aboutSection(stage));

  if (stage >= 17) sections.push(comment("Latest news section"));
  sections.push(latestNewsSection(stage));

  if (stage >= 17) sections.push(comment("Testimonials section"));
  sections.push(testimonialsSection(stage));

  if (stage >= 17) sections.push(comment("Contact section"));
  sections.push(contactSection(stage));

  const main = `<main>
${sections.join("\n")}
</main>`;

  const bodyParts = [];
  if (stage >= 17) {
    bodyParts.push(comment("Header"));
  }
  bodyParts.push(headerHtml(stage));
  if (stage >= 17) {
    bodyParts.push(comment("Main"));
  }
  bodyParts.push(main);
  if (stage >= 17) {
    bodyParts.push(comment("Footer"));
  }
  bodyParts.push(footerHtml(stage));

  return page(head, bodyParts.join("\n"));
}

function renderStyleguide(stage) {
  const head = ['<title>Styleguide - Techium</title>'];
  const header = "<header></header>";
  const footer = "<footer></footer>";
  const sections = [];

  sections.push(`<section>
  <header><h2>Headings</h2></header>
  <h1>Heading level 1</h1>
  <h2>Heading level 2</h2>
  <h3>Heading level 3</h3>
  <h4>Heading level 4</h4>
  <h5>Heading level 5</h5>
  <h6>Heading level 6</h6>
</section>`);

  if (stage >= 13) {
    sections.push(`<section>
  <header><h2>Paragraph</h2></header>
  <h2>Heading with a subtitle</h2>
  <p>This is my subtitle</p>
  <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
</section>`);
  }

  if (stage >= 26) {
    sections.push(`<!-- Lists -->
<section>
  <header><h2>Lists</h2></header>
  <div>
    <h3>Unordered</h3>
    <ul>
      <li>Dolor pulvinar etiam magna etiam.</li>
      <li>Sagittis adipiscing lorem eleifend.</li>
      <li>Felis enim feugiat dolore viverra.</li>
    </ul>
    <h3>Ordered</h3>
    <ol>
      <li>Dolor pulvinar etiam magna etiam.</li>
      <li>Sagittis adipiscing lorem eleifend.</li>
      <li>Felis enim feugiat dolore viverra.</li>
    </ol>
    <h3>Definition</h3>
    <dl>
      <dt>Definition List title</dt>
      <dd>Definition text.</dd>
      <dt>Startup</dt>
      <dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>
      <dt>Water</dt>
      <dd>A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.</dd>
    </dl>
  </div>
</section>`);
  }

  if (stage >= 28) {
    sections.push(`<!-- Horizontal rule -->
<section>
  <header><h2>Horizontal rule</h2></header>
  <div><hr></div>
</section>`);
  }

  if (stage >= 30) {
    sections.push(`<!-- Blockquotes -->
<section>
  <header><h2>Blockquotes</h2></header>
  <div>
    <h3>Inline quote</h3>
    <p><q>Stay hungry. Stay foolish.</q></p>
  </div>
  <div>
    <h3>Blockquote</h3>
    <blockquote>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</blockquote>
    <cite>Kanye West, Musician</cite>
  </div>
</section>`);
  }

  if (stage >= 32) {
    sections.push(`<!-- Typography -->
<section>
  <header><h2>Typography</h2></header>
  <div><address>320 Stewart Avenue, Unit 12<br>New York City NY 10001</address></div>
  <div>
    <pre><code>&lt;h2&gt;My title&lt;/h2&gt;
&lt;p&gt;Proin lacus turpis, feugiat sit amet sollicitudin non, volutpat in libero. Aenean hendrerit ultrices nulla ac lobortis. Vestibulum consectetur nibh vel ante rhoncus faucibus.&lt;/p&gt;</code></pre>
  </div>
  <div>
    <p>Curabitur sit amet turpis cursus massa mollis <mark>highlighted</mark>. Duis finibus leo massa, eget dapibus erat finibus sed. Aenean condimentum sapien magna, eleifend <mark>highlighted</mark> mi consequat ut. Cras nec quam sed sapien ultricies <mark>highlighted</mark> ut sed metus.</p>
  </div>
</section>`);
  }

  if (stage >= 33) {
    sections.push(`<!-- Table -->
<section>
  <header><h2>Table</h2></header>
  <table>
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Director</th>
        <th scope="col">Release Date</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row">Star Wars: Episode IV - A New Hope</th><td>George Lucas</td><td>May 25, 1977</td></tr>
      <tr><th scope="row">Star Wars: Episode V - The Empire Strikes Back</th><td>Irvin Kershner</td><td>May 21, 1980</td></tr>
      <tr><th scope="row">Star Wars: Episode VI - Return of the Jedi</th><td>Richard Marquand</td><td>May 25, 1983</td></tr>
      <tr><th scope="row">Star Wars: Episode I - The Phantom Menace</th><td>George Lucas</td><td>May 19, 1999</td></tr>
      <tr><th scope="row">Star Wars: Episode II - Attack of the Clones</th><td>George Lucas</td><td>May 16, 2002</td></tr>
      <tr><th scope="row">Star Wars: Episode III - Revenge of the Sith</th><td>George Lucas</td><td>May 19, 2005</td></tr>
    </tbody>
  </table>
</section>`);
  }

  if (stage >= 34) {
    sections.push(`<!-- Details -->
<section>
  <header><h2>Details</h2></header>
  <div>
    <h3>Default</h3>
    <details><summary>Show/Hide me</summary><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></details>
  </div>
  <div>
    <h3>Open</h3>
    <details open><summary>Always open</summary><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></details>
  </div>
</section>`);
  }

  if (stage >= 38) {
    sections.push(`<!-- Video -->
<section>
  <header><h2>Video</h2></header>
  <video controls loop poster="https://intranet-projects-files.s3.amazonaws.com/webstack/thumbnail.jpg">
    <source src="https://intranet-projects-files.s3.amazonaws.com/webstack/BigBuckBunny.mp4" type="video/mp4">
    Sorry, your browser doesn't support HTML5 video
  </video>
</section>`);
  }

  if (stage >= 39) {
    sections.push(`<!-- Audio -->
<section>
  <header><h2>Audio</h2></header>
  <audio controls>
    <source src="https://intranet-projects-files.s3.amazonaws.com/webstack/TroubleChapter8_64kb.mp3" type="audio/mpeg">
    Sorry, your browser doesn't support audio element
  </audio>
</section>`);
  }

  if (stage >= 40) {
    sections.push(`<!-- Iframe -->
<section>
  <header><h2>Iframe</h2></header>
  <div>
    <iframe title="Holberton School" width="350px" height="200px" src="https://www.youtube.com/embed/41N6bKO-NVI">Holberton Sally</iframe>
  </div>
</section>`);
  }

  const main = `<main>
${sections.join("\n")}
</main>`;

  return page(head, [header, main, footer].join("\n"));
}

function buildAll() {
  fs.mkdirSync(OUT, { recursive: true });

  const files = {
    "0-index.html": renderIndex(0, "Techium"),
    "1-index.html": renderIndex(1, "Techium"),
    "2-index.html": renderIndex(2, "Homepage - Techium"),
    "3-index.html": renderIndex(3, "Homepage - Techium"),
    "article.html": renderIndex(4, "Article - Techium"),
    "5-index.html": renderIndex(5, "Homepage - Techium"),
    "6-index.html": renderIndex(6, "Homepage - Techium"),
    "7-index.html": renderIndex(7, "Homepage - Techium"),
    "8-index.html": renderIndex(8, "Homepage - Techium"),
    "9-index.html": renderIndex(9, "Homepage - Techium"),
    "10-index.html": renderIndex(10, "Homepage - Techium"),
    "11-styleguide.html": renderStyleguide(11),
    "12-index.html": renderIndex(12, "Homepage - Techium"),
    "13-styleguide.html": renderStyleguide(13),
    "14-index.html": renderIndex(14, "Homepage - Techium"),
    "15-index.html": renderIndex(15, "Homepage - Techium"),
    "16-index.html": renderIndex(16, "Homepage - Techium"),
    "17-index.html": renderIndex(17, "Homepage - Techium"),
    "18-index.html": renderIndex(18, "Homepage - Techium"),
    "about.html": renderIndex(19, "About - Techium"),
    "latest_news.html": renderIndex(19, "Latest news - Techium"),
    "contact.html": renderIndex(19, "Contact - Techium"),
    "20-index.html": renderIndex(20, "Homepage - Techium"),
    "21-index.html": renderIndex(21, "Homepage - Techium"),
    "22-index.html": renderIndex(22, "Homepage - Techium"),
    "23-index.html": renderIndex(23, "Homepage - Techium"),
    "24-index.html": renderIndex(24, "Homepage - Techium"),
    "25-index.html": renderIndex(25, "Homepage - Techium"),
    "26-styleguide.html": renderStyleguide(26),
    "27-index.html": renderIndex(27, "Homepage - Techium"),
    "28-styleguide.html": renderStyleguide(28),
    "29-index.html": renderIndex(29, "Homepage - Techium"),
    "30-styleguide.html": renderStyleguide(30),
    "31-index.html": renderIndex(31, "Homepage - Techium"),
    "32-styleguide.html": renderStyleguide(32),
    "33-styleguide.html": renderStyleguide(33),
    "34-styleguide.html": renderStyleguide(34),
    "35-index.html": renderIndex(35, "Homepage - Techium"),
    "36-index.html": renderIndex(36, "Homepage - Techium"),
    "index.html": renderIndex(37, "Homepage - Techium"),
    "38-styleguide.html": renderStyleguide(38),
    "39-styleguide.html": renderStyleguide(39),
    "styleguide.html": renderStyleguide(40),
  };

  Object.entries(files).forEach(([name, content]) => write(path.join(OUT, name), content));

  const assetsDir = path.join(OUT, "images");
  fs.mkdirSync(assetsDir, { recursive: true });
  [
    "pic-work-01.jpg",
    "pic-work-02.jpg",
    "pic-work-03.jpg",
    "pic-about-us.jpg",
    "pic-blog-01.jpg",
    "pic-blog-02.jpg",
    "pic-blog-03.jpg",
    "pic-person-01.jpg",
    "pic-person-02.jpg",
    "pic-person-03.jpg",
  ].forEach((asset) => write(path.join(assetsDir, asset), ""));

  ["favicon.ico", "favicon.png", "favicon.jpg", "logo-black.png"].forEach((asset) => write(path.join(OUT, asset), ""));
}

buildAll();
