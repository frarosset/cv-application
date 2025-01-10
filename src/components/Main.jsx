import { useState, useRef } from "react";
import useIsOverflow from "../customHooks/useIsOverflow.js";
import EditPanel from "./editor/EditPanel.jsx";
import PreviewPanel from "./preview/PreviewPanel.jsx";
import DownloadButton from "./functionalities/DownloadButton.jsx";
import sampleData from "../data/sampleData.json";
import "../styles/Main.css";

const hasOVerflowXCssClass = "has-overflow-y";

function Main() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo);
  const [education, setEducation] = useState(sampleData.education);
  const [professionalExperience, setProfessionalExperience] = useState(
    sampleData.professionalExperience
  );
  const [skills, setSkills] = useState(sampleData.skills);
  const [languages, setLanguages] = useState(sampleData.languages);
  const [coursesAndCertificates, setCoursesAndCertificates] = useState(
    sampleData.coursesAndCertificates
  );

  /* *************************************************************************** */
  // A base layout style might be  specified. This is used to set a hasOVerflowXCssClass
  // css class whenever the base layout overflows horizontally, which can have a
  // different style
  // See "../customHooks/useIsOverflow.js" for more details

  const ref = useRef();

  const isOverflowXPreCallback = () => {
    // before checking the overflow condition, revert to the base layout
    if (ref) ref.current.classList.toggle(hasOVerflowXCssClass, false);
  };

  const isOverflowXPostCallback = (hasOverflowX) => {
    // after checking the overflow condition, apply the hasOVerflowXCssClass if necessary
    ref.current.classList.toggle(hasOVerflowXCssClass, hasOverflowX);
  };

  useIsOverflow(ref, false, isOverflowXPostCallback, isOverflowXPreCallback);
  /* *************************************************************************** */

  return (
    <main ref={ref}>
      <EditPanel
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        education={education}
        setEducation={setEducation}
        professionalExperience={professionalExperience}
        setProfessionalExperience={setProfessionalExperience}
        skills={skills}
        setSkills={setSkills}
        languages={languages}
        setLanguages={setLanguages}
        coursesAndCertificates={coursesAndCertificates}
        setCoursesAndCertificates={setCoursesAndCertificates}
      />
      <PreviewPanel
        personalInfo={personalInfo}
        education={education}
        professionalExperience={professionalExperience}
        skills={skills}
        languages={languages}
        coursesAndCertificates={coursesAndCertificates}
      />
      <div className="group-of-btns">
        <DownloadButton
          filename={`cv_of_${personalInfo.name}_${personalInfo.surname}`}
        />
      </div>
    </main>
  );
}

export default Main;
