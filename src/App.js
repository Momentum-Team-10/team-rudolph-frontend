import './App.css';
import QuestionCard from './components/QuestionCard.js'

function App() {
  return (
    <QuestionCard questionTitle='Question Title Goes Here' votesCounter='' answersCounter='answerCounter' viewsCounter='viewsCounter'></QuestionCard>
  );
}

export default App;
