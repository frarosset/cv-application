import EmailIcon from "../assets/icons/mail.svg?react";
import LocationIcon from "../assets/icons/map-pin.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";

import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import WebsiteIcon from "../assets/icons/globe.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";

const IconSvgComponents = {
  email: EmailIcon,
  location: LocationIcon,
  phone: PhoneIcon,
  linkedin: LinkedinIcon,
  website: WebsiteIcon,
  github: GithubIcon,
};

function Icon({ name }) {
  const IconSvg = IconSvgComponents[name];
  return (
    <span className={`icon ${name}`}>
      <IconSvg />
    </span>
  );
}

export default Icon;
