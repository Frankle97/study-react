import './TodoListItem.scss';
import {MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
        <MdCheckBoxOutlineBlank/>
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline/>
      </div>
    </div>
  )
};

export default TodoListItem;