import Profile from "./Profile"
import UserAnswers from "./UserAnswers";
import UserQuestions from "./UserQuestions";

const UserPage = () => {
  return (
    <>
    <div>
        <Profile userImg="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" profileText="Placeholder." />
        <UserQuestions questionTitle="Placeholder Title" votesCounter={0} answersCounter={0} viewsCounter={0} />
        <UserAnswers questionTitle="Placehodler Title" answerData="Placeholder Data" />
    </div>
    </>
  )
}

export default UserPage;