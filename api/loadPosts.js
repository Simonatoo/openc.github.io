async function GetPosts() {
    try {
        const posts = await fetch('https://4b1e-200-100-197-32.ngrok-free.app/posts', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "69420" 
            }
        })
        console.log(posts)
        const response = await posts.json()
        console.log(response)

        if(response) {
            LoadPosts(response)
            return 
        }

        console.error('Fail to get post')
    } catch (error) {
        console.error('Fail to connect to server', error)
    }
}


function LoadPosts(posts) {

    const postlist = document.querySelector("#postList")

    posts.map(post => {
        const newPost = document.createElement('my-post')
        const hr = document.createElement('hr')
        newPost.setAttribute('content', post.content)
        // newPost.setAttribute('data', post.create_at)
        postlist.appendChild(newPost)
        postlist.appendChild(hr)
    })
}