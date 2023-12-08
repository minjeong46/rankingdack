import React from 'react';
import TopModalComponent from "./wrap/TopModalComponent";
import MainModalComponent from './wrap/MainModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from "./wrap/MainComponent";
import QuickModalComponent from "./wrap/QuickModalComponent";
import FooterComponent from './wrap/FooterComponent';
import SubLoginComponent from './wrap/sub/SubLoginComponent';
import SubSignupAgreementComponent from './wrap/sub/SubSignupAgreementComponent';
import SubSignupComponent from './wrap/sub/SubSignupComponent';
import Sub3Component from './wrap/sub/Sub3Component';
import Sub4Component from './wrap/sub/Sub4Component';
import Sub4ComponentModal from "./wrap/sub/Sub4Component/Sub4ComponentModal";
import Sub5Component from './wrap/sub/Sub5Component';
import Sub6Component from './wrap/sub/Sub6Component';
import Sub6ChildCongrats from './wrap/sub/Sub6Component/Sub6ChildCongrats';
import Sub7ExpressDeliveryComponent from './wrap/sub/Sub7ExpressDeliveryComponent';
import SubSignInIdSearchComponent from './wrap/sub/SubSignInIdSearchComponent';
import SubSignInIdSearchResultComponent from './wrap/sub/SubSignInIdSearchResultComponent';
import SubSignInPwResetComponent from './wrap/sub/SubSignInPwResetComponent';
import SubSignInPwSearchComponent from './wrap/sub/SubSignInPwSearchComponent';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { topModal } from "./reducer/topModal";
import { signIn } from './reducer/signIn';


export default function WrapComponent() {

    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        if(localStorage.getItem('RANKING_SIGNIN_DATA')!==null) {                        
            const res = JSON.parse(localStorage.getItem('RANKING_SIGNIN_DATA'));
            dispatch(signIn(res));
        }
    },[]);


    React.useEffect(()=>{
        let toDay = new Date();
        if(localStorage.getItem('RANKING_TOP_MODAL') !== null){
            const res = JSON.parse(localStorage.getItem('RANKING_TOP_MODAL'));
            let setDay = new Date(res.expires);

            if(toDay <= setDay){
                dispatch(topModal(false));
        
            }
            else {
                dispatch(topModal(true));
        
            }
        }
        
    },[]);


    return (
        <div id="wrap">
            {
                selector.topModal.isTopModal && <TopModalComponent />
            }
            { 
                selector.mainModal.isMainModal && <MainModalComponent />
            }
            <QuickModalComponent/>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>

                    <Route path='/' element={<HeaderComponent />}>
                        <Route index element={<MainComponent />}/>
                        <Route path='/index' element={<MainComponent />}/>
                        <Route path='/sub3' element={<Sub3Component />}/>
                        <Route path="/sub4" element={ <Sub4Component /> }/>
                        <Route path="/sub5" element={ <Sub5Component /> }/>
                        <Route path="/sub6" element={ <Sub6Component /> }/>
                        <Route path="/sub6Congrats" element={ <Sub6ChildCongrats /> }/>
                        <Route path='/sub7' element={<Sub7ExpressDeliveryComponent />}/>
                        <Route path='/login' element={<SubLoginComponent />}/>
                        <Route path='/signupAgree' element={<SubSignupAgreementComponent />}/>
                        <Route path='/signup' element={<SubSignupComponent />}/>
                        <Route path='/signinIdSearch' element={<SubSignInIdSearchComponent />}/>
                        <Route path='/signinIdSearchResult' element={<SubSignInIdSearchResultComponent />}/>
                        <Route path='/signinPwSearch' element={<SubSignInPwSearchComponent />}/>
                        <Route path='/signinPwReset' element={<SubSignInPwResetComponent />}/>

                        <Route path='/signinIdSearch' element={<SubSignInIdSearchComponent />}/>

                    </Route>

                </Routes>

            </BrowserRouter>

            {
                selector.sub4Modal.isSub4Modal && <Sub4ComponentModal />
            }

            <FooterComponent />

        </div>
    );
}
