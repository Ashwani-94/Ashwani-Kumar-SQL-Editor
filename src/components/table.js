import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../assets/css/table.css';
import table1 from '../assets/tablesData/table4.csv';
import export_icon from '../assets/icons/export.svg';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(table1);
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
    }, []);
  
    return (
        <>
        <div className='table_topic'>
            <div>Output : <span>Customers</span></div>
            <div>Export .csv</div>

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
