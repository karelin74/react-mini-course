export const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  );
};
