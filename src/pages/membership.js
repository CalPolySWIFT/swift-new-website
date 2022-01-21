import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import styles from "./styles.module.css";

function Steps() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <div class="container">
        <div class="row">
          <div class="col centered padding--lg">
            <h2>STEP 1</h2>
            <p>Join Discord</p>
            <img src={useBaseUrl("img/discord.png")} className="discord" alt="discord logo" /><br />
            <div class={styles.buttons}>
              <Link
                class={clsx(
                  "button button--primary button--gray-dark button--lg button-round",
                  styles.getStarted
                )}
                to={"https://discord.gg/Na5PGfp/"}
              >
                Discord
              </Link>
            </div>
          </div>
          <div class="col centered padding--lg">
            <h2>STEP 2</h2>
            <p>Join myBAR</p>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="180px" height="360px" viewBox="0 0 0 0"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M751 1519 c-196 -35 -374 -209 -417 -411 -58 -273 104 -542 375 -622
72 -21 221 -21 292 0 170 51 310 189 361 359 81 267 -65 556 -330 652 -73 27
-200 37 -281 22z m201 -20 c131 -27 273 -127 337 -237 44 -75 42 -82 -22 -82
-39 0 -58 -5 -69 -17 -13 -16 -30 -60 -32 -87 -1 -5 -6 -11 -12 -13 -6 -2 -18
17 -25 42 -8 25 -22 53 -31 62 -21 19 -99 21 -132 3 -19 -10 -29 -9 -54 4 -41
21 -90 20 -134 -3 -36 -18 -37 -18 -65 0 -33 22 -72 24 -117 5 -20 -8 -39 -10
-47 -5 -23 14 -115 11 -128 -5 -8 -9 -13 -68 -14 -168 -3 -146 -2 -154 19
-175 26 -26 85 -29 122 -7 20 13 22 22 22 114 0 97 9 125 32 102 6 -6 12 -42
13 -79 4 -111 5 -117 15 -133 6 -9 28 -15 65 -16 76 -2 85 12 85 133 0 88 9
118 31 96 5 -5 10 -51 10 -103 0 -69 5 -97 16 -108 19 -20 111 -26 131 -10 14
11 15 10 8 -7 -17 -42 -17 -51 3 -69 15 -14 42 -20 96 -24 l75 -5 34 36 c31
33 47 69 133 295 32 86 41 78 42 -39 2 -137 -49 -260 -149 -360 -190 -192
-501 -199 -706 -16 -31 28 -100 117 -90 117 3 0 -5 15 -18 34 -23 34 -56 179
-56 245 0 52 40 180 75 240 62 105 164 186 290 229 68 24 164 28 247 11z
m-252 -344 c15 -8 30 -20 32 -27 3 -9 13 -6 32 10 57 44 147 37 182 -15 14
-22 17 -52 18 -160 l1 -133 -57 0 -58 0 0 89 c0 107 -10 141 -43 141 -41 0
-47 -17 -47 -127 l0 -103 -60 0 -60 0 0 96 c0 105 -9 134 -43 134 -40 0 -47
-18 -47 -127 l0 -103 -60 0 -60 0 0 165 0 165 61 0 c56 0 61 -2 56 -20 -6 -23
8 -27 20 -6 19 34 88 45 133 21z m419 -87 c15 -48 29 -89 32 -93 3 -3 19 38
34 90 l29 95 62 0 62 0 -35 -92 c-121 -327 -128 -338 -211 -338 -43 0 -112 16
-112 26 0 3 31 73 36 82 1 2 12 -1 24 -8 11 -6 29 -9 39 -5 16 5 12 21 -44
158 -33 84 -65 158 -69 165 -6 10 7 12 59 10 l68 -3 26 -87z m-85 -137 c14
-36 26 -67 26 -71 0 -3 -16 -6 -35 -6 l-35 0 0 80 c0 91 6 90 44 -3z"/>
<path d="M2000 1220 c-4 -8 -38 -87 -74 -175 -37 -88 -75 -179 -86 -202 l-20
-43 64 0 63 0 16 40 15 40 85 0 84 0 13 -40 13 -40 64 0 c34 0 63 2 63 4 0 3
-62 153 -176 421 -7 17 -115 12 -124 -5z m135 -77 c15 -38 47 -113 70 -168 56
-130 59 -141 41 -148 -26 -10 -55 5 -75 39 l-20 34 -83 0 c-90 0 -104 -5 -121
-40 -12 -24 -57 -43 -75 -31 -9 6 20 83 131 344 15 35 19 37 60 37 l44 0 28
-67z"/>
<path d="M2043 1088 c-25 -31 -45 -89 -39 -113 5 -20 13 -25 39 -26 85 -3 95
11 65 87 -24 59 -46 76 -65 52z m67 -115 c0 -2 -22 -3 -49 -3 l-50 0 18 43
c10 23 21 51 25 62 6 16 12 8 32 -40 13 -33 24 -61 24 -62z"/>
<path d="M1460 1015 l0 -215 121 0 c146 0 201 12 234 52 35 41 35 109 0 143
-13 14 -32 25 -42 25 -14 0 -11 6 13 25 59 47 49 136 -19 168 -27 13 -65 17
-171 17 l-136 0 0 -215z m307 169 c40 -30 43 -81 8 -122 -29 -34 -27 -43 17
-80 36 -30 38 -80 6 -117 -20 -22 -35 -27 -103 -34 -85 -8 -187 -7 -202 2 -6
4 -10 296 -4 366 1 11 25 13 126 9 106 -3 129 -7 152 -24z"/>
<path d="M1570 1145 c-17 -21 -22 -75 -9 -92 7 -8 33 -13 70 -13 46 0 64 5 79
20 27 27 25 55 -6 79 -33 26 -115 29 -134 6z m107 -11 c12 -3 25 -15 29 -27 9
-30 -20 -47 -81 -47 l-52 0 3 38 c2 20 3 38 3 40 2 4 76 2 98 -4z"/>
<path d="M1565 989 c-13 -21 -16 -69 -5 -89 9 -17 20 -20 78 -20 77 1 105 16
105 56 0 42 -37 64 -110 64 -34 0 -65 -5 -68 -11z m147 -26 c22 -20 22 -27 2
-47 -11 -11 -34 -16 -77 -16 l-62 0 0 40 0 40 59 0 c41 0 65 -5 78 -17z"/>
<path d="M2312 1018 l3 -213 61 -3 60 -3 -4 66 -4 65 30 0 c26 0 35 -9 72 -65
l42 -65 70 0 c53 0 67 3 61 13 -4 6 -27 40 -51 75 -24 35 -43 64 -41 66 2 2
14 9 26 15 52 27 72 125 39 190 -29 55 -79 71 -234 71 l-133 0 3 -212z m325
148 c33 -36 35 -42 30 -88 -5 -38 -15 -59 -41 -88 -37 -41 -38 -63 -6 -97 16
-18 40 -57 40 -66 0 -2 -17 -3 -37 -3 -34 2 -42 7 -73 54 -53 78 -85 95 -124
63 -11 -9 -16 -30 -16 -61 0 -45 -1 -48 -30 -52 -17 -3 -32 -3 -35 0 -7 7 -6
349 1 367 6 15 22 17 131 13 l125 -3 35 -39z"/>
<path d="M2420 1131 c-5 -11 -10 -39 -10 -64 0 -36 4 -46 24 -57 36 -19 112
-8 142 21 31 29 31 59 -1 93 -21 23 -32 26 -84 26 -49 0 -62 -4 -71 -19z m140
-21 c42 -42 12 -75 -72 -82 l-58 -5 0 54 0 53 55 0 c42 0 60 -5 75 -20z"/>
<path d="M1466 728 c-10 -38 -7 -48 14 -48 21 0 45 43 34 61 -11 18 -42 9 -48
-13z m29 -28 c-3 -5 -10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12
-4 9 -10z"/>
<path d="M1537 743 c-12 -21 -16 -63 -7 -63 5 0 10 5 10 11 0 8 4 8 14 0 11
-9 15 -6 20 14 4 14 4 30 1 35 -7 12 -32 13 -38 3z m33 -17 c0 -11 -19 -15
-25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z"/>
<path d="M1601 736 c-20 -24 -9 -51 19 -51 21 0 25 5 25 30 0 34 -24 45 -44
21z m39 -20 c0 -17 -27 -29 -35 -16 -4 6 -3 15 0 20 9 15 35 12 35 -4z"/>
<path d="M1671 726 c-6 -16 -10 -34 -8 -40 3 -6 10 2 16 18 6 16 10 34 8 40
-3 6 -10 -2 -16 -18z"/>
<path d="M1713 730 c-3 -11 -9 -17 -14 -14 -11 7 -11 -7 0 -25 10 -15 15 -8
25 32 7 31 -3 38 -11 7z"/>
<path d="M1745 734 c-9 -9 -14 -23 -11 -31 3 -8 6 -17 6 -19 0 -2 9 -4 20 -4
11 0 20 5 20 10 0 6 -7 10 -15 10 -8 0 -15 7 -15 15 0 8 9 15 21 15 11 0 17 5
14 10 -9 14 -21 12 -40 -6z"/>
<path d="M1812 738 c-15 -15 -16 -44 -2 -53 6 -3 19 -3 31 0 15 5 19 14 17 33
-3 29 -26 40 -46 20z m38 -17 c0 -5 -6 -14 -14 -20 -16 -13 -32 2 -21 19 8 12
35 13 35 1z"/>
<path d="M1908 720 c-28 -36 -30 -52 -2 -30 13 12 17 11 24 0 14 -23 22 -5 13
31 l-9 32 -26 -33z"/>
<path d="M1971 736 c-18 -22 -9 -50 17 -54 12 -2 22 1 22 7 0 6 -9 11 -21 11
-12 0 -19 5 -16 13 2 6 14 12 26 11 12 0 20 4 18 10 -6 17 -33 18 -46 2z"/>
<path d="M2034 715 c1 -41 11 -46 20 -10 4 14 11 25 16 25 6 0 10 5 10 10 0 6
-10 10 -23 10 -20 0 -23 -5 -23 -35z"/>
<path d="M2083 716 c-6 -20 -7 -36 -2 -36 10 0 23 44 17 61 -2 6 -9 -5 -15
-25z"/>
<path d="M2119 746 c-7 -8 1 -66 10 -66 10 0 44 60 38 67 -3 2 -11 -6 -18 -19
l-13 -23 -5 23 c-4 13 -9 21 -12 18z"/>
<path d="M2180 724 c-13 -32 -13 -51 -1 -38 10 11 24 64 16 64 -3 0 -10 -12
-15 -26z"/>
<path d="M2213 715 c-1 -19 3 -35 8 -35 5 0 9 11 9 25 0 18 5 25 20 25 15 0
20 -7 20 -25 0 -14 5 -25 10 -25 6 0 10 6 10 14 0 7 7 19 15 26 8 7 15 17 15
23 0 5 -9 2 -20 -8 -16 -14 -20 -15 -20 -4 0 10 -12 16 -33 17 -31 2 -33 1
-34 -33z"/>
<path d="M2350 724 c-13 -34 -13 -53 1 -34 8 11 12 12 16 3 7 -18 26 -16 20 1
-3 8 -1 16 5 18 16 6 2 38 -17 38 -8 0 -20 -12 -25 -26z m35 -4 c-3 -5 -10
-10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z"/>
<path d="M2417 743 c-2 -5 -7 -20 -11 -35 -6 -25 -4 -28 19 -28 14 0 25 4 25
10 0 5 -7 7 -15 4 -8 -4 -15 -1 -15 5 0 6 8 11 18 11 14 0 15 2 2 10 -13 8
-12 10 3 10 9 0 17 5 17 10 0 12 -37 14 -43 3z"/>
<path d="M2476 728 c-14 -19 -14 -24 -2 -37 9 -9 21 -11 33 -6 16 8 16 9 -5
13 -28 4 -24 26 6 30 15 2 21 -3 24 -20 2 -17 9 -23 28 -23 20 0 26 6 28 28 4
31 -20 46 -42 28 -10 -8 -16 -9 -21 -1 -10 17 -33 11 -49 -12z m104 -12 c0
-17 -27 -29 -35 -16 -4 6 -3 15 0 20 9 15 35 12 35 -4z"/>
<path d="M2610 724 c-14 -36 -13 -49 3 -35 9 7 17 7 24 0 7 -7 12 -3 17 16 12
48 -27 65 -44 19z m40 2 c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16
-4z"/>
<path d="M2671 719 c-14 -41 -15 -39 13 -39 32 0 53 26 39 48 -18 29 -40 25
-52 -9z m39 -3 c0 -8 -7 -16 -15 -20 -17 -6 -18 -4 -9 18 8 20 24 21 24 2z"/>
</g>
</svg>
            <div class={styles.buttons}>
              <Link
                class={clsx(
                  "button button--primary button--gray-dark button--lg button-round",
                  styles.getStarted
                )}
                to={"https://mybar.cpp.edu/organization/telecommunications"}
              >
                myBAR
              </Link>
            </div>
          </div>
          <div class="col centered padding--lg">
            <h2>STEP 3</h2>
            <p>Complete Registration</p>
            <FontAwesomeIcon className="faFileAlt" icon={ faFileAlt }/><br />
            <Link
                class={clsx(
                  "button button--primary button--gray-dark button--lg button-round",
                  styles.getStarted
                )}
                to={"https://www.eventbrite.com/e/swift-2021-2022-membership-tickets-169872480161"}
              >
              Membership Fees
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Benefits() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <div class="container">
        <h2 class="centered">Benefits</h2>
        <div class={"row"}>
          <div class={"col col--4 centered"}>
            <h2 class="text--center">Community</h2>
            <p class="text--center">Be part of a large community of students spanning over 20 years.</p>
            <p class="text--center">Join a Discord server with 700+ members of current students, alumni, and mentors.</p>
          </div>
          <div class={"col col--4"}>
            <div class={clsx(styles.logoFixedHeight)}>
              <img src={useBaseUrl("img/logo_only_white.png")} alt="Event" />
            </div>
          </div>
          <div class={"col col--4 centered"}>
            <h2 class="text--center">Engaging Presentations</h2>
            <p class="text--center">Come to one of our presentations and witness the greatness of orbital weapons.</p>
            <p class="text--center">Chet Apichart is waiting for you....</p>
          </div>
        </div>
        <div class={"row"}>
          <div class={"col col--4"}>
            <h2 class="text--center">Giveaways</h2>
            <div>
              <p class="text--center">Free food at meetings</p>
              <p class="text--center">Free T-Shirts, Stickers, Webcam Covers, and Other Swag</p>
            </div>
          </div>
          <div class={"col col--4"}>
            <h2 class="text--center">Events</h2>
            <div>
              <p class="text--center"> Access and discounts to conferences and events</p>
              <p class="text--center"> Access to workshops and events throughout the year </p>
              <p class="text--center"> Free attendance to Tech Symposium</p>
              <p class="text--center"> Go on tours to organizations focusing on System Administration and Cyber Security</p>
            </div>
          </div>
          <div class={"col col--4"}>
            <h2 class="text--center">Competition</h2>
            <div>
              <p class="text--center">Participate in competitions:</p>
              <p class="text--center"> Participate in Collegiate Penetration Testing Competition (CPTC)</p>
              <p class="text--center"> Participate in Collegiate Cyber Defense Competition (CCDC)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Description() {
  return (
    <div class={styles.sectionPadding}>
      <div class="container">
        {/* <div class={styles.description}>  */}
        <div class={clsx("margin-centered padding--xl")}>
          <p>
            <span class={styles.firstWord}>SWIFT</span> is a way of moving your college career to the next level.
            Joining is a three step process, but it should not take more then 10
            minutes. Membership allows you to participate in events and
            competitions, vote in elections and much more!
          </p>
          <p>
            With the help of our club resources, you can make your mark on the
            cyber security field. Join us and meet other students that are
            talented and passionate about cybersecurity.
          </p>
          <p>
            Membership is per year and is available to all Cal Poly Students and
            active Cal State Students of any major. Membership lasts for the
            entire academic year.
          </p>
        </div>
      </div>
    </div>
  );
}

function Quotes() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <div class="container">
        <div class="row padding--lg">
          <div class={"col col--6 centered"}>
            <img src={useBaseUrl("img/Robinson.jpg")}></img>
            <div class={styles.quote}>
              <p class={styles.quoteText}>
                “Joining SWIFT has completely changed my career trajectory. I went from
                being a CIS student to landing a cybersecurity internship, becoming Director
                of SWIFT Labs, and being an accomplished penetration tester all within a
                year and a half. The most important part of my time at SWIFT is seeing the
                hard work build up to something greater. Being a penetration tester has been
                something I’ve been working towards since February, and this past
                November, I represented Cal Poly Pomona at the Collegiate Penetration
                Testing Competition and won 1st place in the Western Region.”
              </p>
              <p class={"text--right text--bold"}>- Robinson Tran, CIS Information Security, Class of 2021 </p>
            </div>
          </div>
          <div class={"col col--6 centered"}>
            <img src={useBaseUrl("img/Luis.jpg")}></img>
            <div class={styles.quote}>
              <p class={styles.quoteText}>
                “Without my involvement in Students With an Interest in the Future of
                Technology I can guarantee with absolute certainty, I would never have been
                able to answer interview questions. My time as an E-board member of the
                student run organization has accelerated my cybersecurity knowledge
                through a variety of ways such as leading weekly presentations, generating
                cybersecurity based workshops, and generally fostering a community of
                individuals with a passion for the industry.”
              </p>
              <p class={"text--right text--bold"}>- Luis Velasquez, CIS Information Security, Class of 2022 </p> 
            </div>
          </div>
        </div>
      </div>
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
          <h1>Join the SWIFT Community</h1>
        </div>
        <main>
          <Steps />
          <Benefits />
          <Description />
          <Quotes />
        </main>
      </Layout>
    );
  }
  
export default Membership;