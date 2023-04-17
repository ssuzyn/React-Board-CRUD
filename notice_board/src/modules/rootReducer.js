import { combineReducers } from 'redux';
import uriReducer from './uriReducer';
import boardReducer from './boardReducer';
 
//Footer.js에서 uri 별로 Writer 버튼이 보일지 말지 결정하기 위해
//버튼이 클릭될 때마다 reducer를 호출하여 변경 될 uri를 store에 저장할 수 있도록
const rootReducer = combineReducers({
    uriReducer, boardReducer
});
 
export default rootReducer;