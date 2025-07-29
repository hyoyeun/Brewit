function ProductDetailPage() {
    return (
        <div className="flex flex-col w-full h-fit bg-slate-100 justify-center items-center gap-4">
            <div className="flex flex-row min-w-[360px] h-fit justify-center items-center ">
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
        </div>
    )
}

export default ProductDetailPage