import PreviewPage from "./PreviewPage.jsx";

function PreviewPanel(props) {
  return (
    <div className="preview-panel">
      <h2>Preview Panel</h2>
      <PreviewPage {...props} />
    </div>
  );
}

export default PreviewPanel;
