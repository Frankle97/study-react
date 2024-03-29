// 액션 타입 정의
import {createAction, handleAction, handleActions} from "redux-actions";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 정의
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태 정의
const initialState = {
  number: 0
};

const counter = handleActions({
    [INCREASE]: (state, action) => ({number: state.number + 1}),
    [DECREASE]: (state, action) => ({number: state.number - 1})
  },
  initialState
);

export default counter;