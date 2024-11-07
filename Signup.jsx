import HighlightText from "../components/core/HomePage/HighlightText"
import { useState } from "react";
import CTAButton from '../components/core/HomePage/Button';
import Frame from '../assets/Images/frame.png';
import SignupImage from '../assets/Images/signup.webp';

const tabsName = [
    "Student",
    "Instructors"
]


const Signup = () =>{

    const [currentTab,setCurrentTab]=useState(tabsName[0]);

    const setMyCards = (value)=>{
        setCurrentTab(value);
    }


    return (
        <div className="text-white flex flex-row gap-[50px] mt-[50px] ml-10 items-center justify-center
        mb-[100px]">
            
            <div>
                <h1 className="font-bold">Join the millions learning to code with StudyNotion for free</h1>
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
                    <div className="flex flex-row gap-3">
                        <div>
                        <p>First Name<span className="text-red-600">*</span></p>
                        <input type="string" required placeholder="Enter First Name" className="custom-input"/>
                        </div>
                        <div>
                        <p>Last Name<span className="text-red-600">*</span></p>
                        <input type="string" required placeholder="Enter Last Name" className="custom-input"/>
                        </div>

                    </div>
                    <div>
                    <p>Email Address<span className="text-red-600">*</span></p>
                        <input type="email" required placeholder="Enter email address" className="custom-input"/>
                    </div>

                    <div>
                    <p>Phone Number<span className="text-red-600">*</span></p>
                        <input type="number" required placeholder="1234567890" className="custom-input"/>
                    </div>


                    <div className="flex flex-row gap-3">
                        <div>
                        <p>Create Password<span className="text-red-600">*</span></p>
                        <input type="password" required placeholder="Enter Password" className="custom-input"/>
                        </div>
                        <div>
                        <p>Confirm Password<span className="text-red-600">*</span></p>
                        <input type="password" required placeholder="Enter Password" className="custom-input"/>
                        </div>

                    </div>

                    <CTAButton active={true} linkto={"/"}>Create Account</CTAButton>



                 </div>

            </div>

            <div className="image-container ml-[60px]">
      <img src={Frame} alt="Bottom Image" className="bottom-image" />
      <img src={SignupImage} alt="Top Image" className="top-image" />
           </div>


        </div>
    )
}

export default Signup