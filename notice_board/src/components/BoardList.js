import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRow } from '../modules/boardReducer';
import { Link } from 'react-router-dom';
import boardReducer from '../modules/boardReducer';
import '../style.css';

function BoardList() {
    // useSelector 로 boardReducer 에 있는 inputData 값을 가져온다.
    const { input, lastId } = useSelector((state) => state.boardReducer)
    console.log("boardReducer: ", boardReducer);
    console.log("input, lastId: ", input, lastId);

    //const [cnt, setCnt] = useState(selectRowData.cnt);
    const dispatch = useDispatch();

    const selectContent = (id, cnt) => {
        cnt += 1;
        dispatch(selectRow(id, cnt))

    }

    return (
        <div className='table-wrapper'>
            <h2>게시판</h2>
            <div>
                <table className='listTable'>
                    <tbody>
                        <tr>
                            <th className='listTableIndex'>글번호</th>
                            <th className='listTableTitle'>제목</th>
                            <th className='readCnt'>조회수</th>
                        </tr>
                        {lastId !== 0 ?
                            input.map(rowData => (
                                rowData.id !== '' &&
                                <tr className='hoverRow'>
                                    <td className='listTableIndex' onClick={() => selectContent(rowData.id, rowData.cnt)}>
                                        <Link to={`BoardContent/${rowData.id}`}>{rowData.id}</Link>
                                    </td>
                                    <td className='listTableTitle' onClick={() => selectContent(rowData.id, rowData.cnt)}>
                                        <Link to={`BoardContent/${rowData.id}`}>{rowData.title}</Link>
                                    </td>
                                    <td className='readCnt'>{rowData.cnt}</td>
                                </tr>
                            )) :
                            <tr className='hoverRow'>
                                <td className='listTableIndex'></td>
                                <td className='listTableTitle noData'>작성된 글이 없습니다.</td>
                                <td className='readCnt'></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BoardList;