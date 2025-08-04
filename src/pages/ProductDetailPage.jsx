import { useState } from "react"
import { coffeeBeans } from "../data/coffeeBeans";
import { useParams } from "react-router-dom";
import { mockMenuItems } from "../data/mockMenu";

function ProductDetailPage() {

    const [clickIsTemperatura, setClickedIsTemperatura] = useState('HOT');
    const [clickedCoffeeBeans, setCoffeeBeanse] = useState("SIGNATURE");
    const { id } = useParams();

    const product = mockMenuItems.find(item => item.id === Number(id));
    if (!product) return <div>상품을 찾을 수 없습니다.</div>

    return (
        <div className="flex flex-col w-full h-fit justify-center items-center gap-4 ">
            {/* 이미지 & 메뉴 설명 */}
            <div className="flex flex-row min-w-[360px] h-fit justify-center items-center flex-wrap">

                <div className="flex mt-[66px] min-w-[360px] min-h-[278px] justify-center items-center">
                    <img src={product.image} alt="item.img" className="w-full h-full" />
                </div>
                <div className="flex flex-col pl-[16px] gap-1 min-w-[360px] h-fit justify-center items-start text-c-b">
                    <h6 className="pt-2 text-[22px] font-medium">{product.name_kr}</h6>
                    <p className="font-medium text-[13px] text-c-b6">{product.name_en}</p>
                    <p className="font-medium text-[13px] text-c-b6">{product.description}</p>
                    <p className="text-2xl font-bold text-t-l-g mt-3">{product.price.toLocaleString()}원</p>
                </div>
            </div>
            {/* 아이스 or 핫 */}
            {(product.type === '커피' || product.type === '논커피') ?
                <div className="pt-3 pb-3 border-t-[1px] border-t-[rgba(19,19,19,0.2)] ">
                    <div className="flex flex-row min-w-[328px] w-[40vw] min-h-[45px] bg-l-g rounded-[68px] justify-center items-center ">
                        <button onClick={() => setClickedIsTemperatura('HOT')} className={`appearance-none box-border p-0 overflow-hidden flex flex-row min-w-[158px] min-h-[34px] w-[48%] rounded-[68px] justify-center items-center leading-[34px]  font-semibold text-base ${clickIsTemperatura === "HOT" ? "bg-white text-btn_f_r" : "bg-l-g text-c-b3"} `}>HOT</button>
                        <button onClick={() => setClickedIsTemperatura('ICED')} className={`appearance-none box-border p-0 overflow-hidden flex flex-row min-w-[158px] min-h-[34px] w-[48%] rounded-[68px] justify-center items-center leading-[34px] font-semibold text-base  ${clickIsTemperatura === "ICED" ? "bg-white text-btn_f_b " : "bg-l-g text-c-b3"}`}>ICED</button>
                    </div>
                </div>
                : null}

            {/* 옵션변경 */}
            {/* 샷 */}
            {product.type === '커피' ?
                <div className="flex flex-row min-w-[328px] w-[40vw] justify-between pt-[18px] pb-[18px] items-center">
                    <div className="flex min-w-[50px] font-semibold text-[15px] text-c-b8 items-start ">
                        <p>샷</p>
                    </div>
                    <div className="flex w-fit font-normal text-[13px] text-c-b6">
                        <p>기본 2샷</p>
                    </div>
                    <div className="flex w-fit font-normal text-[13px] text-c-b6">
                        <p>{ }</p>
                    </div>
                    <div className="flex min-w-[14px] min-h-[14px] cursor-pointer">
                        <img src="/images/icon/keyboard_arrow_down.svg" alt="arrowIcon" />
                    </div>
                </div>
                : null}
            {/* 우유 */}
            {product.name_kr.includes('라떼') ?
                <div className="flex flex-row min-w-[328px] w-[40vw] justify-between pt-[18px] pb-[18px] items-center">
                    <div className="flex min-w-[50px] font-semibold text-[15px] text-c-b8 items-start ">
                        <p>우유</p>
                    </div>
                    <div className="flex w-fit font-normal text-[13px] text-c-b6">
                        <p>기본 우유</p>
                    </div>
                    <div className="flex w-fit font-normal text-[13px] text-c-b6">
                        <p>{ }</p>
                    </div>
                    <div className="flex min-w-[14px] min-h-[14px] cursor-pointer">
                        <img src="/images/icon/keyboard_arrow_down.svg" alt="arrowIcon" />
                    </div>
                </div>
                : null}
            {/* 시럽 */}
            {product.type === "커피" || product.type === "논커피" ?
                <div className="flex flex-row min-w-[328px] w-[40vw] justify-between pt-[18px] pb-[18px] items-center">
                    <div className="flex min-w-[50px] font-semibold text-[15px] text-c-b8 items-start ">
                        <p>시럽</p>
                    </div>
                    <div className="flex w-fit font-normal text-[13px] text-c-b6">
                        <p>기본</p>
                    </div>
                    <div className="flex w-fit font-normal text-[13px] text-c-b6">
                        <p>{ }</p>
                    </div>
                    <div className="flex min-w-[14px] min-h-[14px] cursor-pointer">
                        <img src="/images/icon/keyboard_arrow_down.svg" alt="arrowIcon" />
                    </div>
                </div>
                : null}
            {/* 휘핑크림 */}
            {product.hasWhipping === true ?
                <div className="flex flex-row min-w-[328px] w-[40vw] justify-between pt-[18px] pb-[18px] items-center">
                    <div className="flex min-w-[50px] font-semibold text-[15px] text-c-b8 items-start ">
                        <p>휘핑크림</p>
                    </div>
                    <div className="flex w-fit font-normal text-[13px] text-c-b6">
                        <p>기본</p>
                    </div>
                    <div className="flex w-fit font-normal text-[13px] text-c-b6">
                        <p>{ }</p>
                    </div>
                    <div className="flex min-w-[14px] min-h-[14px] cursor-pointer">
                        <img src="/images/icon/keyboard_arrow_down.svg" alt="arrowIcon" />
                    </div>
                </div>
                : null}


            {/* 원두선택 */}
            {product.type === '커피' ?
                <div className="flex flex-col min-w-[328px] w-[40vw] h-[500px] text-c-b gap-[7px] ">
                    <h6 className="font-semibold text-[15px]">원두</h6>
                    <div className="flex flex-row w-full h-fit justify-around items-center cursor-pointer" >
                        {coffeeBeans.map((item, index) => (
                            <div onClick={() => setCoffeeBeanse(item.nameEn)}
                                key={index} className={`flex flex-col min-w-[106px] w-[33%] min-h-[59px] bg-cb-b rounded justify-center items-center ${clickedCoffeeBeans === item.nameEn ? "border border-solid rounded-[4px] shadow-[0_0_4px_#13131340] border-[#13131340]" : " "} `}>
                                <p className="font-semibold text-sm">{item.nameKo}</p>
                                <p className="font-normal text-[13px] text-c-b6">{item.nameEn}</p>
                            </div>
                        ))}
                    </div>
                    {coffeeBeans.map((item, index) => (
                        clickedCoffeeBeans === item.nameEn ?
                            <div
                                key={index}
                                className="flex flex-col w-full h-fit justify-start items-start bg-white rounded border-[1px] border-c-b2 p-3" >
                                {
                                    item.description.split("\n").map((line, index) => (
                                        <p key={index} className="font-normal text-[13px] text-c-b6">{line}</p>
                                    ))
                                }
                                < p className="font-bold text-[13px] text-c-b6" > {item.tastingNotes}</p>
                            </div>
                            : null
                    ))}
                </div > : null}

            {/* 영양정보  */}
            {(product.tyep === "베이커리" || product.type === "젤라또") ?
                <div>
                    <div className="pt-2 flex flex-col min-w-[328px] w-[40vw] h-fit  text-c-b gap-[7px] border-t-[rgba(19,19,19,0.2)] border-t-[1px]">
                        <h6 className="font-semibold text-[15px]">영양정보</h6>
                        <p className="font-normal text-[15px] text-c-b7">1회 제공량 : {product.servingSize}g</p>
                        <p className="font-normal text-[15px] text-c-b7">괄호의 (%)는 1일 영양성분 기준치에 대한 비율입니다.</p>
                    </div>

                    <div className="mt-2 flex flex-col min-w-[328px] w-[40vw] h-fit  text-c-b rounded bg-cb-b ] text-[13px] font-normal text-c-b6">
                        <div className="flex flex-row border-b-[1px] border-b-[rgba(19,19,19,0.2)] items-center p-3">
                            <p className="min-w-[83px] pl-[16px]">열량</p>
                            <p className="text-c-b8">{product.nutrition.calories}kal</p>
                        </div>
                        <div className="flex flex-row border-b-[1px] border-b-[rgba(19,19,19,0.2)] items-center p-3">
                            <p className="min-w-[83px] pl-[16px]">당류</p>
                            <p className="text-c-b8">{product.nutrition.sugar}g</p>
                        </div>
                        <div className="flex flex-row border-b-[1px] border-b-[rgba(19,19,19,0.2)] items-center p-3">
                            <p className="min-w-[83px] pl-[16px]">탄수화물</p>
                            <p className="text-c-b8">{product.nutrition.carbohydrates}g</p>
                        </div>
                        <div className="flex flex-row border-b-[1px] border-b-[rgba(19,19,19,0.2)] items-center p-3">
                            <p className="min-w-[83px] pl-[16px]">단백질</p>
                            <p className="text-c-b8">{product.nutrition.protein}g</p>
                        </div>
                        <div className="flex flex-row border-b-[1px] border-b-[rgba(19,19,19,0.2)] items-center p-3">
                            <p className="min-w-[83px] pl-[16px]">지방</p>
                            <p className="text-c-b8">{product.nutrition.fat}g</p>
                        </div>
                        <div className="flex flex-row border-b-[1px] border-b-[rgba(19,19,19,0.2)] items-center p-3">
                            <p className="min-w-[83px] pl-[16px]">포화지방</p>
                            <p className="text-c-b8">{product.nutrition.saturatedFat}g</p>
                        </div>
                        <div className="flex flex-row items-center p-3">
                            <p className="min-w-[83px] pl-[16px]">나트륨</p>
                            <p className="text-c-b8">{product.nutrition.sodium}g</p>
                        </div>
                    </div>
                </div>
                : null}


        </div >
    )
}

export default ProductDetailPage