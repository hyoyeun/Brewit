import { useState } from "react"
import { mockCartItems } from "../data/mockCart"
import CartPage from './CartPage';
import { useNavigate } from "react-router-dom";


function OrderPage() {
    const [orderOptions, setOrderOptions] = useState([
        { name: "식사방법", isOpen: false, option: "" },
        { name: "토스 포인트", isOpen: false, option: "" },
        { name: "결제수단", isOpen: false, option: "" }
    ]);

    const toggleOption = (name) => {
        setOrderOptions(prev =>
            prev.map(option =>
                option.name === name ? { ...option, isOpen: !option.isOpen } : option
            )
        );
    };


    const selectOpton = (name, value) => {
        setOrderOptions(prev =>
            prev.map(option =>
                option.name === name
                    ? { ...option, option: value }
                    : option
            )
        );
    };

    const selectPayment = (name, value) => {
        setOrderOptions(prev =>
            prev.map(item =>
                item.name === name
                    ? { ...item, option: value } // ← 여기를 수정
                    : item
            )
        );
    };

    const navigation = useNavigate();

    const selectPointOption = orderOptions.find(i => i.name === "토스 포인트");
    return (
        <div className={`flex flex-col w-full h-fit items-center gap-4 mt-10 text-c-b mb-56`}>
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

            {orderOptions.map((item, index) => (
                <div className="min-w-[360px] h-fit w-[40vw]" key={index}>
                    <div className="flex flex-col pt-6 pb-6 pl-4 pr-4 border-b-[1px] border-b-[rgba(19,19,19,0.2) justify-between items-center">
                        <div className="flex flex-row justify-between min-w-[360px] h-fit w-[40vw]">
                            <h6 className="min-w-[90px] text-base font-semibold">{item.name}</h6>
                            <p className="font-medium text-xs text-c-b6">{item.option}</p>
                            <div className="w-5 h-5 flex items-center justify-center cursor-pointer" onClick={() => toggleOption(item.name)}>
                                {item.isOpen === false ?
                                    < img src="/images/icon/keyboard_arrow_down(1).svg" alt="icon" />
                                    :
                                    < img src="/images/icon/keyboard_arrow_down(2).svg" alt="icon" />
                                }
                            </div>
                        </div>

                        <div className="flex">
                            {(item.name === '식사방법' && item.isOpen === true) ?
                                <div className="flex flex-row min-w-[360px] h-fit w-[40vw] gap-2 pt-6 pb-6 ">
                                    <div className={`flex flex-col gap-2 min-w-[49%] min-h-[91px] rounded border-[1px] border-[rgba(19,19,19,1)] justify-center items-center cursor-pointer ${item.option === "매장에서 먹어요" ? "shadow-[0px_4px_24px_rgba(19,19,19,0.3)]" : null} `} onClick={() => selectOpton(item.name, "매장에서 먹어요")}>
                                        <div className="w-8 h-8">
                                            <img src="/images/icon/table_bar.svg" alt="icon" />
                                        </div>
                                        <p className="font-semibold text-sm text-c-b">매장에서 먹어요</p>
                                    </div>

                                    <div className={`flex flex-col gap-2 min-w-[49%] min-h-[91px] rounded border-[1px] border-[rgba(19,19,19,1)] justify-center items-center cursor-pointer ${item.option === "포장해가요" ? "shadow-[0px_4px_24px_rgba(19,19,19,0.3)]" : null} `} onClick={() => selectOpton(item.name, "포장해가요")}>
                                        <div className="w-8 h-8">
                                            <img src="/images/icon/takeout_dining.svg" alt="icon" />
                                        </div>
                                        <p className="font-semibold text-sm text-c-b">포장해가요</p>
                                    </div>
                                </div>
                                :
                                null}

                            {(item.name === '토스 포인트' && item.isOpen === true) ?
                                <div className="flex flex-col min-w-[360px] h-fit w-[40vw] gap-2 pt-6 pb-6">
                                    <div className="flex flex-row justify-between items-center w-full">
                                        {/* 왼쪽: 포인트 정보 */}
                                        <div className="flex flex-row justify-center items-center gap-4">
                                            <div className="w-[42px] h-[42px] rounded-full bg-bg-1">
                                                <img src="/images/icon/store.svg" alt="image" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-[12px] font-semibold text-c-b6">매장포인트</p>
                                                <p className="text-[13px] font-semibold">3,000p</p>
                                            </div>
                                        </div>

                                        {/* 오른쪽: 아이콘 */}
                                        {(item.option === "매장포인트") ?
                                            <img className="w-6 h-6" src="/images/icon/checked.svg" alt="icon" onClick={() => selectOpton(item.name, "")} />
                                            :
                                            <img className="w-6 h-6" src="/images/icon/notChecked.svg" alt="icon" onClick={() => selectOpton(item.name, "매장포인트")} />
                                        }

                                    </div>
                                    <div className="flex flex-row justify-between items-center w-full">
                                        {/* 왼쪽: 포인트 정보 */}
                                        <div className="flex flex-row justify-center items-center gap-4">
                                            <div className="w-[42px] h-[42px] rounded-full bg-bg-1">
                                                <img src="/images/icon/toss.svg" alt="image" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-[12px] font-semibold text-c-b6">토스포인트</p>
                                                <p className="text-[13px] font-semibold">1,000p</p>
                                            </div>
                                        </div>

                                        {/* 오른쪽: 아이콘 */}
                                        {(item.option === "토스포인트") ?
                                            <img className="w-6 h-6" src="/images/icon/checked.svg" alt="icon" onClick={() => selectOpton(item.name, "")} />
                                            :
                                            <img className="w-6 h-6" src="/images/icon/notChecked.svg" alt="icon" onClick={() => selectOpton(item.name, "토스포인트")} />
                                        }

                                    </div>
                                </div>
                                :
                                null}
                            {(item.name === '결제수단' && item.isOpen === true) ?
                                <div className="flex flex-col min-w-[360px] h-fit w-[40vw] gap-2 pt-6 pb-6 ">
                                    <div className="flex flex-row min-w-[360px] h-fit w-[40vw] gap-2">
                                        <div className={`flex flex-col gap-2 min-w-[49%] min-h-[91px] rounded border-[1px] border-[rgba(19,19,19,1)] justify-center items-center cursor-pointer bg-cb-b ${item.option === "카드결제" ? "shadow-[0px_4px_24px_rgba(19,19,19,0.3)]" : null}`} onClick={() => selectPayment(item.name, "카드결제")}>
                                            <div className="w-8 h-8">
                                                <img src="/images/icon/credit_card.svg" alt="icon" />
                                            </div>
                                            <p className="font-semibold text-sm text-c-b">카드결제</p>
                                        </div>

                                        <div className={`flex flex-col gap-2 min-w-[49%] min-h-[91px] rounded border-[1px] border-[rgba(19,19,19,1)] justify-center items-center cursor-pointer bg-cb-b ${item.option === "간편결제" ? "shadow-[0px_4px_24px_rgba(19,19,19,0.3)]" : null}`} onClick={() => selectPayment(item.name, "간편결제")}>
                                            <div className="w-8 h-8">
                                                <img src="/images/icon/qr_code_scanner.svg" alt="icon" />
                                            </div>
                                            <p className="font-semibold text-sm text-c-b">간편결제</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row min-w-[360px] h-fit w-[40vw] gap-2">
                                        <div className={`flex flex-col gap-2 min-w-[49%] min-h-[91px] rounded border-[1px] border-[rgba(19,19,19,1)] justify-center items-center cursor-pointer bg-cb-b ${item.option === "현금결제" ? "shadow-[0px_4px_24px_rgba(19,19,19,0.3)]" : null}`} onClick={() => selectPayment(item.name, "현금결제")}>
                                            <div className="w-8 h-8">
                                                <img src="/images/icon/money_bag.svg" alt="icon" />
                                            </div>
                                            <p className="font-semibold text-sm text-c-b">현금결제</p>
                                        </div>

                                        <div className={`flex flex-col gap-2 min-w-[49%] min-h-[91px] rounded border-[1px] border-[rgba(19,19,19,1)] justify-center items-center cursor-pointer bg-cb-b ${item.option === "계좌이체" ? "shadow-[0px_4px_24px_rgba(19,19,19,0.3)]" : null}`} onClick={() => selectPayment(item.name, "계좌이체")}>
                                            <div className="w-8 h-8">
                                                <img src="/images/icon/wallet.svg" alt="icon" />
                                            </div>
                                            <p className="font-semibold text-sm text-c-b">계좌이체</p>
                                        </div>
                                    </div>

                                </div>
                                :
                                null}

                        </div>
                    </div>

                </div>
            ))
            }
            <div className="fixed bottom-0 flex flex-col p-4 min-w-[360px] w-full min-h-[130px] bg-white border-t-[1px] border-t-[rgba(19,19,19,0.2)] items-center">
                <div className="flex flex-col gap-4 min-w-[360px] w-[40vw] ">
                    <div className="flex flex-row">
                        <div className="text-sm font-semibold text-c-b6">
                            <p>포인트 적립</p>
                        </div>
                        <div className="ml-1 text-btn_f_b text-[13px] font-semibold">
                            <p>10%</p>
                        </div>
                        <div className="ml-auto text-btn_f_b text-[13px] font-semibold">
                            <p>{((mockCartItems.reduce((acc, item) => acc + item.price * item.count, 0)) * 0.1).toLocaleString()}P</p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="text-sm font-semibold text-c-b6">
                            <p>할인된 금액</p>
                        </div>

                        <div className="ml-auto text-r text-[13px] font-semibold">
                            <p>
                                {{
                                    "토스포인트": "1,000원",
                                    "매장포인트": "3,000원"
                                }[selectPointOption.option] ?? null}
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="w-full min-h-[46px] bg-l-y text-[15px] font-bold text-c-b" onClick={() => navigation('/order/complete')}>{(mockCartItems.reduce((acc, item) => acc + item.price * item.count, 0)
                            - (selectPointOption.option === "토스포인트" ? 1000 :
                                selectPointOption.option === "매장포인트" ? 3000 : 0)
                        ).toLocaleString()}원 결제하기</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OrderPage