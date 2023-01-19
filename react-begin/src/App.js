import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./Input";
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
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
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


  return (
    // <Wrapper>
    /**
     * jsx, props, component 재사용에 대해 학습
     */
    //   <Hello name="react" color="red" isSpecial={true}/>
    //   <Hello color="pink"/>
    // </Wrapper>
    /**
     * React Hooks 중 하나인 state 학습
     * useState 로 상태값을 변화하고 상태가 변하면 해당 컴포넌트와 자식 컴포넌트도 리렌더링
     * 함수형 업데이트
    <Counter/>
     */
    /**
     * useState 사용하여 상태 관리
     */
    // <InputSample/>
    <>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users}
                onRemove={onRemove}
      />
    </>
  );
}

export default App;
