"use client";

import {useState} from "react";

export default function ContactPage() {
    const [form,
        setForm] = useState({name: "", email: "", message: ""});
    const [submitted,
        setSubmitted] = useState(false);

    const handleChange = (e : React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        setSubmitted(true);
    };

    return (
        <div
            className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Contact Us
                </h1>

                {!submitted
                    ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                                    required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                                    required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                                    required></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black hover:bg-gray-300 cursor-pointer hover:text-black text-white font-medium py-2 rounded-lg transition-colors">
                                Send Message
                            </button>
                        </form>
                    )
                    : (
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-green-600 mb-2">
                                Thank you!
                            </h2>
                            <p className="text-gray-700 pb-5">
                                Your message has been sent. We’ll get back to you soon.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="w-full bg-black hover:bg-gray-300 cursor-pointer hover:text-black text-white font-medium py-2 rounded-lg transition-colors">
                                Send another message
                            </button>
                        </div>
                    )}
            </div>
        </div>
    );
}
