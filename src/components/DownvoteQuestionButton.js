import axios from 'axios';

export default function DownvoteQuestionButton({ token, questionId }) {
    const handleSubmit = (event) => {
        const votingApi = `https://questions-t10.herokuapp.com/questions/${questionId}/`
        event.preventDefault()
        axios.patch(votingApi, {
            "downvotes": []
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
        <button className='downvoteButton' onClick={(event) => handleSubmit(event)}>{'\u2B07'}</button>
    )
}