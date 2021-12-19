import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import QuestionCardZoom from '../components/QuestionCardZoom'
import ResponseCard from '../components/ResponseCard'

export default function QuestionZoom({token}) {
    let params = useParams()
    const [questionData, setQuestionData] = useState([])
    const [answerData, setAnswerData] = useState([])
    
    
    useEffect(() => {
        const questionUrl = `https://questions-t10.herokuapp.com/questions/${params.questionId}`
        axios
          .get(questionUrl)
          .then((response) => {
            console.log(response.data)
            console.log(response.data.answers)
            setQuestionData(response.data)
            setAnswerData(response.data.answers)
          })
      }, [params])
    return (
        <>
        <QuestionCardZoom
            questionTitle={questionData.title}
            questionText={questionData.body}
            token={token}
            questionId={questionData.pk}
            attachments='Attachment Placeholder'/>
        {answerData.map((answer) => (
        <ResponseCard
            responseText={answer.body}
            key = {answer.pk}
            responseUpvotes={24}
            responseDownvotes={10}
            bestAnswer={true}>
            </ResponseCard>
        ))}
        </>
    )
}