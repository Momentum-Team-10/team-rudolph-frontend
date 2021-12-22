import axios from 'axios';

export default function FavButton({ token, questionId }) {
    const handleSubmit = (event) => {
        const favoriteApi = `https://questions-t10.herokuapp.com/questions/${questionId}/`
        event.preventDefault()
        axios.patch(favoriteApi, {
            "favorited": []
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }
        ).then(response => {
            if (response) {
            console.log(response)
            }})
            .catch((error) => console.log(error.message))
        
    }

    return (
        <button className='favButton' onClick={(event) => handleSubmit(event)}>Favorite</button>
    )
}