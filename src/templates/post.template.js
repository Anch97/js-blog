// this private method returns HTML layout of one post that is generated depending on given data, adds save and remove buttons
export function renderPost(post, options = {}) {
    const tag = post.type === 'news'
    ? '<li class="tag tag-blue tag-rounded">News</li>'
    : '<li class="tag tag-rounded">Note</li>'
    // checking if there is the element in favorites (checking if post.id is already in localstorage by using JSON.parse)
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const candidate = favorites.find(p => p.id === post.id)
    const button = candidate
    ? `<button class="button-round button-small button-danger" data-id="${post.id}" data-title="${post.title}">Remove</button>`
    : `<button class="button-round button-small button-primary" data-id="${post.id}" data-title="${post.title}">Save</button>`

    return `
        <div class="panel">
            <div class="panel-head">
                <p class="panel-title">${post.title}</p>
                <ul class="tags">
                ${tag}
                </ul>
            </div>
            <div class="panel-body">
                <p class="multi-line">${post.fulltext}</p>
            </div>
            <div class="panel-footer w-panel-footer">
                <small>${post.date}</small>
                ${options.withButton ? button : ''}
            </div>
        </div>
    `
}