import React from 'react'

export default function SentMessage({ content, sameTypeAbove }) {
  console.log(sameTypeAbove);
  return (
    <div className={`w-full flex ${sameTypeAbove ? 'pt-2' : 'pt-8'}`}>
      {!sameTypeAbove ? <div className="rounded-full bg-active w-10 h-10 mr-2"></div> : null }
      <div className={`flex rounded-md rounded-tl-none max-w-lg bg-gradient-to-br from-active-light to-active-dark text-white p-4 ${sameTypeAbove ? 'ml-12' : null}`}>
        {content}
      </div>
    </div>
  )
}
