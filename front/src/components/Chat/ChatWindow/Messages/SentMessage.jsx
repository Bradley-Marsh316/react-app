import React from 'react'

export default function SentMessage({ content, sameTypeAbove }) {
  return (
    <div className={`w-full flex justify-end ${sameTypeAbove ? 'pt-2' : 'pt-8'}`}>
      <div className="flex rounded-md rounded-br-none max-w-lg border-light border-opacity-25 border p-4 text-sm text-light">
        {content}
      </div>
    </div>
  )
}
