# cv-application

A project from The Odin Project (Full Stack Javascript).

A cv application webapp is built using HTML, CSS, Javascript, and React.

> A preview is available [here](https://cv-application-hazel.vercel.app/).

## Features

- Insert information about Personal Info, Contacts, Education, Professional Experience, Skills, Languages, and Courses & Certificates.
- Customize the page: page format (A4 or Letter), font selection, color themes, font sizes, margins and gaps adjustments.
- Download the document as a PDF using the [`jsPdf` library](https://github.com/parallax/jsPDF).
- Print the document directly from the app.
- Dark/Light theme toggle.
- Load sample data for demonstration.

## Known Issues

When exporting the document as PDF:

- Layout shifts or blank pages on multi-page documents (it seems that this happens when the total size of the document exceeds the viewport).
- Additional top margin on first page (in multi-page PDFs).
- Possible font rendering issues.
- Possible profile photo image distortion (the used CSS property `object-fit: cover` isn't recognized by `jsPdf`).
- Hyperlinks not retained in the exported PDF.

These issues are likely due to limitations within the `jsPdf` library. Future updates may address some of these problems. In the meantime, a workaround is to use the **Print > Save as PDF** function in a desktop browser if there are problems with the downloaded PDF.
