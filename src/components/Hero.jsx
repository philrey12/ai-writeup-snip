import React from 'react'
import { logo } from '../assets'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt='rewriteup_logo' className='w-40 object-contain' />

                <button type='button' onClick={() => window.open('https://www.devphil.co')} className='black_btn'>
                    devphil.co
                </button>
            </nav>

            <h2 className='head_text'>
                Summarize Articles with <br className='max-md:hidden' />
                <span className='yellow_gradient'>OpenAI GPT-4</span>
            </h2>

            <p className='desc'>
                Simplify your reading with <strong>reWrite-Up</strong>, an article summarizer that transforms lengthy articles into clear and concise summaries.
            </p>
        </header>
    )
}

export default Hero