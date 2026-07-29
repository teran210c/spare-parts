import icon from "../assets/PEGATRON_logo.png"
import user from "../assets/user_icon.png"

export default function Navbar() {
    const imgUrl = icon
    const userIcon = user

    return (
        <div className="flex h-full py-4 justify-between">
            <div className="flex">
                <img className="ml-4 invert" src={imgUrl} alt="" />
                <div className="flex items-center gap-2 px-6">
                    {/* Left Arrow Button */}
                    <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-gray-600 text-gray-700 shadow-sm hover:bg-gray-500"
                        aria-label="Previous"
                    >
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Right Arrow Button */}
                    <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-gray-600 text-gray-700 shadow-sm hover:bg-gray-500"
                        aria-label="Next"
                    >
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

            </div>
            <div className="flex items-center mx-4">
                <div className="mr-2">
                    User
                </div>
                <img className="h-full mr-4" src={userIcon} alt="" />
            <button type="button" className="text-white bg-red-700 box-border border border-transparent hover:bg-red-600 focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-lg text-sm px-6 py-2.5 focus:outline-none">
                Logout
            </button>
        </div>

        </div >
    )
}