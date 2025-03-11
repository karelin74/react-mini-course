import "./App.css";

import { Greeting } from "./components/Greeting";
import { UserProfile } from "./components/UserProfile";
import { LoginStatus } from "./components/LoginStatus";
import { Button } from "./components/Button";
import { Notification } from "./components/Notification";
import { UserInfo } from "./components/UserInfo";
import { TaskList } from "./components/TaskList";
import { Article } from "./components/Article";

import button_styles from "./styles/Button.module.css";

function App() {
  return (
    <>
      <h1>6.4 React — практика</h1>
      <h4>Задание 1</h4>
      <div>
        <Greeting name="Buzz" />
        <Greeting name="Woodie" />
        <Greeting name="Jessie" />
      </div>
      <h4>Задание 2</h4>
      <div>
        <UserProfile name="Федор" age="36" />
        <UserProfile name="Иван" age="10" />
        <UserProfile name="Петр" age="54" />
      </div>
      <h4>Задание 3</h4>
      <div>
        <LoginStatus isLoggedIn={true} />
        <LoginStatus isLoggedIn={false} />
      </div>
      <h4>Задание 4</h4>
      <div>
        <Button classButton={button_styles.red} />
        <Button classButton={button_styles.green} />
      </div>
      <h4>Задание 5</h4>
      <div>
        <Notification message="Успех" type="success" />
        <Notification message="Предупреждение" type="warning" />
        <Notification message="Ошибка" type="error" />
      </div>
      <h4>Задание 6</h4>
      <div>
        <UserInfo isAdmin={true} />
        <UserInfo isAdmin={false} />
      </div>
      <h4>Задание 7</h4>
      <TaskList tasks={["Learn JSX", "Build a React app", "Explore hooks"]} />
      <h4>Задание 8</h4>
      <div>
        <Article
          title="JSX Overview"
          content="JSX is a syntax extension for JavaScript."
        />
        <Article
          title="React Components"
          content="React components let you split the UI into independent parts."
        />
      </div>
    </>
  );
}

export default App;
