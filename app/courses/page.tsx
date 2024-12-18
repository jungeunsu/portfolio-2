import { FaGithub } from 'react-icons/fa'
import { SiVercel } from 'react-icons/si'

export default function Courses() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-600 mb-8">
          List of Projects
        </h1>

        {/* 프로젝트 섹션 */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 첫 번째 프로젝트 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">hcjdemo</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                1st Project
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Description
                </h3>
                <p className="text-gray-600">
                  HTML, CSS, JavaScript를 활용한 기적인
                  <br /> 웹 페이지 구현 프로젝트입니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    HTML
                  </span>
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    CSS
                  </span>
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    JavaScript
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/jungeunsu/hcjdemo-20240912"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-black transition-all duration-200"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://hcjdemo-20240912.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200"
              >
                <SiVercel className="w-5 h-5" />
                <span>Vercel</span>
              </a>
            </div>
          </div>

          {/* 두 번째 프로젝트 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">clerk-api</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                2nd Project
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Description
                </h3>
                <p className="text-gray-600">
                  Clerk를 활용한 사용자 인증 시스템을 구현한
                  <br />
                  Next.js 기반의 웹 애플리케이션입니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    Clerk
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/jungeunsu/clerkapi1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-black transition-all duration-200"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://clerkapi1-qffe-pk32vyi44-jung-eunsus-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200"
              >
                <SiVercel className="w-5 h-5" />
                <span>Vercel</span>
              </a>
            </div>
          </div>

          {/* 세 번째 프로젝트 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">crud-action</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                3rd Project
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Description
                </h3>
                <p className="text-gray-600">
                  Next.js와 MongoDB를 활용하여 게시글 CRUD
                  <br />
                  (생성, 읽기, 수정, 삭제) 기능을 구현한 프로젝트입니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/jungeunsu/crud-action-2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-black transition-all duration-200"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://crud-action-2-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200"
              >
                <SiVercel className="w-5 h-5" />
                <span>Vercel</span>
              </a>
            </div>
          </div>

          {/* 네 번째 프로젝트 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">mongodb</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                4th Project
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Description
                </h3>
                <p className="text-gray-600">
                  MongoDB를 활용한 데이터베이스 연동 및<br />
                  API 라우팅을 구현한 웹 애플리케이션입니다.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/jungeunsu/Mongodb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-black transition-all duration-200"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://mongodb-six-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200"
              >
                <SiVercel className="w-5 h-5" />
                <span>Vercel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
