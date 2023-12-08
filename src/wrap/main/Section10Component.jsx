import React from 'react';
import axios from 'axios';
import './scss/section10.scss'

export default function Section10Component(){

    const slideWrap = React.useRef();

    const [cnt,setCnt] = React.useState(0);
    
    const [state,setState] = React.useState({
        타이틀:'',
        슬라이드:[],
        n:0
    });
    
    React.useEffect(()=>{
        let folderName = 'section10';
        axios({
            url:`data/intro/${folderName}.json`,
            method:'GET'
        })
        .then((result)=>{
            setState({
                ...state,
                타이틀:result.data.title,
                슬라이드:result.data.slide,
                n:result.data.slide.length
            })
        })
        .catch(()=>{

        })
    },[])

    React.useEffect(()=>{
        let n = state.n;
        slideWrap.current.style.width = `${380*n}px`;
    },[state.n])

    const mainSlide=()=>{
        slideWrap.current.style.transition = `all 0.3s ease-in-out`;
        slideWrap.current.style.left= `${-1140*cnt}px`;
    }

    const slide=()=>{
        slideWrap.current.style.transition = `all 0.3s ease-in-out`;
        slideWrap.current.style.left= `${-760*cnt}px`;
    }


    React.useEffect(()=>{
        if(cnt===2){
            slide();
        }
        else{
            mainSlide();
        }
    },[cnt]);

    

    const onClickPrev=(e)=>{
        e.preventDefault();
        setCnt(cnt=>cnt-1);
    }

    const onClickNext=(e)=>{
        e.preventDefault();
        setCnt(cnt=>cnt+1);
    }
    
    return (

        <div id='section10'>
            <div className="container">
                <div className="title">
                    <h2>{state.타이틀}</h2>
                </div>
                <div className="content">
                    <ul className='slide-wrap' ref={slideWrap}>
                        {
                            state.슬라이드.map((item,idx)=>{
                                return (
                                    <li className={`list list${idx+1}`} key={item.번호}>
                                        <div className="package-list">
                                            <img src={`./images/intro/section10/${item.이미지}`} alt="" />
                                            <strong>{item.부가설명}</strong>
                                        </div>
                                    </li>
                                )
                            })
                            
                        }
                    </ul>
                    <button 
                        className={`prev-btn${cnt<1?' on':''}`} 
                        onClick={onClickPrev} 
                        disabled={cnt<=0?'off':''}
                    >
                        <i className="material-icons">navigate_next</i>
                    </button>
                    <button 
                        className={`next-btn${cnt>1?' on':''}`} 
                        onClick={onClickNext}  
                        disabled={cnt>1?'off':''}
                    >
                        <i className="material-icons">navigate_next</i>
                    </button>
                </div>
            </div>
        </div>
    );
};
