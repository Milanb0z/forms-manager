import React from "react";
import Dropzone from "react-dropzone";

import classes from "./FileDropzone.module.scss";

const FileDropzone = () => {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section>
          <div className={classes.zone} {...getRootProps()}>
            {isDragActive ? (
              <div className={classes.overlay}>
                <p> Drop File Here</p>
              </div>
            ) : null}

            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default FileDropzone;
