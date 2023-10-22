import React from "react";
import { useState, useEffect, useContext } from "react";

import { DataContext } from "../context/DataProvider";

import { Box, Button } from "@material-ui/core";
import { saveAs } from 'file-saver';


const Result = () => {
  const [src, setSrc] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const { html, css, js } = useContext(DataContext);

  const SrcCode = `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <Script>${js}</script>
      </html>
    `;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrc(SrcCode);
    }, 1000);
    return () => clearTimeout(timeOut);
  });

  const handleToggle  = () =>{
    setIsLocked(!isLocked);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(src).then(() => {
      setIsCopied(true);
      alert("copied to clipboard");
    });
  };

  const handleSave=()=>{
    const blob = new Blob([src], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'code.txt');
  }

  return (
    <>
      <Box style={{ height: "50vh" }}>
        <iframe
          srcDoc={src}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </Box>
      <Box style={{ backgroundColor: "#060606" }}>
        <Button
          variant="outlined"
          style={{
            color: "#fff",
            border: "1px solid white",
            marginRight: "10px",
          }}
          onClick={()=> handleSave()}
          >
          Save
        </Button>
        <Button
          variant="outlined"
          style={{
            color: "#fff",
            border: "1px solid white",
            marginRight: "10px",
          }}
          onClick={() => handleCopy({ isCopied })}
        >
          Copy
        </Button>
        <Button
          variant="outlined"
          style={{
            color: "#fff",
            border: "1px solid white",
            marginRight: "10px",
          }}
          onClick={() => handleToggle()}
        >
          {isLocked ? 'Unlock':'Lock'}
        </Button>
      </Box>
    </>
  );
};

export default Result;
