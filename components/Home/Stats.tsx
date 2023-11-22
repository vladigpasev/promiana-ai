import React from 'react'

function Stats() {
    return (
        <div>
            <p className="mt-2 mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl px-10 pt-5">
                Можете да ни се доверите
            </p>
            <div className='flex flex-col flex-grow items-center justify-center p-10'>
                <div className="stats stats-vertical lg:stats-horizontal shadow w-full">

                    <div className="stat">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats