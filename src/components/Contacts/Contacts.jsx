import React from "react";

const Contacts = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12 tracking-tight">
                    📬 Contact Us
                </h1>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Send us a message
                        </h2>
                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 hover:scale-105 transform transition"
                            >
                                🚀 Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all p-6 flex items-center space-x-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                📍
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Our Address</h3>
                                <p className="text-gray-600">123 React Street, Noida, India</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all p-6 flex items-center space-x-4">
                            <div className="bg-green-100 p-3 rounded-full">
                                📞
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                                <p className="text-gray-600">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all p-6 flex items-center space-x-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                ✉️
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                <p className="text-gray-600">support@plusdemic.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
