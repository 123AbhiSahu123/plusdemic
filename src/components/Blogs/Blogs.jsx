import React from "react";

const blogs = [
    {
        id: 1,
        title: "The Importance of Mental Health in Modern Life",
        description:
            "Mental health is just as important as physical health. Learn how stress management, therapy, and mindfulness can help you live a balanced life.",
        date: "September 11, 2025",
        author: "Dr. Abhishek Sahu",
    },
    {
        id: 2,
        title: "Nutrition Tips for a Healthy Lifestyle",
        description:
            "A balanced diet rich in fruits, vegetables, proteins, and whole grains can significantly improve your health and immunity.",
        date: "September 5, 2025",
        author: "Dr. Jane Doe",
    },
    {
        id: 3,
        title: "The Role of Exercise in Preventing Diseases",
        description:
            "Regular physical activity reduces the risk of heart disease, diabetes, and obesity. Here’s how you can include simple workouts in your daily routine.",
        date: "August 29, 2025",
        author: "Dr. John Smith",
    },
    {
        id: 4,
        title: "Understanding Heart Health",
        description:
            "Heart diseases are one of the leading causes of death worldwide. Discover effective lifestyle changes that promote heart health.",
        date: "August 25, 2025",
        author: "Dr. John Deo",
    },
    {
        id: 5,
        title: "The Future of Medical Technology",
        description:
            "From AI-powered diagnosis to robotic surgeries, medical technology is transforming healthcare for both doctors and patients.",
        date: "August 22, 2025",
        author: "Dr. Sarah Lee",
    },
    {
        id: 6,
        title: "How to Boost Your Immune System Naturally",
        description:
            "Proper sleep, hydration, a nutritious diet, and regular exercise can help strengthen your immunity and keep illnesses away.",
        date: "August 18, 2025",
        author: "Dr. J.K Smith",
    },
];

const Blogs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Page Header */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center tracking-tight">
                    🩺 Latest Medical Blogs
                </h1>

                {/* Blog List */}
                <div className="grid gap-8 md:grid-cols-2">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100"
                        >
                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                                {blog.title}
                            </h2>

                            {/* Meta Info */}
                            <p className="text-gray-500 text-sm mb-4">
                                📅 {blog.date} • 👨‍⚕️ {blog.author}
                            </p>

                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {blog.description}
                            </p>

                            {/* Read More Button */}
                            <button className="mt-auto px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow hover:opacity-90 hover:scale-105 transition-transform">
                                Read More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
