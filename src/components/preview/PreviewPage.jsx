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

function getCqw(data) {
  return `${data}cqw`;
}

function getPercentage(data) {
  return `${data}%`;
}

function applyPagePersonalization(settings) {
  // properties items: [css variable, state]
  const properties = [
    // Page format
    ["--preview-page-format", settings.format],
    ["--preview-page-ar", formatAr[settings.format.toLowerCase()]],
    // Paddings and Gaps
    ["--preview-page-tb-padding", getPercentage(settings.pageTbPadding)],
    ["--preview-page-lr-padding", getCqw(settings.pageLrPadding)],
    ["--preview-page-gap", getCqw(settings.pageGap)],
    ["--preview-page-personal-info-gap", getCqw(settings.personalInfoGap)],
    ["--preview-page-section-items-gap", getCqw(settings.sectionItemsGap)],
    ["--preview-page-section-list-gap", getCqw(settings.sectionListGap)],
    ["--preview-page-contacts-tb-padding", getCqw(settings.contactsTbPadding)],
    ["--preview-page-contacts-lr-padding", getCqw(settings.contactsLrPadding)],
    ["--preview-page-contacts-v-gap", getCqw(settings.contactsVGap)],
    // Fonts
    ["--preview-page-main-font", settings.mainFont],
    ["--preview-page-headings-font", settings.headingFont],
    ["--preview-page-details-font", settings.detailFont],
    ["--preview-page-accent-font", settings.accentFont],
    ["--preview-page-full-name-font", settings.fullNameFont],
    ["--preview-page-title-font", settings.titleFont],
    // Colors
    ["--preview-page-accent-color", settings.accentColor],
    ["--preview-page-headings-color", settings.headingColor],
    ["--preview-page-details-color", settings.detailColor],
    ["--preview-page-text-color", settings.textColor],
    // Text fontsize
    ["--preview-page-main-fontsize", getCqw(settings.mainFontsize)],
    ["--preview-page-headings-fontsize", getCqw(settings.headingsFontsize)],
    ["--preview-page-accent-fontsize", getCqw(settings.accentFontsize)],
    ["--preview-page-details-fontsize", getCqw(settings.detailsFontsize)],
    ["--preview-page-full-name-fontsize", getCqw(settings.fullnameFontsize)],
    ["--preview-page-title-fontsize", getCqw(settings.titleFontsize)],
    ["--preview-page-about-me-fontsize", getCqw(settings.aboutMeFontsize)],
    ["--preview-page-contacts-fontsize", getCqw(settings.contactsFontsize)],
    // Line Height
    ["--preview-page-lineheight", settings.lineHeight],
    ["--preview-page-headings-lineheight", settings.headingsLineHeight],
    ["--preview-page-full-name-lineheight", settings.fullnameLineHeight],
    ["--preview-page-title-lineheight", settings.titleLineHeight],
    // Photo format
    ["--preview-page-photo-width", getCqw(settings.photoWidth)],
    ["--preview-page-photo-radius", getCqw(settings.photoRadius)],
  ];

  properties.forEach((prop) => {
    document.documentElement.style.setProperty(...prop);
  });
}
