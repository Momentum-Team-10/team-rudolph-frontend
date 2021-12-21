import axios from "axios"

export default function DeleteAnswerButton({ questionId, answerId, token, setAnswerData }) {

    const handleSubmit = (event) => {
        const deleteApi = `https://questions-t10.herokuapp.com/questions/${questionId}/answers/${answerId}`
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
                axios
                    .get(`https://questions-t10.herokuapp.com/questions/${questionId}`)
                    .then(response => setAnswerData(response.data.answers))

            }
        })
            .catch((error) => console.log(error.message))
    }

    return <button className='deleteAnswerButton' onClick={(event) => handleSubmit(event)}>Delete</button>
}