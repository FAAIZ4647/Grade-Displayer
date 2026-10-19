import { useState } from "react";
import "./CollegeHeader.css";

export default function CollegeHeader() {
  const [imgError, setImgError] = useState(false);

  return (
    <header className="college-header">
      <div className="college-header__inner">
        {/* Logo placeholder — replace src with actual logo path */}
        <div className="college-header__logo-wrap">
          {imgError ? (
            <div className="college-header__logo-placeholder" title="College Logo">
              <span>LOGO</span>
            </div>
          ) : (
            <img
              src="/college-logo.png"
              alt="College Logo"
              className="college-header__logo"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <div className="college-header__text">
          <h1 className="college-header__name">
            Prince Dr. K. Vasudevan College of Engineering and Technology
          </h1>
          <p className="college-header__address">
            Mambakkam - Medavakkam Main Road, Ponmar, Chennai, Tamil Nadu 600127
          </p>
          <p className="college-header__affiliation">
            Affiliated to <strong>Anna University, Chennai</strong>
          </p>
        </div>
      </div>
    </header>
  );
}
