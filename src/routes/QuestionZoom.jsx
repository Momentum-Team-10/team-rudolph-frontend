import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import QuestionCardZoom from '../components/QuestionCardZoom'
import ResponseCard from '../components/ResponseCard'
import ResponseForm from '../components/ResponseForm'

export default function QuestionZoom({token}) {
    let params = useParams()
    const [questionData, setQuestionData] = useState([])
    const [answerData, setAnswerData] = useState([])
    const [questionVotes, setQuestionVotes] = useState()
    
    useEffect(() => {
        const questionUrl = `https://questions-t10.herokuapp.com/questions/${params.questionId}`
        axios
          .get(questionUrl)
          .then((response) => {
            console.log(response.data)
            console.log(response.data.answers)
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
            attachments='Attachment Placeholder'/>
        {answerData.map((answer) => (
        <ResponseCard
            responseText={answer.body}
            key = {answer.pk}
            bestAnswer={true}
            questionId={questionData.pk}
            answerId= {answer.pk}
            token={token}
            votes={answer.votes}
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
