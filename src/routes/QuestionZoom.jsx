import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import QuestionCardZoom from '../components/QuestionCardZoom'
import ResponseCard from '../components/ResponseCard'
import ResponseForm from '../components/ResponseForm'

export default function QuestionZoom({ token, loggedUserPk }) {
    let params = useParams()
    const [questionData, setQuestionData] = useState([])
    const [answerData, setAnswerData] = useState([])
    const [questionVotes, setQuestionVotes] = useState(null)
    const [bestAnswer, setBestAnswer] = useState()
    const [numAnswers, setNumAnswers] = useState()
    const [questionText, setQuestionText] = useState()
    

    useEffect(() => {
        const questionUrl = `https://questions-t10.herokuapp.com/questions/${params.questionId}/`
        axios
            .get(questionUrl)
            .then((response) => {
                console.log(response.data)
                console.log(response.data.answers)
                console.log(response.data.author.pk)
                setQuestionData(response.data)
                setAnswerData(response.data.answers)
                setQuestionVotes(response.data.votes)
                setBestAnswer(response.data.answered)
                setQuestionText(response.data.body)
                setNumAnswers(response.data.answers.length)
                
            })
    }, [params.questionId, questionText])
    return (
        <>
            {(questionData.pk && (questionVotes !== null)) ?
                <QuestionCardZoom
                    questionTitle={questionData.title}
                    questionText={questionText}
                    token={token}
                    questionId={questionData.pk}
                    questionVotes={questionVotes}
                    setQuestionVotes={setQuestionVotes}
                    author={questionData.author.username}
                    loggedUserPk={loggedUserPk}
                    questionAuthorId={questionData.author.pk}
                    numAnswers={numAnswers}
                    questionFavorited={questionData.favorited}
                    setQuestionText={setQuestionText}
                    attachments='Attachment Placeholder' />
                : ''}
            {(questionData.pk && answerData) ?
                <>
                    {answerData.map((answer) => (
                        <ResponseCard
                            responseText={answer.body}
                            key={answer.pk}
                            bestAnswer={bestAnswer}
                            questionId={questionData.pk}
                            answerId={answer.pk}
                            token={token}
                            votes={answer.votes}
                            questionAuthorId={answer.author.pk}
                            loggedUserPk={loggedUserPk}
                            answerAuthorId={answer.author.pk}
                            author={answer.author.username}
                            setBestAnswer={setBestAnswer}
                            setAnswerData={setAnswerData}
                            setNumAnswers={setNumAnswers}
                            answerFavorited={answer.favorited}
                        />
                    ))}</>
                : ''}
            <ResponseForm
                token={token}
                questionId={questionData.pk}
                setAnswerData={setAnswerData}
                setNumAnswers={setNumAnswers}
            />
        </>
    )
}
