import { useState } from "react"

function HomePage() {
    // 현재 바인딩을 통해 처리했으나 추후 db데이터 활용해야함.  
    const [category, setCategory] = useState(["전체", "커피", "논커피", "젤라또", "베이커리"]);
    const [clickedCategory, setClickedCategory] = useState('전체');
    return (
        <div className="flex flex-col items-center w-full h-fit">
            <div className="w-full max-w-[360px] overflow-x-auto">
                <div className="flex flex-row items-center ">
                    {category.map((item, index) => (
                        <div
                            key={index}
                            className={`flex justify-center items-center min-w-[82px] min-h-[34px] ${clickedCategory === item ? "bg-l-y" : "bg-l-g"}`}
                            style={{ marginLeft: index === 0 ? "0px" : "-1px" }}
                            onClick={() => setClickedCategory(item)}
                        >
                            <p className="text-xs text-c-b font-semibold">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage