import UserList from "./UserList";
import {useCallback, useMemo, useRef, useState} from "react";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  return users.filter(user => user.active).length;
}

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
  const onChange = useCallback(e => {
      const {name, value} = e.target;
      /**
       * 기존 inputs 는 옮겨 담고 새로운 value 는 name 과 매칭하여 값 세팅
       */
      setInputs(inputs => ({
        ...inputs,
        [name]: value
      }));
    }, []);

  /**
   * useRef() 는 re-rendering 시 초기화되지 않는다.
   */
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users => [...users, user]); // 불변을 유지하기 위해 spread operator 사용하여 기존 배열을 복사

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user
      )
    );
  }, []);


  const count = useMemo(() => countActiveUsers(users), [users]);
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
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
