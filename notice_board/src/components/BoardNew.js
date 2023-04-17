import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataSave } from '../modules/boardReducer';
import { uriSave } from '../modules/uriReducer'
import { useNavigate } from 'react-router-dom';

function BoardNew() {
    //title, content를 제어하기 위해 선언
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    //함수형 컴포넌트에서 useDispatch 사용을 위해 선언
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSave = () => {
        const input = {
            id: '',
            title: title,
            content: content
        }

        dispatch(dataSave(input))
        setTitle('')
        setContent('')
        navigate('/')
        dispatch(uriSave('/'))
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    return(
        <div>
            <h2>글 작성</h2>
            <div>
                <form>
                    <div>
                        <input type='text' className='inputTitle' placeholder='제목을 입력하세요' onChange={handleTitle} value={title}/>
                    </div>
                    <div>
                        <textarea className='inputContent' placeholder='내용을 입력하세요' onChange={handleContent} value={content}/>
                    </div>
                    <div>
                        <button type='botton' onClick={onSave}>submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default BoardNew;