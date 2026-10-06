# Div Juggla

Div Juggla is a static site generator that I initially made for my portfolio site [rysapps.com](https://www.rysapps.com). But now rysapps.com is one of two sample projects that comes with the generator.

## Install & Run

- `git clone https://github.com/ferg1e/div-juggla.git ssg`
- `cd ssg`
- Now you can generate either of the two sample projects by running `node src/core/index.js simple` or `node src/core/index.js rysapps.com`
- After you generate the sample projects using the above commands the `src/projects/simple/out` and `src/projects/rysapps.com/out` directories will contain the static sites. You can simply go into these `out` directories and double click `index.html` to view the site.

## How It Works

Each separate project needs to have a directory in `src/projects`. For this example we'll use `src/projects/cat`. So the project directory or project root directory is `src/projects/cat` and the project `out` directory is `src/projects/cat/out`. The project root directory needs at minimum a `config.js` and one template file.

There are only two conceptual building blocks.

The first building block is template files and the `templates` array in your project's `config.js`. Template files go in your project root directory. A template file can be any text file. You put placeholders in template files and they are replaced with values when you generate. Placeholders use double curly braces, for example `{{title}}`. Here is an example HTML template with a filename of `template.html`:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>{{title}}</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body><main>{{content}}</main></body>
</html>
```

The `templates` array in `config.js` looks like this:

```javascript
const config = {
    templates: [
        {
            template_path: "template.html",
            output_files: [
                {
                    path: "index.html",
                    values: {
                        title: "my title",
                        content: "blah blah blah"
                    }
                },
                ...
            ]
        },
        ...
    ]
}

export default config
```

For each template, you specify the `template_path` and an array of files you want to generate in `output_files`. You can use multiple template files and each one can generate multiple `output_files`.

The second building block is copying a file from the project root directory into the project `out` directory. This is useful for CSS files, JavaScript files and image files. Specify the files to be copied in `config.js` using the `copy_files` array:

```js
const config = {
    templates: [
        ...
    ],
    copy_files: ['styles.css']
}

export default config
```

Once you have all that set up you can run `index.js` to generate your static site into the project `out` directory. For this example you would run `node src/core/index.js cat`.
