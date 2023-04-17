import React from 'react';
import { useSelector } from 'react-redux';
import boardReducer from '../modules/boardReducer';

function BoardList() {
    // useSelector 로 boardReducer 에 있는 inputData 값을 가져온다.
    const {input, lastId} = useSelector((state) => state.boardReducer)
    console.log(boardReducer);
    console.log(input, lastId);
    return(
        <div>
            <h2>게시판</h2>
            <div>
                <table className='listTable'>
                    <tbody>
                        <tr>
                            <td className='listTableIndex th'>글번호</td>
                            <td className='listTableTitle th'>제목</td>
                        </tr>
                        {lastId !== 0 ?
                            input.map(rowData => (
                                rowData.id !== '' && 
                                <tr>
                                    <td className='listTableIndex'>{rowData.id}</td>
                                    <td className='listTableTitle th'>{rowData.title}</td>
                                </tr>
                            )) : 
                            <tr>
                                <td className='listTableIndex'></td>
                                <td className='listTableTitle noData'>작성된 글이 없습니다.</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
 
export default BoardList;