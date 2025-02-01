import { useState, useEffect } from "react";
import sampleData from "../data/sampleData.json";
import blankData from "../data/blankData.json";

// This custom hooks is used to wrap the definition of the data states in a single module

const getFromLocalStorage = (name) => () => {
  const storedData = JSON.parse(localStorage.getItem(name));
  return storedData
    ? Object_assign({}, blankData[name], storedData)
    : Object_assign({}, blankData[name], sampleData[name]);
};

const useDefineDataStates = () => {
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

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkThemeSet, setDarkThemeSet] = useState(
    JSON.parse(localStorage.getItem("darkThemeSet")) || defaultDark
  );

  const initialPanel = "personal-info";
  const [currentPanel, setCurrentPanel] = useState(initialPanel);

  // Initialize effect to update values in Local Storage ----------------------
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

  useEffect(() => {
    localStorage.setItem("darkThemeSet", JSON.stringify(darkThemeSet));
  }, [darkThemeSet]);

  // Define wrapped return values

  const dataStateProps = {
    personalInfo,
    education,
    professionalExperience,
    skills,
    languages,
    coursesAndCertificates,
    personalization,
  };
  const dataSetStateProps = {
    setPersonalInfo,
    setEducation,
    setProfessionalExperience,
    setSkills,
    setLanguages,
    setCoursesAndCertificates,
    setPersonalization,
  };

  // Define custom "setter" to set all data states altogether

  const setDataFrom = (dataObj) => {
    // helper function that assumes that dataObj has been deep cloned
    setPersonalInfo(dataObj["personalInfo"]);
    setEducation(dataObj["education"]);
    setProfessionalExperience(dataObj["professionalExperience"]);
    setSkills(dataObj["skills"]);
    setLanguages(dataObj["languages"]);
    setCoursesAndCertificates(dataObj["coursesAndCertificates"]);
    setPersonalization(dataObj["personalization"]);
    setCurrentPanel(initialPanel);
  };

  const setBlankData = () => {
    setDataFrom(deepCopy(blankData));
  };

  const setSampleData = () => {
    setDataFrom(Object_assign({}, blankData, sampleData));
  };

  return {
    dataStateProps,
    dataSetStateProps,
    darkThemeSet,
    currentPanel,
    setDarkThemeSet,
    setBlankData,
    setSampleData,
    setCurrentPanel,
  };
};

// Nested Object.assign
// from:https://stackoverflow.com/a/58089332
// Deep copy is performed from the sources before each assignment
function Object_assign(target, ...sources) {
  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      const copiedSource = deepCopy(source);
      const s_val = copiedSource[key];
      const t_val = target[key];
      const s_isObj = typeof s_val === "object";
      const t_isObj = typeof t_val === "object";
      target[key] =
        t_val && s_val && t_isObj && s_isObj
          ? Object_assign(t_val, s_val)
          : s_val;
    });
  });
  return target;
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default useDefineDataStates;
