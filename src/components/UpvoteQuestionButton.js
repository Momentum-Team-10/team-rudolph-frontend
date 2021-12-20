import axios from 'axios';
import { useState } from 'react';

export default function UpvoteQuestionButton({ token, questionId, setQuestionVotes }) {
    const handleSubmit = (event) => {
        const votingApi = `https://questions-t10.herokuapp.com/questions/${questionId}/`
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
                setQuestionVotes(response.data.votes)
            }})
            .catch((error) => console.log(error.message))
        
    }

    return (
        <button className='upvoteButton' onClick={(event) => handleSubmit(event)}>{'\u2B06'}</button>
    )
}