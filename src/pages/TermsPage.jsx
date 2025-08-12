import { useNavigate } from "react-router-dom"

function TermsPage() {
    const navigate = useNavigate();

    return (
        <div className={`flex flex-col w-full h-fit items-center gap-3 text-c-b pl-4 pr-4`}>
            <div className="flex flex-row items-center min-w-[360px] h-fit w-[40vw] text-2xl font-medium justify-between mt-[57px]">
                <p>{ }님 <br /> 환영합니다!</p>
                <div className="w-5 h-5">
                    <img src="/images/icon/notifications.svg" alt="icon" />
                </div>
            </div>

            <div className="flex flex-col">
                <div classNaem="flex flex-row items-center min-w-[360px] h-fit w-[40vw]  justify-between" >
                    <div className="flex flex-row min-w-[360px] h-fit w-[40vw]  justify-between items-center pt-4 pb-4 border-b-[1px] border-b-[rgba(19,19,19,0.1)] cursor-pointer" onClick={()=> {navigate('/terms/serviceTerms')}}>
                        <p>서비스 이용약관</p>
                        <img className="w-5 h-5" src="/images/icon/keyboard_arrow_down.svg" alt="icon" />
                    </div>
                    <div className="flex flex-row min-w-[360px] h-fit w-[40vw]  justify-between items-center  pt-4 pb-4 border-b-[1px] border-b-[rgba(19,19,19,0.1)] cursor-pointer" onClick={()=>{navigate('privacyPolicy')}}>
                        <p>개인정보 처리방침</p>
                        <img className="w-5 h-5" src="/images/icon/keyboard_arrow_down.svg" alt="icon" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default TermsPage