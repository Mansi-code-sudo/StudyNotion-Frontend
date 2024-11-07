import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Footer from '../components/common/Footer';

const Home = () =>{
    return (
        <div>
            {/*Section 1 */}

            <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between'>
                <Link to={"/signup"}>

                    <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
                    transition-all duration-200 hover:scale-95 w-fit'>
                        <div className='flex flex-row items-center gap- rounded-full px-10 py-[5px] transition-all
                        duration-200 group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p>
                            <FaArrowRight/>
                        </div>
                    </div>

                </Link>

            <div className='font-semibold text-center text-4xl mt-7'>
                Empower Your Future With 
                <HighlightText text={"Coding Skills"}/>
            </div>

            <div className='mt-4 w-[80%] text-center text-lg font-bold text-richblack-300 max-w-maxContent'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and
                get access to a wealth of resources, including hands-on project, quizzes, and personalized 
                feedback form Instructors.
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                <CTAButton active={false} linkto={"/login"}>Book a Demo</CTAButton>
            </div>

            <div className='mx-3 my-12 shadow-blue-200'>
                <video loop muted autoPlay>
                    <source src={Banner} type='video/mp4'/>
                </video>
            </div>

            {/* code section 1 */}
            <div>
                <CodeBlocks position={"lg:flex-row"}
                heading={<div className='text-4xl font-semibold'>
                    Unlock your <HighlightText text="Coding Potential"/> with our online course
                </div>}
                subheading={"Our courses are designed and taught by industry experts who have years of experience"}
                ctabtn1={
                    {
                        btnText:"Try it yourself",
                        active:true,
                        linkto:"/signup"
                    }
                }
                ctabtn2={
                    {
                        btnText:"Learn More",
                        active:false,
                        linkto:"/login"
                    }
                }
                codeColor={"text-yellow-25"}
                codeblock={`<<DOCTYPE html> \n <html> \n <head>`}
                />
            </div>
            
            {/* code section 2 */}
            <div>
                <CodeBlocks position={"lg:flex-row-reverse"}
                heading={<div className='text-4xl font-semibold'>
                    Start <HighlightText text="Coding in seconds"/> 
                </div>}
                subheading={"Our courses are designed and taught by industry experts who have years of experience"}
                ctabtn1={
                    {
                        btnText:"Continue Lesson",
                        active:true,
                        linkto:"/signup"
                    }
                }
                ctabtn2={
                    {
                        btnText:"Learn More",
                        active:false,
                        linkto:"/login"
                    }
                }
                codeColor={"text-yellow-25"}
                codeblock={`<<DOCTYPE html> \n <html> \n <head>`}
                />
            </div>


            {/* Cards creation inside section 1 */}

            <ExploreMore/>

            </div>

            {/*Section 2 */}
            <div className='bg-pure-greys-5 text-richblack-700'> 

            <div className='homepage_bg h-[310px]'>
                <div className='w-11/12 max-w-maxContent flex items-center justify-center mx-auto gap-7'>
                    <div className='h-[150px]'></div>
                    
                    <div className='flex flex-row gap-7 text-white '>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex flex-row items-center gap-3'>
                                Explore Full Catalog
                                <FaArrowRight/>
                            </div>
                        </CTAButton>

                        <CTAButton active={false} linkto={"/signup"}>
                            <div className=''>
                                Learn More
                            </div>
                        </CTAButton>
                    </div>

                </div>
            </div>

            <div className='w-11/12 max-w-maxContent flex items-center ml-auto justify-between gap-7'>

                <div className='flex flex-row gap-5 mb-10 mt-[95px]'>

                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the skills you need for a <HighlightText text={"Job that is in demand"}/>
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>
                        <div className='text-[16px]'>
                            The modern StudyNotion dictates its own terms. Today to be competitive 
                            specialist requires more than professinal skills
                        </div>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div>Learn More</div>
                        </CTAButton>

                    </div>


                </div>

                


            </div>

            <div className='w-11/12 max-w-maxContent mx-auto flex justify-center'>
            <TimeLineSection/>
            </div>

            <div className='w-11/12 max-w-maxContent mx-auto flex justify-center'>
            <LearningLanguageSection/>
            </div>


            

            </div>

            {/*Section 3 */}

            <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8
            bg-richblack-900 text-white'>
                
                <InstructorSection/>

                <h2 className='text-center text-4xl font-semibold mt-10'>Review from other learners</h2>
                {/* review slider here */}
            </div>

            {/*Footer */}
            <Footer/>
        </div>
    )
}

export default Home