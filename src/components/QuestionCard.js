import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function QuestionCard(props) {
    const {questionTitle, votes, answersCounter, author, pk} = props

    return (
        <div className='question-card'>
            <h3 className='question-title'>{questionTitle}</h3>
            <div className='question-card-counters'>
                <Link to={`user/${author}`} state={{userPk: pk}}>
                    <div>Author: {author}</div>
                </Link>   
                <div>Votes: {votes}</div>
                {answersCounter && <div>Answers: {answersCounter}</div>}
            </div>
            <div className='lower-right-placeholder'>Misc Info</div>
        </div>
    )
}