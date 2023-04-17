const SAVE = 'DATA_SAVE';

export const dataSave = (input) => ({
    type: SAVE,
    input: {
        id: input.id,
        title: input.title,
        content: input.content
    }
});

const initialState = {
    lastId: 0,
    input: [
        {
            id: '',
            title: '',
            content: ''
        }
    ]
}

export default function boardReducer(state = initialState, action){
    switch(action.type){
        case SAVE:
            return{
                lastId: state.lastId + 1,
                input: state.input.concat({
                    ...action.input,
                    id: state.lastId + 1,
                })
            }
        default:
                return state
    }
}