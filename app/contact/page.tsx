'use client'

import type React from "react"
import { useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("https://formspree.io/f/mdkzbpaa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
  
      if (res.ok) {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Network error. Please try again later.")
    }
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-slate-50 mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h2 className="font-poppins font-semibold text-2xl mb-6 text-slate-50">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-50 placeholder-slate-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-50 placeholder-slate-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-50 placeholder-slate-400 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="animate-fade-in-up">
            <h2 className="font-poppins font-semibold text-2xl mb-6 text-slate-50">Connect With Me</h2>

            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                I'm active on various platforms and always open to connecting with fellow developers, potential
                collaborators, and anyone interested in technology.
              </p>

              <div className="space-y-4">
                <Link
                  href="mailto:e.johny@wustl.edu"
                  className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors group"
                >
                  <Mail size={24} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-medium text-slate-50">Email</h3>
                    <p className="text-slate-400 text-sm">e.johny@wustl.edu</p>
                  </div>
                </Link>

                <Link
                  href="https://github.com/JohnyEskandar"
                  className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors group"
                >
                  <Github size={24} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-medium text-slate-50">GitHub</h3>
                    <p className="text-slate-400 text-sm">@JohnyEskandar</p>
                  </div>
                </Link>

                <Link
                  href="https://linkedin.com/in/e-johny"
                  className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors group"
                >
                  <Linkedin size={24} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-medium text-slate-50">LinkedIn</h3>
                    <p className="text-slate-400 text-sm">/in/e-johny</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}