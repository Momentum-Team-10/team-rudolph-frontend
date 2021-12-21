import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import QuestionCardZoom from '../components/QuestionCardZoom'
import ResponseCard from '../components/ResponseCard'
import ResponseForm from '../components/ResponseForm'

export default function QuestionZoom({token, loggedUserPk}) {
    let params = useParams()
    const [questionData, setQuestionData] = useState([])
    const [answerData, setAnswerData] = useState([])
    const [questionVotes, setQuestionVotes] = useState()
    const [questionAuthorUsername, setQuestionAuthorUsername] = useState()
    
    useEffect(() => {
        const questionUrl = `https://questions-t10.herokuapp.com/questions/${params.questionId}`
        axios
          .get(questionUrl)
          .then((response) => {
            console.log(response.data)
            console.log(response.data.answers)
            console.log(response.data.author.username)
            setQuestionAuthorUsername(response.data.author.username)
            setQuestionData(response.data)
            setAnswerData(response.data.answers)
            setQuestionVotes(response.data.votes)
          })
      }, [params])
    return (
        <>
        <QuestionCardZoom
            questionTitle={questionData.title}
            questionText={questionData.body}
            token={token}
            questionId={questionData.pk}
            votes={questionVotes}
            setQuestionVotes={setQuestionVotes}
            author={questionAuthorUsername}
            attachments='Attachment Placeholder'/>
        {answerData.map((answer) => (
        <ResponseCard
            responseText={answer.body}
            key = {answer.pk}
            bestAnswer={questionData.answered}
            questionId={questionData.pk}
            answerId= {answer.pk}
            token={token}
            votes={answer.votes}
            questionAuthorId={questionData.author.pk}
            loggedUserPk={loggedUserPk}
            author={answer.author.username}
            >
            </ResponseCard>
        ))}
        <ResponseForm
        token={token}
        questionId={questionData.pk}
        setAnswerData={setAnswerData}
        />
        </>
    )
}
