import { useState } from 'react'
import axios from 'axios'

export default function QuestionForm({ token }) {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')

    const handleSubmit = (event) => {
        const questionApi = "https://questions-t10.herokuapp.com/questions/"
        event.preventDefault()
        axios.post(questionApi, {
            "title": questionTitle,
            "body": questionBody,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }
        ).then(response => {
            setQuestionTitle('')
            setQuestionBody('')
            return response
        })
    }

    const handleChange = (inputType, event) => {
        if (inputType === 'questionTitle') {
            setQuestionTitle(event.target.value)
        }
        if (inputType === 'questionBody') {
            setQuestionBody(event.target.value)
        }
    }

    return (
        <div className='form-container'>
            <form className='question-form' onSubmit={handleSubmit}>
                <label className='form-label'>Question Title: </label>
                <input
                    className='input-field'
                    type='text'
                    placeholder='Question title'
                    value={questionTitle}
                    onChange={(event) => handleChange('questionTitle', event)}
                />
                <label className='form-label'>Question Details: </label>
                <textarea
                    className='textarea-field'
                    type='text'
                    placeholder='Question details'
                    value={questionBody}
                    onChange={(event) => handleChange('questionBody', event)}
                />
                <button className='submit-button'>Submit Question</button>
            </form>
        </div>

    )
}