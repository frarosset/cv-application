import PreviewPersonalInfoPanel from "./PreviewPersonalInfoPanel.jsx";
import PreviewEducationPanel from "./PreviewEducationPanel.jsx";
import PreviewProfessionalExperiencePanel from "./PreviewProfessionalExperiencePanel.jsx";
import PreviewSkillsPanel from "./PreviewSkillsPanel.jsx";
import PreviewLanguagesPanel from "./PreviewLanguagesPanel.jsx";
import PreviewCoursesAndCertificatesPanel from "./PreviewCoursesAndCertificatesPanel.jsx";
import "../../styles/preview/PreviewPage.css";

const formatAr = {
  a4: 1 / 1.41421,
  letter: 1 / 1.29412,
};

function PreviewPage(props) {
  // Personalize the page
  applyPagePersonalization(props.personalization);

  return (
    <div className="preview-page">
      <PreviewPersonalInfoPanel personalInfo={props.personalInfo} />
      <PreviewEducationPanel education={props.education} />
      <PreviewProfessionalExperiencePanel
        professionalExperience={props.professionalExperience}
      />
      <PreviewSkillsPanel skills={props.skills} />
      <PreviewLanguagesPanel languages={props.languages} />
      <PreviewCoursesAndCertificatesPanel
        coursesAndCertificates={props.coursesAndCertificates}
      />
    </div>
  );
}

export default PreviewPage;

function applyPagePersonalization(settings) {
  // Page format
  document.documentElement.style.setProperty(
    "--preview-page-format",
    settings.format
  );
  document.documentElement.style.setProperty(
    "--preview-page-ar",
    formatAr[settings.format.toLowerCase()]
  );

  // Fonts
  document.documentElement.style.setProperty(
    "--preview-page-main-font",
    settings.mainFont
  );

  document.documentElement.style.setProperty(
    "--preview-page-headings-font",
    settings.headingFont
  );

  document.documentElement.style.setProperty(
    "--preview-page-details-font",
    settings.detailFont
  );

  document.documentElement.style.setProperty(
    "--preview-page-accent-font",
    settings.accentFont
  );

  document.documentElement.style.setProperty(
    "--preview-page-full-name-font",
    settings.fullNameFont
  );

  document.documentElement.style.setProperty(
    "--preview-page-title-font",
    settings.titleFont
  );

  // Colors
  document.documentElement.style.setProperty(
    "--preview-page-accent-color",
    settings.accentColor
  );

  document.documentElement.style.setProperty(
    "--preview-page-headings-color",
    settings.headingColor
  );

  document.documentElement.style.setProperty(
    "--preview-page-details-color",
    settings.detailColor
  );

  document.documentElement.style.setProperty(
    "--preview-page-text-color",
    settings.textColor
  );

  // Text fontsize
  document.documentElement.style.setProperty(
    "--preview-main-fontsize",
    `${settings.mainFontsize}cqw`
  );

  document.documentElement.style.setProperty(
    "--preview-headings-fontsize",
    `${settings.headingsFontsize}cqw`
  );

  document.documentElement.style.setProperty(
    "--preview-accent-fontsize",
    `${settings.accentFontsize}cqw`
  );

  document.documentElement.style.setProperty(
    "--preview-details-fontsize",
    `${settings.detailsFontsize}cqw`
  );

  document.documentElement.style.setProperty(
    "--preview-full-name-fontsize",
    `${settings.fullnameFontsize}cqw`
  );

  document.documentElement.style.setProperty(
    "--preview-title-fontsize",
    `${settings.titleFontsize}cqw`
  );

  document.documentElement.style.setProperty(
    "--preview-about-me-fontsize",
    `${settings.aboutMeFontsize}cqw`
  );

  document.documentElement.style.setProperty(
    "--preview-contacts-fontsize",
    `${settings.contactsFontsize}cqw`
  );

  // Photo format
  document.documentElement.style.setProperty(
    "--preview-photo-width",
    `${settings.photoWidth}cqw`
  );

  document.documentElement.style.setProperty(
    "--preview-photo-radius",
    `${settings.photoRadius}cqw`
  );
}
