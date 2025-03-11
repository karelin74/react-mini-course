export const UserProfile = ({ name, age }) => {
  return (
    <>
      <p>Данные пользователя:</p>
      <ul>
        <li>Имя: {name}</li>
        <li>Возраст: {age}</li>
      </ul>
    </>
  );
};
