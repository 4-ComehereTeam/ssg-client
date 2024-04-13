"use client"

import Image from "next/image";
import { useState } from "react";
import QuickMenuItem from "./QuickMenuItem";
import QuickMenuItemLong from "./QuickMenuItemLong";

export default function QuickMenu(){
    const [scrollPercent, setScrollPercent] = useState(0);

    // const progress = (event:any) => {
    //     const { scrollLeft } = event.target;
    //     console.log("scrollLeft >>", scrollLeft);

    //     // 스크롤한 비율 계산
    //     const percentScrolled = Math.ceil((scrollLeft / 416) * 80);
    //     // scrollPercent 상태 변수 업데이트
    //     console.log(percentScrolled, "%");
    //     setScrollPercent(percentScrolled + 20);
    // }

    const progress = (event: any) => {
        const { scrollLeft } = event.target;
    
        const percentScrolled = Math.ceil((scrollLeft / (event.target.scrollWidth - screen.width)) * 90);
        setScrollPercent(percentScrolled);
    };

    console.log("scrollPercent >>", scrollPercent);

return(
    <>
        <div className="overflow-auto scrollbar-hide" onScroll={progress}>
            <div className="w-fit mx-4 my-10" >

                <div className="flex">
                    <QuickMenuItem name="쓱배송" path="https://m.ssg.com/page/dvstore_emart.ssg?mGnbYn=N" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202401/2024010509051067186177991717_407.png&amp;w=128&amp;h=128"/>
                    <QuickMenuItem name="새벽배송" path="https://m.ssg.com/page/dvstore_morning.ssg?mGnbYn=N" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202401/2024010509053385538505647850_845.png&amp;w=128&amp;h=128"/>
                    <QuickMenuItem name="쓱1DAY 배송" path="https://m.ssg.com/page/dvstore_oneday.ssg?mGnbYn=N" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202401/2024010509125498828183756818_909.png&amp;w=128&amp;h=128"/>
                    <QuickMenuItem name="트레이더스 쓱배송" path="https://m.ssg.com/page/dvstore_traders.ssg?mGnbYn=N" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202401/2024010509144825099566803066_188.png&amp;w=128&amp;h=128"/>
                    <QuickMenuItem name="유니버스 클럽" path="https://m.ssg.com/membership/gate.ssg" src="https://sui.ssgcdn.com/cmpt/banner/202401/2024010509151151913264546326_754.webp"/>
                    <QuickMenuItem name="SSG 상품권" path="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000007897" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202401/2024010509161389155903418590_165.png&amp;w=128&amp;h=128"/>
                    <QuickMenuItem name="이벤트" path="http://m.ssg.com/event/eventMain.ssg" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202401/2024010509180257727350217735_496.png&amp;w=128&amp;h=128"/>
                    <QuickMenuItem name="특가/세일" path="https://m.ssg.com/page/SpecialPrice.ssg" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202401/2024010509182223765868711686_213.png&amp;w=128&amp;h=128"/>
                    <QuickMenuItem name="쓱라이브" path="https://m.ssg.com/service/ssgtv/main.ssg?dispVodcBrocId=9999" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202401/2024010509185927813904386390_967.png&amp;w=128&amp;h=128"/>
                    <QuickMenuItem name="신선직송" path="https://m.ssg.com/page/farmersmarket.ssg" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202402/2024022117311895465343844634_14.png&amp;w=128&amp;h=128"/>
                    <QuickMenuItem name="자주구매" path="http://m.ssg.com/express/freqbuy.ssg" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202401/2024010509191930136537917653_371.png&amp;w=128&amp;h=128"/>
                    <QuickMenuItem name="선물하기" path="https://m.ssg.com/service/gift/main.ssg" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202401/2024010509195916439037718903_410.png&amp;w=128&amp;h=128"/>
                </div>
                <div className="flex my-4">
                    <QuickMenuItemLong name="백화점" path="https://m-shinsegaemall.ssg.com/page/dept/home.ssg?ldt=menu&amp;mccode=6009" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202306/2023062211334531279051274015_740.png&amp;w=128&amp;h=192"/>
                    <QuickMenuItemLong name="S.I. Village" path="https://si.mfamily.ssg.com/" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202403/2024031313232892407800438780_352.png&amp;w=128&amp;h=192"/>
                    <QuickMenuItemLong name="프리미엄 식품관" path="https://m.ssg.com/page/ssgfoodmarket/main.ssg" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202306/2023062011223156401848383184_744.png&amp;w=128&amp;h=192"/>
                    <QuickMenuItemLong name="명품" path="https://m.ssg.com/page/ssg_luxury/main/_v39.ssg" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202312/2023121216093071049155376915_523.png&amp;w=128&amp;h=192"/>
                    <QuickMenuItemLong name="뷰티" path="https://m.ssg.com/page/mondaymoon/main/_v21.ssg" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202312/2023123102014887905819645581_480.png&amp;w=128&amp;h=192"/>
                    <QuickMenuItemLong name="패션" path="http://m.ssg.com/page/ssgfashion/_v19.ssg" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202307/2023072716560129162777030377_717.png&amp;w=128&amp;h=192"/>
                    <QuickMenuItemLong name="w컨셉" path="https://wconcept.mfamily.ssg.com/" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202312/2023120515471045888908853990_624.png&amp;w=128&amp;h=192"/>
                    <QuickMenuItemLong name="골프" path="https://m.ssg.com/page/golf.ssg" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202311/2023112314542464485872186687_117.png&amp;w=128&amp;h=192"/>
                    <QuickMenuItemLong name="여행" path="https://m-triip.ssg.com/hotel/main.ssg?ldt=menu&amp;mccode=7013" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202308/2023083016383490602411998241_586.png&amp;w=128&amp;h=192"/>
                    <QuickMenuItemLong name="스타벅스" path="https://starbucks.mfamily.ssg.com" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202308/2023083016365154671009162400_652.png&amp;w=128&amp;h=192"/>
                    <QuickMenuItemLong name="프리미엄 아울렛" path="https://premiumoutlets.mfamily.ssg.com/" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202308/2023083016392184355252543625_39.png&amp;w=128&amp;h=192"/> 
                    <QuickMenuItemLong name="페라가모" path="https://m-shinsegaemall.ssg.com/specialStore/salvatoreferragamo/main.ssg" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202308/2023083016393675468768254976_98.png&amp;w=128&amp;h=192"/> 
                </div>

                {/* <div className="bg-slate-300 h-0.5 w-full my-2">
                    <div className={`bg-black h-0.5 `} style={{width : `${scrollPercent}%`}}></div>
                </div> */}
                <div className="h-[0.07rem] w-[98%] mx-auto my-2 bg-zinc-200 leading-10">
                    <div className={`bg-black h-[0.15rem] `} style={{ width: `${scrollPercent + 10}%` }}></div>
                </div>

            </div>
        </div>
    </>
)
}
