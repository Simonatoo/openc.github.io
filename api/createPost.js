const field = document.querySelector('#content')
const button = document.querySelector('#submit').addEventListener('click', async (event) => {
    event.preventDefault()

    const content = field.value

    if (content === '' || content === null) {
        console.error('Não pode criar post vazio')
        return
    }

    try {
        const response = await fetch('https://4b1e-200-100-197-32.ngrok-free.app/posts', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "69420" 
            },
            body: JSON.stringify({
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
