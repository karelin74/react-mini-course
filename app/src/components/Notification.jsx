import notification_styles from "../styles/Notification.module.css";

export const Notification = ({ message, type }) => {
  // Принимает: success, error, warning
  /*
    Подсказка: В зависимости от состояния, добавляйте или удаляйте класс on через условное выражение: className={`${styles.switch} ${isOn ? styles.on : ''}`}.

    — это пока непонятно, к этому моменту мы еще не проходили "состояния"
   */

  return <p className={notification_styles[type]}>{message}</p>;
};
