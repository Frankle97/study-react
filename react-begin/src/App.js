import UserList from "./UserList";
import {useRef, useState} from "react";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    /**
     * 기존 inputs 는 옮겨 담고 새로운 value 는 name 과 매칭하여 값 세팅
     */
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  /**
   * useRef() 는 re-rendering 시 초기화되지 않는다.
   */
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    setUsers([...users, user]); // 불변을 유지하기 위해 spread operator 사용하여 기존 배열을 복사

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user
      )
    );
  }


  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users}
                onRemove={onRemove}
                onToggle={onToggle}
      />
    </>
  );
}

export default App;
