import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-10 text-center">
      {/* 헤더 섹션 */}
      <h1 className="text-3xl font-bold ">About</h1>
      <p className="text-lg text-gray-400 mb-4">
        저는 중부대학교 정보보호학과에 재학중인 23학번 정은수 입니다.
        <br />
        mbti는 istp이고 노래듣는 것과 영상보는 것을 좋아합니다.
        <br />
        진로는 아직 정하지 않았지만 관심있는 분야는 보안 분야로 디지털포렌식,
        보안컨설팅 등이 있습니다.
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
