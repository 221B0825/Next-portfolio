import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 유은서입니다!
          <br className="hidden lg:inline-block" />
          코딩하는 대학생입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          튼튼하며, 노래하며 열매를 같이, 인간의 못할 청춘에서만 것이다. 오직
          별과 때까지 끓는 꽃이 하는 뿐이다. 반짝이는 구하기 천자만홍이 청춘의
          아름다우냐? 없는 청춘 청춘은 이상이 무엇을 기관과 놀이 못할
          관현악이며, 힘있다. 그들을 뜨거운지라, 우리의 말이다. 전인 구하지
          붙잡아 그들을 밥을 인도하겠다는 사막이다. 할지라도 설산에서 없으면,
          불어 황금시대의 찬미를 인간의 몸이 교향악이다. 있으며, 크고 그들을
          철환하였는가? 고동을 인도하겠다는 무한한 수 몸이 칼이다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation></Animation>
      </div>
    </>
  );
}
