import axios from 'axios';

export default function FavButton({ user, token, questionId }) {
    const handleSubmit = (event) => {
        const favoriteApi = `https://questions-t10.herokuapp.com/questions/${questionId}`
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
            
            return response
        })
    }

    return (
        <button className='favButton' onClick={(event) => handleSubmit(event)}>Favorite</button>
    )
}