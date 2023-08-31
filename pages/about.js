import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const About = () => {
  return (
    <Layout pageName={"About Me"}>
      <PageBanner pageName={"About Me"} />
      <div className="neoh_fn_aboutpage">
        {/* Information Section */}
        <section id="information">
          <div className="container">
            {/* About Item #1 */}
            <div className="neoh_fn_about_item">
              <div className="img_item">
                <img src="img/about/img1.png" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">What Defines Me?</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                  I&apos;m like a digital all-rounder—I build websites, make them look great, and add cool graphics. 
                  Think of me as the person who creates the backbone of websites, makes them easy to use, and adds artistic touches.
                  </p>
                  <p>
                  In the world of the web, I wear many hats: I build websites, make them user-friendly, and add eye-catching visuals. 
                  My work brings together technology and design to push the limits of what&apos;s possible online
                  </p>
                </div>
                <div className="buttons">
                  <a
                    href="https://www.linkedin.com/in/shivam-narkar-61277527a/"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <img src="svg/linkedin.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/naarkarrrr"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <img src="svg/github.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            {/* !About Item #1 */}
            {/* Guarantee List */}
            <div className="neoh_fn_gualist">
              <ul>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img
                      src="svg/web-designer.svg"
                      alt=""
                      className="fn__svg"
                    />
                    <h3 className="fn_title">Web UI/UX Designer</h3>
                    <p className="fn_desc fn_animated_text">
                    Crafting captivating digital experiences, I design user interfaces that seamlessly blend aesthetics with intuitive navigation, ensuring every click feels engaging and natural.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/graphic-designer.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Web Developer</h3>
                    <p className="fn_desc fn_animated_text">
                    As a web developer, I breathe life into the virtual realm, translating ideas into responsive layouts and dynamic features through lines of code.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/web-developer.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Graphic Designer</h3>
                    <p className="fn_desc fn_animated_text">
                    I&apos;m a visual storyteller, creating purposeful graphics that communicate ideas and establish brand identities, infusing every pixel with artistic finesse.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Guarantee List */}
            {/* About Item #2 */}
            <div className="neoh_fn_about_item reverse">
              <div className="img_item">
                <img src="img/about/img2.png" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">My Journey So Far</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Currently pursuing a Post SSC Diploma at Vidyavardhini&apos;s Bhausaheb Vartak Polytechnic, I&apos;ve combined formal education with hands-on experience. A pivotal internship at Branding Catalyst Pvt. Ltd. propelled me into a full time role as a web developer, refining my skills in front-end, UI/UX design, and graphics, while deepening my programming expertise.
                  </p>
                  <p>
                  My journey embraces the fusion of creativity and technology. From creating intuitive UI/UX designs to crafting captivating graphics, I&apos;ve evolved into a skilled web developer. This path is a commitment to continuous growth, pushing boundaries, and contributing to resonant digital experiences.
                  </p>
                </div>
                <div className="buttons">
                  <a className="neoh_fn_button only_text" href="/contact" target='_blank' rel="noreferrer">
                    <span className="text">Contact Me to Know More</span>
                  </a>
                </div>
              </div>
            </div>
            {/* !About Item #2 */}
          </div>
        </section>
        {/* !Information Section */}
       
        {/* Team Section */}
        <section id="team">
          <div className="container">
            {/* Main Title */}
              <div className="neoh_fn_title">
                <h3 className="fn_title">Grateful Backer</h3>
                <div className="line">
                  <span />
                </div>
              </div>         
              {/* !Main Title */}
              <div className="neoh_fn_investor">
          <ul>
            {/* <li>
              <div className="item">
                <img src="img/investors/1.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/2.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li> */}
            <li>
              <div className="item" style={{display: "none"}}>
                <img src="img/investors/3.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item" style={{display: "none"}}>
                <img src="img/investors/4.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/3.png" alt="" />
                <a href="https://brandingcatalyst.net" target='_blank' rel="noreferrer" className="full_link" />
              </div>
            </li>
            {/* <li>
              <div className="item">
                <img src="img/investors/6.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/7.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/8.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/9.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/investors/10.png" alt="" />
                <a href="#" className="full_link" />
              </div>
            </li> */}
          </ul>
        </div>

          </div>
        </section>
        {/* !Team Section */}
      </div>
    </Layout>
  );
};
export default About;
