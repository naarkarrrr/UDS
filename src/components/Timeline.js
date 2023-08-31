import Link from "next/link";
import { Fragment, useState } from "react";
const Timeline = () => {
  const [active, setActive] = useState(2);
  const [activeTimeline, setActiveTimeline] = useState(2);
  const onClick = (value) => {
    setActive(value);
  };
  const activeClass = (value) =>
    value === active ? "active" : value > active ? "next" : "previous";
  const filter = (value) => (100 / active) * value;
  return (
    <Fragment>
      {/* Main Title */}
      <div className="neoh_fn_title">
        <h3 className="fn_title">Website Showcase</h3>
        <div className="line">
          <span />
        </div>
      </div>
      {/* !Main Title */}
      {/* Timeline */}
      <div className="neoh_fn_timeline">
        {/* Timeline Content */}
        <div className="timeline_content">
          <ul className="timeline_list">
            <li className={`timeline_item ${activeClass(1)}`} data-index={1}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/1/4.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/1/2.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/1/3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>CodeCatalyst&apos;23</span>
                  </p>
                  <h3 className="fn_title">
                    <p>
                     College Hackathon Event&apos;s Website
                    </p>
                  </h3>
                  <p className="fn_desc">
                  In the dynamic realm of web development, I proudly present a responsive and theme-infused website created for Vidyavardhini&apos;s Bhausaheb Vartak Polytechnic&apos;s hackathon event. This project showcases my knack for seamlessly blending design and functionality, resulting in an interactive platform that embodies the event&apos;s spirit and adapts flawlessly to various devices.
                  </p>
                  <p className="fn_read">
                    {/* <Link href="#"> */}
                    <Link href="https://codecatalyst.netlify.app/">
                      <a className="neoh_fn_button only_text" target='_blank'>
                        <span className="text">Visit Website</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(2)}`} data-index={2}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/2/1.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/2/2.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/2/3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>Ringico</span>
                  </p>
                  <h3 className="fn_title">
                    <p>
                      Jewellery E-Commerce Website
                    </p>
                  </h3>
                  <p className="fn_desc">
                  Introducing &apos;Ringico&apos;, an alluring imitation jewellery e-commerce website that encapsulates dynamic design within a sleek dark theme. With responsiveness at its core, this platform redefines shopping by seamlessly adapting to any device. &apos;Ringico&apos; not only showcases exquisite adornments but also offers a captivating and user-centric experience that&apos;s as elegant as the pieces it presents.
                  </p>
                  <p className="fn_read">
                    <Link href="https://ringico.netlify.app">
                      <a className="neoh_fn_button only_text" target='_blank'>
                        <span className="text">Visit Website</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(3)}`} data-index={3}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/3/1.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/3/2.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/3/3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>PulSick</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="#">
                      Content Creation Platform
                    </Link>
                  </h3>
                  <p className="fn_desc">
                  Introducing Pulsick, the dynamic content hub where creators pulse with innovation. Pulsick isn&apos;t just a platform; it&apos;s a creative heartbeat, allowing creators to livestream, share content like Instagram, sell merchandise, and collaborate seamlessly. With its responsive design, Pulsick ensures an intuitive experience across devices, embodying the essence of &apos;Sick Pulse&apos; creators who infuse every interaction with vibrant energy.
                  </p>
                  <p className="fn_read">
                    <Link href="/">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Under development</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(4)}`} data-index={4}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/4/1.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/4/2.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/4/3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>Branding Guests</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="#">
                      Online PG/Hostel Booking Website
                    </Link>
                  </h3>
                  <p className="fn_desc">
                  In my rookie days, I created &apos;Branding Guests,&apos; an innovative online PG hostel booking platform. This dynamic and responsive website, adorned with thematic aesthetics, seamlessly blends style with functionality, showcasing my early commitment to crafting immersive and user-friendly digital experiences.
                  </p>
                  <p className="fn_read">
                    <Link href="#">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Unavailable to Display</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(5)}`} data-index={5}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/5/1.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/5/2.png" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/5/3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>Makaan Mitra</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="#">
                      Real-Estate Website
                    </Link>
                  </h3>
                  <p className="fn_desc">
                  At the heart of my portfolio is &apos;Makan Mitra,&apos; a dynamic and responsive real-estate and property seller website. With an engaging theme, trendy aesthetics, and seamless responsiveness, Makan Mitra showcases my ability to craft user-centric digital experiences that are both elegant and functional.
                  </p>
                  <p className="fn_read">
                    <Link href="#">
                      <a className="neoh_fn_button only_text">
                        <span className="text">UNDER development</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            {/* <li className={`timeline_item ${activeClass(6)}`} data-index={6}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/6/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/6/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/6/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>June 23, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="#">
                      New Haircut Collection #01 is Coming Up
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis. Suspendisse nec
                    lorem vel orci varius congue ut vitae est. Nam quis tempus
                    nisl. Fusce posuere nibh a mi molestie, sit amet ornare
                    lectus interdum.
                  </p>
                  <p className="fn_read">
                    <Link href="#">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(7)}`} data-index={7}>
              <div className="t_item">
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2">
                        <img src="img/timeline/7/1.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/7/2.jpg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/timeline/7/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>July 01, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="#">
                      New Haircut Collection #02 is Coming Up
                    </Link>
                  </h3>
                  <p className="fn_desc">
                    Morbi non dignissim erat, a blandit felis. Suspendisse nec
                    lorem vel orci varius congue ut vitae est. Nam quis tempus
                    nisl. Fusce posuere nibh a mi molestie, sit amet ornare
                    lectus interdum.
                  </p>
                  <p className="fn_read">
                    <Link href="#">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
        {/* !Timeline Content */}
        {/* Timeline Progress */}
        <div className="timeline_progress">
          {/* Nav */}
          <a
            className="nav_prev c-pointer"
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 1 ? activeTimeline : activeTimeline - 1
              )
            }
          >
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          <a
            onClick={() =>
              setActiveTimeline(
                activeTimeline == 7 ? activeTimeline : activeTimeline + 1
              )
            }
            className="nav_next c-pointer"
          >
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          {/* !Nav */}
          <div className="progress_line_wrapper">
            <div
              className="progress_line"
              style={{
                width: "1645.66px",
                transform: `translateX(-${
                  (100 / activeTimeline) * (activeTimeline - 2)
                }%)`,
              }}
            >
              <ul>
                <li className={activeClass(1)}>
                  <a onClick={() => onClick(1)}>
                    <span className="text">CodeCatalyst&apos;23</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(1)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(2)}>
                  <a onClick={() => onClick(2)}>
                    <span className="text">Ringico</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(2)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(3)}>
                  <a onClick={() => onClick(3)}>
                    <span className="text">PulSick</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(3)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(4)}>
                  <a onClick={() => onClick(4)}>
                    <span className="text">Branding Guests</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(4)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(5)}>
                  <a onClick={() => onClick(5)}>
                    <span className="text">Makaan Mitra</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(5)}%)` }}
                    />
                  </a>
                </li>
                {/* <li className={activeClass(6)}>
                  <a onClick={() => onClick(6)}>
                    <span className="text">June 23, 2022</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(6)}%)` }}
                    />
                  </a>
                </li>
                <li className={activeClass(7)}>
                  <a onClick={() => onClick(7)}>
                    <span className="text">July 01, 2022</span>
                    <span
                      className="circle"
                      style={{ filter: `brightness(${filter(7)}%)` }}
                    />
                  </a>
                </li> */}
              </ul>
              <span className="active_line" />
            </div>
          </div>
        </div>
        {/* !Timeline Progress */}
      </div>
      {/* !Timeline */}
    </Fragment>
  );
};
export default Timeline;
