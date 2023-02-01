// 파라미터로 액션의 타입 (예: GET_USER)과 Promise를 만들어주는 함수를 받아옴
export default function createAsyncDispatcher(type, promiseFn) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  async function actionHandler(dispatch, ...rest) {
    dispatch({type});
    try {
      const data = await promiseFn(...rest);
      dispatch({
        type: SUCCESS,
        data
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e
      });
    }
  }
  return actionHandler;
};