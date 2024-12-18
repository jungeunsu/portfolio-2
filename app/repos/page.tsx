import { FaMusic, FaYoutube } from 'react-icons/fa'

export default function About() {
  return (
    <main className="p-10 bg-gray-50 text-gray-700 min-h-screen">
      {/* About 섹션 */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-purple-500">About Me</h1>
        <p className="text-lg">
          저는 중부대학교 정보보호학과에 재학 중인 23학번 정은수입니다. 아직
          진로는 정하지 못했지만 <br />
          디지털 포렌식과 보안 컨설팅에 관심을 가지고 있으며, 진로를 찾으려고
          노력하고 있습니다.
        </p>
      </div>

      <br />

      {/* 관심사 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">관심사/취미</h2>
        <br />
        <div className="flex justify-center gap-6">
          <div className="text-center">
            <FaMusic className="w-12 h-12 mx-auto mb-2 text-gray-700" />
            <p>노래 듣기</p>
          </div>
          <div className="text-center">
            <FaYoutube className="w-12 h-12 mx-auto mb-2 text-gray-700" />
            <p>영상 보기</p>
          </div>
        </div>
      </section>

      <br />
      {/* 앞으로의 계획 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">앞으로의 계획</h2>
        <ul className="list-disc list-inside text-lg">
          <li> 진로 찾기 </li>
          <li> 관련 자격증 취득 </li>
          <li> 디지털 포렌식 실무 능력 향상 </li>
        </ul>
      </section>

      <br />
      <br />
      <hr />
      {/* Footer */}
      <footer className="text-center mt-10">
        <p>© 2024 정은수 | About Page</p>
      </footer>
    </main>
  )
}
