import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FavQuestionButton from './FavQuestionButton';

export default function QuestionCard(props) {
    const {questionTitle, votesCounter, answersCounter, author, pk, questionId, token, loggedInUser, loggedUserPk, questionFavorited} = props
    const [isFavorited, setIsFavorited] = useState()

    useEffect(() => {
        if(questionFavorited.includes(loggedUserPk)) {
            setIsFavorited(true) }else setIsFavorited(false)
    },[questionFavorited, loggedUserPk])

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
            <div className='fav-container'>
                {loggedInUser ?
                    <FavQuestionButton token={token} questionId={questionId} loggedUserPk={loggedUserPk} isFavorited={isFavorited} setIsFavorited={setIsFavorited}/>
                    : ''}
            </div>
        </div>
    )
}