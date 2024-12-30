import EmailIcon from "../../assets/icons/mail.svg?react";
import LocationIcon from "../../assets/icons/map-pin.svg?react";
import PhoneIcon from "../../assets/icons/phone.svg?react";

import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import WebsiteIcon from "../../assets/icons/globe.svg?react";
import GithubIcon from "../../assets/icons/github.svg?react";

import EmailIconPng from "../../assets/icons/mail.png";
import LocationIconPng from "../../assets/icons/map-pin.png";
import PhoneIconPng from "../../assets/icons/phone.png";

import LinkedinIconPng from "../../assets/icons/linkedin.png";
import WebsiteIconPng from "../../assets/icons/globe.png";
import GithubIconPng from "../../assets/icons/github.png";

import EmailIconPngWhite from "../../assets/icons/mailWhite.png";
import LocationIconPngWhite from "../../assets/icons/map-pinWhite.png";
import PhoneIconPngWhite from "../../assets/icons/phoneWhite.png";

import LinkedinIconPngWhite from "../../assets/icons/linkedinWhite.png";
import WebsiteIconPngWhite from "../../assets/icons/globeWhite.png";
import GithubIconPngWhite from "../../assets/icons/githubWhite.png";

import UserIcon from "../../assets/icons/user.svg?react";
import BookOpenIcon from "../../assets/icons/book-open.svg?react";
import BriefcaseIcon from "../../assets/icons/briefcase.svg?react";
import StarIcon from "../../assets/icons/star.svg?react";
import FlagIcon from "../../assets/icons/flag.svg?react";
import FileText from "../../assets/icons/file-text.svg?react";

import Download from "../../assets/icons/download.svg?react";

import AddNew from "../../assets/icons/plus.svg?react";
import Delete from "../../assets/icons/trash.svg?react";
import MoveBack from "../../assets/icons/arrow-left-circle.svg?react";
import MoveForth from "../../assets/icons/arrow-right-circle.svg?react";

const IconComponents = {
  svg: {
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
    download: Download,
    addNew: AddNew,
    delete: Delete,
    moveBack: MoveBack,
    moveForth: MoveForth,
  },
  png: {
    email: EmailIconPng,
    location: LocationIconPng,
    phone: PhoneIconPng,
    linkedin: LinkedinIconPng,
    website: WebsiteIconPng,
    github: GithubIconPng,
    emailWhite: EmailIconPngWhite,
    locationWhite: LocationIconPngWhite,
    phoneWhite: PhoneIconPngWhite,
    linkedinWhite: LinkedinIconPngWhite,
    websiteWhite: WebsiteIconPngWhite,
    githubWhite: GithubIconPngWhite,
  },
};

function Icon({ name, format = "svg" }) {
  const isSvg = format === "svg";
  const IconImg = IconComponents[format][name];

  const Element = isSvg ? (
    <IconImg />
  ) : (
    // <div
    //   style={{
    //     backgroundImage: `url(${IconImg})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "contain",
    //     width: "100%",
    //     height: "100%",
    //   }}
    // />
    <img src={IconImg} alt={`${name}:`} /> // for better exporting with jspdf
  );

  return <span className={`icon ${name}`}>{Element}</span>;
}

export default Icon;
