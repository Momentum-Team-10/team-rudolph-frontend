import axios from 'axios'
import { Navigate } from 'react-router-dom';


export default function DeleteQuestionButton({ token, questionId }) {
    const handleSubmit = (event) => {
        const deleteApi = `https://questions-t10.herokuapp.com/questions/${questionId}/`
        event.preventDefault()
        axios.delete(deleteApi,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }
        ).then(response => {
            if (response) {
                return (<Navigate replace to='/'/>)
            
            }})
            .catch((error) => console.log(error.message))
        
    }

    return <button className='deleteQuestionButton' onClick={(event) => handleSubmit(event)}>Delete</button>
}