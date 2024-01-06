import React, { useEffect } from 'react'
import DefaultLayout from '../layouts/defaultLayout'
import '../assets/css/home.css'
import CodeEditor from '../components/code_editor';

const Home = () => {

    return (
        <DefaultLayout>
            <div className='home'>
                <div className='left_section'>
                    <CodeEditor />
                </div>
                <div className='right_section'>
                    Result
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Home
