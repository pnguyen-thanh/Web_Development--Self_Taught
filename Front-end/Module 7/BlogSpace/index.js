let dataArr = []
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")

const renderPosts = () => {
    const blogPost = dataArr.map(post => `<h3>${post.title}</h3>
                                        <p>${post.body}</p>
                                        <hr/>`).join('')

    document.getElementById('blog-post').innerHTML = blogPost
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: 'GET'})
    .then(response => response.json())
    .then(data => {
        dataArr = data.slice(0, 5)
        renderPosts()

        document.getElementById('btn').addEventListener('click', e => {
            e.preventDefault()
            let title = titleInput.value
            let body = bodyInput.value
            const data = {
                title: title,
                body: body
            }
            const options = {
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(data)
            }
            fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
                .then(response => response.json())
                .then(post => {
                    dataArr.unshift(post)
                    renderPosts()
                })
                .catch(error => console.error(error))
                title = ""
                body = ""
                titleInput.value = ''
                bodyInput.value = ''
        })
    })
    .catch(error => {
        console.error(error)
    })