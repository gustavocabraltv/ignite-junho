type PostProps = { 
    author: string
    description: string
}

export function Post({author, description}:PostProps){ 
    return(<>
       <p>Author: {author}</p>
        <p>Description:{description}</p>
        </>

    )
}