import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "./pdfViewer.css";
import {useParams} from "react-router-dom";
function PDFView() {
    const {id}=useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log(numPages);
  }

  const showNext=()=>{
  if(pageNumber<numPages)
  {    
  setPageNumber(pageNumber+1);
  }
  else
  {
      setPageNumber(pageNumber);
  }
  }

  const showPrev=()=>{
    if(pageNumber>1)
    {    
   
        setPageNumber(pageNumber-1);
    }
    else
    {
        setPageNumber(pageNumber);
    }
    }
  return (
    <>``
    <nav className='navbar'>
       <button className='btn' onClick={showPrev}>
           <i className="fas fa-arrow-left"></i>Prev
       </button>
       <button className='btn'onClick={showNext}>
           Next<i className="fas fa-arrow-right" ></i>
       </button>
       <div className='pdf-info'>
       Page<span id='page-no'>{pageNumber}</span> 
       Of<span id='page-count'>{numPages}</span>
       </div>
    </nav>
   <div className='pdf-container'>
   <Document 
     file={`https://kohi6118.github.io/pdf/${id}`}
     className='pdf-viewer'
     onLoadSuccess={onDocumentLoadSuccess}
     loading='Loading PDF…'
     noData="we are getting some errror in loading pdf..." >
      <Page  pageNumber={pageNumber} 
      scale={1} />
      </Document>
   </div>
    
    </>
  );
}

export default PDFView;