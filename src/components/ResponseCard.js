import UpvoteAnswerButton from "./UpvoteAnswerButton"
import DownvoteAnswerButton from "./DownvoteAnswerButton"
import SetBestAnswerButton from "./SetBestAnswerButton"
import { useState } from "react"

export default function ResponseCard(props) {
    const { responseText, bestAnswer, questionId, answerId, token, votes, questionAuthorId, loggedUserPk, author } = props
    const [answerVotes, setAnswerVotes] = useState(votes)

    return (
        <div className='response-card'>
            <p className='response-text'>{responseText}</p>
            <div className='best-answer-and-vote-bar'>
                <div>{author}</div>
                {(bestAnswer === answerId) ?
                    <img src="/trophy.png" className='bestAnswerFlair' alt='Best Answer Flair' />
                    :
                    ''
                }
                {(questionAuthorId === loggedUserPk) ?
                    <SetBestAnswerButton 
                        questionId={questionId}
                        answerId={answerId}
                        token={token}
                    />
                    :
                    ''}
                <div className='response-card-vote-bar'>
                    <UpvoteAnswerButton questionId={questionId} answerId={answerId} token={token} setAnswerVotes={setAnswerVotes}/>
                    <span className='vote-score'>{answerVotes}</span>
                    <DownvoteAnswerButton questionId={questionId} answerId={answerId} token={token} setAnswerVotes={setAnswerVotes}/>
                </div>
            </div>
        </div>
    )
}