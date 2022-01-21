import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

import {faDatabase, faHandshake, faShieldAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Carousel Shit


function Mission(){
  return(
    
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--12 centered">
            {/* <FontAwesomeIcon icon={faDatabase} class={clsx("core-icons")} /> */}
            {/* <FontAwesomeIcon icon={faDatabase} className={clsx(styles.sectionIcon)}/> */}
            <div class={clsx("padding--sm centered")}>
              <p>
                We are Students with an Interest in the Future of Technology, or SWIFT, the premier information 
                technology and security organization at Cal Poly Pomona. We focus on delivering the practical techniques, 
                resources, and workshops to succeed within the fields of cybersecurity, system administration, and networking 
                - for students, by students.
                
                We strive to inspire students to take their learning beyond the classroom and prepare members to endeavor into 
                their professional careers with mentoring from industry professionals working in CrowdStrike, Mandiant, Tesla, 
                and many other companies.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
        <div class="col fixed-img">
            <img src={useBaseUrl("img/swiftacademy.jpg")} alt="Event" />
          </div>
        </div>
    </section>
  </div>
  )
}

// function Mission(){
//   return(
//     <div class={clsx(styles.sectionPadding)}>
//       <section class="container">
//         <div class="row">
//           <div class="col col--12 centered">
//             {/* <FontAwesomeIcon icon={faDatabase} class={clsx("core-icons")} /> */}
//             {/* <FontAwesomeIcon icon={faDatabase} className={clsx(styles.sectionIcon)}/> */}
//             <div class={clsx("padding--sm centered")}>
//               <p>We are Students with an Interest in the Future of Technology, the premier information technology and security organization at Cal Poly Pomona. 
//               We aim to inspire and create a generation of students who are aware and capable of dealing with the dynamic landscape of information security, 
//               cyber security, and information technology. Together we can build a secure future through training, experience, and education. 
//               Let's work together to create and learn something new. Don't just take our word for it. 
//               Whether you are an industry professional or a curious student, take a look at our previous events. 
//               While you're at it, come to one of our unique workshops, trainings, or conferences and become part of SWIFT.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
// 

// function Message() {
//   return (
//     <div class={clsx(styles.sectionPadding, "section-background-color")}>
//       <div class="container">
//         <div class="row padding--lg">
//           <div class={"col col--6 centered"}>
//             <div className={styles.message}>
//               <h1 className={styles.heading}>What We Do</h1>
//               <p>
//               Being a part of SWIFT is much more then being a part of an organization. SWIFT is a community. 
//               We believe strongly in providing students with opportunities that can be obtained nowhere else and help 
//               build skills through on-campus and off-campus events. We believe in providing and understanding 
//               the skills required to excel in the industry through workshops and activities that build skills and 
//               friendships. Throughout the year SWIFT runs weekly meetings alternating between workshop trainings and 
//               discussions providing students a way to build up their skills in an alternating cycle of meetings.
//               </p>
//             </div>
//           </div>
//           <div class={"col col--6 centered"}>
//             <div className={styles.message}>
//             <h1 className={styles.heading}>Events</h1>
//               <p>
//               SWIFT hosts a number of free workshops that teach a variety of skills including Linux installation, 
//               network security, and penetration testing. Workshops are hands-on and are designed to let 
//               members get hands-on experience with real technology. We encourage our members to attend and run workshops and events. 
//               Through these exchange of knowledge we build skills and form partnerships far beyond the campus to the 
//               industry and professionals at large. We have a long history of starting, running events, and that are 
//               known for their in-depth nature and cover the full breadth of the industry.
//               </p>
            
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


function About() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '100px',
          // height: '25vh',
          fontSize: '20px',
        }}>
      <h1>SWIFT's Mission</h1>
      </div>
      <main>
        <Mission />
        {/* <Message /> */}
      </main>
    </Layout>
  );
}

export default About;