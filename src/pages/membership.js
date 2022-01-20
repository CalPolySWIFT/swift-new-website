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
                  "button button--primary button--gray-dark button-round button--lg",
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
            <img src={useBaseUrl("img/myBar.jpg")} className="myBar" alt="myBAR logo" /><br />
            <div class={styles.buttons}>
              <Link
                class={clsx(
                  "button button--primary button--gray-dark button-round button--lg",
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
                  "button button--primary button--gray-dark button-round button--lg",
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
            <h2 class="text--center">Community</h2>
            <p class="text--center">Be part of a large community of students spanning over 20 years.</p>
            <p class="text--center">Join a Discord server with 700+ members of current students, alumni, and mentors.</p>
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