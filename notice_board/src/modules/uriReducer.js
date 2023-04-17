const URI_SAVE = 'URI_SAVE';

//버튼 클릭 시 호출될 함수
export const uriSave = (input) => ({
    type: URI_SAVE,
    input: input
})

//input data 초기화
const initialState ={
    input: '/'
}

export default function uriReducer(state = initialState, action){
    switch(action.type){
        case URI_SAVE:
            return Object.assign({}, state, {
                input: action.input
            }); //객체들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 복붙
        default: return state
    }
}