export default function QuestionCard(props) {
    const {questionTitle, votesCounter, answersCounter, viewsCounter} = props

    return (
        <div className='question-card'>
            <h3 className='question-title'>{questionTitle}</h3>
            <div className='question-card-counters'>
                <div>Votes: {votesCounter}</div>
                <div>Answers: {answersCounter}</div>
                <div>Views: {viewsCounter}</div>
            </div>
            <div className='lower-right-placeholder'>Misc Info</div>
        </div>
    )
}