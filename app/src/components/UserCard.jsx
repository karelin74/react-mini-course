export const UserCard = ({ name, age }) => {
  return (
    <>
      <h4>Карточка пользователя</h4>
      <ul>
        <li>Имя пользователя: {name}</li>
        <li>Возраст пользователя: {age}</li>
      </ul>
    </>
  );
};
