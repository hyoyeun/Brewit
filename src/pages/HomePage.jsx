import { useState } from "react"
import { mockMenuItems } from "../data/mockMenu";

function HomePage() {
    // 현재 바인딩을 통해 처리했으나 추후 db데이터 활용해야함.  
    const [category, setCategory] = useState(["전체", "커피", "논커피", "젤라또", "베이커리"]);
    const [clickedCategory, setClickedCategory] = useState('전체');
    return (
        <div className="flex flex-col items-center w-full h-fit">
            {/* 메뉴 카테고리 선택 */}
            <div className="w-full max-w-[360px] overflow-x-auto">
                <div className="flex flex-row items-center ">
                    {category.map((item, index) => (
                        <div
                            key={index}
                            className={`flex justify-center items-center min-w-[82px] min-h-[34px] cursor-pointer ${clickedCategory === item ? "bg-l-y" : "bg-l-g"}`}
                            style={{ marginLeft: index === 0 ? "0px" : "-1px" }}
                            onClick={() => setClickedCategory(item)}
                        >
                            <p className="text-xs text-c-b font-semibold">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 홈 메뉴 영역 */}
            <div className="flex flex-row flex-wrap justify-start items-start mt-[17px] w-[360px] h-fit text-c-b pb-[250px]">
                <div className="flex flex-row flex-wrap justify-start gap-4 items-start mt-[17px] w-full max-w-[360px] text-c-b">
                    {mockMenuItems.map((item) => {
                        if (clickedCategory === "전체" || item.type === clickedCategory) {
                            return (
                                <div key={item.id} className="flex flex-col min-h-[147px] min-w-[106px]">
                                    <div className="min-h-[106px] max-w-[106px] bg-ba-1 rounded">
                                        <img src={item.image} alt={item.name_kr} />
                                    </div>
                                    <div className="p-1">
                                        <h6 className="font-bold text-sm">{item.name_kr}</h6>
                                        <p className="font-normal text-[13px]">
                                            {item.price.toLocaleString()}원
                                        </p>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>

            {/* 홈 하단 장바구니 영역 */}
            <div className="fixed flex-row min-w-[360px] min-h-[227px] justify-center items-center bottom-0 bg-slate-50 p-[15px]  text-c-b">
                <div className="flex flex-row h-fit w-full justify-between">
                    <div className="flex flex-row w-fit gap-1 justify-center items-center">
                        <h6 className="font-semibold text-[13px]">장바구니</h6>
                        <h6 className="font-bold text-[15px] text-l-y">0</h6>
                    </div>
                    <div className="flex flex-row w-fit items-center">
                        <div className="w-[14px] h-[14px] gap-1">
                            <img src="/images/icon/replya.png " alt="icon1" />
                        </div>
                        <h6 className="text-c-b7 font-normal text-base">초기화</h6>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>

        </div>
    );
}

export default HomePage