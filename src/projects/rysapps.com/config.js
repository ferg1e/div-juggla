import projects from './projects.json' with { type: 'json' };
import {contentProjects} from './content-projects.js';

const config = {
    templates: [
        {
            template_path: "template.html",
            output_files: [
                {
                    path: "index.html",
                    values: {
                        title: "Ry's Apps",
                        content: `<main id="home">Hello and welcome to my website. I am a JavaScript developer. I build apps using JavaScript combined with other technologies. Please take a look at my JavaScript <a href="projects.html">projects</a>, and <a href="contact.html">contact</a> me if you need a JavaScript developer.</main>`
                    }
                },
                {
                    path: "projects.html",
                    values: {
                        title: "Projects",
                        content: contentProjects(projects)
                    }
                },
                {
                    path: "contact.html",
                    values: {
                        title: "Contact",
                        content: `<main id="contact">Ry Ferguson<br><a href="mailto:rytf12@gmail.com">rytf12@gmail.com</a><br><a href="https://github.com/ferg1e">github.com/ferg1e</a></main>`
                    }
                }
            ]
        }
    ],
    copy_files: ['styles.css']
}

export default config
