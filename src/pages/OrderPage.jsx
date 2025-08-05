import { useState } from "react"
import { mockCartItems } from "../data/mockCart"


function OrderPage() {
    const [isOpen, setIsOpen] = useState(null);
    const [oederOption, setOrderOption] = useState(["식사방법", "토스 포인트", "결제수단"]);
    const [count, setCount] = useState(false)

    return (
        <div className={`flex flex-col w-full h-fit items-center gap-4 mt-10 text-c-b `}>
            <div className="min-w-[360px] h-fit w-[40vw] text-2xl font-medium">
                <p>결제하기</p>
            </div>
            {/* 주문 아이템 */}
            <div className="min-w-[360px] h-fit w-[40vw] bg-l-g p-3 pb-0">
                <p className="font-semibold text-base mt-4">주문 내역</p>
                {mockCartItems.map((item, index) => (
                    <div className="flex flex-row p-3 pl-0  justify-between items-center border-t-[1px] border-t-[rgba(19,19,19,0.2)]" key={index}>
                        <div className="flex flex-row justify-center items-center gap-4">
                            <div className="w-[76px] h-[76px] rounded-full bg-bg-1">
                                <img src={item.image} alt="image" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[13px] font-semibold">{item.name_kr}</p>
                                <p className="text-c-b6 text-xs font-normal">{item.name_en}</p>
                            </div>
                        </div>
                        <p className="font-bold text-sm">{item.price.toLocaleString()}원</p>
                    </div>
                ))
                }
            </div>

            {oederOption.map((item, index) => (
                <div className="min-w-[360px] h-fit w-[40vw]" key={index}>
                    <div className="flex flex-col pt-6 pb-6 pl-4 pr-4 border-b-[1px] border-b-[rgba(19,19,19,0.2) justify-between items-center">
                        <div className="flex flex-row justify-between min-w-[360px] h-fit w-[40vw]">
                            <h6 className="min-w-[90px] text-base font-semibold">{item}</h6>
                            <p className="font-medium text-xs text-c-b6">매장에서 먹어요</p>
                            <div className="w-5 h-5 flex items-center justify-center cursor-pointer" onClick={() => { setIsOpen(item); setCount(prev => !prev); }}>
                                {(isOpen === item && count === true) ?
                                    < img src="/images/icon/keyboard_arrow_down(1).svg" alt="icon" />
                                    :
                                    < img src="/images/icon/keyboard_arrow_down(2).svg" alt="icon" />
                                }
                            </div>
                        </div>

                        <div className="flex">
                            {(isOpen === '식사방법' && count === true) ?
                                <div className="flex flex-row min-w-[360px] h-fit w-[40vw] gap-2 pt-6 pb-6 ">
                                    <div className="flex flex-col gap-2 min-w-[49%] min-h-[91px] rounded border-[1px] border-[rgba(19,19,19,1)] justify-center items-center cursor-pointer">
                                        <div className="w-8 h-8">
                                            <img src="/images/icon/table_bar.svg" alt="icon" />
                                        </div>
                                        <p className="font-semibold text-sm text-c-b">매장에서 먹어요</p>
                                    </div>

                                    <div className="flex flex-col min-w-[49%] min-h-[91px] rounded border-[1px] border-[rgba(19,19,19,1)] justify-center items-center gap-2 cursor-pointer">
                                        <div className="w-8 h-8">
                                            <img src="/images/icon/takeout_dining.svg" alt="icon" />
                                        </div>
                                        <p className="font-semibold text-sm text-c-b">포장해가요</p>
                                    </div>
                                </div>
                                :
                                null}

                            {(isOpen === '토스 포인트' && count === true) ?
                                <div className="flex flex-col min-w-[360px] h-fit w-[40vw] gap-2 pt-6 pb-6">
                                    <div className="flex flex-row justify-between items-center w-full">
                                        {/* 왼쪽: 포인트 정보 */}
                                        <div className="flex flex-row justify-center items-center gap-4">
                                            <div className="w-[42px] h-[42px] rounded-full bg-bg-1">
                                                <img src="" alt="image" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-[13px] font-semibold">매장포인트</p>
                                                <p className="text-[13px] font-semibold">3,000p</p>
                                            </div>
                                        </div>

                                        {/* 오른쪽: 아이콘 */}
                                        <img className="w-6 h-6" src="" alt="dfs" />
                                    </div>
                                    <div className="flex flex-row justify-between items-center w-full">
                                        {/* 왼쪽: 포인트 정보 */}
                                        <div className="flex flex-row justify-center items-center gap-4">
                                            <div className="w-[42px] h-[42px] rounded-full bg-bg-1">
                                                <img src="" alt="image" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-[13px] font-semibold">토스포인트</p>
                                                <p className="text-[13px] font-semibold">1,000p</p>
                                            </div>
                                        </div>

                                        {/* 오른쪽: 아이콘 */}
                                        <img className="w-6 h-6" src="" alt="dfs" />
                                    </div>
                                </div>
                                :
                                null}
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default OrderPage