import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'За нас | Промяна AI',
    description: 'Вижте екипа зад Промяна AI (Владимир Пасев, Рая Такорова, Константин Крумов, Ива Иванова) – група от млади и талантливи ентусиасти, посветени на изследването и развитието на изкуствения интелект. Научете повече за нашата мисия, визия и как работим заедно, за да допринесем към бъдещето на технологиите.',
    keywords: 'екип Промяна AI, за нас, млади технологични таланти, изкуствен интелект, развитие на AI, технологична общност, визия и мисия, Владимир Пасев, Рая Такорова, Константин Крумов, Ива Иванова',
    openGraph: {
        images: `https://www.promiana-ai.com/opengraph-image.png`,
    }
}

function AboutUs() {
    const teamMembers = [
        { name: 'Владимир Пасев', role: 'Team Leader', imageUrl: '/team/vladimir.png' },
        { name: 'Рая Такорова', role: 'Team Leader', imageUrl: '/team/raya.png' },
        { name: 'Константин Крумов', role: 'Team Leader', imageUrl: '/team/konstantin.png' },
        { name: 'Ива Иванова', role: 'Team Leader', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg' },
    ];
    return (
        <div className='bg-white pb-10'>
            <h1 className='text-center text-3xl font-semibold'>За нас</h1>
            <div className='flex flex-wrap justify-center gap-14 py-10'>
                {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                        <img
                            className="w-44 h-44 rounded-full mx-auto object-cover"
                            src={member.imageUrl}
                            alt={member.name}
                        />
                        <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                    </div>
                ))}
            </div>
            <p className='px-[22%] py-5 pb-9 text-center'>
                Изкуственият интелект е много актуална тема, за която обаче невинаги има актуална информация. Именно това ни вдъхнови да направим този проект, в който може да намерите всякакви статии и дори да добавяте ваши собствени на тази тема. Ние сме четирима ентусиазирани ученици от 9. клас в 91. НЕГ “проф. Константин Гълъбов” и се надяваме, че този сайт ще излезе от рамките на училищната среда и ще може да послужи на по-широка група от хора.
            </p>
            
        </div>
    )
}

export default AboutUs