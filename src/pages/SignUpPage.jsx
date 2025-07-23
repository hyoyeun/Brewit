function SignUpPage() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-fit">

            {/* 안내문구 */}
            <div className="flex flex-col justify-center items-center w-full h-auto my-[53px] p-[16px] max-w-96">
                <div className="flex flex-col items-start  w-full h-auto  text-c-b gap-4">
                    <div className="flex flex-col">
                        <p className="font-[500] text-2xl">
                            회원가입
                        </p>
                    </div>
                    <div className="flex justify-start">
                        <p className="font-[500] text-xs  text-c-b6">회원 서비스 이용을 위해 회원가입 해주세요.</p>
                    </div>
                </div>

                {/* 성함 아이디 메일주소 비밀번호 비밀번호 확인 입력창 */}
                <div className="flex flex-col w-full h-auto justify-center items-start my-[74px] gap-[32px] text-c-b">
                    <div>
                        <p className="text-xs hidden">성함</p>
                        <input type="text" placeholder="이름" className="w-[328px]" />
                    </div>
                    <div>
                        <p className="text-xs hidden">아이디</p>
                        <input type="text" placeholder="아이디" className="w-[328px]" />
                    </div>
                    <div>
                        <p className="text-xs hidden">메일주소</p>
                        <input type="email" placeholder="메일주소" className="w-[328px]" />
                    </div>
                    <div className="relative w-[328px]">
                        <p className="text-xs hidden">비밀번호</p>
                        <input type="password" placeholder="비밀번호" className="w-[328px]" />
                        <div className="absolute top-2 right-2 w-[20px] h-[20px] bg-slate-100 ">
                            <img src="./images/icon1.JPG" alt="icon" />
                        </div>
                    </div>
                    <div className="relative w-[328px]">
                        <p className="text-xs hidden" >비밀번호 확인</p>
                        <input type="password" placeholder="비밀번호 확인" className="w-full" />
                        <div className="absolute top-2 right-2 w-[20px] h-[20px] bg-slate-100 ">
                            <img src="./images/icon1.JPG" alt="icon" />
                        </div>
                    </div>

                </div>



                {/* 회원가입 버튼 */}
                <div className="flex flex-col mt-[240px]">
                    <button>회원가입</button>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage