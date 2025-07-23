function ResetPasswordPage() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-fit">

            {/* 안내문구 */}
            <div className="flex flex-col justify-center items-center w-full h-auto my-[53px] p-[16px] max-w-96">
                <div className="flex flex-col items-start  w-full h-auto  text-c-b gap-4">
                    <div className="flex flex-col">
                        <p className="font-[500] text-2xl">
                            비밀번호 변경하기
                        </p>
                    </div>
                    <div className="flex justify-start">
                        <p className="font-[500] text-xs  text-c-b6">새로운 비밀번호를 입력해주세요.<br />
                            안전한 사용을 위해 이전과 다른 비밀번호를 권장합니다.</p>
                    </div>
                </div>

                {/* 비밀번호 비밀번호 확인 입력창 */}
                <div className="flex flex-col w-full h-auto justify-center items-start my-[74px] gap-[32px] text-c-b">
                    <div>
                        <p className="text-xs hidden">비밀번호</p>
                        <input type="password" placeholder="비밀번호" className="w-[328px]" />
                    </div>
                    <div>
                        <p className="text-xs hidden" >비밀번호 확인</p>
                        <input type="password" placeholder="비밀번호 확인" className="w-[328px]" />
                    </div>
                    
                </div>



                {/* 비밀번호 변경 버튼 */}
                <div className="flex flex-col mt-[240px]">
                    <button>비밀번호 변경</button>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage