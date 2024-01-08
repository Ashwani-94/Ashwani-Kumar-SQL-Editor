import React, { useEffect, useState } from 'react'
import AceEditor from "react-ace";
import { QUERIES_VALUE } from '../constants/queriesData';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";


const CodeEditor = ({query,setQuery}) => {

    const queriesList=[1,2,3,4];
    const [editorValue, setEditorValue] = useState(QUERIES_VALUE[0]);

    const runSql=()=>{
        let flag=false;
        QUERIES_VALUE.forEach((val,idx) => {
            if(editorValue == val){
                setQuery(idx+1);
                flag=true;
            }
        });
        if(!flag){
            setQuery(5);
        }
    }

    useEffect(() => {
        if(query<5){
            setEditorValue(QUERIES_VALUE[query-1]);
        }
      }, [query]);

    return (
        <div>
            <div className='code_header'>
                <button onClick={runSql} className='code_run hovered' >Run SQL</button>
                <div className='query_btns_div'>
                    {
                        queriesList.map(val=>{
                            return(
                                <button onClick={()=>setQuery(val)} className={`query_btn hovered${query==val?" active":""}`}>Query {val}</button>
                            )
                        })
                    }
                </div>
            </div>
                <AceEditor
                    mode="mysql"
                    theme="twilight"
                    style={{
                        backgroundColor:"#272c39",
                        color:"#fff",
                        width:"100%",
                        height:"calc(100vh - 46px - 43px)",
                    }}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={editorValue}
                    onChange={(val)=>setEditorValue(val)}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 4,
                    }}
                    />
                            
        </div>
    );
}

export default CodeEditor
