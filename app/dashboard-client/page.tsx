import { auth } from '@clerk/nextjs/server'

export default async function Dashboard() {
  const { userId } = auth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Contact Me
          </h1>

          <div className="grid gap-6">
            {/* Profile Section */}
            <div className="flex items-center p-4 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Jung Eunsu
                </h2>
                <p className="text-gray-500">STUDENT</p>
              </div>
            </div>

            {/* Email Section */}
            <a
              href="mailto:jungeunsu04@gmail.com"
              className="flex items-center p-4 bg-gray-50 rounded-xl transition-all hover:bg-gray-100 group"
            >
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-700 group-hover:text-gray-900">
                  Email
                </h2>
                <p className="text-gray-500 group-hover:text-gray-600">
                  jungeunsu04@gmail.com
                </p>
              </div>
            </a>

            {userId && (
              <>
                {/* GitHub Section */}
                <a
                  href="https://github.com/jungeunsu?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-xl transition-all hover:bg-gray-100 group"
                >
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-purple-700"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-700 group-hover:text-gray-900">
                      GitHub
                    </h2>
                    <p className="text-gray-500 group-hover:text-gray-600">
                      View My Repositories
                    </p>
                  </div>
                </a>

                {/* Vercel Section */}
                <a
                  href="https://vercel.com/jung-eunsus-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-xl transition-all hover:bg-gray-100 group"
                >
                  <div className="flex-shrink-0 bg-gray-900 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 22.525H0l12-21.05 12 21.05z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-700 group-hover:text-gray-900">
                      Vercel
                    </h2>
                    <p className="text-gray-500 group-hover:text-gray-600">
                      View My Deployments
                    </p>
                  </div>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
