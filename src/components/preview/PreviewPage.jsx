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
    "--preview-page-heading-font",
    settings.headingFont
  );

  document.documentElement.style.setProperty(
    "--preview-page-detail-font",
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
    "--preview-heading-text-color",
    settings.headingColor
  );

  document.documentElement.style.setProperty(
    "--preview-detail-text-color",
    settings.detailColor
  );

  document.documentElement.style.setProperty(
    "--preview-text-color",
    settings.textColor
  );
}
