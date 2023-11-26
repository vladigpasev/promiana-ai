import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(/heroimg.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">С поглед в бъдещето</h1>
                    <p className="mb-5">Открийте най-новите тенденции и иновации в света на изкуствения интелект. Предлагаме задълбочени анализи, експертни мнения и последни новини, относно бъдещето на технологиите. Станете част от нашата общност на ентусиасти и експерти, за да останете в челните редици на технологичния прогрес.</p>
                    <Link className="btn btn-primary" href='/posts'>Виж статиите</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero