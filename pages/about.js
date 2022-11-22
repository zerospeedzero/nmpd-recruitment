import styles from '../styles/about.module.css'
import { useEffect, useState } from 'react'
import * as SiIcons from 'react-icons/si'
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
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    opacity:1                     
                }}                    
                transition={{duration: 1}}>
            <h2>About New Media and Production Design</h2>
            <p>SAIT or Southern Alberta Institute of Technology is a university located in Alberta, Calgary, Canada. It offers many courses, including New Media Production & Design. With NMPD, you would be instructed to create and develop engaging digital content. Furthermore, you would be expected to work on project-based assignments and hands-on training.  </p>
            <p>After you graduated, you would be received an NMPD diploma and there are possible positions available for you such as graphic design, web design, corporate communications specialist, video editor, etc. </p>
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
            <p>For more information, please visit <a onClick={handleEvent2} href="https://www.sait.ca/programs-and-courses/diplomas/new-media-production-and-design" rel="noreferrer"  target="_blank">Sait NMPD website</a></p>
        </motion.div>
        </div>
    )
}

export default about
