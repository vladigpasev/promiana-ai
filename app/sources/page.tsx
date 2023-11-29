import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Източници | Промяна AI',
    description: 'Разберете кои са източниците, които сме използвали за информация за статиите, написани от нас.',
    keywords: 'източници, информация, източници за статиите',
    alternates: {
        canonical: `https://promiana-ai.com/sources`,
    },
    openGraph: {
        images: `https://www.promiana-ai.com/opengraph-image.png`,
    }
}

function Sources() {
    return (
        <div className='bg-white p-10'>
            <h1 className='text-2xl font-bold'>Източници за статиите на Промяна AI</h1>
            <br />
                <ul>
                    <li className='list break-words'><a className="link" href="https://news.harvard.edu/gazette/story/2020/11/risks-and-benefits-of-an-ai-revolution-in-medicine/#:~:text=,in%20service%20of%20any%20case">https://news.harvard.edu/gazette/story/2020/11/risks-and-benefits-of-an-ai-revolution-in-medicine/#:~:text=,in%20service%20of%20any%20case</a></li>
                    <br />
                    <li><a className="link break-words" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6779111/#:~:text=,gov%E3%80%91">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6779111/#:~:text=,gov%E3%80%91</a></li>
                    <br />
                    <li><a className="link break-words" href="https://www.ama-assn.org/practice-management/digital/future-ai-medicine-and-what-it-means-physicians-and-practices-tom-lawry#:~:text=,assn.org%E3%80%91">https://www.ama-assn.org/practice-management/digital/future-ai-medicine-and-what-it-means-physicians-and-practices-tom-lawry#:~:text=,assn.org%E3%80%91</a></li>
                    <br />
                    <li><a className="link break-words" href="https://postgraduateeducation.hms.harvard.edu/trends-medicine/how-artificial-intelligence-disrupting-medicine-what-means-physicians#:~:text=AI%20in%20Health%20Care%3A%20Potential,patient%20triage%20to%20cancer%20detection">https://postgraduateeducation.hms.harvard.edu/trends-medicine/how-artificial-intelligence-disrupting-medicine-what-means-physicians#:~:text=AI%20in%20Health%20Care%3A%20Potential,patient%20triage%20to%20cancer%20detection</a></li>
                    <br />
                    <li><a href="https://www.europarl.europa.eu/news/bg/headlines/society/20200918STO87404/izkustven-intelekt-vzmozhnosti-i-zaplakhi?&at_campaign=20234-Digital&at_medium=Google_Ads&at_platform=Search&at_creation=RSA&at_goal=TR_G&at_audience=%D0%B8%D0%B7%D0%BA%D1%83%D1%81%D1%82%D0%B2%D0%B5%D0%BD%20%D0%B8%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82&at_topic=Artificial_intelligence&at_location=BG&gclid=Cj0KCQiAjMKqBhCgARIsAPDgWly6ch_eIgLj8LVfikR95TmJ69Lds9ORiJDKBa5RkLP_AM2jXd3nj9QaAoQQEALw_wcB" className="link break-words">https://www.europarl.europa.eu/news/bg/headlines/society/20200918STO87404/izkustven-intelekt-vzmozhnosti-i-zaplakhi?&at_campaign=20234-Digital&at_medium=Google_Ads&at_platform=Search&at_creation=RSA&at_goal=TR_G&at_audience=%D0%B8%D0%B7%D0%BA%D1%83%D1%81%D1%82%D0%B2%D0%B5%D0%BD%20%D0%B8%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82&at_topic=Artificial_intelligence&at_location=BG&gclid=Cj0KCQiAjMKqBhCgARIsAPDgWly6ch_eIgLj8LVfikR95TmJ69Lds9ORiJDKBa5RkLP_AM2jXd3nj9QaAoQQEALw_wcB</a></li>
                    <br />
                    <li className='break-words'><span>И разбира се - </span><a href="https://chat.openai.com/chat" className="link break-words">https://chat.openai.com/chat</a></li>
                </ul>
        </div>
    )
}

export default Sources