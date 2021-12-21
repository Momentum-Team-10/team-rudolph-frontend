export default function EditQuestionButton({setQuestionEditMode}) {
    return <button className='edit-question-button' onClick={() => setQuestionEditMode(true)}>Edit</button>
}