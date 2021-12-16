export default function QuestionCard(props) {
    const {questionTitle, votesCounter, answersCounter, author} = props

    return (
        <div className='question-card'>
            <h3 className='question-title'>{questionTitle}</h3>
            <div className='question-card-counters'>
                <div>Author: {author}</div>
                <div>Votes: {votesCounter}</div>
                <div>Answers: {answersCounter}</div>
            </div>
            <div className='lower-right-placeholder'>Misc Info</div>
        </div>
    )
}