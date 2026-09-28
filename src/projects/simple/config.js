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
                        content: "Blah blah blah."
                    }
                }
            ]
        }
    ]
}

export default config
