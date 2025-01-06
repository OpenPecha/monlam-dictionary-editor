import React from 'react'

interface SubmitsProps {
  disabled?: boolean;
  className?: string;
}

const Submits: React.FC<SubmitsProps> = ({ 
  disabled = false,
  className = ''
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`
        fixed 
        bottom-14 
        right-20 
        text-base 
        font-inter 
        bg-gray-400 
        text-white 
        px-6 
        py-1 
        rounded-md 
        transition-opacity
        hover:opacity-80 
        active:opacity-50
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {disabled ? 'Submitting...' : 'Submit'}
    </button>
  )
}

export default Submits