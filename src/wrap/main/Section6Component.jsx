import React from 'react';
import './scss/section6.scss';
import axios from 'axios';

export default function Section6Component(){


    const [state,setState] = React.useState({
        istab1:true,
        istab2:false,
        istab3:false,
        istab4:false,
        istab5:false,
        타이틀:'',
        제품:[],
        제품2:[],
        제품3:[],
        제품4:[],
        제품5:[],
        이미지경로:'',
        번호:'',

    });

    React.useEffect(()=>{
        let folderName = 'section6';
        axios({
            url:`data/intro/${folderName}.json`,
            method:'GET'
        })
        .then((result)=>{
            setState({
                ...state,
                이미지경로: folderName,
                타이틀: result.data.title,
                제품:result.data.product,
                제품2:result.data.product2,
                제품3:result.data.product3,
                제품4:result.data.product4,
                제품5:result.data.product5,
            })
        })
        .catch(()=>{

        })
    },[]);

    const onClickTabMenu=(e,data)=>{
        e.preventDefault();
        let istab1=true;
        let istab2=false;
        let istab3=false;
        let istab4=false;
        let istab5=false;
        if(data==='야들야들'){
            istab1=true;
            istab2=false;
            istab3=false;
            istab4=false;
            istab5=false;
        }
        else if(data==='소스 가득'){
            istab2=true;
            istab1=false;
            istab3=false;
            istab4=false;
            istab5=false;
        }
        else if(data==='갓성비'){
            istab3=true;
            istab1=false;
            istab2=false;
            istab4=false;
            istab5=false;
        }
        else if(data==='몬스터'){
            istab4=true;
            istab1=false;
            istab2=false;
            istab3=false;
            istab5=false;
        }
        else if(data==='랭킹'){
            istab5=true;
            istab1=false;
            istab2=false;
            istab3=false;
            istab4=false;
        }
        setState({
            ...state,
            istab1:istab1,
            istab2:istab2,
            istab3:istab3,
            istab4:istab4,
            istab5:istab5,
        })
    }

    

    return (
        <div id='section6'>
            <div className="container">
                <div className="title">
                    <h2>{state.타이틀}</h2>
                </div>
                <div className="content">
                    <div className="tab-menu">
                        <button onClick={(e)=>onClickTabMenu(e,'야들야들')} className={state.istab1?'on':''}>야들야들 닭다리살</button>
                        <button onClick={(e)=>onClickTabMenu(e,'소스 가득')}  className={state.istab2?'on':''}>소스 가득 닭가슴살</button>
                        <button onClick={(e)=>onClickTabMenu(e,'갓성비')}  className={state.istab3?'on':''}>갓성비 볶음밥</button>
                        <button onClick={(e)=>onClickTabMenu(e,'몬스터')}  className={state.istab4?'on':''}>몬스터 닭가슴살</button>
                        <button onClick={(e)=>onClickTabMenu(e,'랭킹')}  className={state.istab5?'on':''}>랭킹 UP 닭가슴살</button>
                    </div>
                    <div className="product-box">
                        <ul>
                            {
                                state.istab1 && (
                                <li>
                                <div className="main-img">
                                    <img src="./images/intro/section6/IMG1700gfd110497784.jpg" alt="" />
                                    <div className="text-box">
                                        <em>부드럽고 쫄깃한 육즙 가~득 닭다리살🍗</em>
                                        <p>뜨거운 인기에 힘입어 품절 대란까지! 늦기전에 담아요!</p>
                                    </div>
                                </div>
                                <div className="product-list">
                                    <ul>
                                        {
                                            state.제품.map((item, idx)=>{
                                                return (
                                                    <li className={`list list${idx+1}`} key={item.번호}>
                                                        <img src={`./images/intro/section6/${item.이미지}`} alt="" />
                                                        <a href="!#">
                                                            <p>{item.제품명}</p>
                                                            <span><strong>{item.가격.toLocaleString('ko-KO')}</strong>원</span>
                                                            <button><img src="./images/intro/section6/ico-single-cart-darkgray.png" alt="" /></button>
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        
                                        }
                                    </ul>
                                </div>
                                </li>
                                )
                            }
                            {
                                state.istab2 && (
                                <li>
                                <div className="main-img">
                                    <img src="./images/intro/section6/IMG1700JAs110507909.jpg" alt="" />
                                    <div className="text-box">
                                        <em>닭가슴살 사이사이 꽉 채운 감칠맛 가득 소스</em>
                                        <p>헤어 나올 수 없는 단짠단짠 소스의 매력에 퐁닭</p>
                                    </div>
                                </div>
                                <div className="product-list">
                                    <ul>
                                        {
                                            state.제품2.map((item, idx)=>{
                                                return (
                                                    <li className={`list list${idx+1}`} key={item}>
                                                        <img src={`./images/intro/section6/${item.이미지}`} alt="" />
                                                        <a href="!#">
                                                            <p>{item.제품명}</p>
                                                            <span><strong>{item.가격.toLocaleString('ko-KO')}</strong>원</span>
                                                            <button><img src="./images/intro/section6/ico-single-cart-darkgray.png" alt="" /></button>
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        
                                        }
                                    </ul>
                                </div>
                                </li>
                                )
                            }
                            {
                                state.istab3 && (
                                <li>
                                <div className="main-img">
                                    <img src="./images/intro/section6/IMG1700DoA110514254.jpg" alt="" />
                                    <div className="text-box">
                                        <em>공기밥 2천원 시대에 널 만난건 행운이야🍀</em>
                                        <p>1천원대로 만나는 볶음밥 & 주먹밥 모음집!</p>
                                    </div>
                                </div>
                                <div className="product-list">
                                    <ul>
                                        {
                                            state.제품3.map((item, idx)=>{
                                                return (
                                                    <li className={`list list${idx+1}`} key={item}>
                                                        <img src={`./images/intro/section6/${item.이미지}`} alt="" />
                                                        <a href="!#">
                                                            <p>{item.제품명}</p>
                                                            <span><strong>{item.가격.toLocaleString('ko-KO')}</strong>원</span>
                                                            <button><img src="./images/intro/section6/ico-single-cart-darkgray.png" alt="" /></button>
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        
                                        }
                                    </ul>
                                </div>
                                </li>
                                )
                            }
                            {
                                state.istab4 && (
                                <li>
                                <div className="main-img">
                                    <img src="./images/intro/section6/IMG1700EfY110522317.jpg" alt="" />
                                    <div className="text-box">
                                        <em>맛도, 용량도, 영양도 몬스터급!😈</em>
                                        <p>꾸준히 사랑받는 데엔 이유가 다 있죠, 믿먹 몬스터라인 총출동!</p>
                                    </div>
                                </div>
                                <div className="product-list">
                                    <ul>
                                        {
                                            state.제품4.map((item, idx)=>{
                                                return (
                                                    <li className={`list list${idx+1}`} key={item}>
                                                        <img src={`./images/intro/section6/${item.이미지}`} alt="" />
                                                        <a href="!#">
                                                            <p>{item.제품명}</p>
                                                            <span><strong>{item.가격.toLocaleString('ko-KO')}</strong>원</span>
                                                            <button><img src="./images/intro/section6/ico-single-cart-darkgray.png" alt="" /></button>
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        
                                        }
                                    </ul>
                                </div>
                                </li>
                                )
                            }
                            {
                                state.istab5 && (
                                <li>
                                <div className="main-img">
                                    <img src="./images/intro/section6/IMG1700QSL110531686.jpg" alt="" />
                                    <div className="text-box">
                                        <em>오직 실제 구매 데이터로만 선정한 순위👑</em>
                                        <p>'랭킹'닭컴 답게 자신있게 선보이는 순위권 닭가슴살!</p>
                                    </div>
                                </div>
                                <div className="product-list">
                                    <ul>
                                        {
                                            state.제품5.map((item, idx)=>{
                                                return (
                                                    <li className={`list list${idx+1}`} key={item}>
                                                        <img src={`./images/intro/section6/${item.이미지}`} alt="" />
                                                        <a href="!#">
                                                            <p>{item.제품명}</p>
                                                            <span><strong>{item.가격.toLocaleString('ko-KO')}</strong>원</span>
                                                            <button><img src="./images/intro/section6/ico-single-cart-darkgray.png" alt="" /></button>
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        
                                        }
                                    </ul>
                                </div>
                                </li>
                                )
                            }

                        </ul>
                    </div>
                </div>
                <div className="banner">
                    <a href="!#"><img src="./images/intro/section6/IMG1697UIj098724859.jpg" alt="" /></a>
                </div>
            </div>
        </div>
    );
};
