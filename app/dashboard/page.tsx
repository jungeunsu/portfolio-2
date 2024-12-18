import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { SiVercel } from 'react-icons/si'

export default function MidtermCompare() {
  return (
    <main className="p-10 bg-gray-50 min-h-screen text-gray-800">
      {/* 헤더 */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Midterm vs Final Portfolio</h1>
        <p className="text-lg text-gray-600">
          중간고사 때의 포트폴리오와 기말고사 포트폴리오를 비교
        </p>
      </header>

      {/* 비교 섹션 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* 중간고사 포트폴리오 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Midterm Portfolio</h2>
          <Image
            src="/images/midterm.png" // 중간고사 스크린샷 이미지 경로
            alt="Midterm Portfolio Screenshot"
            width={500}
            height={300}
            className="rounded-lg mx-auto mb-4"
          />
          <p className="text-gray-600">
            기초적인 레이아웃과 내용으로 포트폴리오를 제작했습니다.
          </p>
          <a
            href="https://github.com/jungeunsu/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-black transition-all duration-200"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://portpolio-ruddy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-200"
          >
            <SiVercel className="w-5 h-5" />
            <span>Vercel</span>
          </a>
        </div>

        {/* 기말고사 포트폴리오 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Final Portfolio</h2>
          <Image
            src="/images/final.png" // 기말고사 스크린샷 이미지 경로
            alt="Final Portfolio Screenshot"
            width={500}
            height={300}
            className="rounded-lg mx-auto mb-4"
          />
          <p className="text-gray-600">
            디자인과 기능을 개선하고 로그인 기능과 프로젝트 상세 페이지를
            추가했습니다.
          </p>
        </div>
      </section>

      {/* 개선된 내용 설명 */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">What's Improved?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 max-w-3xl mx-auto">
          <li className="mb-2">디자인 개선: 더 깔끔하고 보기 좋은 레이아웃</li>
          <li className="mb-2">로그인 기능 추가: Clerk를 활용한 인증 기능</li>
          <li className="mb-2">
            프로젝트 페이지에서 프로젝트를 체계적으로 관리
          </li>
        </ul>
      </section>
    </main>
  )
}
