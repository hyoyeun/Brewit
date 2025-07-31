import { useState } from "react"
import { coffeeBeans } from "../data/coffeeBeans";

function ProductDetailPage() {

    const [clickIsTemperatura, setClickedIsTemperatura] = useState('HOT');
    const [clickedCoffeeBeans, setCoffeeBeanse] = useState("SIGNATURE");
    return (
        <div className="flex flex-col w-full h-fit justify-center items-center gap-4">
            {/* 이미지 & 메뉴 설명 */}
            <div className="flex flex-row min-w-[360px] h-fit justify-center items-center flex-wrap">
                <div className="flex mt-[66px] min-w-[360px] min-h-[278px] justify-center items-center">
                    <img src="/images/바닐라라떼.png" alt="item.img" className="w-full h-full" />
                </div>
                <div className="flex flex-col pl-[16px] gap-1 min-w-[360px] h-fit justify-center items-start text-c-b">
                    <h6 className="text-[22px] font-medium">바닐라라떼</h6>
                    <p className="font-medium text-[13px] text-c-b6">Vanilla latte</p>
                    <p className="font-medium text-[13px] text-c-b6">바닐라 시럽이 들어간 달콤한 라떼 <br /> 익숙한 달콤함이 기분을 살려줘요</p>
                    <p className="text-2xl font-bold text-t-l-g mt-3">5,500원</p>
                </div>
            </div>
            {/* 아이스 or 핫 */}
            <div className="flex flex-row min-w-[328px] w-[40vw] min-h-[45px] bg-l-g rounded-[68px] justify-center items-center">
                <button onClick={() => setClickedIsTemperatura('HOT')} className={`appearance-none box-border p-0 overflow-hidden flex flex-row min-w-[158px] min-h-[34px] w-[48%] rounded-[68px] justify-center items-center leading-[34px] text-btn_f_r font-semibold text-base ${clickIsTemperatura === "HOT" ? "bg-white" : "bg-l-g"} `}>HOT</button>
                <button onClick={() => setClickedIsTemperatura('ICED')} className={`appearance-none box-border p-0 overflow-hidden flex flex-row min-w-[158px] min-h-[34px] w-[48%] rounded-[68px] justify-center items-center leading-[34px] text-btn_f_b font-semibold text-base  ${clickIsTemperatura === "ICED" ? "bg-white" : "bg-l-g"}`}>ICED</button>
            </div>
            {/* 원두선택 */}
            <div className="flex flex-col min-w-[328px] w-[40vw] h-[500px]  text-c-b gap-[7px]">
                <h6 className="font-semibold text-[15px]">원두</h6>
                <div className="flex flex-row w-full h-fit justify-around items-center" >
                    {coffeeBeans.map((item, index) => (
                        <div onClick={() => setCoffeeBeanse(item.nameEn)}
                            key={index} className={`flex flex-col min-w-[106px] w-[33%] min-h-[59px] bg-cb-b rounded justify-center items-center ${clickedCoffeeBeans === item.nameEn ? "border border-solid rounded-[4px] shadow-[0_0_4px_#13131340] border-[#13131340]" : " "} `}>
                            <p className="font-semibold text-sm">{item.nameKo}</p>
                            <p className="font-normal text-[13px] text-c-b6">{item.nameEn}</p>
                        </div>
                    ))}
                </div>
                {coffeeBeans.map((item, index) => (
                    clickedCoffeeBeans === item.nameEn ? < div
                        key={index}
                        className="flex flex-col w-full h-fit justify-start items-start bg-white rounded border-[1px] border-c-b2 p-3" >
                        {
                            item.description.split("\n").map((line, index) => (
                                <p key={index} className="font-normal text-[13px] text-c-b6">{line}</p>
                            ))
                        }
                        < p className="font-bold text-[13px] text-c-b6" > {item.tastingNotes}</p>
                    </div> : null
                ))}
            </div >
        </div >
    )
}

export default ProductDetailPage