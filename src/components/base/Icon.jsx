import EmailIcon from "../../assets/icons/mail.svg?react";
import LocationIcon from "../../assets/icons/map-pin.svg?react";
import PhoneIcon from "../../assets/icons/phone.svg?react";

import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import WebsiteIcon from "../../assets/icons/globe.svg?react";
import GithubIcon from "../../assets/icons/github.svg?react";

import UserIcon from "../../assets/icons/user.svg?react";
import BookOpenIcon from "../../assets/icons/book-open.svg?react";
import BriefcaseIcon from "../../assets/icons/briefcase.svg?react";
import StarIcon from "../../assets/icons/star.svg?react";
import FlagIcon from "../../assets/icons/flag.svg?react";
import FileText from "../../assets/icons/file-text.svg?react";

import AddNew from "../../assets/icons/plus.svg?react";
import Delete from "../../assets/icons/trash.svg?react";
import MoveBack from "../../assets/icons/arrow-left-circle.svg?react";
import MoveForth from "../../assets/icons/arrow-right-circle.svg?react";

const IconSvgComponents = {
  email: EmailIcon,
  location: LocationIcon,
  phone: PhoneIcon,
  linkedin: LinkedinIcon,
  website: WebsiteIcon,
  github: GithubIcon,
  user: UserIcon,
  bookOpen: BookOpenIcon,
  briefcase: BriefcaseIcon,
  star: StarIcon,
  flag: FlagIcon,
  fileText: FileText,
  addNew: AddNew,
  delete: Delete,
  moveBack: MoveBack,
  moveForth: MoveForth,
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
