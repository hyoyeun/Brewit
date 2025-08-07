import { useNavigate } from "react-router-dom"

function OrderCompletePage() {
    const navigate = useNavigate();
    return (
        <div className={`flex flex-col w-full h-fit items-center gap-4 text-c-b`}>
            <div className="flex flex-col items-center min-w-[360px] h-fit w-[40vw] text-2xl font-medium justify-center mt-[340px]">

                <p> 결제가 완료되었습니다.</p>

                <p className="mt-[120px] font-medium text-xs text-c-b6 cursor-pointer" onClick={() => navigate('/home')} >주문 추가하기</p>

                <button className="mt-2 min-w-[328px] w-full min-h-[46px] bg-l-y text-[15px] font-bold text-c-b" onClick={() => navigate('/mypage')} >주문내역보기</button>
            </div>

        </div>

    )
}

export default OrderCompletePage