import FavQuestionButtonZoom from "./FavQuestionButtonZoom"
import DeleteQuestionButton from "./DeleteQuestionButton"
import UpvoteQuestionButton from "./UpvoteQuestionButton"
import DownvoteQuestionButton from "./DownvoteQuestionButton"
import EditQuestionButton from "./EditQuestionButton"
import EditQuesionForm from "./EditQuestionForm"
import { useState, useEffect } from "react"
import axios from 'axios'

export default function QuestionCardZoom(props) {
    const { questionTitle, questionText, attachments, token, questionId, votes, setQuestionVotes, author, questionAuthorId, loggedUserPk, numAnswers, setQuestionText, questionFavorited } = props
    const [questionEditMode, setQuestionEditMode] = useState(false)
    const [isFavoritedZoom, setIsFavoritedZoom] = useState()

    useEffect(() => {
        if(questionFavorited.includes(loggedUserPk)) {
            setIsFavoritedZoom(true) }else setIsFavoritedZoom(false)
    },[questionFavorited, loggedUserPk])


    return (
        <div className='question-card-zoom card'>
            <div>{author}</div>
            <h3 className='question-zoom-title'>{questionTitle}</h3>
            {(questionEditMode === true) ?
                <EditQuesionForm
                    token={token}
                    questionId={questionId}
                    setQuestionEditMode={setQuestionEditMode}
                    questionText={questionText}
                    setQuestionText={setQuestionText}
                />
                :
                <p className='question-zoom-text'>{questionText}</p>
            }
            <UpvoteQuestionButton
                token={token}
                questionId={questionId}
                setQuestionVotes={setQuestionVotes}
            />
            <span className='vote-score'>{votes}</span>
            <DownvoteQuestionButton
                token={token}
                questionId={questionId}
                setQuestionVotes={setQuestionVotes}
            />
            {(loggedUserPk !== '') ?
                <FavQuestionButtonZoom
                    token={token}
                    questionId={questionId}
                    loggedUserPk={loggedUserPk}
                    isFavoritedZoom={isFavoritedZoom}
                    setIsFavoritedZoom={setIsFavoritedZoom}
                />
                : ''}
            {((questionAuthorId === loggedUserPk) && (numAnswers === 0)) ?
                <EditQuestionButton setQuestionEditMode={setQuestionEditMode} />
                : ''
            }
            {(questionAuthorId === loggedUserPk) ?
                <DeleteQuestionButton
                    token={token}
                    questionId={questionId}
                />
                : ''
            }
            {/* <div className='attachments'>Attachments are mapped out here:
                <>{attachments}</>
            </div> */}
        </div>
    )
}