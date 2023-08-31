import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
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
              I'm like a digital all-rounder—I build websites, make them look great, and add cool graphics. 
              Think of me as the person who creates the backbone of websites, makes them easy to use, and adds artistic touches.
              </p>
              <p>
              In the world of the web, I wear many hats: I build websites, make them user-friendly, and add eye-catching visuals. 
              My work brings together technology and design to push the limits of what's possible online.
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
                href="https://github.com/naarkarrrr/"
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
              Currently pursuing a Post SSC Diploma at Vidyavardhini's Bhausaheb Vartak Polytechnic, I've combined formal education with hands-on experience. A pivotal internship at Branding Catalyst Pvt. Ltd. propelled me into a full time role as a web developer, refining my skills in front-end, UI/UX design, and graphics, while deepening my programming expertise.
              </p>
              <p>
              My journey embraces the fusion of creativity and technology. From creating intuitive UI/UX designs to crafting captivating graphics, I've evolved into a skilled web developer. This path is a commitment to continuous growth, pushing boundaries, and contributing to resonant digital experiences.
              </p>
            </div>
            <div className="buttons">
              <Link href="/about">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About Me</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
