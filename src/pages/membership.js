import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import styles from "./styles.module.css";
import {faDiscord, faUserFriends} from "@fortawesome/free-brands-svg-icons";

function Steps() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <div class="container">        
        <div class="row">
          <div class="col centered padding--lg">
            <h2>STEP 1</h2>
            <p>Join Discord</p>
            <FontAwesomeIcon icon={faDiscord} className={styles.socialIcons}/> 
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
            <FontAwesomeIcon icon={faHandshake} className={styles.socialIcons}/> 
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
            <FontAwesomeIcon className="faFileAlt" icon={ faFileAlt } className={styles.socialIcons}/>
            <Link
                class={clsx(
                  "button button--primary button--gray-dark button--lg button-round",
                  styles.getStarted
                )}
                to={"https://www.eventbrite.com/e/swift-2021-2022-membership-tickets-169872480161"}
              >
              Fees
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
      <h2 class="centered">Benefits</h2><br/>
    {/* Row 1*/}
        <div class="row">
          <div class="column">
            <div class="card">
              <p><i class="fa fa-users benefits"></i></p>
              <h3>Community</h3>
              <hr/>
              <p>Be part of a large community of students spanning over 30 years.
              Join a Discord server with 700+ members of current students, alumni, and mentors.</p>
            </div>
          </div>

        {/*Swift Logo*/}
        <div class="column">
          <div class="card benefitsLogo">
            <img class="benefitsLogo" src={useBaseUrl("img/logo_only_white.png")} alt="swift logo" />
          </div>
        </div>


          <div class="column">
            <div class="card">
              <p><i class="fa fa-calendar benefits"></i></p>
              <h3>Events</h3>
              <hr/>
              <p>Access and discounts to conferences and events.
              Access to workshops and events throughout the year.
              Free attendance to Tech Symposium.
              Go on tours to organizations focusing on System Administration and Cyber Security</p>
            </div>
          </div>
        </div>
      {/* Row 2*/}
        <br/>
        <div class="row">
          <div class="column">
            <div class="card">
              <p><i class="fa fa-trophy benefits"></i></p>
              <h3>Competitions</h3>
              <hr/>
              <p>Participate in competitions:
              Participate in Collegiate Penetration Testing Competition (CPTC).
              Participate in Collegiate Cyber Defense Competition (CCDC).</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <p><i class="fa fa-gift benefits"></i></p>
              <h3>Giveaways</h3>
              <hr/>
              <p>Free food at meetings.
              Free T-Shirts, Stickers, Webcam Covers, and Other Swag.</p>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <p><i class="fa fa-desktop benefits"></i></p>
              <h3>Presentations</h3>
              <hr/>
              <p>Come to our weekly meetings where we present and discuss topics focusing on cyber security, 
              networking, system administration, and automation.<br/>
              We host peers and industry leaders in the field to give our members an insight to the professional world of technology.</p>
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
            <div class="col col--4 centered">
            <img className="testimonial-image" src={useBaseUrl("img/eboard/Robinson.jpg")}></img>
            </div>
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
          <div class="col col--4 centered">
            <img className="testimonial-image " src={useBaseUrl("img/eboard/Luis.jpg")}></img>
            </div>
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