import "./App.css";

import Greeting from "./components/Greeting";
import { UserProfile } from "./components/UserProfile";
import { LoginStatus } from "./components/LoginStatus";
import { Button } from "./components/Button";
import { Notification } from "./components/Notification";
import { UserInfo } from "./components/UserInfo";
import { TaskList } from "./components/TaskList";
import { Article } from "./components/Article";
import { ColoredText } from "./components/ColoredText";
import { SimpleList } from "./components/SimpleList";
import Header, { Footer } from "./components/PageBlocks";
import { UserCard } from "./components/UserCard";
import ToggleText from "./components/ToggleText";
import Counter from "./components/Counter";
import ContactForm from "./components/ContactForm";

import button_styles from "./styles/Button.module.css";

function App() {
  return (
    <>
      <h1>6.4 React — практика</h1>
      <h4>Задание 1: Динамическое отображение данных с использованием JSX</h4>
      <div className="task">
        <Greeting name="Buzz" />
        <Greeting name="Woodie" />
        <Greeting name="Jessie" />
      </div>
      <h4>Задание 2: Динамическое отображение данных с использованием JSX 2</h4>
      <div className="task">
        <UserProfile name="Федор" age="36" />
        <UserProfile name="Иван" age="10" />
        <UserProfile name="Петр" age="54" />
      </div>
      <h4>Задание 3: Условный рендеринг</h4>
      <div className="task">
        <LoginStatus isLoggedIn={true} />
        <LoginStatus isLoggedIn={false} />
      </div>
      <h4>Задание 4: Использование CSS-модулей для стилизации компонентов</h4>
      <div className="task">
        <Button classButton={button_styles.red} />
        <Button classButton={button_styles.green} />
      </div>
      <h4>Задание 5: Стилизация динамических элементов с CSS-модулями</h4>
      <div className="task">
        <Notification message="Успех" type="success" />
        <Notification message="Предупреждение" type="warning" />
        <Notification message="Ошибка" type="error" />
      </div>
      <h4>
        Задание 6: Условный рендеринг с использованием логических операторов
      </h4>
      <div className="task">
        <UserInfo isAdmin={true} />
        <UserInfo isAdmin={false} />
      </div>
      <h4>Задание 7: Список элементов с использованием JSX</h4>
      <div className="task">
        <TaskList tasks={["Learn JSX", "Build a React app", "Explore hooks"]} />
      </div>
      <h4>Задание 8: Фрагменты для группировки элементов</h4>
      <div className="task">
        <Article
          title="JSX Overview"
          content="JSX is a syntax extension for JavaScript."
        />
        <Article
          title="React Components"
          content="React components let you split the UI into independent parts."
        />
      </div>
      <h4>Задание 9: Динамическое применение стилей через inline-styles</h4>
      <div className="task">
        <ColoredText color="blue" />
        <ColoredText color="red" />
        <ColoredText color="green" />
      </div>
      <h4>Задание 10: Рендеринг простого списка</h4>
      <div className="task">
        <SimpleList items={["Apple", "Banana", "Cherry"]} />
      </div>
      <h4>Задача 11: Импорт и экспорт компонентов</h4>
      <div className="task">
        <Header />
        <p>Main content here.</p>
        <Footer />
      </div>
      <h4>Задача 12: Создание функционального компонента</h4>
      <div className="task">
        <UserCard name="Сын мамкиной подруги" age="10" />
        <UserCard name="Нагибатор 777" age="18" />
        <UserCard name="Кощей Бессмертный" age="47" />
      </div>
      <h4>Задача 13: Создание классового компонента</h4>
      <div className="task">
        <Greeting name="Иван" />
        <Greeting name="Николай" />
        <Greeting name="Василий" />
      </div>
      <h4>Задача 14: Переключение текста в классовом компоненте</h4>
      <div className="task">
        <ToggleText />
      </div>
      <h4>Задача 15: Счётчик с увеличением и уменьшением</h4>
      <div className="task">
        <Counter />
      </div>
      <h4>Задача 16: Управление состоянием формы</h4>
      <div className="task">
        <ContactForm />
      </div>
    </>
  );
}

export default App;
