import { useState } from "react"
import { mockOrdersItems } from "../data/mockOrders"

function OrderHistoryPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDateOpen, setDateOpen] = useState(false)
    const [option, setOption] = useState('모두 보기')
    // 날짜
    const today = new Date();
    // 3년 전 날짜 계산
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(today.getFullYear() - 3);

    // YYYY-MM-DD 형식으로 변환
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const minDate = formatDate(threeYearsAgo);
    const todayDate = formatDate(today);

    const dateRange = (minDate, MaxDate) => {

    }

    
    return (
        <div className={`flex flex-col w-full h-fit items-center gap-3 text-c-b pl-4 pr-4`}>
            <div className="flex flex-row items-center min-w-[360px] h-fit w-[40vw] text-2xl font-medium justify-between mt-[57px]">
                <p>{ }님 <br /> 환영합니다!</p>
                <div className="w-5 h-5">
                    <img src="/images/icon/notifications.svg" alt="icon" />
                </div>
            </div>
            <div className="flex flex-row items-center min-w-[360px] h-fit w-[40vw] text-base font-semibold justify-between mt-[44px]">
                <p>주문내역</p>
            </div>
            <div className="border-t-[1px] border-t-[rgba(19,19,19,0.8)]">
                <div className="mt-[11px] relative flex flex-row items-center min-w-[360px] h-fit w-[40vw] justify-between border-[1px] border-[rgba(19,19,19,0.4)] p-[10px] rounded text-base font-normal cursor-pointer" onClick={() => { setIsOpen(true) }}>
                    <p>{option}</p>
                    <div className="flex flex-row justify-center items-center">
                        <p>ㅣ</p>
                        <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
                            < img src="/images/icon/keyboard_arrow_down(1).svg" alt="icon" />
                        </div>
                    </div>
                </div>
                <div className={`absolute flex-col items-start min-w-[360px] h-fit w-[40vw] border-[1px] border-[rgba(19,19,19,0.4)] rounded text-base font-normal cursor-pointer z-10 bg-white ${isOpen === true ? null : "hidden"}`}>
                    <p className="hover:bg-l-g w-full p-[10px]" onClick={() => { setIsOpen(false), setOption('확인중') }}>확인중</p>
                    <p className="hover:bg-l-g w-full p-[10px]" onClick={() => { setIsOpen(false), setOption('픽업 완료') }}>픽업 완료</p>
                    <p className="hover:bg-l-g w-full p-[10px]" onClick={() => { setIsOpen(false), setOption('주문 취소됨') }}>주문 취소됨</p>
                    <p className="hover:bg-l-g w-full p-[10px]" onClick={() => { setIsOpen(false), setOption('모두 보기') }}>모두 보기</p>
                </div>
            </div>
            <div className="border-t-[1px] border-t-[rgba(19,19,19,0.8)]">
                <div className="mt-[11px] mb-[11px] flex flex-row items-center min-w-[360px] h-fit w-[40vw] justify-between cursor-pointe font-normal text-base">
                    <div className="relative flex flex-row justify-between w-full">
                        <div className="flex flex-row justify-between items-center w-[35%]">
                            <input
                                type="date"
                                className="border-none focus:outline-none relative p-0 w-fit"
                                onClick={(e) => e.target.showPicker?.()}
                                min={minDate}
                                max={todayDate}

                            />
                            <p>~</p>
                            <input
                                type="date"
                                className="border-none focus:outline-none relative p-0 w-fit"
                                onClick={(e) => e.target.showPicker?.()}
                                min={minDate}
                                max={todayDate}
                            />
                        </div>
                        <button className="bg-white border-[1px] border-[rgba(19,19,19,0.6)] rounded-full" onClick={() => { }}>기간설정</button>
                    </div>

                </div>

            </div>

            {mockOrdersItems.map((item, index) => {
                if (option === "모두 보기" || item.orderStatus === option)
                    return (
                        <div className="flex flex-row items-center min-w-[360px] h-fit w-[40vw] text-base font-semibold justify-between bg-white">
                            <div className="relative flex flex-row min-w-[76px] min-h-[76px] rounded-full bg-l-g" key={index}>
                                <img src={item.image} alt="image" />
                                <div className="absolute flex justify-center items-center w-5 h-5 rounded-full bg-l-y right-0 top-3 font-semibold text-[11px]">
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-[30%]">
                                <h6 className="font-semibold text-[13px ]">{item.name_kr} 외</h6>
                                <p className="text-xs font-normal text-c-b6">{item.orderDate}</p>
                            </div>
                            <div className="flex flex-row text-sm font-bold">
                                <p>{item.price.toLocaleString()}원</p>
                            </div>
                        </div>
                    )
            })}

        </div>
    )
}

export default OrderHistoryPage