import React from 'react'
import theme from './theme'
export default function Footer() {
    return (
        <div className='flex justify-center' style={{ backgroundColor: theme.secondaryBackground, color: theme.secondaryText }}>
            <div className='w-[60%] py-6 flex justify-between '>
                <div>
                    <p>Have a great day.</p>
                </div>
                <div>
                    <p>Thank you for visiting !</p>
                </div>
            </div>
        </div>
    )
}
