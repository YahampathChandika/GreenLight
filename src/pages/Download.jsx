import React, { useState, useCallback, useRef } from "react";
import ReactToPrint from "react-to-print";
import { useNavigate  } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import "rsuite/esm/Overlay/Position";
import "../assets/scss/Download.css";
import "../assets/scss/VisualInspection.css";
import PDF from "./Pdf";
import Swal from "sweetalert2";

export const Download = () => {
  const componentRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAfterPrint = useCallback(() => {
    Swal.fire({
      title: "Clear Data?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5cb85c",
      cancelButtonColor: "#d9534f",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      navigate("/home")
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
      }
    });
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = useCallback(() => {
    console.log("`onBeforePrint` called");
  }, []);

  const handleOnBeforeGetContent = useCallback(() => {
    console.log("`onBeforeGetContent` called");
    setLoading(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 2000);
    });
  }, [setLoading]);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = useCallback(() => {
    return (
      <div className="download-page">
        <div className="background-image" />
        <div className="download-page-con">
          {loading ? (
            <Bars
              height="80"
              width="80"
              color="#046ae7"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <>
              <h1>Ready to Download...</h1>
              <button className="btn btn-primary download-button">
                Download
              </button>
            </>
          )}
        </div>
      </div>
    );
  }, [loading]);

  return (
    <div>
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle="Final Report"
        onAfterPrint={handleAfterPrint}
        onBeforeGetContent={handleOnBeforeGetContent}
        onBeforePrint={handleBeforePrint}
        removeAfterPrint
        trigger={reactToPrintTrigger}
      />
      <div ref={componentRef}>
        <PDF />
      </div>
    </div>
  );
};
export default Download;
