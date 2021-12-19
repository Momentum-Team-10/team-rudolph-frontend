import FavButton from "./FavButton"

export default function QuestionCardZoom(props) {
    const {questionTitle, questionText, attachments, user, token, questionId} = props

    return (
        <div className='question-card-zoom'>
            <h3 className='question-zoom-title'>{questionTitle}</h3>
            <p className='question-zoom-text'>{questionText}</p>
            <FavButton 
                user={user}
                token={token}
                questionId={questionId}
                />
            <div className='attachments'>Attachments are mapped out here:
                <>{attachments}</>
            </div>
        </div>
    )
}