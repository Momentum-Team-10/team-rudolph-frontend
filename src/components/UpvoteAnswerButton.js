import axios from 'axios';

export default function UpvoteAnswerButton({ token, questionId, answerId }) {
    const handleSubmit = (event) => {
        const votingApi = `https://questions-t10.herokuapp.com/questions/${questionId}/answers/${answerId}/`
        event.preventDefault()
        axios.patch(votingApi, {
            "upvotes": []
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
        <button className='upvoteButton' onClick={(event) => handleSubmit(event)}>{'\u2B06'}</button>
    )
}