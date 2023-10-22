import React from 'react';
import {  useState } from 'react';
import './editor.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import { Box } from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import '../App.css';


const Editor = ({ heading, language, value, onChange, icon, color }) => {

    const [open, setOpen] = useState(true);
    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <Box style={open ? null : {flexGrow: 0}} className="container">
            <Box style={{display:'flex', justifyContent:'space-between', backgroundColor:'#060606', color:"#AAAEBC", fontWeight:'700'}}>
                <Box style={{backgroundColor:'#1d1e22', padding:'9px 12px', display:'flex'}}>
                    <Box 
                        component="span"
                        style={{
                            backgroundColor: color,
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            paddingBottom: 2
                        }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </Box>
                <FullscreenIcon 
                    fontSize="small"
                    style={{ alignSelf: 'center'}}
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Box>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="controlled-editor"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material',
                }}
            />
        </Box>
    )
}

export default Editor;