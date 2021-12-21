export default function EditQuestionButton({ setAnswerEditMode }) {
    return <button className='edit-question-button' onClick={() => setAnswerEditMode(true)}>Edit</button>
}