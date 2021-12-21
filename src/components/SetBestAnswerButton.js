import axios from 'axios';


export default function SetBestAnswerButton({ token, questionId, answerId }) {
    const handleSubmit = (event) => {
        const bestAnswerApi = `https://questions-t10.herokuapp.com/questions/${questionId}/`
        event.preventDefault()
        axios.patch(bestAnswerApi, {
            "answered": answerId
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }
        ).then(response => {
            if (response) {
                return response
            }})
            .catch((error) => console.log(error.message))
        
    }

    return (
        <button className='bestAnswerButton' onClick={(event) => handleSubmit(event)}>Best Answer?</button>
    )
}