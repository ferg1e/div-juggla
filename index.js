const fs = require('fs')

const templateText = fs.readFileSync('template.html', 'utf8')

const pages = [
    {
        title: "Ry's Apps",
        content: `Hello, I am a freelance software developer. I usually develop web apps. I have also built CLI apps, iOS apps, desktop apps, libraries, frameworks and video games. You can see past projects on the <a href="projects.html">projects page</a>.`,
        filename: 'index.html',
        nav_title: 'home',
        nav_url: '/',
        content_attrs: 'class="non-proj"'
    },
    {
        title: "Projects",
        content: contentProjects(),
        filename: 'projects.html',
        nav_title: 'projects',
        nav_url: 'projects.html',
    },
    {
        title: "Contact",
        content: `<div style="text-align: center">Ry Ferguson<br><a href="mailto:rytf12@gmail.com">rytf12@gmail.com</a><br><a href="tel:9492732575">(949) 273-2575</a><br><a href="https://github.com/ferg1e">github.com/ferg1e</a></div>`,
        filename: 'contact.html',
        nav_title: 'contact',
        nav_url: 'contact.html',
        content_attrs: 'class="non-proj"'
    },
]

function contentProjects() {
    const projects = [
        {
            title: "Git Visualization",
            content: `I developed a Git commit visualization. It's almost identical to the GitHub commit visualization but it also shows commit messages and you can use multiple square colors. Some of the projects on this page have one of these visualizations indicated by a green Git link. These visualizations require a browser width of at least 1,200 pixels.`,
            images: [
                {
                    thumb: 'img/mrsgs/001-sml.jpg',
                    image: 'img/mrsgs/001.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'Node'],
            git_vis: 't/git-vis-git-vis.html',
            github: 'https://github.com/ferg1e/mrs-green-squares',
        },
        {
            title: "Restaurant Management System",
            content: `An existing client of mine opened a restaurant and had me build a restaurant management system. I planned out most of the project and then implemented the recipe system and a portion of the wholesale ordering system. Raw ingredients, batch items and menu items compose recipes. Owners, chefs and customers use the recipe system.`,
            images: [
                {
                    thumb: 'img/th/bth-a-sml.png',
                    image: 'img/th/bth-a.png',
                },
                {
                    thumb: 'img/th/bth-b-sml.png',
                    image: 'img/th/bth-b.png',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            git_vis: 't/git-vis-rms.html',
        },
        {
            title: "Video Game",
            content: `I built a game engine and video game for iOS. The game loop uses a fixed physics time step and interpolates leftover time. Another notable feature of this that I built was the text glyph rendering system. The full version has 30 levels and the lite version has 12 levels. The first time I ever used Git was on this project.`,
            images: [
                {
                    thumb: 'img/pm/pm-12-sml.png',
                    image: 'img/pm/pm-12.png',
                },
                {
                    thumb: 'img/pm/pm-16-sml.png',
                    image: 'img/pm/pm-16.png',
                },
                {
                    thumb: 'img/pm/pm-35-sml.png',
                    image: 'img/pm/pm-35.png',
                },
            ],
            stack: ['C++', 'OpenGL ES'],
            git_vis: 't/git-vis-ios-game.html',
        },
        {
            title: "Internet Forum",
            content: "This is an internet forum that I developed. It has an OAuth 2 API. The nested comments utilize the Postgres ltree extension. The moderation system is similar to Reddit where each sub can have a different moderator.",
            images: [
                {
                    thumb: 'img/ps/cc004-sml.png',
                    image: 'img/ps/cc004.png',
                },
                {
                    thumb: 'img/ps/cc005-sml.png',
                    image: 'img/ps/cc005.png',
                },
                {
                    thumb: 'img/ps/cc003-sml.jpg',
                    image: 'img/ps/cc003.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'Node', 'PostgresSQL'],
            git_vis: 't/git-vis-forum.html',
            github: 'https://github.com/ferg1e/comment-castles'
        },
        {
            title: "Furniture Rental System",
            content: `I planned and coded this furniture rental system for a prop rental business in New York City. I worked on this with the owner and the warehouse manager. It uses a two phase shopping cart and items are held for customers before they pay. The admin area contains several calendar tools.`,
            images: [
                {
                    thumb: 'img/dt/dovetail-a-sml.jpg',
                    image: 'img/dt/dovetail-a.jpg',
                },
                {
                    thumb: 'img/dt/dovetail-d-sml.jpg',
                    image: 'img/dt/dovetail-d.jpg',
                },
                {
                    thumb: 'img/dt/dovetail-g-sml.jpg',
                    image: 'img/dt/dovetail-g.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Braintree'],
            git_vis: 't/git-vis-furniture.html',
        },
        {
            title: "AI Gaming Platform",
            content: `Someone with a PhD in AI hired me to build a gaming site for AIs. Games connect to a typical WebSocket server for realtime multiplayer gaming. Each AI player is a separate WebSocket server connected to the browser. The browser pushes a screenshot to each AI player every half-second. We prototyped with a simple "clicks" game.`,
            images: [
                {
                    thumb: 'img/ai/game-screen-63-np-sml.png',
                    image: 'img/ai/game-screen-63-np.png',
                },
            ],
            stack: ['JavaScript', 'Phaser', 'Python', 'Django'],
            git_vis: 't/git-vis-ai-gaming.html',
        },
        {
            title: "Stock Screener",
            content: `I built a stock screener for a financial services startup. It's a math equations editor with hundreds of financial variables. This project contained a tricky recursive menu implementation, and I also built autocomplete, tooltips and drag and drop.`,
            images: [
                {
                    thumb: 'img/ss/equations-b-sml.jpg',
                    image: 'img/ss/equations-b.jpg',
                },
                {
                    thumb: 'img/ss/equations-c-sml.jpg',
                    image: 'img/ss/equations-c.jpg',
                },
                {
                    thumb: 'img/ss/equations-d-sml.jpg',
                    image: 'img/ss/equations-d.jpg',
                },
            ],
            stack: ['ActionScript'],
        },
        {
            title: "CRM System",
            content: `I made a CRM system for the automotive industry. This system allows customers to efficiently request that operations be performed on their sales data. For example, a customer can fill out a form to request that all VIN numbers be cleaned. This project also includes message boards, email alerts, search pages and automatic billing.`,
            images: [
                {
                    thumb: 'img/dr/requests-a-sml.jpg',
                    image: 'img/dr/requests-a.jpg',
                },
                {
                    thumb: 'img/dr/requests-d-sml.jpg',
                    image: 'img/dr/requests-d.jpg',
                },
                {
                    thumb: 'img/dr/requests-n-sml.jpg',
                    image: 'img/dr/requests-n.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            git_vis: 't/git-vis-crm.html',
        },
        {
            title: "Maps",
            content: `I programmed a mapping system that has a city map pointing to multiple neighborhood maps. The background image, city points of interest, icons, legends and property lot colors are data driven so that non-developers can easily create more than one. There's a zoom feature for the city map. People looking to buy a home view this app when it's running on a kiosk.`,
            images: [
                {
                    thumb: 'img/fm/maps-b-sml.jpg',
                    image: 'img/fm/maps-b.jpg',
                },
                {
                    thumb: 'img/fm/maps-j-sml.png',
                    image: 'img/fm/maps-j.png',
                },
                {
                    thumb: 'img/fm/maps-i-sml.jpg',
                    image: 'img/fm/maps-i.jpg',
                },
            ],
            stack: ['ActionScript'],
        },
        {
            title: "Virtual Crowd",
            content: `I created this web application where people can join a virtual crowd. If you sign up, then you'll be added to the virtual crowd as a little square. You can pick your square color or use a tiny avatar. And you can write a message that shows when people roll over your square.`,
            images: [
                {
                    thumb: 'img/cm/march-a-sml.jpg',
                    image: 'img/cm/march-a.jpg',
                },
                {
                    thumb: 'img/cm/march-b-sml.jpg',
                    image: 'img/cm/march-b.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        },
        {
            title: "Photo Gallery",
            content: `I made a photo gallery website for a set designer. All photos are shown in a masonry grid layout. If you click one of the grid photos the UI changes to a slideshow with larger versions of the images.`,
            images: [
                {
                    thumb: 'img/jrd/jrd-a-sml.jpg',
                    image: 'img/jrd/jrd-a.jpg',
                },
                {
                    thumb: 'img/jrd/jrd-b-sml.jpg',
                    image: 'img/jrd/jrd-b.jpg',
                },
                {
                    thumb: 'img/jrd/jrd-c-sml.jpg',
                    image: 'img/jrd/jrd-c.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
            git_vis: 't/git-vis-masonry.html',
        },
        {
            title: "Recommendation System",
            content: `I developed a product recommendation engine for hair products. Users answer questions about their hair, and then it recommends shampoos and brushes. There are about 150 different answer combinations. It has a CMS. I built version 2 of this four years after building version 1.`,
            images: [
                {
                    thumb: 'img/ak/acca-b-sml.jpg',
                    image: 'img/ak/acca-b.jpg',
                },
                {
                    thumb: 'img/ak/acca-d-sml.jpg',
                    image: 'img/ak/acca-d.jpg',
                },
                {
                    thumb: 'img/ak/acca-f-sml.jpg',
                    image: 'img/ak/acca-f.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            git_vis: 't/git-vis-hair.html',
        },
        {
            title: "Lead Retrieval System",
            content: `I created a lead retrieval system for trade shows. We create badges for all attendees. Then trade show vendors scan attendee badges and the attendees answer questions on a tablet. The attendee answers are uploaded to a database and the vendors can download them later via a web portal.`,
            images: [
                {
                    thumb: 'img/tl/leads-a-sml.jpg',
                    image: 'img/tl/leads-a.jpg',
                },
                {
                    thumb: 'img/tl/leads-b-sml.jpg',
                    image: 'img/tl/leads-b.jpg',
                },
                {
                    thumb: 'img/tl/leads-c-sml.jpg',
                    image: 'img/tl/leads-c.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'CodeREADr'],
            git_vis: 't/git-vis-leads.html',
        },
        {
            title: "E-Card System",
            content: `I built this soccer e-card site. Users select clothing and a soundbite for a soccer player and then send it to someone else via email. I only had an equity stake and another company bought it.`,
            images: [
                {
                    thumb: 'img/ec/sapl-a-sml.jpg',
                    image: 'img/ec/sapl-a.jpg',
                },
                {
                    thumb: 'img/ec/sapl-d-sml.jpg',
                    image: 'img/ec/sapl-d.jpg',
                },
            ],
            stack: ['ActionScript', 'PHP', 'MySQL'],
        },
        {
            title: "Space MMO",
            content: `This is a space MMO video game that I prototyped. Players start with one empty star system. You can expand out to other stars and galaxies using spaceships. Players can build cities, energy harvesters and iron harvesters on planets and moons. This game was inspired by Neko Atsume: Kitty Collector and is meant to be much more casual than typical space MMOs.`,
            images: [
                {
                    thumb: 'img/mt/sapu-c-sml.jpg',
                    image: 'img/mt/sapu-c.jpg',
                },
                {
                    thumb: 'img/mt/sapu-b-sml.jpg',
                    image: 'img/mt/sapu-b.jpg',
                },
                {
                    thumb: 'img/mt/sapu-h-sml.jpg',
                    image: 'img/mt/sapu-h.jpg',
                },
            ],
            stack: ['Babylon.js', 'PHP', 'MySQL'],
            git_vis: 't/git-vis-space-mmo.html',
        },
        {
            title: "Single Item E-commerce Site",
            content: `I built this single item e-commerce site. Initially, I spent three months making changes to the old site. Then they asked me to rewrite the site. These screenshots are from the rewrite.`,
            images: [
                {
                    thumb: 'img/man1/man1-a-sml.jpg',
                    image: 'img/man1/man1-a.jpg',
                },
                {
                    thumb: 'img/man1/man1-b-sml.jpg',
                    image: 'img/man1/man1-b.jpg',
                },
                {
                    thumb: 'img/man1/man1-c-sml.jpg',
                    image: 'img/man1/man1-c.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'PayPal'],
            git_vis: 't/git-vis-man1.html',
        },
        {
            title: "Webpage CMS",
            content: `I created this webpage CMS. You fill out a web form to create a new webpage and navigation link. I used to use this system for my portfolio site, but now I use a static site generator instead. This project is on my GitHub.`,
            images: [
                {
                    thumb: 'img/ts/thiss-a-sml.jpg',
                    image: 'img/ts/thiss-a.jpg',
                },
                {
                    thumb: 'img/ts/thiss-b-sml.jpg',
                    image: 'img/ts/thiss-b.jpg',
                },
                {
                    thumb: 'img/ts/thiss-d-sml.jpg',
                    image: 'img/ts/thiss-d.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            git_vis: 't/git-vis-this-site.html',
            github: 'https://github.com/ferg1e/this-site'
        },
        {
            title: "Reporting Tool",
            content: `I made this reporting tool. It shows results of marketing campaigns. Part of this project is web scraping that runs daily. A super admin can create admins, and admins can create login codes for customers. The admin area contains an intricate AJAX search tool.`,
            images: [
                {
                    thumb: 'img/gr/reporting-c-sml.jpg',
                    image: 'img/gr/reporting-c.jpg',
                },
                {
                    thumb: 'img/gr/reporting-d-sml.jpg',
                    image: 'img/gr/reporting-d.jpg',
                },
                {
                    thumb: 'img/gr/reporting-f-sml.jpg',
                    image: 'img/gr/reporting-f.jpg',
                },
                {
                    thumb: 'img/gr/reporting-g-sml.jpg',
                    image: 'img/gr/reporting-g.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        },
        {
            title: "English Learning App",
            content: `I developed an English language learning application for a teacher. The system dynamically connects 20,000 word pronunciation mp3s to words in a chunk of text. Users can click a word to play the pronunciation. Consonant-vowel patterns are automatically colorized and decorated with icons. There is a CMS to manually colorize any letter of any word. A previous developer spent two years on this and failed because he was following the teacher\'s architecture. I changed the architecture and built it in one month.`,
            images: [
                {
                    thumb: 'img/fat-rat/fat-rat-a-sml.jpg',
                    image: 'img/fat-rat/fat-rat-a.jpg',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        },
        {
            title: "Photo Booth App",
            content: `I worked on this 360 photo booth application. This was an existing project and I completed 30 tasks for it. After that, they asked me to rewrite the whole thing.`,
            images: [
                {
                    thumb: 'img/revo/revo-001-sml.jpg',
                    image: 'img/revo/revo-001.jpg',
                },
                {
                    thumb: 'img/revo/revo-002-sml.jpg',
                    image: 'img/revo/revo-002.jpg',
                },
                {
                    thumb: 'img/revo/revo-003-sml.jpg',
                    image: 'img/revo/revo-003.jpg',
                },
            ],
            stack: ['Dart', 'Flutter'],
            git_vis: 't/git-vis-photo-booth.html',
        },
        {
            title: "Toshiba E-learning System",
            content: `I developed a large CBT e-learning application for the Toshiba e-BRIDGE printer. There are 25 lessons each with about 20 screens. Most of the lessons are a Windows emulation built with screenshots of the real workflow. An interesting part of this project was writing code for a network traffic animation that was orange balls moving along a grid (see the third screenshot here). The orange balls had to perfectly overlap at the intersections.`,
            images: [
                {
                    thumb: 'img/ebridge/ebridge-a-small.jpg',
                    image: 'img/ebridge/ebridge-a.jpg',
                },
                {
                    thumb: 'img/ebridge/ebridge-e-small.jpg',
                    image: 'img/ebridge/ebridge-e.jpg',
                },
                {
                    thumb: 'img/ebridge/ebridge-h-small.jpg',
                    image: 'img/ebridge/ebridge-h.jpg',
                },
                {
                    thumb: 'img/ebridge/ebridge-l-small.jpg',
                    image: 'img/ebridge/ebridge-l.jpg',
                },
            ],
            stack: ['ActionScript'],
        },
        {
            title: "Payments System",
            content: `I built a payments system for a digital good. The user can purchase a limited or full annual subscription. Users can upgrade from limited to full. There are promo codes. The owner can use an admin area to adjust the prices and promo codes. This uses the Braintree Drop-in UI.`,
            images: [
                {
                    thumb: 'img/num/001-sml.png',
                    image: 'img/num/001.png',
                },
                {
                    thumb: 'img/num/002-sml.png',
                    image: 'img/num/002.png',
                },
                {
                    thumb: 'img/num/003-sml.png',
                    image: 'img/num/003.png',
                },
            ],
            stack: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP', 'Braintree'],
        }
    ]

    let out = ''

    for(let i = 0; i < projects.length; ++i) {
        const p = projects[i]
        const pid = p.title.toLowerCase().split(' ').join('-')
        let imagesHtml = ''

        if(p.images.length > 0) {
            imagesHtml += '<ul class="thumbs">'

            for(let j = 0; j < p.images.length; ++j) {
                const o = p.images[j]

                imagesHtml += `<li><a href="${o.image}"><img src="${o.thumb}"></a></li>`
            }

            imagesHtml += '</ul>'
        }

        //
        let stackHtml = ''
        const isStack = p.stack && p.stack.length > 0
        const isGitVis = typeof p.git_vis !== 'undefined'
        const isGitHub = typeof p.github !== 'undefined'
        
        if(isStack || isGitVis || isGitHub) {
            stackHtml += '<ul class="stack">'

            if(isStack) {
                for(let j = 0; j < p.stack.length; ++j) {
                    stackHtml += `<li><em>${p.stack[j]}</em></li>`
                }
            }

            if(isGitVis) {
                stackHtml += `<li><a href="${p.git_vis}">Git</a></li>`
            }

            if(isGitHub) {
                stackHtml += `<li><a class="github" href="${p.github}">GitHub</a></li>`
            }

            stackHtml += '</ul>'
        }

        //
        const h2Html = `<h2><a href="#${pid}">${p.title}</a></h2>`
        const contentHtml = `<div>${p.content}</div>`

        out += `<div id="${pid}" class="proj">${h2Html}${contentHtml}${stackHtml}${imagesHtml}</div>`
    }

    return out
}

//
function getNavItems(pages, currPage) {
    let r = ''

    for(let i = 0; i < pages.length; ++i) {
        const p = pages[i]
        const cssClass = i == currPage
            ? ' class="curr-nav"'
            : ''

        r += `<li><a href="${p.nav_url}"${cssClass}>${p.nav_title}</a></li>`
    }

    return r
}

//
for(let i = 0; i < pages.length; ++i) {
    const page = pages[i]

    const html = templateText
        .replace('{{title}}', page.title)
        .replace('{{content_attrs}}', page.content_attrs ? ' ' + page.content_attrs : '')
        .replace('{{content}}', page.content)
        .replace('{{nav_items}}', getNavItems(pages, i))

    fs.writeFile(
        page.filename,
        html,
        error => {
            if(error) {
                //console.log(error)
            }
            else {
                //console.log('saved')
            }
        }
    )
}
