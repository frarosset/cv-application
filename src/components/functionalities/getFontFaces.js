import fontFacesData from "./fontFacesData.js";

// Select just the fonts that you need
const fontWeights = [500, 600, 700];
const fontStyles = ["normal"];
const fontFamilies = [
  "Poppins",
  "Fira Sans",
  "Montserrat",
  "Raleway",
  "Rubik",
  "Saira",
  "Blinker",
  "Bitter",
  "Lora",
  "Playfair Display",
  "Fira Code",
  "Courier Prime",
  "Source Code Pro",
  "Playwrite IS",
  "Fira Sans Condensed",
  "Saira Condensed",
];

// fonts is an object where for each possible font which will be possibly used in the cv pdf,
// the fontFaces parameter object is included
// see: https://parallax.github.io/jsPDF/docs/module-html.html#~html
// and: https://github.com/parallax/jsPDF/pull/3040

const getFontPath = (font, fontPath) => `${fontPath}${font}.ttf`;
// new URL(`${fontPath}${font}.ttf`, document.baseURI).href;

// const fonts = Object.keys(fontFacesData).reduce((obj, font) => {
//   const { fontFamily, fontPath, fontData } = fontFacesData[font];
//   obj[font] = fontData.map((data) => {
//     return {
//       family: fontFamily,
//       style: data.style,
//       weight: data.weight,
//       src: [
//         {
//           url: getFontPath(data.filename, fontPath),
//           format: "truetype",
//         },
//       ],
//     };
//   });
//   return obj;
// }, {});

const url2base64 = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

async function getFontObject() {
  const fonts = {};

  for (const font of Object.keys(fontFacesData)) {
    const { fontFamily, fontPath, fontData } = fontFacesData[font];

    //ignore if the fontFamily is not allowed
    if (!fontFamilies.includes(fontFamily)) continue;

    fonts[font] = [];

    for (const data of fontData) {
      //ignore if the fontWeight and fontStyle is not allowed
      const isNotAllowed =
        !fontWeights.includes(data.weight) || !fontStyles.includes(data.style);
      if (isNotAllowed) continue;

      const base64Url = await url2base64(getFontPath(data.filename, fontPath));

      const fontObj = {
        family: fontFamily,
        style: data.style,
        weight: data.weight,
        src: [
          {
            url: base64Url,
            format: "truetype",
          },
        ],
      };

      fonts[font].push(fontObj);
    }
  }
  return fonts;
}

// create the fonts object dynamically
let fonts;
getFontObject().then((res) => {
  fonts = res;
});

// get the fonts array (recall that fonts is created dynamically)
const getFonts = () => {
  return fonts;
};

export default getFonts;
