const config = {
    templates: [
        {
            template_path: "template.html",
            default_values: {
                title: "default title",
                content: "default content",
            },
            output_files: [
                {
                    path: "index.html",
                    values: {
                        title: "Home",
                        content: `welcome to my site, i hope you like it a lot and have a very good day. There is an <a href="about.html">about</a> page and a <a href="contact.html">contact</a> page.`
                    }
                },
                {
                    path: "about.html",
                    values: {
                        title: "About Me",
                        content: `about me ... blah blah bee blah blee. blah blah bee blah blee. blah blah bee blah blee. blah blah bee blah blee. blah blah bee blah blee.`
                    }
                },
                {
                    path: "contact.html",
                    values: {
                        title: "Contact",
                        content: `contact page. boooo bo booooo baaa. boooo bo booooo baaa. boooo bo booooo baaa. boooo bo booooo baaa. boooo bo booooo baaa. boooo bo booooo baaa!`
                    }
                }
            ]
        }
    ]
}

export default config
