import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";


/* First Row */ 
function One() {
    return (
     <section className={styles.section}>
      <div class="row core-values">
        {/* Lawrence Kim */}
        <div class="col col--4 centered">   
          <img src={useBaseUrl('img/eboard/lawrence.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Lawrence Kim</p>
          <p className={styles.ePosition}>Technical Assistant</p>
          <p> 
            <a href="#"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
        {/* Angela Lee */}
        <div class="col col--4 centered">   
          <img src={useBaseUrl('img/eboard/Angela.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Angela Lee</p>
          <p className={styles.ePosition}>Technical Assistant</p>
          <p> 
            <a href="#"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        {/*Dylan Wong*/}
        </div>
        <div class="col col--4 centered">
            <img src={useBaseUrl('img/eboard/dylan.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Dylan Wong</p>
          <p className={styles.ePosition}>Technical Assistant</p>
          <p>
            <a href="#"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
      </div>
    </section>
    )
}

// Second Row
function Two() {
    return (
        <section>
      <div class="row core-values">
        {/* Justin Covairt */}
        <div class="col col--4 centered">   
          <img src={useBaseUrl('img/eboard/Justin.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Justin Covairt</p>
          <p className={styles.ePosition}>Technical Assistant</p>
          <p>
            <a href="#"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
        {/* Alejandro Rivera*/}
        <div class="col col--4 centered">
            <img src={useBaseUrl('img/eboard/Alejandro.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Alejandro Rivera</p>
          <p className={styles.ePosition}>Director - Logistics</p>
          <p>
            <a href="#"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
      {/* Luis Velasquez */}
        <div class="col col--4 centered">
        <img src={useBaseUrl('img/eboard/Luis.jpg')} className={styles.socialImg}/>
          <p className={styles.socialNames}>Luis Velasquez</p>
          <p className={styles.ePosition}>Technical Assistant</p>
          <p>
            <a href="#"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>

      </div>
    </section>
    )
}

// Third row
function Three() {
    return (
        <section >
      <div class="row core-values">
        {/* Robinson Tran */}
        <div class="col col--4 centered">   
          <img src={useBaseUrl('img/eboard/Robinson.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Robinson Tran</p>
          <p className={styles.ePosition}>Director of SWIFT Labs</p>
          <p>
            <a href="#"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
        {/* Alexey Tselevich */}
        <div class="col col--4 centered">
        <img src={useBaseUrl('img/eboard/Alex.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Alexey Tselevich</p>
          <p className={styles.ePosition}>VP of Operations</p>
          <p>
            <a href="#"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
        {/* Gabriel Fok */}
        <div class="col col--4 centered">
            <img src={useBaseUrl('img/eboard/Gabe.jpg')} className={styles.socialImg} />
          <p className={styles.socialNames}>Gabriel Fok</p>
          <p className={styles.ePosition}>Director - SWIFT Academy</p>
          <p>
            <a href="#"> 
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
            </a>
          </p>
        </div>
      </div>
    </section>
    )
}

// Fourth row
function Four() {
  return (
        <section >
          <div class="row core-values">
            {/* Taylor Nguyen */}
            <div class="col col--12 centered">   
              <img src={useBaseUrl('img/eboard/Taylor.jpg')} className={styles.socialImg} style={{height: "300px"}} />
              <p className={styles.socialNames}>Taylor Nguyen</p>
              <p className={styles.ePosition}>PRESIDENT</p>
              <p>
                <a href="#"> 
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
                </a>
              </p>
            </div>
          </div>
    </section>
    )
}

// Fifth row
function Five() {
 return (
        <section >
          <div class="row core-values">
            {/* Mercedes Wendy Gonzales  */}
            <div class="col col--4 centered">   
              <img src={useBaseUrl('img/eboard/Chet.jpg')} className={styles.socialImg} />
              <p className={styles.socialNames}>Mercedes Wendy Gonzales</p>
              <p className={styles.ePosition}>Director - Marketing</p>
              <p>
                <a href="#"> 
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
                </a>
              </p>
            </div>
            {/* Jessica Foronda */}
            <div class="col col--4 centered">
            <img src={useBaseUrl('img/eboard/JessicaF.jpg')} className={styles.socialImg} />
              <p className={styles.socialNames}>Jessica Foronda</p>
              <p className={styles.ePosition}>VP of Administration</p>
              <p>
                <a href="#"> 
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
                </a>
              </p>
            </div>
            {/* Jasmine Weddle */}
            <div class="col col--4 centered">
                <img src={useBaseUrl('img/eboard/Jasmine.jpg')} className={styles.socialImg} />
              <p className={styles.socialNames}>Jasmine Weddle</p>
              <p className={styles.ePosition}>Director - Outreach</p>
              <p>
                <a href="#"> 
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
                </a>
              </p>
            </div>
          </div>
    </section>
    )
}

// Sixth row
function Six() {
 return (
        <section >
          <div class="row core-values">
            {/* Aaron Diaz */}
            <div class="col col--4 centered">   
              <img src={useBaseUrl('img/eboard/Aaron.jpg')} className={styles.socialImg} />
              <p className={styles.socialNames}>Aaron Diaz</p>
              <p className={styles.ePosition}>Administrative Assistant</p>
              <p>
                <a href="#"> 
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
                </a>
              </p>
            </div>
            {/* Felipe Aceves */}
            <div class="col col--4 centered">
            <img src={useBaseUrl('img/eboard/Felipe.jpg')} className={styles.socialImg} />
              <p className={styles.socialNames}>Felipe Aceves</p>
              <p className={styles.ePosition}>Treasurer</p>
              <p>
                <a href="#"> 
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
                </a>
              </p>
            </div>
            {/* Jessica Leung */}
            <div class="col col--4 centered">
                <img src={useBaseUrl('img/eboard/JessicaL.jpg')} className={styles.socialImg} />
              <p className={styles.socialNames}>Jessica Leung</p>
              <p className={styles.ePosition}>Conference Chair</p>
              <p>
                <a href="#"> 
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
                </a>
              </p>
            </div>
          </div>
    </section>
    )
}

// Seventh row
function Seven() {
 return (
        <section >
          <div class="row core-values">
            {/* Emily Han */}
            <div class="col col--4 centered">   
              <img src={useBaseUrl('img/eboard/Chet.jpg')} className={styles.socialImg} />
              <p className={styles.socialNames}>Emily Han</p>
              <p className={styles.ePosition}>Social Media</p>
              <p>
                <a href="#"> 
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
                </a>
              </p>
            </div>
            {/* Thaliea Ramsey */}
            <div class="col col--4 centered">
            <img src={useBaseUrl('img/eboard/Chet.jpg')} className={styles.socialImg} />
              <p className={styles.socialNames}>Thaliea Ramsey</p>
              <p className={styles.ePosition}>Administrative Assistant</p>
              <p>
                <a href="#"> 
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
                </a>
              </p>
            </div>
            {/* Maymoonah Mohammed */}
            <div class="col col--4 centered">
                <img src={useBaseUrl('img/eboard/maymoonah.jpg')} className={styles.socialImg} />
              <p className={styles.socialNames}>Maymoonah Mohammed</p>
              <p className={styles.ePosition}>Web Designer</p>
              <p>
                <a href="#"> 
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
                </a>
              </p>
            </div>
          </div>
    </section>
    )
}

// Eighth row
function Eight() {
return (
        <section >
          <div class="row core-values">
            {/* Melvin Karuga */}
            <div class="col col--4 centered">   
              <img src={useBaseUrl('img/eboard/Melvin.jpg')} className={styles.socialImg} style={{height: "240px"}} />
              <p className={styles.socialNames}>Melvin Karuga</p>
              <p className={styles.ePosition}>Graphic Designer</p>
              <p>
                <a href="#"> 
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons}/> 
                </a>
              </p>
            </div>
          </div>
    </section>
    )
}

function Eboard() {
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
          <h1 >
            Our Team
          </h1>
        
        </div>

        <div>
          <section class="container">
            <One />
            <Two />
            <Three />
            <Four />
            <Five />
            <Six />
            <Seven />
            <Eight />
          </section>
        </div>

      </Layout>
    );
  }
  
  export default Eboard;