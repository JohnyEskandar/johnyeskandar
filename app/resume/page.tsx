'use client'

export default function Resume() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up">
        <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-slate-50 mb-4">Resume</h1>
        <p className="text-xl text-slate-300 mb-8">Download my latest resume or view it online</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/resume/Eskandar, Johny Resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            Download PDF
          </a>
          <a
            href="/resume/Eskandar, Johny Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-slate-50 font-medium rounded-lg transition-colors"
          >
            View Online
          </a>
        </div>

        {/* Styled PDF Preview Container */}
        <div className="bg-slate-900 p-6 rounded-2xl shadow-xl">
          <div className="bg-white rounded-xl overflow-hidden">
            <iframe
              src="/resume/eskandar-johny-resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-[1066px] rounded-b-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
