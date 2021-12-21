import { useState } from 'react'
import axios from 'axios'

export default function EditAnswerForm({ token, questionId, answerId, setAnswerData, answerText, setAnswerEditMode }) {
    const [responseBody, setResponseBody] = useState(answerText)

    const handleSubmit = (event) => {
        const responseApi = `https://questions-t10.herokuapp.com/questions/${questionId}/answers/${answerId}/`
        event.preventDefault()
        if (responseBody !== '') {
            axios.patch(responseApi, {
                "body": responseBody,
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
                    }
                }
            ).then(response => {
                setResponseBody('')
                axios
                .get(`https://questions-t10.herokuapp.com/questions/${questionId}/`)
                .then(response => {
                    setAnswerData(response.data.answers)
                    setAnswerEditMode(false)
                })
                return response
                
            })
        }
    }

    const handleChange = (inputType, event) => {
        if (inputType === 'responseBody') {
            setResponseBody(event.target.value)
        }
    }

    return (
        <div className='form-container'>
            <form className='response-form' onSubmit={handleSubmit}>
                <label className='form-label'>Edit response: </label>
                <textarea
                    className='textarea-field'
                    type='text'
                    value={responseBody}
                    onChange={(event) => handleChange('responseBody', event)}
                />
                <button className='submit-button'>Save Changes</button>
            </form>
            <button className='cancel-button' onClick={() => setAnswerEditMode(false)}>Cancel</button>
        </div>
    )
}