import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-purple-500 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-12 mx-auto">
              안녕하세요, 정보보호학과 23학번 정은수입니다. 이곳은 저의
              포트폴리오 웹사이트 페이지입니다.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/repos"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </div>
      {/* Project Showcase Section */}
      <section className="py-10 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Project Showcase
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Midterm Project Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Midterm Project
                </h3>
                <p className="text-gray-600">중간고사 프로젝트입니다.</p>
              </div>
              <Link
                href="/dashboard"
                className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            {/* Final Project Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Team Project
                </h3>
                <p className="text-gray-600">With Book 페이지입니다.</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://team-project-last.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-gray-600">© 2024 정은수 | portfolio website </p>
          <Link
            href="/dashboard-client"
            className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
          >
            Contact Me
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </footer>
    </main>
  )
}
