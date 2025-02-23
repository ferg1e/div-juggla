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

module.exports.getNavItems = getNavItems
