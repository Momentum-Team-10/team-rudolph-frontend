export default function QuestionCardZoom(props) {
    const { questionTitle, questionText, votes } = props

    return (
        <div className='question-card-zoom card'>
            <h3 className='question-card-title'>{questionTitle}</h3>
            <p className='question-zoom-text'>{questionText}</p>
            <p className='vote-score'>Score: {votes}</p>
        </div>
    )
}