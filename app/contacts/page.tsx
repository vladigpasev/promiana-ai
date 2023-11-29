import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Контакти | Промяна AI',
    description: 'Свържете се с екипа на Промяна AI. Научете как да се свържете с нас чрез телефон или имейл. Нашите експерти по изкуствен интелект са на разположение да отговарят на вашите въпроси и да обсъждат потенциални партньорства и възможности за сътрудничество.',
    keywords: 'контакт Промяна AI, свържете се, телефонен номер, имейл адрес, връзка с екипа, обслужване на клиенти, потенциални партньорства, сътрудничество',
    openGraph: {
        images: `https://www.promiana-ai.com/opengraph-image.png`,
    },
    alternates: {
        canonical: `https://promiana-ai.com/contacts`,
    },
}

function Contacts() {
    return (
        <div className='bg-white p-10'>
            <h1 className="text-3xl font-semibold text-center">Контакти</h1>
            <p className='px-[22%] py-5 pb-9 text-center'>
                Телефон: <a className='link' href="tel:+359 2 490 1990">+359 2 490 1990</a> <br />
                Имейл: <a className='link'  href="mail:info@promiana-ai.com">info@promiana-ai.com</a>
            </p>
        </div>
    )
}

export default Contacts