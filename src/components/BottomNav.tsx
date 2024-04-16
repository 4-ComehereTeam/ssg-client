import Image from "next/image"
import Link from "next/link"

export default function BottomNav() {
  return (
    <nav className="sticky bottom-0 border-t border-slate-200 flex justify-between w-full bg-white z-10 h-[50px]">
      <div className="text-center flex items-center justify-center flex-grow">
        <Link
          href="/category"
          className="flex flex-col justify-center items-center"
        >
          <Image
            width="28"
            height="28"
            src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
            alt="categoryIcon"
          />
          <span className="text-[#777777] text-[11px] font-[Pretendard-Light]">
            카테고리
          </span>
        </Link>
      </div>
      <div className="text-center flex items-center justify-center w-10 flex-grow">
        <Link
          href="/not-found"
          className="flex flex-col justify-center items-center"
        >
          <Image
            width="28"
            height="28"
            src="https://img.icons8.com/windows/32/gift.png"
            alt="giftIcon"
          />
          <span className="text-[#777777] text-[11px] font-[Pretendard-Light]">
            선물하기
          </span>
        </Link>
      </div>
      <div className="text-center flex items-center justify-center w-10 flex-grow">
        <Link
          href={"/home"}
          className="flex flex-col justify-center items-center"
        >
          <div className="w-[28px] h-[28px] mx-auto">
            <svg viewBox="0 0 24 24" focusable="false" name="HomeIcon">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.88L3.60004 9.6V20.4H20.4V9.6L12 2.88ZM9.60004 19.2V14.4H14.4V19.2H9.60004ZM15.6001 19.2H19.2001V10.2L12.0001 4.44L4.80007 10.2V19.2H8.40007V13.2H15.6001V19.2Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <span className="text-[#777777] text-[11px] font-[Pretendard-Light]">
            홈
          </span>
        </Link>
      </div>
      <div className="text-center flex items-center justify-center w-10 flex-grow">
        <Link
          href={"/myssg/main"}
          className="flex flex-col justify-center items-center"
        >
          <div className="w-[28px] h-[28px] mx-auto">
            <svg viewBox="0 0 24 24" focusable="false" name="MyIcon">
              <path
                d="M20.4 19.2H19.2C19.2 15.24 15.96 12 12 12C8.04004 12 4.80004 15.24 4.80004 19.2H3.60004C3.60004 14.52 7.32004 10.8 12 10.8C16.68 10.8 20.4 14.52 20.4 19.2Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 6.60001C9 8.28001 10.32 9.60001 12 9.60001C13.68 9.60001 15 8.28001 15 6.60001C15 4.92001 13.68 3.60001 12 3.60001C10.32 3.60001 9 4.92001 9 6.60001ZM10.2 6.60001C10.2 5.64001 11.04 4.80001 12 4.80001C12.96 4.80001 13.8 5.64001 13.8 6.60001C13.8 7.56001 12.96 8.40001 12 8.40001C11.04 8.40001 10.2 7.56001 10.2 6.60001Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <span className="text-[#777777] text-[11px] font-[Pretendard-Light]">
            MY
          </span>
        </Link>
      </div>
      <div className="text-center flex items-center justify-center w-10 flex-grow">
        <Link
          href="/not-found"
          className="flex flex-col justify-center items-center"
        >
          <div className="w-[28px] h-[28px] mx-auto">
            <svg viewBox="0 0 24 24" focusable="false" name="RecentHistoryIcon">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.20001 12C7.20001 14.64 9.36001 16.8 12 16.8C14.64 16.8 16.8 14.64 16.8 12C16.8 9.36 14.64 7.2 12 7.2C9.36001 7.2 7.20001 9.36 7.20001 12ZM8.40004 12C8.40004 9.95999 9.96004 8.39999 12 8.39999C14.04 8.39999 15.6 9.95999 15.6 12C15.6 14.04 14.04 15.6 12 15.6C9.96004 15.6 8.40004 14.04 8.40004 12Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.32002 12.36C1.44002 12.6 5.64002 19.2 12 19.2C18.36 19.2 22.56 12.6 22.68 12.36L22.92 12L22.68 11.64C22.56 11.4 18.36 4.8 12 4.8C5.64002 4.8 1.44002 11.4 1.32002 11.64L1.08002 12L1.32002 12.36ZM12 18C7.08003 18 3.36003 13.32 2.52003 12C3.36003 10.68 7.08003 6 12 6C16.92 6 20.64 10.68 21.48 12C20.64 13.32 16.92 18 12 18Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <span className="text-[#777777] text-[11px] font-[Pretendard-Light]">
            최근본
          </span>
        </Link>
      </div>
    </nav>
  )
}
