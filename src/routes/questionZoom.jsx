import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import QuestionCardZoom from '../components/QuestionCardZoom'
import ResponseCard from '../components/ResponseCard'
import NavBar from '../components/NavBar'

export default function QuestionZoom() {
    let params = useParams()
    const [questionData, setQuestionData] = useState([])
    const [answerData, setAnswerData] = useState([])
    const [user, setUser] = useState({})
    
    
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
        <NavBar
        byCreatedAt='Filter Call by Most Recent'
        byHighestRated='Filter Call by Highest Rated'
        userImg="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
        user={user}
        setUser={setUser} />
        <QuestionCardZoom
            questionTitle={questionData.title}
            questionText={questionData.body}
            attachments='Attachment Placeholder'/>
        {answerData.map((answer) => (
        <ResponseCard
            responseText={answer.body}
            key = {answer.pk}
            responseUpvotes={24}
            responseDownvotes={10}
            bestAnswer={true}></ResponseCard>
        ))}
        </>
    )
}