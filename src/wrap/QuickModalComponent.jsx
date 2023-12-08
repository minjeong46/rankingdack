import React from "react";
import './scss/QuickModal.scss'
import { quickMenuViewProduct } from "../reducer/quickMenuViewProduct";
import { useSelector } from "react-redux";

export default function QuickModalComponent(){


    const refQuickslide = React.useRef();
    const refSub = React.useRef();


    const [state,setState] = React.useState({
        isProduct:false,
        cnt:0
    });

    

    let {n} = `selector.quickMenuViewProduct.quickMenuViewProduct.length`;

    React.useEffect(()=>{
        refQuickslide.current.style.width=`240px`;
        
    },[state.cnt])

    const mainSlide=()=>{
        refQuickslide.current.style.marginLeft = `0`; 
        refQuickslide.current.style.transition = `all 0.3s`;
    }
    React.useEffect(()=>{
         mainSlide();
    },[state.cnt])

    console.log(state.cnt);
    const onClickPrev=(e)=>{
        e.preventDefault();
        
            setState({
                ...state,
                cnt: state.cnt-1
            })
    }

    const onClickNext=(e, n)=>{
        e.preventDefault();
        console.log(state.cnt)
        
            setState({
                ...state,
                cnt: state.cnt+1
            })
       
    }



    const selector = useSelector((state)=>state);

    return (
        <div id="QuickModal" className="on">
            <div className="container">
                <div className="view-product">
                    <h2>최근 본 상품<span>({selector.quickMenuViewProduct.quickMenuViewProduct.length})</span></h2>
                       
                                
                                <ul ref={refQuickslide} className="quickSlide">
                                {    
                                    selector.quickMenuViewProduct.quickMenuViewProduct.length>0 && (
                                            selector.quickMenuViewProduct.quickMenuViewProduct.map((item,idx)=>{
                                                return (
                                                    <li key={item.번호}>
                                                        <div className="product">
                                                            <div className="left">
                                                                <div className="name">
                                                                    <p>{item.제품명}</p>
                                                                </div>
                                                                <div className="price">
                                                                    <em>{item.판매가.toLocaleString('ko-KO')}원</em>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <div className="product-img">
                                                                    <img src={`./images/intro/${item.이미지}`} alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        )
                                        
                                    )
                                }
                                </ul>
                                {
                                    selector.quickMenuViewProduct.quickMenuViewProduct.length>0 && (
                                        <div className="page">
                                            <button onClick={onClickPrev} className="prev-btn"><i className="material-icons">chevron_left</i></button>
                                            <span>1/1</span>
                                            <button onClick={onClickNext} className="next-btn"><i className="material-icons">chevron_left</i></button>
                                        </div>
                                    )
                                }
                </div>
            </div>
            <div className="add-image1">
                <img src="./images/intro/quickModal/IMG1681UfY890476355.png" alt="" />
            </div>
            <div className="add-image2">
                <img src="./images/intro/quickModal/IMG1692TsC665390591.jpg" alt="" />
            </div>
            <div className="goTop">
                <a href="#wrap">
                    <span>TOP</span>
                    <img src="./images/intro/quickModal/ico-go-up.png" alt="" />
                </a>
            </div>
        </div>
    )
}