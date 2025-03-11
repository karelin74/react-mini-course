export const SimpleList = ({ items }) => {
  let id = 0;
  return (
    <ul>
      {items.map((item) => (
        <li key={++id}>{item}</li>
      ))}
    </ul>
  );
};
