import styles from '../styles/about.module.css'
import { useEffect, useState } from 'react'
// import * as SiIcons from 'react-icons/si'
import {motion} from 'framer-motion' 
import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation"
import * as gtag from "../lib/ga/gtag"

function about() {
    // const [init,setInit] = useState(false)
    const variants = {
        initial: { opacity:0 },
        animate: {
            opacity: 1, 
            transition: {
                duration: 1
            }
        }
    }
    const goto_sait = {
        action: 'generate_lead',
        category: 'engagement',
        label: 'goto_sait',
        value: 'about'
    }    
    function handleEvent2(e) {
        e.preventDefault();
        gtag.event(goto_sait);
        console.log('handleEvent2 is generated;');  
    }

    return (
        <div>
            <motion.div
                className={styles.container1}
                variants={variants}
                initial='initial'
                // animate={ init ? 'animate' : 'initial'}
                animate={{
                    scale: [1, 1.5, 3, 1.5, 1],
                    rotate: [0, 10, 0, -10, 0],
                    // borderRadius: ["3%", "3%", "3%", "3%", "3%"],
                    opacity:1
                }}                    
                transition={{duration: 1}}>
            <h2>About New Media and Production Design courses</h2>
            <p>SAIT or Southern Alberta Institute of Technology is a university located in Alberta, Calgary, Canada. It offers many courses, including New Media Production & Design. With NMPD, you would be instructed to create and develop engaging digital content. Furthermore, you would be expected to work on project-based assignments and hands-on training.  </p>
            <p>After you graduated, you would be received an NMPD diploma and there are possible positions available for you such as graphic design, web design, corporate communications specialist, video editor, etc. </p>
            <div className={styles.overflow}>
            <table className={styles.table1}>
                <thead>
                <tr>
                    <td>Semester 1</td>
                    <td>Semester 2</td>
                    <td>Semester 3</td>
                    <td>Semester 4</td>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Industrial Communications</td>
                        <td>Production Company I</td>
                        <td>Production Company II</td>
                        <td>Production Company III</td>
                    </tr>
                    <tr>
                        <td>Web Communications I</td>
                        <td>Web Communications II</td>
                        <td>Web Communications III</td>
                        <td>Portfolio Development</td>
                    </tr>
                    <tr>
                        <td>Visual Communications I</td>
                        <td>Visual Communications II</td>
                        <td>Visual Communications III</td>
                        <td>Digital Independent Study</td>
                    </tr>
                    <tr>
                        <td>Business of New MediaCommunications I</td>
                        <td>Business of New MediaCommunications II</td>
                        <td>Storytelling for Digital</td>
                        <td>New Media Practicum</td>
                    </tr>
                    <tr>
                        <td>Rich Media Communications I</td>
                        <td>Rich Media Communications II</td>
                        <td>Rich Media Communications III</td>
                        <td>Capstone Project</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <h2>Student life in SAIT</h2>
            <p>As SAIT student you will have many opportunities to be involved in the student community. The campus is plenty of resources and activities to help you succeed.  We have a check you should complete once you start the NMPD program.</p> 
            <ul>
                <li>Print your eCard.</li>
                <li>Learn how to take notes and manage your time at the Lamb Learner Center.</li>
                <li>Book an appointment in the dental clinic.</li>
                <li>Attend a class in the wellness center.</li>
                <li>Enjoy a coffee cup at the Odyssey Caffe.</li>
                <li>Join a SAITSA Club that interest you.</li>
                <li>Borrow a book from the Reg Erhardt Library</li>
            </ul>
            <p>To know more about <a return href="https://www.sait.ca/student-life" target="_blank" rel="noreferrer">student life</a>.</p>
            <img className={styles.img} src="studentlife2.png"/>
            <h2>SAIT education different and why SAIT</h2>
            <p>You are a rough diamond that can be polished with a high-quality education. SAIT offers you not only that but the opportunity to learn by experience and connect with other professionals in the field. NMPD’s instructors are highly qualified professionals that teach the most updated techniques in the media production industry. Additionally, you will never be alone, SAIT is always to support you to reach succeed.</p>
            <img className={styles.img} src="studentlife3.png"/>
            <h2>Funding & Scholarships</h2>
            <p>With the generous support of SAIT donors, SAIT is proud to offer over $5 million in awards to students in almost every program. Awards are available to all qualifying SAIT students in recognition of academic success, financial need, community involvement, and other areas of success and support.</p>
            <p>You are able to find the awards in the <a target="_blank" rel="noreferrer" href="https://www.sait.ca/admissions/tuition-and-financial-aid/student-awards">Student Awards Guide 2022/23</a></p>
            <p>For more information, please visit <a target="_blank" rel="noreferrer" href="https://www.sait.ca/programs-and-courses/diplomas/new-media-production-and-design">Sait NMPD website</a></p>
            <img className={styles.img} src="studentlife1.png"/>
            <h2>Making of this website</h2>
            <p>Six students of New Media Production and Design are working on the design, development and soft launch of this website using the following technologies.</p>
            <ul>
                <li><a target="_target" rel="noreferrer" href="https://www.maxon.net/en/cinema-4d">Maxon Cinema 4D</a> - Create 3D models and animations for this website</li>
                <li><a target="_target" rel="noreferrer" href="https://www.adobe.com/ca/products/aftereffects.html">Adobe After Effects</a> - Video and VFX production tools for this website</li>
                <li><a target="_target" rel="noreferrer" href="https://www.adobe.com/ca/products/illustrator.html">Adobe Illustrator</a> - Graphics, icons and background image production tools for this website</li>
                <li><a target="_target" rel="noreferrer" href="https://portal.azure.com">Microsoft Azure Cloud Computing</a> - Running cloud apps anywhere anytime on any cloud environments</li>
                <li><a target="_target" rel="noreferrer" href="https://github.com/vercel/next.js/">NextJs</a> - Javascript-based framework - modern web development platform</li>
                <li><a target="_target" rel="noreferrer" href="https://github.com/framer/motion">Framer motion</a> - Easy and stable UX animation experience technology</li>
                <li><a target="_target" rel="noreferrer" href="https://github.com/aralroca/next-translate">NextJs translate</a> - Supports six languages to potential NMPD students</li>
                <li><a target="_target" rel="noreferrer" href="https://github.com/Bunlong/next-share">NextJs share</a> - Share NMPD link to social media including Facebook, WhatsApp, Reddit and LinkedIn</li>
                <li><a target="_target" rel="noreferrer" href="https://github.com/danalloway/react-country-flag">NextJs country flags</a> - Provides language switching for users</li>
                <li><a target="_target" rel="noreferrer" href="https://analytics.google.com/analytics/web/">Google analytics</a> - Provides key performance index and data for measurement</li>
            </ul>
            <h2>Team members</h2>
            <ul>
                <li>David Virgilio Chavero</li>
                <li>Kieu Diem Pham</li>
                <li>Mohammed EI Mehdi</li>
                <li>Yan Lok Yuen</li>
                <li>Jimmy Chan</li>
                <li>George Cheng</li>
            </ul>
        </motion.div>
        </div>
    )
}

export default about
