import React from 'react';

const initialList = [
  { id: 'a', name: 'Learn React', complete: true },
  { id: 'b', name: 'Learn Firebase', complete: true },
  { id: 'c', name: 'Learn GraphQL', complete: false },
];

const ListWithUpdateItem = () => {
  const [list, setList] = React.useState(initialList);

  const handleChangeCheckbox = id => {
    setList(
      list.map(item => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => handleChangeCheckbox(item.id)}
            />
            {item.name}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ListWithUpdateItem;