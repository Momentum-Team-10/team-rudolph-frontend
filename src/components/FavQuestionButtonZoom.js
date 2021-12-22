import axios from 'axios';

export default function FavQuestionButtonZoom({ token, questionId, loggedUserPk, isFavoritedZoom, setIsFavoritedZoom }) {
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
            console.log(response.data)
            if (response) {
                if (response.data.favorited.includes(loggedUserPk)) {
                    setIsFavoritedZoom(true)
                }
                else setIsFavoritedZoom(false)
            }
        })
            .catch((error) => console.log(error.message))

    }

    return (
        <>

            {isFavoritedZoom ?
                <img className='fav-button' src='/fav-star.png' alt='Unfavorite Button' onClick={(event) => handleSubmit(event)} />
                :
                <img className='fav-button' src='/unfav-star.png' alt='Favorite Button' onClick={(event) => handleSubmit(event)} />
            }
        </>
    )
}