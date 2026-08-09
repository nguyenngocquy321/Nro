import React from 'react';
import { Link } from 'react-router-dom';

function Button({
  name = '',
  bg = '',
  bgHover = '',
  href = '',
  textColor = 'text-white',
  isType = true,
  loading = false,
}) {
  return isType ? (
    <div>
      <Link
        to={href}
        className={`rounded-lg ${bg} block px-5 py-2 text-center text-sm font-semibold ${textColor} shadow-sm transition-colors hover:${bgHover}`}
      >
        {name}
      </Link>
    </div>
  ) : (
    <div>
      <button
        type="submit"
        className={`rounded-lg ${bg} mt-3 block w-full cursor-pointer px-5 py-2 text-center text-sm font-semibold ${textColor} shadow-sm transition-colors hover:${bgHover} ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
        disabled={loading}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
