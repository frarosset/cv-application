import { useRef, useEffect } from "react";

// NOTE ON FILES WITH type="file"
//
// Consider inputElement as a reference of this type of element:
//
// - It is assumed that when the user selects an image (and the change
//   event is fired), an object with "dataUrl" (with base64 encoded data),
//   "type", "name", and "lastModified" properties is created, which in
//   turn allows to recreate the file.
//
//   In particular, the event callback returns a Promise which resolves
//   with such object, which can be then used to update the Input state.
//
//   see: https://stackoverflow.com/a/46639837
//
// - It is not possible to set the inputElement.value directly, so you have
//   to test which type of input you are setting up when setting the value.
//
// - To initialize the inputElement with some data, you have to set
//   inputElement.files via DataTransfer in JS, using data obtained from a
//   blob.
//
//   see: https://stackoverflow.com/a/76108735
//
// Functions fileToBase64Obj, dataUrltoBlob, setFileToFileInput have been
// written based on the above considerations and sources.

function Input({
  id,
  name,
  value = "",
  setValue,
  placeholder = "",
  type = "text",
  maxLength = null,
  required = false,
  accept = null,
  checked = null,
  maxFileSizeInMb = 3,
}) {
  const ref = useRef();

  // Setup this effect to initialize input with type="file" with a value.
  useEffect(() => {
    if (type == "file" && ref.current) {
      setFileToFileInput(value, ref.current);
    }
  }, [value, type, ref]);

  return (
    <input
      id={id}
      name={name}
      value={type != "file" ? value : undefined}
      placeholder={placeholder}
      type={type}
      onChange={(e) => {
        if (type == "file") {
          fileToBase64Obj(e.currentTarget, maxFileSizeInMb).then((value) =>
            setValue(value)
          );
        } else {
          setValue(
            type == "checkbox" || type == "radio"
              ? e.target.checked
              : e.target.value
          );
        }
      }}
      maxLength={maxLength}
      required={required}
      accept={accept}
      checked={checked}
      ref={ref}
    />
  );
}

function numToStringRounded(num, decimals = 2) {
  const k = 10 ** decimals;
  return (Math.round(num * k) / k).toFixed(decimals);
}

function fileToBase64Obj(inputElement, maxFileSizeInMb = null) {
  // returns a Promise which resolves with an
  // object with "dataUrl", "type", "name", and "lastModified" properties
  // which in turn allows to recreate the file

  return new Promise((resolve, reject) => {
    if (!inputElement.files || inputElement.files.length == 0) resolve(null);

    const file = inputElement.files[0];

    // Limit file size, if specified
    // see: https://stackoverflow.com/a/49490014
    if (maxFileSizeInMb && file.size > maxFileSizeInMb * 1024 * 1024) {
      alert(
        `File is too big (${numToStringRounded(
          file.size / 1024 / 1024,
          2
        )} MB)! The maximum allowed size is ${maxFileSizeInMb} MB.`
      );
      inputElement.value = "";
      resolve(null);
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve({
        dataUrl: reader.result,
        type: file.type,
        name: file.name,
        lastModified: file.lastModified,
      });
    reader.onerror = (error) => reject(error);
  });
}

function dataUrltoBlob(dataUrl) {
  // see:  https://stackoverflow.com/a/12300351

  const arr = dataUrl.split(",");

  // convert base64 to raw binary data held in a string
  const byteString = atob(arr[1]);

  // separate out the mime component
  const mimeString = arr[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}

function setFileToFileInput(value, fileInput) {
  // value: object with "dataUrl", "type", "name", and "lastModified" properties

  if (!value) {
    // if no file is to be set, reset the .files property
    fileInput.files = new DataTransfer().files;
    return;
  }

  // Convert base64 file to blob
  const blob = dataUrltoBlob(value.dataUrl);
  //const blobUrl = URL.createObjectURL(blob);

  // Create file from blob
  const file = new File([blob], value.name, {
    type: value.type,
    lastModified: value.lastModified,
    // lastModified: new Date().getTime(),
  });

  // Initialize fileInput with the created file
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(file);
  fileInput.files = dataTransfer.files;

  // see https://stackoverflow.com/a/25645271
  // fileInput.dispatchEvent(new Event("change", { bubbles: true }));
}

export default Input;
