export default function ResponseCardProfile(props) {
    const { responseText, votes} = props



    return (
        <div className='response-card card'>
            <h5 className='response-text'>{responseText}</h5>
            <p className='response-votes'>Score: {votes}</p>
        </div>
    )
}