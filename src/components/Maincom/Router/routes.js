import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from '../Home/Nav';
import Banner from '../Home/banner';
import Footer from '../Home/Footer';

import Store from '../storepage/store';
import Periodic from '../Periodiccare/periodic';
// import Hairskincare from '../Home/hairskincare';
import Hairskincare from '../Hairskincare/banner';
import Login from '../Signupcom/login';
import Signup from '../Signupcom/signup';
import Enterotp from '../Signupcom/Enterotp';
import Likepage from '../Likedpage/likepage';
import Profile from '../Profilefold/profile';
export default function RoterNav() {
    return (
        <div>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path='/' element={<Banner/>}></Route>
                    <Route path='/store' element={<Store></Store>}></Route>
                    <Route path='/Periodic' element={<Periodic/>}></Route>
                    <Route path='/hairskin' element={<Hairskincare/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/login' element={<Profile/>}></Route>
                    <Route path='/signup' element={<Signup/>}></Route>
                    <Route path='/backtolog' element={<Enterotp/>}></Route>
                    <Route path='/likedpage' element={<Likepage/>}></Route>
                    {/* <Route path='/logout' element={<Signup/>}></Route> */}
                   
                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    )
}


              