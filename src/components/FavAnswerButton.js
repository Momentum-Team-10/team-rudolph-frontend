import axios from 'axios';

export default function FavAnswerButton({ token, questionId, answerId, loggedUserPk, isAnswerFavorited, setIsAnswerFavorited }) {
    const handleSubmit = (event) => {
        const favoriteApi = `https://questions-t10.herokuapp.com/questions/${questionId}/answers/${answerId}/`
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
                    setIsAnswerFavorited(true)
                }
                else setIsAnswerFavorited(false)
            }
        })
            .catch((error) => console.log(error.message))

    }

    return (
        <>

            {isAnswerFavorited ?
                <img className='fav-button' src='/unfav-star.png' alt='Unfavorite Button' onClick={(event) => handleSubmit(event)} />
                :
                <img className='fav-button' src='/fav-star.png' alt='Favorite Button' onClick={(event) => handleSubmit(event)} />
            }
        </>
    )
}