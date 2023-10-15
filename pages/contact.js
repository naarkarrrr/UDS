import React, { useState } from "react";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Contact = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const myForm = event.target;
      const formData = new FormData(myForm);

      await fetch("http://localhost:5000/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      console.log("Form successfully submitted");
    } catch (error) {
      console.error("Error submitting form", error);
      // Handle error more gracefully, e.g., show a user-friendly message
    }
  };

  const handleInputChange = () => {
    // Check if all required fields are filled
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const isValid = name !== "" && email !== "" && phone !== "" && message !== "";
    setIsFormValid(isValid);
  };

  return (
    <Layout pageName={"Contact"}>
      <PageBanner pageName={"Contact"} />
      <div className="neoh_fn_contact_page">
        <div className="container">
          <div className="mw_500">
            <form className="contact_form" method="post" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />

              <div className="input_list">
                <ul>
                  <li>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="client_name"
                      placeholder="Your Name"
                      onChange={handleInputChange}
                    />
                  </li>
                  <li>
                    <label htmlFor="email">Email</label>
                    <input
                      name="client_email"
                      id="email"
                      type="text"
                      placeholder="youremail@mail.com"
                      onChange={handleInputChange}
                    />
                  </li>
                  <li>
                    <label htmlFor="subject">Phone Number</label>
                    <input
                      id="subject"
                      type="text"
                      name="client_phone"
                      onChange={handleInputChange}
                    />
                  </li>
                  <li>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="client_message"
                      defaultValue={""}
                      onChange={handleInputChange}
                    />
                  </li>
                </ul>
              </div>
              <div className="returnmessage" data-success="Your message has been received, We will contact you soon." />
              <div className="empty_notice">
                <span>Please Fill Required Fields</span>
              </div>

              <li>
                <button type="submit" className="neoh_fn_button" disabled={!isFormValid}  style={{color:"black"}}>
                  Send Message
                </button>
              </li>
            </form>

            <div className="desc_holder">
              <p>
                Let&apos;s Connect! Whether you&apos;re interested in collaborating on a project, have a question about my work, or simply want to say hello, We are just a click away. Reach out and let&apos;s start a conversation.
              </p>
              <p>
                Get in Touch! We are thrilled to connect with you. If you&apos;re looking to discuss a potential project, inquire about my services, or even just share your thoughts, don&apos;t hesitate to reach out. We are here to listen, collaborate, and bring your ideas to life.
              </p>
            </div>
            <div className="info_list">
              <ul>
                <li>
                  <p className="label">We are From</p>
                  <h3 className="value">Mumbai, Maharashtra</h3>
                </li>
                <li>
                  <p className="label">Contact</p>
                  <h3 className="value">
                    <a href="tel:+91 84598 31985">+91 84598 31985</a>
                  </h3>
                </li>
                <li>
                  <a href="mailto:underscoredigitalsolutions@gmail.com" className="email">
                    underscoredigitalsolutions@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;



//og
// import Layout from "../src/layout/Layout";
// import PageBanner from "../src/layout/PageBanner";
// const Contact = () => {
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const myForm = event.target;
//       const formData = new FormData(myForm);

//       await fetch("http://localhost:5000/api/properties", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData).toString(),
//       });

//       console.log("Form successfully submitted");
//     } catch (error) {
//       console.error("Error submitting form", error);
//       // Handle error more gracefully, e.g., show a user-friendly message
//     }
//   };

//   return (
//     <Layout pageName={"Contact"}>
//     <PageBanner pageName={"Contact"} />
//     <div className="neoh_fn_contact_page">
//       <div className="container">
//         <div className="mw_500">
          
//         <form className="contact_form" method="post" onSubmit={handleSubmit}>

//             <input type="hidden" name="form-name" value="contact" />

//             <div className="input_list">
//               <ul>
//                 <li>
//                   <label htmlFor="name">Name</label>
//                   <input id="name" type="text" name="client_name" placeholder="Your Name" />
//                 </li>
//                 <li>
//                   <label htmlFor="email">Email</label>
//                   <input
//                   name="client_email"
//                     id="email"
//                     type="text"
//                     placeholder="youremail@mail.com"
//                   />
//                 </li>
//                 <li>
//                   <label htmlFor="subject">Phone Number</label>
//                   <input id="subject" type="text" name="client_phone" />
//                 </li>
//                 <li>
//                   <label htmlFor="message">Message</label>
//                   <textarea id="message" name="client_message" defaultValue={""} />
//                 </li>
//                 <li>
//         <button type="submit" className="neoh_fn_button">
//           Send Message
//         </button>
//       </li>

//               </ul>
//             </div>
//             <div
//               className="returnmessage"
//               data-success="Your message has been received, We will contact you soon."
//             />
//             <div className="empty_notice">
//               <span>Please Fill Required Fields</span>
//             </div>
//           </form>

//           <div className="desc_holder">
//             <p>
//               Let&apos;s Connect! Whether you&apos;re interested in collaborating on a project, have a question about my work, or simply want to say hello, We are just a click away. Reach out and let&apos;s start a conversation.
//             </p>
//             <p>
//               Get in Touch! We are thrilled to connect with you. If you&apos;re looking to discuss a potential project, inquire about my services, or even just share your thoughts, don&apos;t hesitate to reach out. We are here to listen, collaborate, and bring your ideas to life.
//             </p>
//           </div>
//           <div className="info_list">
//             <ul>
//               <li>
//                 <p className="label">We are From</p>
//                 <h3 className="value">Mumbai, Maharashtra</h3>
//               </li>
//               <li>
//                 <p className="label">Contact</p>
//                 <h3 className="value">
//                   <a href="tel:+91 84598 31985">+91 84598 31985</a>
//                 </h3>
//               </li>
//               <li>
//                 <a href="mailto:underscoredigitalsolutions@gmail.com" className="email">
//                   underscoredigitalsolutions@gmail.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </Layout>
//   );
// };

// export default Contact;


