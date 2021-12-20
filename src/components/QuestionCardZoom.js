import FavButton from "./FavButton"
import UpvoteQuestionButton from "./UpvoteQuestionButton"
import DownvoteQuestionButton from "./DownvoteQuestionButton"

export default function QuestionCardZoom(props) {
    const {questionTitle, questionText, attachments, token, questionId, votes, setQuestionVotes} = props

    return (
        <div className='question-card-zoom'>
            <h3 className='question-zoom-title'>{questionTitle}</h3>
            <p className='question-zoom-text'>{questionText}</p>
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
            <FavButton
                token={token}
                questionId={questionId}
                />
            <div className='attachments'>Attachments are mapped out here:
                <>{attachments}</>
            </div>
        </div>
    )
}