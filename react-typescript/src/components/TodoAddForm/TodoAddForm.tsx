import React, { useRef } from 'react';

type Props = {
  onAddTodo(title: string): void
}

const TodoAddForm: React.FC<Props> = ({ onAddTodo }) => {
  // const [title, setTitle] = useState('')
  const input = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setTitle(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAddTodo(input.current!.value);
      input.current!.value = '';
    }
  };

  return (
    <div 
      className="input-field" 
      style={{ marginTop: '40px' }}
    >
      <input
        ref={input}
        type="text" 
        id="title" 
        placeholder="Название дела"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <label 
        htmlFor="title" 
        className="active"
      >
        Введите название
      </label>
    </div>
  )
}

export default TodoAddForm;