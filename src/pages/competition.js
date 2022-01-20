import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import clsx from 'clsx';
import styles from "./styles.module.css";
import {faDatabase, faHandshake, faShieldAlt} from '@fortawesome/free-solid-svg-icons';

function Description() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <div class="container">
        <div class={clsx(styles.sectionFixed, "margin-centered padding--xs")}>
          <p>
            Students with an Interest in
            the Future of Technology is the premier information technology and
            security organization at Cal Poly Pomona. We aim to inspire and
            create a generation of students who are aware and capable of dealing
            with the dynamic landscape of information security, cyber security,
            and information technology. Together we can build a secure future
            through training, experience, and education.
          </p>
        </div>
      </div>
    </div>
  );
}

function CCDC() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/ccdc.jpg")} alt="Event" />
          </div>
          <div class="col col--5 centered padding--lg">
            <h2 class=""><a href="http://www.nationalccdc.org/">CCDC</a></h2>
            <p class="text--justify">
              CCDC is a national blue teaming competition that challenges student to maintain 
              and protect a simulated corporation. CCDC challenges a variety of skills, 
              maintaining a company’s day-to-day operations, managing networks, 
              and hardening main services in Linux and Windows. 
              Many industries recognize CCDC as real world technical experience. 
              To prepare, SWIFT invites all students for weekly CCDC training starting summer 
              till the end of nationals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function CPTC() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <section class="container">
        <div class="row">
          <div class="col col--5 centered padding--lg">
            <h2 class=""><a href="https://globalcptc.org/">CPTC</a></h2>
            <p class="text--justify">
              CPTC is a national red teaming competition that challenges students to penetrate and attack by exploiting vulnerabilities 
              in order to extract as much damaging information as possible. SWIFT provides training 
              in both areas of securing and penetrating corporations; 
              with an understanding of both practices, we hope students will thrive in the competition 
              as well as the real world. SWIFT has been a huge supporter in all cybersecurity competitions, 
              absorbing the same expenses for our CPTC competitors as CCDC.
            </p>
          </div>
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/cptc.jpg")} alt="Competition" />
          </div>
        </div>
      </section>
    </div>
  );
}

function RvB() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/ccdc.jpg")} alt="Event" />
          </div>
          <div class="col col--5 centered padding--lg">
          <h2 class="">Red vs. Blue</h2>
            <p class="text--justify">
            Red vs. Blue (RvB) is a SWIFT-run competition that enables its teams 
            competing in CCDC and CPTC to share their technical knowledge and expertise 
            with other students. RvB is modeled after CCDC and places a team of 4 students 
            into a vulnerable network they have to protect. SWIFT board and alumni act as 
            an adversary trying to compromise the network and give students a unique 
            experience of troubleshooting and incident response in an active breach 
            scenario. Originating from a partnership between SWIFT and Troy High School, 
            we aim to expand this opportunity for SWIFT members and give the competition 
            experience into everyone's hands.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function NCL() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <section class="container">
        <div class="row">
          <div class="col col--5 centered padding--lg">
            <h2 class=""><a href="">National Cyber League</a></h2>
          </div>
          <div class="col col--7">
            <p class="text--justify">
              National Cyber League, or NCL, is a Capture-The-Flag competition that 
              encourage students to use a wide variety of tools, explore new technologies, 
              and think outside the box to solve various challenges on its platform. Students 
              are tasked to perform open-source intelligence on social media accounts, websites, 
              and even Google Maps, as well as analyze packet captures for IP addresses and data 
              transfer and even perform reverse engineering on a binary to identify flags. This 
              competition is open for everyone of all skill levels.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Hive() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--7">
            <p class="text--justify">
              Hivestorm is a CyberPatriot-esque competition where students are tasked to perform 
              a variety of hardening techniques and practices to secure Windows and Linux machines. 
              Students learn about basic Windows and Linux system administration, as well as 
              different utilities within each operating system to perform basic hardening tasks.
            </p>
          </div>
          <div class="col col--5 centered padding--lg">
            <h2 class=""><a href="http://hivestorm.org/rules.html">Hivestorm</a></h2>
          </div>
        </div>
      </section>
    </div>
  );
}


function Membership() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '100px'
            // height: '25vh',
        }}>
        <h1>Cybersecurity Competitions</h1>
      </div>
      <main>
        <Description />
        <CCDC />
        <CPTC />
        <RvB />
        <NCL />
        <Hive />
      </main>
    </Layout>
  );
}
  
export default Membership;