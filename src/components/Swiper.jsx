import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import theme from './theme';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image from '../assets/css.png'
import stonePaper from '../assets/stonepaper.png'
import codeeditor2 from '../assets/codeeditor2.png';
import codeeditorlogin from '../assets/codeeditorlogin.png'
import yoga1 from '../assets/yoga1.png';
import yoga2 from '../assets/yoga2.png';
import portfolio1 from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.png';
import collegehub1 from '../assets/collegehub1.png';
import collegehub2 from '../assets/collegehub2.png';
import database1 from '../assets/database1.png';
import database2 from '../assets/database2.png';

export default () => {
    const projects = [
        { name: "College_hub", type: "Resourcing", image: collegehub1,code:"" },
        { name: "Product Management System", type: "Database Manager", image: database1,code:"https://github.com/Piyushkumarsah/ProductManagementSystem",visit:"" },
        { name: "RealTime Code Editor", type: "Live CodeEditor", image: codeeditor2,code:"https://github.com/Piyushkumarsah/Collaborative_Realtime-codeEditor",vist:" https://realtimeeditor-2r9t.onrender.com" },
        { name: "Stone Paper Scissor", type: "Game", image: stonePaper,code:"https://github.com/Piyushkumarsah/stonePaperScissor-Game",visit:"https://piyushkumarsah.github.io/stonePaperScissor-Game/" },
        { name: "Yoga World", type: "E-comm selling", image: yoga1,code:"https://github.com/Piyushkumarsah/yoga",visit:"https://piyushkumarsah.github.io/yoga/" },
        { name: "Portfolio", type: "ShowCase", image: portfolio1,code:"",visit:"" },
    ]
    return (
        <div>
            <div name='projects' className='flex flex-col py-12' style={{ backgroundColor: theme.primaryBackground }}>
                <div className='m-auto'>
                    <div className='flex flex-col pb-4 items-center'>
                        <button className='flex text-black justify-center items-center h-8 w-36 my-4 rounded-md' style={{ backgroundColor: theme.vibrant }}>
                            <p className='font-bold'>My Projects</p>
                        </button>
                        <div>
                            <p className='text-2xl text-white font-bold '>Turning ideas into<p className='inline text-center text-2xl mx-1 ' style={{ color: theme.vibrant }}>Reality</p></p>
                        </div>
                        <div>
                            <p className='text-sm py-4' style={{color:theme.primaryText}}>Some of my Projects Acheivements</p>
                        </div>
                        <div>
                            <p className='text-sm text-center' style={{color:theme.secondaryText}}>Witness the evolution of innovation as we transform ideas into tangible realities. Explore our project showcase, where creativity, determination, and <br /> expertise converge to shape the future. Experience the journey of turning vision into impactful outcomes.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Swiper
                        // install Swiper modules

                        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={3}
                        
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        // navigation
                        pagination={{ clickable: true }}
                        draggable={true}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        breakpoints= {
                            // when window width is >= 320px
                            {320: {
                              slidesPerView: 1,
                            //   spaceBetween: 20
                            },
                            // when window width is >= 480px
                            480: {
                              slidesPerView: 1,
                            //   spaceBetween: 30
                            },
                            // when window width is >= 640px
                            640: {
                              slidesPerView: 3,
                              spaceBetween: 20
                            }}
                          }
                    >
                        <div>
                            <div>
                                {projects.map((skill, index) => (
                                    <SwiperSlide autoplay delay={100} >
                                        <div className="border m-2 flex flex-col items-center justify-center border-[#343434] hover:scale-105 p-8 rounded-md" style={{ backgroundColor: theme.secondaryBackground, color: theme.secondaryText }}>
                                            <img src={skill.image} key={index} />
                                            <div className=' w-full pt-2'>
                                                <p className='text-sm' style={{ color: theme.vibrant }}>{skill.type}</p>
                                                <p className=' text-white text-xl'>{skill.name}</p>
                                                <p className='text-sm'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sit suscipit dolor sapiente reprehenderit sunt hic assumenda aut sequi quo.</p>
                                            </div>
                                            <div className='flex justify-between  w-full'>
                                                <button className='flex text-white justify-center items-center h-8 w-36 my-4 rounded-md hover:scale-110  border-dashed border-2' style={{ borderColor: theme.vibrant }}>
                                                    <a href={skill.code} className=''>Code</a>
                                                </button>
                                                <button className='flex text-black justify-center items-center h-8 w-36 my-4 hover:scale-110 rounded-md' style={{ backgroundColor: theme.vibrant }}>
                                                    <a href={skill.visit} className='font-bold'>Visit</a>
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </div>
                        </div>
                    </Swiper>
                </div>

            </div>
            <hr />

        </div>
    );
};