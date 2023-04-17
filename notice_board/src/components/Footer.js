import React from 'react';
import { useSelector } from 'react-redux';

import ButtonHome from './ButtonHome';
import ButtonWrite from './ButtonWrite';
import '../style.css';

function Footer() {
    const uri = useSelector(state => state.uriReducer.input)
    return (
        <div className='fotter-wrapper'>
            <hr />
            <nav>
                <ul>
                    <li><ButtonHome /></li>
                    {/* 받아온 상태가 'BoardNew'가 아닐때만 버튼 보여줌 */}
                    {uri !== '/BoardNew' ?
                        <li><ButtonWrite /></li> :
                        <li></li>
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Footer;