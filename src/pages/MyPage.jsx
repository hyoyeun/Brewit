import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function MyPage() {

    const [mypageOption, setMypageOption] = useState(["주문내역", "장바구니", "포인트", "약관", "계정정보", "설정"])
    const [clicked, setClicked] = useState('')
    const navigation = useNavigate();
    const pagePaths = [
        "/orders",       // 주문내역
        "/cart",         // 장바구니
        "/points",       // 포인트
        "/terms",        // 약관
        "/account",      // 계정정보
        "/settings"      // 설정
    ];

    const hadleClick = (index) => {
        navigation(pagePaths[index]);
    }
    return (
        <div className={`flex flex-col w-full h-fit items-center gap-16 text-c-b pl-4 pr-4`}>
            <div className="flex flex-row items-center min-w-[360px] h-fit w-[40vw] text-2xl font-medium justify-between mt-[57px]">
                <p>{ }님 <br /> 환영합니다!</p>
                <div className="w-5 h-5">
                    <img src="/images/icon/notifications.svg" alt="icon" />
                </div>
            </div>
            <div className="flex flex-row items-center min-w-[360px] h-fit w-[40vw] justify-between gap-2 flex-wrap">
                {mypageOption.map((item, index) => (
                    <div className={`flex flex-col justify-center items-center w-[30%] min-h-[84px] bg-white rounded-lg border-[1px] border-[rgba(19,19,19,0.1)] shadow-[0px_4px_24px_rgba(19,19,19,0.3)] cursor-pointer`} key={index} onClick={() => { hadleClick(index) }}>
                        <div className="w-8 h-8">
                            <img src={`images/icon/${index}.svg`} alt="icon" />
                        </div>
                        <div>
                            <p className="font-semibold text-sm ">{item}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="mt-[242px] font-medium text-xs text-c-b6 cursor-pointer">로그아웃</p>
        </div>

    )
}

export default MyPage