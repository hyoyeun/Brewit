import logo from "./../../public/images/로고.JPG"


function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-fit ">
      <div className="flex flex-col justify-center items-center w-full h-[48px] ">
        <div className="flex flex-col w-full h-full pl-[10px] pb-[8px] pt-[24px]
        ">
          <div className="flex justify-center items-start w-[10vw] h-[80vh] ">
            <img alt="logo" src={logo} className="min-w-[52px] min-h-[15px]  " />
          </div>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center w-full h-auto my-[53px] p-[16px]">
        <div className="flex flex-col items-start  w-full h-auto  text-c-b gap-4">
          <div className="flex flex-col">
            <p className="font-[500] text-2xl">
              안녕하세요.<br />
              카페 브루잇입니다.
            </p>
          </div>
          <div className="flex justify-start">
            <p className="font-[500] text-xs">회원서비스를 위해 로그인 해주세요.</p>
          </div>
        </div>

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

        <div className="flex flex-row my-[12px] items-start justify-center gap-1  text-c-bfont-[500] font-normal w-fit">
          <p className="text-xs">아이디 찾기</p>
          <p className="text-xs">ㅣ</p>
          <p className="text-xs">비밀번호 찾기</p>
          <p className="text-xs">ㅣ</p>
          <p className="text-xs">회원가입</p>
        </div>

        <div className="flex flex-col mt-[240px]">
          <button>로그인 하기</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage