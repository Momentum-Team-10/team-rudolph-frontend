import { Link } from 'react-router-dom';

export default function QuestionCard(props) {
    const {questionTitle, votesCounter, answersCounter, author, pk, questionId} = props

    return (
        <div className='question-card container card'>
            <Link className='question-card-title-link' to={`/questions/${questionId}`} key={questionId}>
                <h3 className='question-card-title'>{questionTitle}</h3>
            </Link>
            <div className='question-card-counters'>
                <Link to={`user/${author}`} state={{userPk: pk}}>
                    <div className='author-link'>Author: {author}</div>
                </Link>   
                <div>Votes: {votesCounter}</div>
                <div>Answers: {answersCounter}</div>
            </div>
            <div className='lower-right-placeholder'>Misc Info</div>
        </div>
    )
}