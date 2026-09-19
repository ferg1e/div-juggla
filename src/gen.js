function gen(templateText, placeholderValues) {
    let outText = templateText

    for(const placeholder in placeholderValues) {
        const value = placeholderValues[placeholder]
        outText = outText.replace(
            `{{${placeholder}}}`,
            value
        )
    }

    return outText
}

module.exports.gen = gen
