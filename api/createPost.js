const field = document.querySelector('#content')
const button = document.querySelector('#submit').addEventListener('click', async (event) => {
    event.preventDefault()

    const content = field.value

    if (content === '' || content === null) {
        console.error('Não pode criar post vazio')
        return
    }

    try {
        const response = await fetch('https://93dc-2804-7f0-b2c1-b8a4-8d37-ea5f-16b0-8323.ngrok-free.app/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
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
