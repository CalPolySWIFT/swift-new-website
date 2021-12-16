import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDatabase, faHandshake, faShieldAlt} from '@fortawesome/free-solid-svg-icons'

function CoreValues() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--4 centered">
            <FontAwesomeIcon icon={faShieldAlt} className={clsx(styles.sectionIcon)}/>
            <div class={clsx("padding--sm centered")}>
              <h2>Cybersecurity</h2>
              <p className="swift-desc">Learn about cybersecurity - everywhere from pentesting, to defending, to incident response, and everything in between. We bring the cybersecurity competition experience into your hands.</p>
            </div>
          </div>
          <div class="col col--4 centered">
            {/* <FontAwesomeIcon icon={faShieldAlt} class={clsx("core-icons")}/> */}
            <FontAwesomeIcon icon={faShieldAlt} className={clsx(styles.sectionIcon)}/>
            <div class={clsx("padding--sm centered")}>
              <h2>Computer Networking</h2>
              <p className="swift-desc">Learn about computer networking in SWIFT! We cover beginner-friendly topics such as IP addressing and gradually move on to network security and software-defined networking.</p>
            </div>
          </div>
          <div class="col col--4 centered">
            {/* <FontAwesomeIcon icon={faDatabase} class={clsx("core-icons")} /> */}
            <FontAwesomeIcon icon={faDatabase} className={clsx(styles.sectionIcon)}/>
            <div class={clsx("padding--sm centered")}>
              <h2>System Administration</h2>
              <p className="swift-desc">Want to get started with the basics of Linux and Windows? We got you covered! You will learn what it takes to be a sysadmin and acquire all the skills to build your own lab.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Competitions() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <section class="container">
        <div class="row">
          <div class="col col--5 centered padding--lg">
            <h2 class="">Competitions</h2>
            <p>
              Take your skills to the next level with challenges that put you up
              against the best in the field. Apply your cyber defense skills building
              defensive networks or be on the offensive and hack your way through
              a network. Our CCDC and CPTC teams will train you from the ground up.
            </p>
          </div>
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/trophies.jpg")} alt="Competitions" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Event() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/tech_symposium.jpg")} alt="Event" />
          </div>
          <div class="col col--5 centered padding--lg">
            <h2 class="">Events</h2>
            <p>
              We hold basic and advanced weekly workshops covering topics such as Introduction to Linux,
              Network Forensics with Wireshark, and so much more. We also host an annual student-run
              conference, Tech Symposium, opening previously-closed doors for students who are new to cybersecurity.
              We also assist Bronco Esports with a semi-annual on-campus LAN gaming event called FragFest by
              configuring the networking infrastructure for gamers. Reach out to us if all of this seems
              fun for you!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Memberships() {
  return (
    <div class={clsx(styles.sectionPadding, "section-background-color")}>
      <section class="container">
        <div class="row">
          <div class="col col--5 centered padding--lg">
            <h2 class="">Membership</h2>
            <p>
              Want to get even more out from SWIFT? If you like learning new topics, solving problems,
              breaking things, being with fellow hackers, we want you! Our membership provides you
              with resources to enhance your college experience and your expand your professional development.
            </p>
          </div>
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/membership.jpg")} alt="Membership" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Meeting() {
  return (
    <div class={clsx(styles.sectionPadding)}>
      <section class="container">
        <div class="row">
          <div class="col col--7 fixed-img">
            <img src={useBaseUrl("img/meeting.png")} alt="Meetings" />
          </div>
          <div class="col col--5 centered padding--lg">
            <h2 class="">Meetings</h2>
            <p>
              Come to our weekly meetings where we present and discuss topics
              focusing on cyber security, networking, system administration, and
              automation. We host peers and industry leaders in the field to give
              our members an insight to the professional world of technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* hero hero--primary hero-banner opacity*/}
      <header class={clsx("hero-container")}>
        <img
          class="hero-image"
          src={useBaseUrl('img/banner.jpg')}
          alt="Image alt text"
          title="Logo Title Text 1"
        />
        <div class="container hero-text">
          <div class="row">
            <div class="col col--12 centered hero-banner">
              {/* <h1 class="hero__title">{siteConfig.title}</h1> */}
              <img
                src={useBaseUrl("img/logo_words_white.png")}
                alt="Image alt text"
                title="Logo Title Text 1"
              />
              {/* <p class="hero__subtitle">{siteConfig.tagline}</p> */}
              <p class="hero__subtitle">UNDER CONSTRUCTION</p>
              <div class={styles.buttons}>
                <Link
                  class={clsx(
                    "button button--outline button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("about/")}
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <CoreValues />
        <Competitions />
        <Event />
        <Memberships />
        <Meeting />
      </main>
    </Layout>
  );
}

export default Home;
