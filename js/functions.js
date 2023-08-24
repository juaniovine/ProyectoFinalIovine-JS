// navbar links
links.forEach((menu) => {
    uls.innerHTML+= `
        <li class="nav-item">
            <a class="nav-link" href="/content/${menu.page}.html">${menu.link}</a>
        </li>
    `
})

