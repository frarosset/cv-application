import { useState, useEffect } from "react";
import sampleData from "../data/sampleData.json";
import blankData from "../data/blankData.json";

// This custom hooks is used to wrap the definition of the data states in a single module

const getFromLocalStorage = (name) => () => {
  const storedData = JSON.parse(localStorage.getItem(name));
  return storedData
    ? storedData
    : Object.assign({}, blankData[name], sampleData[name]);
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

  return {
    dataStateProps,
    dataSetStateProps,
    darkThemeSet,
    setDarkThemeSet,
  };
};

export default useDefineDataStates;
