import React from "react";

const ContactThree = () => {
  return (
    <section className="contact_form_area contact_us section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-right contact_details">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">Contact Us Now</h4>
                <h1>We offer 24/7 emergency services</h1>
              </div>
              <p>
                Contact Us via Email, Call, or Text.
              </p>
              <div className="contact_location_box">
                <div className="contact_location_map">
                  <span className="icon-location"></span>
                  <p>
                    Charleston Area, <br />
                    South Carolina
                  </p>
                </div>
                <div className="contact_location_map contact_location_call">
                  <span className="icon-contact_call"></span>
                  <p>
                    help@email.com <br />
                    843 642 0881
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-right contact-right-style-2 responsive_mt">
              <form action="#" method="post">
                <input
                  className="half_width input_m_right"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
                <input
                  className="half_width"
                  type="EMAIL"
                  name="email"
                  placeholder="Email address"
                />
                <input type="tel" name="tel" placeholder="Phone number" />
                <textarea
                  name="content"
                  id="content"
                  cols="20"
                  rows="5"
                  placeholder="Write message"
                ></textarea>
                <button className="btn-yellow" value="SUBMIT NOW">
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactThree;
