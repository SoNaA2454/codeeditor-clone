import { useContext} from 'react';
import React from 'react';
import Editor from './Editor';
import {Box} from  '@material-ui/core';
import {DataContext}  from '../context/DataProvider';

const Code = () => {
  const {html, setHtml, css, setCss, js, setJs}  =  useContext(DataContext);
  return (
    <Box style={{display:'flex', height:"50vh", backgroundColor:'#060606'}}>
    <Editor
      heading="HTML"
      icon="/"
      color="#FF3C41"
      value={html}
      onChange={setHtml}
    />
    <Editor
      heading="CSS"
      icon="*"
      color="#0EBEFF"
      value={css}
      onChange={setCss}
    />
    <Editor
      heading="JavaScript"
      icon="()"
      color="#FCD000"
      value={js}
      onChange={setJs}
    />
    </Box>
  )
}

export default Code