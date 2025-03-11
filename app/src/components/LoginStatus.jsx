export const LoginStatus = ({ isLoggedIn }) => {
  return (
    <p>
      {isLoggedIn === true
        ? "Добро пожаловать!"
        : "Пожалуйста, войдите в систему"}
    </p>
  );
};
