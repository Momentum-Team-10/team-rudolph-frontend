import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function QuestionCard(props) {
    const { questionTitle, votesCounter, answersCounter, author, getPk, pk } = props

    return (
        <div className='question-card'>
            <h3 className='question-title'>{questionTitle}</h3>
            <div className='question-card-counters'>
                <Link to={`/user/${author}`} key={author}>
                    <div onClick={getPk(pk)}>Author: {author}</div>
                </Link>   
                <div>Votes: {votesCounter}</div>
                <div>Answers: {answersCounter}</div>
                <div>PK: {pk}</div>
            </div>
            <div className='lower-right-placeholder'>Misc Info</div>
        </div>
    )
}