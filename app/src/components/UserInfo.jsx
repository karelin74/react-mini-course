export const UserInfo = ({ isAdmin }) => {
  return <p>{isAdmin === true ? "Администратор" : "Обычный пользователь"}</p>;
};
