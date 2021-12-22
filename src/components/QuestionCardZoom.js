import FavQuestionButton from "./FavQuestionButton"
import DeleteQuestionButton from "./DeleteQuestionButton"
import UpvoteQuestionButton from "./UpvoteQuestionButton"
import DownvoteQuestionButton from "./DownvoteQuestionButton"
import EditQuestionButton from "./EditQuestionButton"
import EditQuesionForm from "./EditQuestionForm"
import { useState } from "react"

export default function QuestionCardZoom(props) {
    const {questionTitle, questionText, attachments, token, questionId, votes, setQuestionVotes, author, questionAuthorId, loggedUserPk, numAnswers, setQuestionText} = props
    const [questionEditMode, setQuestionEditMode] = useState(false)

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
            <FavQuestionButton
                token={token}
                questionId={questionId}
                />
            {((questionAuthorId === loggedUserPk) && (numAnswers === 0)) ?
            <EditQuestionButton setQuestionEditMode={setQuestionEditMode}/>
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