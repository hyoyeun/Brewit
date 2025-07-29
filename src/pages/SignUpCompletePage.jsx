function SignUpCompletePage() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-fit">

            {/* 안내문구 */}
            <div className="flex flex-col justify-center items-center w-full h-auto my-[53px] p-[16px] max-w-96">
                <div className="flex flex-col items-start  w-full h-auto  text-c-b gap-4">
                    <div className="flex flex-col">
                        <p className="font-[500] text-2xl">
                            안녕하세요 <br/>
                            노빌더님!
                        </p>
                    </div>
                    <div className="flex justify-start">
                        <p className="font-[500] text-xs  text-c-b6">회원가입이 완료되었습니다.</p>
                    </div>
                </div>


                {/* 로그인하기 버튼 */}
                <div className="flex flex-col mt-[240px]">
                    <button className="w-[328px]">로그인하기</button>
                </div>
            </div>
        </div>
    )
}

export default SignUpCompletePage