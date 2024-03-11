const field = document.querySelector('#content')
const button = document.querySelector('#submit').addEventListener('click', async (event) => {
    event.preventDefault()

    const content = field.value

    if (content === '' || content === null) {
        console.error('Não pode criar post vazio')
        return
    }

    try {
        const response = await fetch('http://localhost:3030/createPost', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title: 'Nada',
                content: content
            })
        })

        if (response) {
            console.log('Post was created')
            location.reload()
            return;
        }

        console.error('fail to create post')

    } catch (error) {
        console.error('Fail to connect to server', error)
    }
})
