function PreviewEducationPanel({ education }) {
  return (
    <div className="preview-education-panel">
      <h3>Education</h3>

      {education.map((educationItem) => {
        console.log("Education", educationItem);
      })}
    </div>
  );
}

export default PreviewEducationPanel;
