from __future__ import annotations

from pathlib import Path
from textwrap import dedent


ROOT = Path(__file__).resolve().parent
OUT = ROOT / "html_advanced"


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")


def page(head_lines: list[str], body: str) -> str:
    head = "\n".join(f"  {line}" for line in head_lines)
    return dedent(
        f"""\
        <!DOCTYPE html>
        <html lang="en">
        <head>
        {head}
        </head>
        <body>
        {body}
        </body>
        </html>
        """
    )


def wrap(tag: str, content: str, attrs: str = "") -> str:
    attrs = f" {attrs}" if attrs else ""
    return f"<{tag}{attrs}>{content}</{tag}>"


def section(section_id: str, content: str) -> str:
    return f'<section id="{section_id}">\n{content}\n</section>'


def outer_div(content: str) -> str:
    return f"<div>\n{content}\n</div>"


def comment(text: str) -> str:
    return f"<!-- {text} -->"


def nav_links(use_list: bool) -> str:
    items = [
        ("Home", "/"),
        ("Services", "#services"),
        ("Works", "#works"),
        ("About", "#about"),
        ("Latest news", "#latest_news"),
        ("Testimonials", "#testimonials"),
        ("Contact", "#contact"),
    ]
    if use_list:
        lis = "\n".join(f'      <li><a href="{href}">{label}</a></li>' for label, href in items)
        return f"<nav>\n    <ul>\n{lis}\n    </ul>\n  </nav>"
    links = "\n".join(f'    <a href="{href}">{label}</a>' for label, href in items)
    return f"<nav>\n{links}\n  </nav>"


def social_links(use_list: bool, icons: bool) -> str:
    if icons:
        facebook = (
            '<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px">'
            "<title>Facebook icon</title>"
            '<path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>'
            "</svg>"
        )
        twitter = (
            '<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px">'
            "<title>Twitter icon</title>"
            '<path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>'
            "</svg>"
        )
        instagram = (
            '<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px">'
            "<title>Instagram icon</title>"
            '<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>'
            "</svg>"
        )
        links = [
            ("Facebook", facebook),
            ("Twitter", twitter),
            ("Instagram", instagram),
        ]
    else:
        links = [
            ("Facebook", "https://www.facebook.com/HolbertonSchool/"),
            ("Twitter", "https://twitter.com/holbertonschool"),
            ("Instagram", "https://www.instagram.com/holbertonschool/"),
        ]

    if use_list:
        items = "\n".join(
            f'      <li><a href="{href}">{label}</a></li>' if not icons else f"      <li><a href=\"#\">{href}</a></li>"
            for label, href in links
        )
        return f"<div>\n    <ul>\n{items}\n    </ul>\n  </div>"

    lines = "\n".join(
        f'    <a href="{href}">{label}</a>' if not icons else f"    <a href=\"#\">{href}</a>"
        for label, href in links
    )
    return f"<div>\n{lines}\n  </div>"


def header_html(stage: int, page: str) -> str:
    if stage < 7:
        return "<header>Header</header>"

    logo: str
    if stage >= 35:
        logo = '<a href="/"><img src="logo-black.png" alt="Techium logo" width="160" height="40"></a>'
    elif stage >= 18:
        logo = '<a href="/"><span>Techium</span></a>'
    elif stage >= 14:
        logo = "<span>Techium</span>"
    else:
        logo = ""

    nav = ""
    if stage >= 24:
        nav = nav_links(True)
    elif stage >= 20:
        nav = nav_links(False)
    else:
        nav = "<nav></nav>"

    inner = ""
    if logo:
        inner = f"{logo}\n  {nav}"
    else:
        inner = nav

    if stage >= 15:
        inner = outer_div(inner)

    return f"<header>\n{inner}\n</header>"


def footer_html(stage: int) -> str:
    if stage < 15:
        return "<footer>Footer</footer>"

    address = ""
    if stage >= 35:
        address = '<img src="logo-black.png" alt="Techium logo" width="160" height="40">\n  <address>234 Washington Street<br>Urbana, Illinois</address>'
    elif stage >= 31:
        address = "<address>234 Washington Street<br>Urbana, Illinois</address>"

    first_div = "Footer"
    if stage >= 21:
        if stage >= 24:
            first_div = "<div>\n    <ul>\n      <li><a href=\"https://www.facebook.com/HolbertonSchool/\">Facebook</a></li>\n      <li><a href=\"https://twitter.com/holbertonschool\">Twitter</a></li>\n      <li><a href=\"https://www.instagram.com/holbertonschool/\">Instagram</a></li>\n    </ul>\n  </div>"
        else:
            first_div = "<a href=\"https://www.facebook.com/HolbertonSchool/\">Facebook</a>\n    <a href=\"https://twitter.com/holbertonschool\">Twitter</a>\n    <a href=\"https://www.instagram.com/holbertonschool/\">Instagram</a>"

    if stage >= 27:
        second_div = "<div>\n    <ul>\n      <li><a href=\"#\">Terms of Use</a></li>\n      <li><a href=\"#\">Privacy Policy</a></li>\n      <li><a href=\"#\">Cookie Policy</a></li>\n    </ul>\n  </div>"
        middle = "<hr>\n  <p>© 2020 Techium, made with ♥ by students at Holberton School.</p>"
    elif stage >= 25:
        second_div = "<div>\n    <ul>\n      <li><a href=\"#\">Terms of Use</a></li>\n      <li><a href=\"#\">Privacy Policy</a></li>\n      <li><a href=\"#\">Cookie Policy</a></li>\n    </ul>\n  </div>"
        middle = ""
    else:
        second_div = ""
        middle = ""

    pieces = []
    if address:
        pieces.append(address)
    if first_div:
        pieces.append(f"<div>\n    {first_div}\n  </div>" if stage < 24 and stage >= 21 else first_div)
    if middle:
        pieces.append(middle)
    if second_div:
        pieces.append(second_div)

    if stage >= 15 and stage < 21:
        # Stage 15/18/19/20 still uses the wrapped empty footer content.
        if not address:
            return "<footer>\n<div>\n    Footer\n  </div>\n</footer>"

    content = "\n".join(pieces) if pieces else ""
    return f"<footer>\n{content}\n</footer>"


def hero_section(stage: int) -> str:
    if stage < 9:
        content = "Hero section"
    else:
        content = "<h2>We help you build your brand!</h2>"
        if stage >= 22:
            content += "\n<a href=\"#\">Get started</a>"
    if stage >= 15:
        content = outer_div(content)
    return section("hero-section", content)


def services_section(stage: int) -> str:
    if stage < 9:
        content = "Services section"
    else:
        headings = [
            "Design & Concept",
            "Digital Strategy",
            "Content Strategy",
            "UX Design",
            "Web Development",
            "Social Media",
        ]
        h3s = []
        for text in headings:
            if stage >= 23:
                h3s.append(f'<h3><a href="#">{text}</a></h3>')
            else:
                h3s.append(f"<h3>{text}</h3>")
        body = "<h2>Services</h2>"
        if stage >= 12:
            body += "\n<p>We work with you</p>"
        if stage >= 16:
            content = "<header>\n" + body + "\n</header>\n<div>\n" + "\n".join(h3s) + "\n</div>"
        else:
            content = body + "\n" + "\n".join(h3s)
    if stage < 9:
        content = "Services section"
    if stage >= 15:
        content = outer_div(content)
    return section("services", content)


def works_section(stage: int) -> str:
    if stage < 9:
        content = "Works section"
    else:
        titles = ["Interior Design", "Web Development", "Personal Brand"]
        articles = []
        for idx, title in enumerate(titles, start=1):
            if stage >= 36:
                img = f'<div><img src="images/pic-work-0{idx}.jpg" alt=""></div>\n'
            else:
                img = ""
            if stage >= 23:
                heading = f'<h3><a href="#">{title}</a></h3>'
            elif stage >= 10:
                heading = f"<h3>{title}</h3>"
            else:
                heading = f"Work {idx}"
            articles.append(f"<article>\n{img}{heading}\n</article>")
        body = "<h2>Works</h2>"
        if stage >= 12:
            body += "\n<p>Take a look in our portfolio</p>"
        if stage >= 16:
            content = "<header>\n" + body + "\n</header>\n<div>\n" + "\n".join(articles) + "\n</div>"
        else:
            content = body + "\n" + "\n".join(articles)
    if stage >= 15:
        content = outer_div(content)
    return section("works", content)


def about_section(stage: int) -> str:
    if stage < 9:
        content = "About section"
    else:
        h3s = ["Who are we", "Our culture", "How we work"]
        paras = [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!",
        ]
        parts = []
        if stage >= 36:
            parts.append('<div><img src="images/pic-about-us.jpg" alt="" width="460" height="447"></div>')
        for i, title in enumerate(h3s):
            parts.append(f"<h3>{title}</h3>")
            if stage >= 12:
                parts.append(f"<p>{paras[i]}</p>")
        body = "<h2>About Us</h2>"
        if stage >= 12:
            body += "\n<p>Everything about us</p>"
        if stage >= 16:
            content = "<header>\n" + body + "\n</header>\n<div>\n" + "\n".join(parts) + "\n</div>"
        else:
            content = body + "\n" + "\n".join(parts)
        if stage >= 22:
            content += '\n<a href="about.html">Learn more about us</a>'
    if stage >= 15:
        content = outer_div(content)
    return section("about", content)


def latest_news_section(stage: int) -> str:
    if stage < 9:
        content = "Latest news section"
    else:
        titles = [
            "Hoc loco tenere se Triarius non potuit.",
            "Ut alios omittam, hunc appello, quem ille unum secutus est.",
            "Bestiarum vero nullum iudicium puto.",
        ]
        categories = ["Career", "Digital Life", "Social"]
        summaries = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur bene. Quid enim est a Chrysippo praetermissum in Stoicis? Pugnant Stoici cum Peripateticis. Prioris generis est docilitas, memoria; Apparet statim, quae sint officia, quae actiones.",
        ]
        authors = ["Kelly D.", "William A.", "Frances J."]
        articles = []
        for idx, title in enumerate(titles, start=1):
            parts = []
            if stage >= 36:
                parts.append(f'<div><img src="images/pic-blog-0{idx}.jpg" alt="" width="305" height="205"></div>')
            if stage >= 12:
                parts.append(f"<p>{categories[idx - 1]}</p>")
            if stage >= 23:
                parts.append(f'<h3><a href="#">{title}</a></h3>')
            elif stage >= 10:
                parts.append(f"<h3>{title}</h3>")
            else:
                parts.append(f"Article {idx}")
            if stage >= 12:
                parts.append(f"<p>{summaries[idx - 1]}</p>")
            if stage >= 31:
                parts.append(f"<small>By {authors[idx - 1]}</small>")
            articles.append("<article>\n" + "\n".join(parts) + "\n</article>")
        body = "<h2>Latest news</h2>"
        if stage >= 16:
            content = "<header>\n" + body + "\n</header>\n<div>\n" + "\n".join(articles) + "\n</div>"
        else:
            content = body + "\n" + "\n".join(articles)
    if stage >= 15:
        content = outer_div(content)
    return section("latest_news", content)


def testimonials_section(stage: int) -> str:
    if stage < 9:
        content = "Testimonials section"
    else:
        texts = [
            ("Yuri Y.", "I am completely blown away. Thanks to Techium, we've just launched our 5th website!"),
            ("Dorrie S.", "Thank you so much for your help. Techium company is awesome!"),
            ("Sven H.", "I love your system. Definitely worth the investment. I'd be lost without Techium company."),
        ]
        articles = []
        for idx, (author, quote) in enumerate(texts, start=1):
            parts = []
            if stage >= 36:
                parts.append(f'<img src="images/pic-person-0{idx}.jpg" alt="{author} avatar" width="100" height="100">')
            if stage >= 29:
                parts.append(f'<blockquote>{quote}</blockquote>')
                parts.append(f"<cite>{author}</cite>")
            else:
                parts.append(f"Testimonial {idx}")
            articles.append("<article>\n" + "\n".join(parts) + "\n</article>")
        body = "<h2>Testimonials</h2>"
        if stage >= 12:
            body += "\n<p>We are more than a digital company</p>"
        if stage >= 16:
            content = "<header>\n" + body + "\n</header>\n<div>\n" + "\n".join(articles) + "\n</div>"
        else:
            content = body + "\n" + "\n".join(articles)
    if stage >= 15:
        content = outer_div(content)
    return section("testimonials", content)


def contact_section(stage: int) -> str:
    if stage < 9:
        content = "Contact section"
    else:
        first = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?"
        second = "We like to know new people"
        body = "<h2>Contact</h2>"
        if stage >= 12:
            body += f"\n<p>{first}</p>"
            body += f"\n<p>{second}</p>"
        if stage >= 16:
            content = "<header>\n" + body + "\n</header>\n<div>\n" + (f"<p>{second}</p>" if stage >= 12 else "") + "\n</div>"
            # The first paragraph is already inside the header.
        else:
            content = body + ("\n<p>" + first + "</p>\n<p>" + second + "</p>" if stage >= 12 else "")
        if stage >= 22:
            content += '\n<a href="contact.html">Get in touch</a>'
    if stage >= 15:
        content = outer_div(content)
    return section("contact", content)


def render_index(stage: int, title: str) -> str:
    head = []
    if stage == 0:
        return "<!DOCTYPE html>\n<html lang=\"en\"></html>\n"
    if stage >= 2:
        head.append('<meta charset="utf-8">')
        head.append('<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">')
    if stage >= 2:
        head.append(f"<title>{title}</title>")
        head.append('<meta name="description" content="Techium is a digital agency">')
        head.append('<link rel="icon" type="image/x-icon" href="./favicon.ico">')
        head.append('<link rel="icon" type="image/png" href="./favicon.png">')
    elif stage == 1:
        pass
    elif stage == 3:
        head.append(f"<title>{title}</title>")
    elif stage == 4:
        head.append(f"<title>{title}</title>")
    else:
        head.append(f"<title>{title}</title>")

    if stage < 2:
        # 1-index
        body = "<head>\n  </head>\n  <body>\n  </body>"
        return page([], body)

    header = header_html(stage, "index")

    if stage == 3:
        body = "\n".join([header, "<main>Main content</main>", "<footer>Footer</footer>"])
        return page(head, body)

    if stage == 4:
        body = "\n".join(
            [
                header,
                "<main>Main content<aside>Aside</aside></main>",
                "<footer>Footer</footer>",
            ]
        )
        return page(head, body)

    sections = []
    if stage >= 8:
        sections.append("<h1>Homepage</h1>")

    if stage >= 17:
        sections.append(comment("Hero section"))
    sections.append(hero_section(stage))

    if stage >= 17:
        sections.append(comment("Services section"))
    sections.append(services_section(stage))

    if stage >= 17:
        sections.append(comment("Works section"))
    sections.append(works_section(stage))

    if stage >= 17:
        sections.append(comment("About Us section"))
    sections.append(about_section(stage))

    if stage >= 17:
        sections.append(comment("Latest news section"))
    sections.append(latest_news_section(stage))

    if stage >= 17:
        sections.append(comment("Testimonials section"))
    sections.append(testimonials_section(stage))

    if stage >= 17:
        sections.append(comment("Contact section"))
    sections.append(contact_section(stage))

    main = "<main>\n" + "\n".join(sections) + "\n</main>"

    if stage >= 17:
        body = "\n".join([comment("Header"), header, comment("Main"), main, comment("Footer"), footer_html(stage)])
    else:
        body = "\n".join([header, main, footer_html(stage)])
    return page(head, body)


def render_styleguide(stage: int) -> str:
    head = [f"<title>{'Styleguide - Techium'}</title>"]
    header = "<header></header>"
    footer = "<footer></footer>"

    sections = []

    headings = (
        "<section>\n"
        "  <header><h2>Headings</h2></header>\n"
        "  <h1>Heading level 1</h1>\n"
        "  <h2>Heading level 2</h2>\n"
        "  <h3>Heading level 3</h3>\n"
        "  <h4>Heading level 4</h4>\n"
        "  <h5>Heading level 5</h5>\n"
        "  <h6>Heading level 6</h6>\n"
        "</section>"
    )
    sections.append(headings)

    if stage >= 13:
        paragraph = (
            "<section>\n"
            "  <header><h2>Paragraph</h2></header>\n"
            "  <h2>Heading with a subtitle</h2>\n"
            "  <p>This is my subtitle</p>\n"
            "  <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>\n"
            "</section>"
        )
        sections.append(paragraph)

    if stage >= 26:
        lists = (
            "<section>\n"
            "  <header><h2>Lists</h2></header>\n"
            "  <div>\n"
            "    <h3>Unordered</h3>\n"
            "    <ul>\n"
            "      <li>Dolor pulvinar etiam magna etiam.</li>\n"
            "      <li>Sagittis adipiscing lorem eleifend.</li>\n"
            "      <li>Felis enim feugiat dolore viverra.</li>\n"
            "    </ul>\n"
            "    <h3>Ordered</h3>\n"
            "    <ol>\n"
            "      <li>Dolor pulvinar etiam magna etiam.</li>\n"
            "      <li>Sagittis adipiscing lorem eleifend.</li>\n"
            "      <li>Felis enim feugiat dolore viverra.</li>\n"
            "    </ol>\n"
            "    <h3>Definition</h3>\n"
            "    <dl>\n"
            "      <dt>Definition List title</dt>\n"
            "      <dd>Definition text.</dd>\n"
            "      <dt>Startup</dt>\n"
            "      <dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>\n"
            "      <dt>Water</dt>\n"
            "      <dd>A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.</dd>\n"
            "    </dl>\n"
            "  </div>\n"
            "</section>"
        )
        sections.append("<!-- Lists -->\n" + lists)

    if stage >= 28:
        hr = (
            "<section>\n"
            "  <header><h2>Horizontal rule</h2></header>\n"
            "  <div><hr></div>\n"
            "</section>"
        )
        sections.append("<!-- Horizontal rule -->\n" + hr)

    if stage >= 30:
        quotes = (
            "<section>\n"
            "  <header><h2>Blockquotes</h2></header>\n"
            "  <div>\n"
            "    <h3>Inline quote</h3>\n"
            "    <p><q>Stay hungry. Stay foolish.</q></p>\n"
            "  </div>\n"
            "  <div>\n"
            "    <h3>Blockquote</h3>\n"
            "    <blockquote>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</blockquote>\n"
            "    <cite>Kanye West, Musician</cite>\n"
            "  </div>\n"
            "</section>"
        )
        sections.append("<!-- Blockquotes -->\n" + quotes)

    if stage >= 32:
        typography = (
            "<section>\n"
            "  <header><h2>Typography</h2></header>\n"
            "  <div><address>320 Stewart Avenue, Unit 12<br>New York City<br>NY 10001</address></div>\n"
            "  <div>\n"
            "    <pre><code>&lt;h2&gt;My title&lt;/h2&gt;\n"
            "&lt;p&gt;Proin lacus turpis, feugiat sit amet sollicitudin non, volutpat in libero. Aenean hendrerit ultrices nulla ac lobortis. Vestibulum consectetur nibh vel ante rhoncus faucibus.&lt;/p&gt;</code></pre>\n"
            "  </div>\n"
            "  <div>\n"
            "    <p>Curabitur sit amet turpis cursus massa mollis <mark>highlighted</mark>. Duis finibus leo massa, eget dapibus erat finibus sed. Aenean condimentum sapien magna, eleifend <mark>highlighted</mark> mi consequat ut. Cras nec quam sed sapien ultricies <mark>highlighted</mark> ut sed metus.</p>\n"
            "  </div>\n"
            "</section>"
        )
        sections.append("<!-- Typography -->\n" + typography)

    if stage >= 33:
        table = (
            "<section>\n"
            "  <header><h2>Table</h2></header>\n"
            "  <table>\n"
            "    <thead>\n"
            "      <tr>\n"
            "        <th scope=\"col\">Title</th>\n"
            "        <th scope=\"col\">Director</th>\n"
            "        <th scope=\"col\">Release Date</th>\n"
            "      </tr>\n"
            "    </thead>\n"
            "    <tbody>\n"
            "      <tr><th scope=\"row\">Star Wars: Episode IV - A New Hope</th><td>George Lucas</td><td>May 25, 1977</td></tr>\n"
            "      <tr><th scope=\"row\">Star Wars: Episode V - The Empire Strikes Back</th><td>Irvin Kershner</td><td>May 21, 1980</td></tr>\n"
            "      <tr><th scope=\"row\">Star Wars: Episode VI - Return of the Jedi</th><td>Richard Marquand</td><td>May 25, 1983</td></tr>\n"
            "      <tr><th scope=\"row\">Star Wars: Episode I - The Phantom Menace</th><td>George Lucas</td><td>May 19, 1999</td></tr>\n"
            "      <tr><th scope=\"row\">Star Wars: Episode II - Attack of the Clones</th><td>George Lucas</td><td>May 16, 2002</td></tr>\n"
            "      <tr><th scope=\"row\">Star Wars: Episode III - Revenge of the Sith</th><td>George Lucas</td><td>May 19, 2005</td></tr>\n"
            "    </tbody>\n"
            "  </table>\n"
            "</section>"
        )
        sections.append("<!-- Table -->\n" + table)

    if stage >= 34:
        details = (
            "<section>\n"
            "  <header><h2>Details</h2></header>\n"
            "  <div>\n"
            "    <h3>Default</h3>\n"
            "    <details><summary>Show/Hide me</summary><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></details>\n"
            "  </div>\n"
            "  <div>\n"
            "    <h3>Open</h3>\n"
            "    <details open><summary>Always open</summary><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></details>\n"
            "  </div>\n"
            "</section>"
        )
        sections.append("<!-- Details -->\n" + details)

    if stage >= 38:
        video = (
            "<section>\n"
            "  <header><h2>Video</h2></header>\n"
            "  <video controls loop poster=\"https://intranet-projects-files.s3.amazonaws.com/webstack/thumbnail.jpg\">\n"
            "    <source src=\"https://intranet-projects-files.s3.amazonaws.com/webstack/BigBuckBunny.mp4\" type=\"video/mp4\">\n"
            "    Sorry, your browser doesn't support HTML5 video\n"
            "  </video>\n"
            "</section>"
        )
        sections.append("<!-- Video -->\n" + video)

    if stage >= 39:
        audio = (
            "<section>\n"
            "  <header><h2>Audio</h2></header>\n"
            "  <audio controls>\n"
            "    <source src=\"https://intranet-projects-files.s3.amazonaws.com/webstack/TroubleChapter8_64kb.mp3\" type=\"audio/mpeg\">\n"
            "    Sorry, your browser doesn't support audio element\n"
            "  </audio>\n"
            "</section>"
        )
        sections.append("<!-- Audio -->\n" + audio)

    if stage >= 40:
        iframe = (
            "<section>\n"
            "  <header><h2>Iframe</h2></header>\n"
            "  <div>\n"
            "    <iframe title=\"Holberton School\" width=\"350\" height=\"200\" src=\"https://www.youtube.com/embed/41N6bKO-NVI\">Holberton Sally</iframe>\n"
            "  </div>\n"
            "</section>"
        )
        sections.append("<!-- Iframe -->\n" + iframe)

    main = "<main>\n" + "\n".join(sections) + "\n</main>"
    return page(head, "\n".join([header, main, footer]))


def build_all() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    files: dict[str, str] = {}
    files["0-index.html"] = render_index(0, "Techium")
    files["1-index.html"] = page([], "<head>\n</head>\n<body>\n</body>")
    files["2-index.html"] = render_index(2, "Homepage - Techium")
    files["3-index.html"] = render_index(3, "Homepage - Techium")
    files["article.html"] = render_index(4, "Article - Techium")
    files["5-index.html"] = render_index(5, "Homepage - Techium")
    files["6-index.html"] = render_index(6, "Homepage - Techium")
    files["7-index.html"] = render_index(7, "Homepage - Techium")
    files["8-index.html"] = render_index(8, "Homepage - Techium")
    files["9-index.html"] = render_index(9, "Homepage - Techium")
    files["10-index.html"] = render_index(10, "Homepage - Techium")
    files["11-styleguide.html"] = render_styleguide(11)
    files["12-index.html"] = render_index(12, "Homepage - Techium")
    files["13-styleguide.html"] = render_styleguide(13)
    files["14-index.html"] = render_index(14, "Homepage - Techium")
    files["15-index.html"] = render_index(15, "Homepage - Techium")
    files["16-index.html"] = render_index(16, "Homepage - Techium")
    files["17-index.html"] = render_index(17, "Homepage - Techium")
    files["18-index.html"] = render_index(18, "Homepage - Techium")
    files["about.html"] = render_index(19, "About - Techium")
    files["latest_news.html"] = render_index(19, "Latest news - Techium")
    files["contact.html"] = render_index(19, "Contact - Techium")
    files["20-index.html"] = render_index(20, "Homepage - Techium")
    files["21-index.html"] = render_index(21, "Homepage - Techium")
    files["22-index.html"] = render_index(22, "Homepage - Techium")
    files["23-index.html"] = render_index(23, "Homepage - Techium")
    files["24-index.html"] = render_index(24, "Homepage - Techium")
    files["25-index.html"] = render_index(25, "Homepage - Techium")
    files["26-styleguide.html"] = render_styleguide(26)
    files["27-index.html"] = render_index(27, "Homepage - Techium")
    files["28-styleguide.html"] = render_styleguide(28)
    files["29-index.html"] = render_index(29, "Homepage - Techium")
    files["30-styleguide.html"] = render_styleguide(30)
    files["31-index.html"] = render_index(31, "Homepage - Techium")
    files["32-styleguide.html"] = render_styleguide(32)
    files["33-styleguide.html"] = render_styleguide(33)
    files["34-styleguide.html"] = render_styleguide(34)
    files["35-index.html"] = render_index(35, "Homepage - Techium")
    files["36-index.html"] = render_index(36, "Homepage - Techium")
    files["index.html"] = render_index(37, "Homepage - Techium")
    files["38-styleguide.html"] = render_styleguide(38)
    files["39-styleguide.html"] = render_styleguide(39)
    files["styleguide.html"] = render_styleguide(40)

    for name, content in files.items():
        write(OUT / name, content)

    # Placeholder assets used by the later tasks.
    (OUT / "images").mkdir(parents=True, exist_ok=True)
    for asset in [
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
    ]:
        (OUT / "images" / asset).write_bytes(b"")

    for asset in ["favicon.ico", "favicon.png", "favicon.jpg", "logo-black.png"]:
        (OUT / asset).write_bytes(b"")


if __name__ == "__main__":
    build_all()
