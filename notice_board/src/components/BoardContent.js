import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import boardReducer, { editContent, removeContent } from '../modules/boardReducer';
import { useNavigate } from 'react-router-dom';

function BoardContent() {
    const { selectRowData } = useSelector(state => state.boardReducer);
    console.log(boardReducer);
    console.log("selectRowData: ", selectRowData.id);

    //input 값을 변경할 수 있도록 제어
    const [title, setTitle] = useState(selectRowData.title)
    const [content, setContent] = useState(selectRowData.content)


    //input 값 변경될때마다 값 변경
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = () => {
        const input = {
            id: selectRowData.id,
            title: title,
            content: content
        }
        console.log('edit data ::: ', input)
        dispatch(editContent(input))
        setTitle('')
        setContent('')
        navigate('/')
    }

    const onRemove = () => {
        //reducer의 removeContent 함수에 삭제할 id 값 전달
        dispatch(removeContent(selectRowData.id))

        //input값 초기화
        setTitle('')
        setContent('')
        navigate('/')
    }

    return (
        <div className='table-wrapper'>
            <h2>상세보기</h2>
            <div>
                <input type="text" className='inputTitle' onChange={handleTitle} value={title} />
            </div>
            <div>
                <textarea className='inputContent' onChange={handleContent} value={content} />
            </div>
            <div>
                <button type='button' onClick={onChange} className='editBtn'>edit</button>
                <button type='button' onClick={onRemove} className='deleteBtn'>delete</button>
            </div>
        </div>
    )
}

export default BoardContent;
