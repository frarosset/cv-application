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
  // Accent color
  document.documentElement.style.setProperty(
    "--preview-page-accent-color",
    props.personalization.accentColor
  );
  // Page format
  document.documentElement.style.setProperty(
    "--preview-page-format",
    props.personalization.format
  );
  document.documentElement.style.setProperty(
    "--preview-page-ar",
    formatAr[props.personalization.format.toLowerCase()]
  );

  return (
    <div className="preview-page" style={{ fontFamily: "Poppins" }}>
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
