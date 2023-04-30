import {MdAdd} from "react-icons/md";
import './TodoInsert.scss';
import {useCallback, useState} from "react";

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');

      // submit 는 브라우저를 새로고침 하는데, e.preventDefault()는 새로고침을 방지하는 역할
      e.preventDefault();
    },
    [onInsert, value],
  );



  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd/>
      </button>
    </form>
  )
};

export default TodoInsert;