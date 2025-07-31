import { Link } from "react-router-dom"


function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-fit">

      {/* 소개글 */}
      <div className="flex flex-col justify-center items-center w-full h-auto my-[53px] p-[16px] max-w-96">
        <div className="flex flex-col items-start  w-full h-auto  text-c-b gap-4">
          <div className="flex flex-col">
            <p className="font-[500] text-2xl">
              안녕하세요.<br />
              카페 브루잇입니다.
            </p>
          </div>
          <div className="flex justify-start">
            <p className="font-[500] text-xs  text-c-b6">회원서비스를 위해 로그인 해주세요.</p>
          </div>
        </div>

        {/* 아이디 비번 입력창 */}
        <div className="flex flex-col w-full h-auto justify-center items-start my-[74px] gap-[32px] text-c-b">
          <div>
            <p className="text-xs hidden">아이디</p>
            <input type="text" placeholder="아이디" className="w-[328px]" />
          </div>
          <div>
            <p className="text-xs hidden" >비밀번호</p>
            <input type="password" placeholder="비밀번호" className="w-[328px]" />
          </div>
        </div>

        {/* 아이디 비번찾기 회원가입 */}
        <div className="flex flex-row my-[12px] gap-1  text-c-bfont-[500] font-normal w-fit text-c-b8">
          <Link to={"/find-id"}><p className="text-xs">아이디 찾기</p></Link>
          <p className="text-xs">ㅣ</p>
          <Link to={"/find-password"}> <p className="text-xs">비밀번호 찾기</p></Link>
          <p className="text-xs">ㅣ</p>
          <Link to={"/signup"}><p className="text-xs">회원가입</p></Link>
        </div>

        {/* 로그인 버튼 */}
        <div className="flex flex-col mt-[240px]">
          <button className="w-[328px] min-w-[206px] min-he-[46px]">로그인 하기</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage