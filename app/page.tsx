import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-10 text-center">
      {/* 헤더 섹션 */}
      <h1 className="text-4xl font-bold mb-2">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600 mb-4">
        안녕하세요, 저는 23학번 정보보호학과 정은수입니다. 이곳은 저의
        포트폴리오 웹사이트입니다.
      </p>
      <div className="flex justify-center space-x-4 mb-8">
        <Link href="/repos">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View About Me
          </button>
        </Link>
      </div>
      <br />
      <br />
      <br />
      {/* 중간고사 페이지 링크 */}
      <div className="mt-10">
        <Link href="/dashboard">
          <button className="text-gray-700 underline">
            See Midterm Page →
          </button>
        </Link>
      </div>

      <br />
      <br />
      <br />
      {/* Footer */}
      <footer className="mt-16 text-gray-500">
        <p>
          © 2024 [JUNGEUNSU] |
          <a href="/dashboard-client" className="underline">
            Contact Me
          </a>
        </p>
      </footer>
    </main>
  )
}
