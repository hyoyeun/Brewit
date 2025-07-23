import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-fit ">
      {/* 헤더 */}
      <div className="flex flex-col justify-center items-center w-full h-[48px] ">
        <div className="flex flex-col w-96 h-full pl-[16px] pb-[8px] pt-[20px]">
          <Link to={"/"}>
            <div className="flex justify-center items-start w-[15%] h-full">
              <img alt="logo" src="/images/logo.JPG" className="w-full h-full" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header