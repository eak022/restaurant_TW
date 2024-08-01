import React from 'react';

function UserProfile({ onButtonClick, onButtonEnter }) {
  return (
    <button
      type="button"
      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      id="user-menu-button"
      onClick={onButtonClick}
      onKeyUp={(e) => e.key === ' ' && onButtonEnter()}
      onKeyDown={(e) => e.key === 'Enter' && onButtonEnter()}
      aria-expanded="false"
      aria-haspopup="true"
    >
      <span className="absolute -inset-1.5"></span>
      <span className="sr-only">Open user menu</span>
      <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
        alt="User profile"
      />
    </button>
  );
}

export default UserProfile;
