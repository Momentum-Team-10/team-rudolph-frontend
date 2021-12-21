import UpvoteAnswerButton from "./UpvoteAnswerButton"
import DownvoteAnswerButton from "./DownvoteAnswerButton"
import SetBestAnswerButton from "./SetBestAnswerButton"
import DeleteAnswerButton from "./DeleteAnswerButton"
import EditAnswerButton from "./EditAnswerButton"
import EditAnswerForm from "./EditAnswerForm"
import { useState } from "react"

export default function ResponseCard(props) {
    const { responseText, bestAnswer, setBestAnswer, questionId, answerId, token, votes, questionAuthorId, loggedUserPk, author, answerAuthorId, setAnswerData, setNumAnswers } = props
    const [answerVotes, setAnswerVotes] = useState(votes)
    const [answerEditMode, setAnswerEditMode] = useState(false)

    return (
        <div className='response-card card'>
            {(answerEditMode === true) ?
                <EditAnswerForm
                    token={token}
                    questionId={questionId}
                    answerId={answerId}
                    setAnswerEditMode={setAnswerEditMode}
                    answerText={responseText}
                    setAnswerData={setAnswerData}
                /> :
                <p className='response-text'>{responseText}</p>
            } 
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
                        setBestAnswer={setBestAnswer}
                    />
                    :
                    ''}
                <div className='response-card-vote-bar'>
                    <UpvoteAnswerButton questionId={questionId} answerId={answerId} token={token} setAnswerVotes={setAnswerVotes}/>
                    <span className='vote-score'>{answerVotes}</span>
                    <DownvoteAnswerButton questionId={questionId} answerId={answerId} token={token} setAnswerVotes={setAnswerVotes}/>
                </div>
                {(answerAuthorId === loggedUserPk) ?
                <EditAnswerButton questionId={questionId} token={token} answerId={answerId} setAnswerData={setAnswerData} setNumAnswers={setNumAnswers} setAnswerEditMode={setAnswerEditMode}/>
                :
                ''}
                {(answerAuthorId === loggedUserPk) ?
                <DeleteAnswerButton questionId={questionId} token={token} answerId={answerId} setAnswerData={setAnswerData} setNumAnswers={setNumAnswers}/>
                :
                ''}
            </div>
        </div>
    )
}