// src/pages/PrivacyPolicy.jsx
import React, { useEffect } from "react";
import "./PrivacyPolicy.css"; // move your CSS styles here if needed

const PrivacyPolicy = () => {
  useEffect(() => {
    const content = document.getElementById("content");
    if (content) {
      content.classList.add("visible");
    }
  }, []);

  return (
    <div className="container" id="content">
      <h1>Privacy Policy</h1>
      <p>
        At VerdiGo, your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your personal information when you use our services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect your name, email, preferences, and interactions to improve your experience.</p>

      <h2>2. How We Use Your Data</h2>
      <p>Your data helps us personalize your journey and maintain platform security.</p>

      <h2>3. Data Security</h2>
      <p>We use encryption and secure servers to protect your information.</p>

      <h2>4. Your Rights</h2>
      <p>
        Contact us at <a href="mailto:support@verdigo.com">support@verdigo.com</a> for data access or deletion.
      </p>

      <h2>5. Updates</h2>
      <p>This Privacy Policy may be updated periodically with a new effective date.</p>
    </div>
  );
};

export default PrivacyPolicy;
