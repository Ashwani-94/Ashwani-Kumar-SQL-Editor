import React, { useEffect, useState } from 'react'
import '../assets/css/code_editor.css'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";


const CodeEditor = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 200);
    }, [])
    

    return (
        <div>
            {/* <div>
                run
            </div> */}
            {
                loading &&
                <AceEditor
                    mode="mysql"
                    theme="twilight"
                    style={{
                        backgroundColor:"#272c39",
                        color:"#fff",
                        width:"100%",
                        height:"calc(100vh - 46px)"
                    }}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={`-- create a table
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    gender TEXT NOT NULL
);
-- insert some values
INSERT INTO students VALUES (1, 'Ryan', 'M');
INSERT INTO students VALUES (2, 'Joanna', 'F');
INSERT INTO students VALUES (3, 'Joanna', 'F');
INSERT INTO students VALUES (4, 'Joanna', 'F');
INSERT INTO students VALUES (5, 'Joanna', 'F');
INSERT INTO students VALUES (6, 'Joanna', 'F');
INSERT INTO students VALUES (7, 'Joanna', 'F');
INSERT INTO students VALUES (8, 'Joanna', 'F');
INSERT INTO students VALUES (9, 'Joanna', 'F');
-- fetch some values
SELECT * FROM students;`}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 4,
                    }}
                    />
            }
                            
        </div>
    );
}

export default CodeEditor
