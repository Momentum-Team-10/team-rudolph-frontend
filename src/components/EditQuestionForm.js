import { useState } from 'react'
import axios from 'axios'

export default function EditQuestionForm({ token, questionId, setQuestionEditMode, questionText, setQuestionText }) {
    const [questionBody, setQuestionBody] = useState('')

    const handleSubmit = (event) => {
        const questionEditApi = `https://questions-t10.herokuapp.com/questions/${questionId}/`
        event.preventDefault()
        axios.patch(questionEditApi, {
            "body": questionBody,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }
        ).then(response => {
            setQuestionText(questionBody)
            setQuestionBody('')
            setQuestionEditMode(false)
            return response
        })
    }

    const handleChange = (inputType, event) => {
        if (inputType === 'questionBody') {
            setQuestionBody(event.target.value)
        }
    }

    return (
        <div className='form-container'>
            <form className='question-edit-form' onSubmit={handleSubmit}>
                <label className='form-label'>Question Details: </label>
                <textarea
                    className='textarea-field'
                    type='text'
                    placeholder={questionText}
                    value={questionBody}
                    onChange={(event) => handleChange('questionBody', event)}
                />
                <button className='submit-button'>Submit Changes</button>
            </form>
            <button className='cancel-button' onClick={() => setQuestionEditMode(false)}>Cancel</button>
        </div>

    )
}