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

export const initialAsyncState = {
  loading: false,
  data: null,
  error: null
};

const loadingState = {
  loading: true,
  data: null,
  error: null
}

const success = data => ({
  loading: false,
  data,
  error: null
});

const error = error => ({
  loading: false,
  data: null,
  error: error
});

export function createAsyncHandler(type, key) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  function handler(state, action) {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data)
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error)
        };
    }
  }

  return handler;
}