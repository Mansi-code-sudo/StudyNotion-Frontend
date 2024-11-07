import HighlightText from "../components/core/HomePage/HighlightText"
import { useState } from "react";
import CTAButton from '../components/core/HomePage/Button';
import Frame from '../assets/Images/frame.png';
import LoginImage from '../assets/Images/login.webp';

const tabsName = [
    "Student",
    "Instructors"
]


const Login = () =>{

    const [currentTab,setCurrentTab]=useState(tabsName[0]);

    const setMyCards = (value)=>{
        setCurrentTab(value);
    }


    return (
        <div className="text-white flex flex-row gap-[50px] mt-[50px] ml-10 items-center justify-center
        mb-[100px]">
            
            <div>
                <h1 className="font-bold">Welcome Back</h1>
                <p
                className="mt-[20px] w-[400px]">Build skills for today, tomorrow, and beyond.<HighlightText text={"Education to future-proof your career."}/>
                 </p>


                 <div className=" flex flex-row rounded-full bg-richblack-800 mt-[50px] mb-5 px-1 py-1 w-[250px]">
                 {
                    tabsName.map((element,index)=>{
                        return (
                            <div 
                            className={`flex flex-row gap-2 items-center text-[16px]
                            ${currentTab===element ? "bg-richblack-900 text-richblack-5 font-medium"
                            :"text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer
                            hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
                            key={index}
                            onClick={()=>setMyCards(element)}>
                                {element}
                            </div>
                        )
                    })
                }
                 </div>

                 {/* form for input */}
                 <div className="flex flex-col gap-[40px]">
                    
                    <div>
                    <p>Email Address<span className="text-red-600">*</span></p>
                        <input type="email" required placeholder="Enter email address" className="custom-input"/>
                    </div>


                        <div>
                        <p>Password<span className="text-red-600">*</span></p>
                        <input type="password" required placeholder="Enter Password" className="custom-input"/>
                        </div>


                    <CTAButton active={true} linkto={"/"}>Log In</CTAButton>



                 </div>

            </div>

            <div className="image-container ml-[60px]">
      <img src={Frame} alt="Bottom Image" className="bottom-image" />
      <img src={LoginImage} alt="Top Image" className="top-image" />
           </div>


        </div>
    )
}

export default Login