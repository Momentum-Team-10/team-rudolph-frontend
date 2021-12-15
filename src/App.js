import './App.css';
import NavBar from './components/NavBar';
import QuestionCard from './components/QuestionCard.js'
import QuestionCardZoom from './components/QuestionCardZoom.js'
import ResponseCard from './components/ResponseCard.js'

function App() {
  return (
    <>
    <NavBar byCreatedAt='Filter Call by Most Recent' byHighestRated='Filter Call by Highest Rated' />
    <QuestionCard questionTitle='Question Title Goes Here' votesCounter='10' answersCounter='2' viewsCounter='204'></QuestionCard>
    <QuestionCardZoom questionTitle='Question Title Goes Here' questionText='This is the text of the question' attachments='Attachment'></QuestionCardZoom>
    <ResponseCard responseText='Response text goes here' responseUpvotes={25} responseDownvotes={10} bestAnswer={true}></ResponseCard>
    </>
  );
}

export default App;
