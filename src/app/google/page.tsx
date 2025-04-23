'use client'

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export default function GooglePage() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-end p-4 text-sm">
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:underline">Gmail</a>
          <a href="#" className="text-gray-600 hover:underline">Images</a>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/google" />
          ) : (
            <div className="flex space-x-2">
              <SignInButton mode="modal">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        {/* Google Logo */}
        <div className="text-6xl sm:text-8xl font-bold mb-8">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#DB4437]">o</span>
          <span className="text-[#F4B400]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#0F9D58]">l</span>
          <span className="text-[#DB4437]">e</span>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-md sm:max-w-xl lg:max-w-2xl mb-6">
          <div className="relative flex items-center border border-gray-200 rounded-full shadow hover:shadow-md focus-within:shadow-md h-11">
            <span className="pl-4 pr-2 text-gray-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
            </span>
            <input
              type="text"
              className="flex-grow h-full px-2 text-gray-700 rounded-full focus:outline-none"
            />
            <span className="px-4 text-gray-400 hover:text-gray-600 cursor-pointer">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2 px-4 rounded">
            Google Search
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2 px-4 rounded">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-b border-gray-300 py-3">
            <p>United States</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center py-3">
            <div className="flex space-x-6 mb-2 sm:mb-0">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Advertising</a>
              <a href="#" className="hover:underline">Business</a>
              <a href="#" className="hover:underline">How Search works</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 