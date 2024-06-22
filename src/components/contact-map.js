import React from "react";

const ContactMap = () => {
  return (
    <div className="map_section">
      <div id="map">
        <iframe
          title="template google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214581.25008914561!2d-79.99152555!3d32.82321519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a42dca82477%3A0x35faf7e0aee1ec6b!2sCharleston%2C%20SC!5e0!3m2!1sen!2sus!4v1718745878629!5m2!1sen!2sus"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
