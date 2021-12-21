import UpvoteAnswerButton from "./UpvoteAnswerButton"
import DownvoteAnswerButton from "./DownvoteAnswerButton"
import { useState } from "react"

export default function ResponseCard(props) {
    const { responseText, bestAnswer, questionId, answerId, token, votes } = props
    const [answerVotes, setAnswerVotes] = useState(votes)

    return (
        <div className='response-card card'>
            <p className='response-text'>{responseText}</p>
            <div className='best-answer-and-vote-bar'>
                {bestAnswer ?
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className='bestAnswerFlair' alt='Best Answer Flair' />
                    :
                    ''
                }
                <div className='response-card-vote-bar'>
                    <UpvoteAnswerButton questionId={questionId} answerId={answerId} token={token} setAnswerVotes={setAnswerVotes}/>
                    <span className='vote-score'>{answerVotes}</span>
                    <DownvoteAnswerButton questionId={questionId} answerId={answerId} token={token} setAnswerVotes={setAnswerVotes}/>
                </div>
            </div>
        </div>
    )
}