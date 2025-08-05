import { useState } from "react";
import { mockCartItems } from "../data/mockCart";

function CartPage() {
    const [category, setCategory] = useState(["전체", "커피", "논커피", "젤라또", "베이커리"]);
    const [clickedCategory, setClickedCategory] = useState('전체');
    const [allChecked, setAllChecked] = useState(false);
    const visibleItems = mockCartItems.filter(
        item => clickedCategory === "전체" || item.type === clickedCategory
    );

    return (
        <div className={`flex flex-col w-full h-fit items-center gap-4 mt-10 text-c-b`}>
            <div className="min-w-[360px] h-fit w-[40vw] text-[24px] font-medium">
                <p>장바구니</p>
            </div>
            {/* 메뉴 카테고리 선택 */}
            <div className="flex w-[40vw] min-w-[360px] overflow-x-auto">
                <div className="flex flex-row items-center w-[40vw] min-w-[360px]">
                    {category.map((item, index) => (
                        <div
                            key={index}
                            className={`flex justify-center items-center min-w-[82px] min-h-[34px] w-[25%] cursor-pointer ${clickedCategory === item ? "bg-l-y" : "bg-l-g"}`}
                            style={{ marginLeft: index === 0 ? "0px" : "-1px" }}
                            onClick={() => setClickedCategory(item)}
                        >
                            <p className="text-xs text-c-b font-semibold">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-row items-center justify-between min-w-[360px] h-fit w-[40vw] text-[16px] font-semibold ">
                <h6>주문메뉴</h6>
                <p className="text-[13px] font-normal text-c-b6">총 {visibleItems.length}개</p>
            </div>

            {/* 아이템 삭제 */}
            <div className="flex flex-row items-center justify-between min-w-[360px] h-fit w-[40vw] text-[16px] font-normal ">
                <div className="flex flex-row gap-1 text-xs items-center justify-start text-c-b8">
                    <div className=" flex items-center w-5 h-5 cursor-pointer " onClick={() => setAllChecked(prev => !prev)}>
                        {allChecked === false ? <img src="images/icon/check_box_outline_blank.svg" alt="fase" /> : <img src="images/icon/check_box.svg" alt="true" />
                        }
                    </div>
                    <p>전체선택</p>
                </div>
                <div className="flex flex-row gap-1 text-xs items-center justify-end text-c-b8 bf">
                    <p className="cursor-pointer">선택선택</p>
                    <p>ㅣ</p>
                    <p className="cursor-pointer">전체삭제</p>
                </div>
            </div>

            {/* 장바구니 아이템 정보 */}
            <div className="mb-[130px] overflow-hidden">
                {mockCartItems.map((item, index) => {
                    if (clickedCategory === "전체" || item.type === clickedCategory) {
                        return (
                            <div className="flex flex-row min-w-[360px] h-fit w-[40vw] gap-2 p-1 border-t-[1px] border-t-[rgba(19,19,19,0.2)]" key={index} >
                                <div className="flex items-center w-5 h-5 cursor-pointer max-w-[10%]" onClick={() => setAllChecked(prev => !prev)}>
                                    {allChecked === false ? <img src="images/icon/check_box_outline_blank.svg" alt="fase" /> : <img src="images/icon/check_box.svg" alt="true" />
                                    }
                                </div>
                                <div className="min-w-24 min-h-24 ">
                                    <img src={item.image} alt="cartitem" />
                                </div>
                                <div className="flex flex-col w-[80%]">
                                    <div className="flex min-w-5 min-h-5 cursor-pointer justify-end">
                                        <img src="/images/icon/close.svg" alt="closeIcon" />
                                    </div>
                                    <div className="text-xs font-normal text-c-b6">
                                        <h6 className="text-[13px] font-semibold text-c-b">{item.name_kr}</h6>
                                        <p>{item.name_en}</p>
                                        {(item.type === '커피' || item.type === '논커피') ?
                                            <div className="flex flex-row">
                                                <p>{item.temperatura}</p>
                                                <p>ㅣ</p>
                                                <p>기본 우유</p>
                                                <p>ㅣ</p>
                                                <p>휘핑추가</p>
                                                <p>ㅣ</p>
                                                <p>옵션변경</p>
                                            </div>
                                            : null}
                                    </div>
                                    <div className="flex flex-row justify-between items-center mt-1">
                                        <div className="flex flex-row gap-2 justify-center items-center">
                                            <div className="cursor-pointer">
                                                {item.count >= 1 ? <img src="/images/icon/remove.svg" alt="remove" /> : <iimg src="/images/icon/remove_1.svg" alt="remove" />}
                                            </div>
                                            <p className="text-xs font-semibold text-c-b">{item.count}</p>
                                            <div className="cursor-pointer">
                                                <img src="/images/icon/add.svg" alt="remove" />
                                            </div>
                                        </div>
                                        <p className="text-sm font-semibold">{item.price.toLocaleString()}원</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })
                }
            </div>
            <div className="fixed bottom-0 min-h-[130px] flex flex-col items-center min-w-[360px] bg-white h-fit w-[40vw] border-t-[1px] border-t-[rgba(19,19,19)] text-c-b gap-1 justify-center overflow-hidden">
                <div className="flex flex-row justify-between min-w-[360px] h-fit w-[40vw] text-[13px] font-normal items-center">
                    <p>전체 메뉴 총 {visibleItems.length}개</p>
                    <p className="text-xl font-bold">{visibleItems.reduce((acc, item) => acc + item.price * item.count, 0).toLocaleString()}원</p>
                </div>
                <div className="mt-4 pb-3 min-w-[360px] w-[40vw]" >
                    <button className="w-full min-h-[46px] bg-l-y text-[15px] font-bold text-c-b" onClick={() => { setIsOpen('addToCart') }}>주문하기</button>
                </div>
            </div>
        </div >
    )
}

export default CartPage