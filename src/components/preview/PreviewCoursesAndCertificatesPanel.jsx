import PreviewListWithDates from "./PreviewListWithDates.jsx";
import "../../styles/preview/previewPanelWithListAndDates.css";

const textProperties = ["name", ["issuer", "address"], "description"];

function PreviewCoursesAndCertificatesPanel({ coursesAndCertificates }) {
  if (coursesAndCertificates.allIds.length > 0) {
    return (
      <div className="preview-panel-with-list-and-dates preview-courses-and-certificates-panel">
        <h3>Courses & Certificates</h3>

        <PreviewListWithDates
          customClass={"courses-and-certificates"}
          data={coursesAndCertificates}
          textProperties={textProperties}
          typeOfDates="single"
        />
      </div>
    );
  }
}

export default PreviewCoursesAndCertificatesPanel;
