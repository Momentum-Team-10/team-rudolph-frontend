export default function ResponseCard(props) {
    const { responseText, responseUpvotes, responseDownvotes, bestAnswer } = props

    return (
        <div className='response-card'>
            <p className='response-text'>{responseText}</p>
            <div best-answer-and-vote-bar>
                {bestAnswer ?
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className='bestAnswerFlair' alt='Best Answer Flair' />
                    :
                    ''
                }
                <div className='response-card-vote-bar'>
                    <button className='upvote-button'>{'\u2B06'}</button>
                    <span className='vote-score'>{responseUpvotes - responseDownvotes}</span>
                    <button className='downvote-button'>{'\u2B07'}</button>
                </div>
            </div>
        </div>
    )
}