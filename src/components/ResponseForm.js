import { useState } from 'react'
import axios from 'axios'

export default function ResponseForm({ token, questionId, setAnswerData, setNumAnswers }) {
    const [responseBody, setResponseBody] = useState('')

    const handleSubmit = (event) => {
        const responseApi = `https://questions-t10.herokuapp.com/questions/${questionId}/answers/`
        event.preventDefault()
        if (responseBody !== '') {
            axios.post(responseApi, {
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
                    setNumAnswers(response.data.answers.length)
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
                <label className='form-label'>Add response: </label>
                <textarea
                    className='textarea-field'
                    type='text'
                    placeholder='Response text'
                    value={responseBody}
                    onChange={(event) => handleChange('responseBody', event)}
                />
                <button className='submit-button'>Submit</button>
            </form>
        </div>
    )
}