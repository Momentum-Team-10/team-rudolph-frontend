export default function QuestionCard(props) {
    const {questionTitle, votesCounter, answersCounter, viewsCounter} = props

    return (
        <div className='questionCard'>
            <p className='questionTitle'>{questionTitle}</p>
            <div className='questionCardCounters'>
                <div>Votes: {votesCounter}</div>
                <div>Answers: {answersCounter}</div>
                <div>Views: {viewsCounter}</div>
            </div>
            <div className='lowerRightPlaceholder'>Misc Info</div>
        </div>
    )
}