import React, { useState } from 'react'
import DefaultLayout from '../layouts/defaultLayout'
import CodeEditor from '../components/codeEditor';
import Table from '../components/table';

const Home = () => {

    const [query, setQuery] = useState(1);
    
    return (
        <DefaultLayout>
            <div className='home'>
                <div className='left_section'>
                    <CodeEditor query={query} setQuery={setQuery} />
                </div>
                <div className='right_section'>
                    <Table query={query} setQuery={setQuery} />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Home
