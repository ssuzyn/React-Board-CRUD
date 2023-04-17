import React from 'react';
import { Link } from 'react-router-dom';

import {useDispatch} from 'react-redux';
import { uriSave } from '../modules/uriReducer';
 
function ButtonHome() {
    const dispatch = useDispatch();

    function onClick(){
        dispatch(uriSave('/'))
    }

    return(
        <Link to='/'>
            <button onClick={onClick}>
                Home
            </button>
        </Link>
    );
}
 
export default ButtonHome;