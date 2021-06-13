import React from 'react'

import Avatar from '../../../../assets/images/avatar.png';

export default function SentMessage({ content, sameTypeAbove }) {

  return (
    <div className={`w-full flex ${sameTypeAbove ? 'pt-2' : 'pt-8'}`}>
      {!sameTypeAbove ? <img src={Avatar} className="rounded-full bg-active w-10 h-10 mr-2" /> : null }
      <div className={`flex rounded-md rounded-tl-none max-w-lg bg-gradient-to-br from-active-light to-active-dark text-white p-4 ${sameTypeAbove ? 'ml-12' : null}`}>
        {content}
      </div>
    </div>
  )
}
