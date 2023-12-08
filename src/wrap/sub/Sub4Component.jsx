import React from "react";
import './scss/sub4.scss';
import Sub4ComponentOnePack from "./Sub4Component/Sub4ComponentOnePack";
import Sub4ComponentBest from "./Sub4Component/Sub4ComponentBest";
import axios from "axios";


export default function Sub4Component(){
    

    // 상태관리변수
    const [state, setState] = React.useState({
        product: [],
        onepackProduct: {
            pack1: [],
            pack2: [],
            pack3: [],
            pack4: [],
            pack5: [],
            pack6: [],
            pack7: [],
            pack8: [],
            pack9: [],
            pack10: []
        }
    });

    
    
    // AXIOS: 한번만 실행
    React.useEffect(()=>{

        axios({
            url: './data/sub/sub4.json',
            method: 'GET'
        })
        .then((res)=>{
            // console.log(res.data);
    
            setState({
                ...state,
                product: res.data.product,
                onepackProduct: {
                    pack1: res.data.onepackProduct.pack1,
                    pack2: res.data.onepackProduct.pack2,
                    pack3: res.data.onepackProduct.pack3,
                    pack4: res.data.onepackProduct.pack4,
                    pack5: res.data.onepackProduct.pack5,
                    pack6: res.data.onepackProduct.pack6,
                    pack7: res.data.onepackProduct.pack7,
                    pack8: res.data.onepackProduct.pack8,
                    pack9: res.data.onepackProduct.pack9,
                    pack10: res.data.onepackProduct.pack10
                }
            });
        })
        .catch((err)=>{
            console.log(err);
        });
        
    },[])
    


    return (
        <div id="sub" className="sub4">
            <div className="container">
                
                <div className="title-banner">
                    <a href="!#">
                        <img src="./images/sub/sub4/IMG1684TXn130827225.jpg" alt="" />
                    </a>
                </div>

                <Sub4ComponentBest bestProduct={state.product}/>
                
                <Sub4ComponentOnePack onepackProduct={state.onepackProduct} />

            </div>
        </div>
    )
}