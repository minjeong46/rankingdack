import React from 'react';
import { useDispatch } from 'react-redux';

export default function Sub4ComponentModal(){
 
    const dispatch = useDispatch();


    const [state, setState] = React.useState({
        
    });

    const onClickClose=(e)=>{
        e.preventDefault();
    }

    return (
        <div id='sub4Modal'>
            <div className="container">
                <div className="window-title">
                    <h1>
                        <img src="./images/intro/favicon-192x192.png" alt="" />
                        <em>1팩 담기 사용백과</em>
                    </h1>
                    <button onClick={onClickClose} title='닫기'>
                        <i className="material-icons">close</i>
                    </button>
                </div>
                <div className="content">
                    
                </div>
            </div>
        </div>
    );
};
