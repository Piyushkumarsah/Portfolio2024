import React from 'react'
import theme from './theme'
import ReactJs from '../assets/react.png'
import JavaScript from '../assets/javascript.png'
import GitHub from '../assets/github.png'
import NodeJs from '../assets/node.png'
import Tailwind from '../assets/tailwind.png'
import MongoDb from '../assets/mongodb.png'
import MUI from '../assets/mui.png'
import HTML from '../assets/htmlimg.png'
import CSS from '../assets/css.png'
import CPP from '../assets/c-logo.png'
export default function ProfessionalSkills() {
    const skills = [
        { name: "HTML", image: HTML },
        { name: "CSS", image: CSS },
        { name: "ReactJs", image: ReactJs },
        { name: "JavaScript", image: JavaScript },
        { name: "GitHub", image: GitHub },
        { name: "NodeJs", image: NodeJs },
        { name: "Tailwind", image: Tailwind },
        { name: "MongoDb", image: MongoDb },
        { name: "MUI", image: MUI },
        { name: "CPP", image: CPP }
    ];
    return (

        <div>
            <div className='pb-12' style={{ backgroundColor: theme.primaryBackground }}>
                <div className='flex pt-12 text-white' >
                    <div className='m-auto  '>
                        <div className='flex items-center justify-center'>
                            <button className='flex text-black justify-center items-center h-8 w-40 my-4 rounded-md' style={{ backgroundColor: theme.vibrant }}>
                                <p className='font-bold'>Professional Skills</p>
                            </button>
                        </div>
                        <p className=' text-center text-2xl mt-2'>INNOVATIVE SOLUTION TO <p className='inline text-center text-2xl mx-2 ' style={{ color: theme.vibrant }}>ENHANCE</p></p>
                        <p className='text-center text-[#c1c1c1] mt-3'>Expertise in using the Tech-Stack</p>
                        <p className="mt-3 text-center" style={{ color: theme.secondaryText }}>Innovative problem solver with proficiency in diverse technologies and industries. Adept at leading teams, fostering collaboration, and driving results. <br /> Expertise includes project management, strategic planning, and adaptability in dynamic environments.</p>
                    </div>
                </div>
                <div>
                    <div className='flex'>
                        <div className="m-auto">
                            <div className="grid p-5 md:grid-cols-5 sm:grid-cols-3 grid-cols-2  gap-4">
                                {skills.map((skill, index) => (
                                    <div className="border m-2 flex flex-col items-center justify-center border-[#343434] h-[120px]  w-[120px] md:h-[150px] md:w-[150px]  p-8 rounded-md text-center" style={{ backgroundColor: theme.secondaryBackground, color: theme.secondaryText }}>
                                        <img src={skill.image} key={index} />
                                        <p className='mt-2'>{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

        </div>
    )
}
