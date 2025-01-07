import fontFacesData from "./fontFacesData.js";

// fonts is an object where for each possible font which will be possibly used in the cv pdf,
// the fontFaces parameter object is included
// see: https://parallax.github.io/jsPDF/docs/module-html.html#~html
// and: https://github.com/parallax/jsPDF/pull/3040

const getFontPath = (font, fontPath) =>
  new URL(`${fontPath}${font}.ttf`, document.baseURI).href;

const fonts = Object.keys(fontFacesData).reduce((obj, font) => {
  const { fontFamily, fontPath, fontData } = fontFacesData[font];
  obj[font] = fontData.map((data) => {
    return {
      family: fontFamily,
      style: data.style,
      weight: data.weight,
      src: [
        {
          url: getFontPath(data.filename, fontPath),
          format: "truetype",
        },
      ],
    };
  });
  return obj;
}, {});

export default fonts;
