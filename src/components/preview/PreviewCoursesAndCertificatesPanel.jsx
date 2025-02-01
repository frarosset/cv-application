import PreviewListWithDates from "./PreviewListWithDates.jsx";
import "../../styles/preview/PreviewPanelWithList.css";

const textProperties = ["name", ["issuer", "address"], "description"];

function PreviewCoursesAndCertificatesPanel({ coursesAndCertificates }) {
  if (coursesAndCertificates.allIds.length > 0) {
    return (
      <div className="preview-panel-with-list preview-courses-and-certificates-panel">
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
