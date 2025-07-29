function FindPasswordPage() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-fit">

            {/* 안내문구 */}
            <div className="flex flex-col justify-center items-center w-full h-auto my-[53px] p-[16px] max-w-96">
                <div className="flex flex-col items-start  w-full h-auto  text-c-b gap-4">
                    <div className="flex flex-col">
                        <p className="font-[500] text-2xl">
                            비밀번호 찾기
                        </p>
                    </div>
                    <div className="flex justify-start">
                        <p className="font-[500] text-xs  text-c-b6">가입 시 등록한 아이디와 메일 주소를 입력해주세요</p>
                    </div>
                </div>

                {/* 성함 아이디 메일주소 입력창 */}
                <div className="flex flex-col w-full h-auto justify-center items-start my-[74px] gap-[32px] text-c-b">
                    <div>
                        <p className="text-xs hidden">성함</p>
                        <input type="text" placeholder="성함" className="w-[328px]" />
                    </div>
                    <div>
                        <p className="text-xs hidden" >아이디</p>
                        <input type="text" placeholder="아이디" className="w-[328px]" />
                    </div>
                    <div>
                        <p className="text-xs hidden" >메일주소</p>
                        <input type="email" placeholder="메일주소" className="w-[328px]" />
                    </div>
                </div>



                {/* 비밀번호 찾기 버튼 */}
                <div className="flex flex-col mt-[240px]">
                    <button className="w-[328px]">비밀번호 찾기</button>
                </div>
            </div>
        </div>
    )
}

export default FindPasswordPage