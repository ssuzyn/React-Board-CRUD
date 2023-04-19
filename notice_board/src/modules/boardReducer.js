const SAVE = 'DATA_SAVE';
const SELECT = 'DATA_SELECT'
const EDIT = 'DATA_EDIT'
const DELETE = 'DATA_DELETE'

export const dataSave = (input) => ({
    type: SAVE,
    input: {
        id: input.id,
        title: input.title,
        content: input.content,
        cnt: input.cnt
    }
});

export const selectRow = (id, cnt) => ({
    type: SELECT,
    input: {
        id: id,
        cnt: cnt
    }
});

export const editContent = (input) => ({
    type: EDIT,
    input: {
        id: input.id,
        title: input.title,
        content: input.content,
        cnt: input.cnt
    }
});

export const removeContent = (id) => ({
    type: DELETE,
    input: {
        id: id,
    }
});

const initialState = {
    lastId: 0,
    input: [
        {
            id: '',
            title: '',
            content: '',
            cnt: 0
        }
    ],
    selectRowData: {} //select된 data를 담아주기 위해 생성
}

export default function boardReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE:
            console.log(state.input)
            return {
                lastId: state.lastId + 1,
                input: state.input.concat({
                    ...action.input,
                    id: state.lastId + 1,
                    cnt: 0
                })
            }
        case SELECT:
            console.log(action)
            console.log(state.input)
            // 리듀서 함수 내부에서 input 배열의 요소 중 하나인 cnt 값을 직접 증가시켰기 때문
            // 따라서 해당 요소를 포함한 객체를 복사하고, 복사된 객체의 값을 변경한 후
            // 새로운 배열로 만들어서 state를 갱신해야 함
            const updatedInput = state.input.map(row => {
                if (row.id === action.input.id) {
                    return {
                        ...row,
                        cnt: row.cnt + 1
                    };
                }
                return row;
            });
            const selectedRow = updatedInput.find(row => row.id === action.input.id);
            return {
                ...state,
                input: updatedInput,
                selectRowData: selectedRow
            };
        case EDIT:
            return {
                ...state,
                // state 에 저장되어 있는 inputData 중 동일한 id 값을 가진 데이터를 action.inputData 값으로 변경해준다.
                input: state.input.map(row =>
                    row.id === action.input.id ?
                        { ...action.input } : row
                ),
                selectRowData: {}
            }
        case DELETE:
            return {
                //lastId 값이 현재 삭제 요청된 id값과 동일하면 값을 줄여준다.
                lastId: state.lastId == action.input.id ? state.lastId - 1 : state.lastId,

                //filter를 사용하여 state에 있는 값과 action.idㄱ밧이 동일하지 않은 값만 반환하여 state에 저장
                input: state.input.filter(row =>
                    row.id !== action.input.id
                ),
                selectRowData: {}
            }
        default:
            return state
    }
}