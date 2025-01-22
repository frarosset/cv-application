import { useState, useRef, useEffect } from "react";
import useIsOverflow from "../customHooks/useIsOverflow.js";
import EditPanel from "./editor/EditPanel.jsx";
import PreviewPanel from "./preview/PreviewPanel.jsx";
import PrintButton from "./functionalities/PrintButton.jsx";
import DownloadButton from "./functionalities/DownloadButton.jsx";
import sampleData from "../data/sampleData.json";
import "../styles/Main.css";

const hasOVerflowXCssClass = "has-overflow-y";

const getFromLocalStorage = (name) => () => {
  const storedData = JSON.parse(localStorage.getItem(name));
  return storedData ? storedData : sampleData[name];
};

function Main() {
  // Initialize states with values from Local Storage (see getFromLocalStorage())
  const [personalInfo, setPersonalInfo] = useState(
    getFromLocalStorage("personalInfo")
  );
  const [education, setEducation] = useState(getFromLocalStorage("education"));
  const [professionalExperience, setProfessionalExperience] = useState(
    getFromLocalStorage("professionalExperience")
  );
  const [skills, setSkills] = useState(getFromLocalStorage("skills"));
  const [languages, setLanguages] = useState(getFromLocalStorage("languages"));
  const [coursesAndCertificates, setCoursesAndCertificates] = useState(
    getFromLocalStorage("coursesAndCertificates")
  );
  const [personalization, setPersonalization] = useState(
    getFromLocalStorage("personalization")
  );

  // Initialize effects to update values in Local Storage ----------------------
  useEffect(() => {
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
  }, [personalInfo]);
  useEffect(() => {
    localStorage.setItem("education", JSON.stringify(education));
  }, [education]);
  useEffect(() => {
    localStorage.setItem(
      "professionalExperience",
      JSON.stringify(professionalExperience)
    );
  }, [professionalExperience]);
  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);
  useEffect(() => {
    localStorage.setItem("languages", JSON.stringify(languages));
  }, [languages]);
  useEffect(() => {
    localStorage.setItem(
      "coursesAndCertificates",
      JSON.stringify(coursesAndCertificates)
    );
  }, [coursesAndCertificates]);
  useEffect(() => {
    localStorage.setItem("personalization", JSON.stringify(personalization));
  }, [personalization]);

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

  /* set page title */
  useEffect(() => {
    const name = personalInfo.name ? personalInfo.name : "";
    const surname = personalInfo.surname ? personalInfo.surname : "";

    const fullName =
      name != "" ? (surname != "" ? `${name} ${surname}` : name) : surname;

    const titleStr = fullName != "" ? `CV of ${fullName}` : "CV Application";
    document.title = titleStr;
  }, [personalInfo.name, personalInfo.surname]);

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
        personalization={personalization}
        setPersonalization={setPersonalization}
      />
      <PreviewPanel
        personalInfo={personalInfo}
        education={education}
        professionalExperience={professionalExperience}
        skills={skills}
        languages={languages}
        coursesAndCertificates={coursesAndCertificates}
        personalization={personalization}
      />
      <div className="group-of-btns">
        <PrintButton />
        <DownloadButton
          filename={`cv_of_${personalInfo.name}_${personalInfo.surname}`}
          format={personalization.format}
          fontFaces={[
            personalization.mainFont,
            personalization.headingFont,
            personalization.accentFont,
            personalization.detailFont,
            personalization.fullNameFont,
            personalization.titleFont,
          ]}
        />
      </div>
    </main>
  );
}

export default Main;
