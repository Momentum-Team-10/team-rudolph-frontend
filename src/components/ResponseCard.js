import UpvoteAnswerButton from "./UpvoteAnswerButton"
import DownvoteAnswerButton from "./DownvoteAnswerButton"

export default function ResponseCard(props) {
    const { responseText, bestAnswer, questionId, answerId, token, votes } = props

    return (
        <div className='response-card'>
            <p className='response-text'>{responseText}</p>
            <div className='best-answer-and-vote-bar'>
                {bestAnswer ?
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className='bestAnswerFlair' alt='Best Answer Flair' />
                    :
                    ''
                }
                <div className='response-card-vote-bar'>
                    <UpvoteAnswerButton questionId={questionId} answerId={answerId} token={token}/>
                    <span className='vote-score'>{votes}</span>
                    <DownvoteAnswerButton questionId={questionId} answerId={answerId} token={token}/>
                </div>
            </div>
        </div>
    )
}