import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import table1 from '../assets/tablesData/table1.csv';
import table2 from '../assets/tablesData/table2.csv';
import table3 from '../assets/tablesData/table3.csv';
import table4 from '../assets/tablesData/table4.csv';
import table5 from '../assets/tablesData/table5.csv';
import export_icon from '../assets/icons/export.svg';

const Table = ({query,setQuery}) => {
    const [data, setData] = useState([]);

    const tablesName=["Order_details","Employee_territories","Orders","Products","Customers"]

    useEffect(() => {
      const fetchData = async () => {
        try {
            let response;
            if(query==1)response = await fetch(table1);
            else if(query==2)response = await fetch(table2);
            else if(query==3)response = await fetch(table3);
            else if(query==4)response = await fetch(table4);
            else response = await fetch(table5);
            
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result.value);
            
            Papa.parse(csv, {
                header: true,
                complete: (parsedData) => {
                setData(parsedData.data);
                },
            });
        } catch (error) {
            console.error('Error fetching and parsing data', error);
        }
      };
  
      fetchData();
    }, [query]);

    return (
        <>
        <div className='table_topic'>
            <div>Output : <span>{tablesName[query-1]}</span></div>
            <div className='table_export'>
                <a
                    href={query==1?table1:(query==2?table2:(query==3?table3:(query==4?table4:table5)))}
                    download={tablesName[query-1]}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className='hovered2' src={export_icon} alt='' />
                </a>
                <div>Export .csv</div>
            </div>
        </div>
        <div className='right_section_div'>
            <div className='table_parent'>
                <table className='table'>
                    <thead className='table_head'>
                        <tr className='table_row'>
                            {data.length > 0 &&
                            Object.keys(data[0]).map((header, index) => (
                                <th className='table_data' key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='table_body'>
                        {data.map((row, rowIndex) => (
                            <tr className='table_row' key={rowIndex}>
                                {Object.values(row).map((value, columnIndex) =>{
                                    return (
                                    <>
                                    {
                                        value && <td className='table_data' key={columnIndex}>{value}</td>
                                    }
                                    </>
                                    )
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default Table
