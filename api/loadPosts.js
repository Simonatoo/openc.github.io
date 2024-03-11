async function GetPosts() {
    try {
        const posts = await fetch('https://93dc-2804-7f0-b2c1-b8a4-8d37-ea5f-16b0-8323.ngrok-free.app/posts')
        const response = await posts.json()

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
        newPost.setAttribute('data', post.create_at)
        postlist.appendChild(newPost)
        postlist.appendChild(hr)
    })
}