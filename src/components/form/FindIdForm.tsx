import smartPhone from "@/asset/images/smartphone.svg"
import Image from "next/image"
import { Dropdown } from "../ui/Dropdown"

type FindIdFormProps = {
  isSimpleMember: boolean
  isFindId: boolean
}

export default function FindIForm({
  isSimpleMember,
  isFindId,
}: FindIdFormProps) {
  //서버에서 아이디 갖고와 뒤 4자리 가려서 알려주기
  return (
    <form
      className={`grid grid-row-5 gap-2 mx-3 ${
        isSimpleMember && isFindId ? "" : "hidden"
      }`}
    >
      <p className="flex flex-col jutify-center items-center mb-8">
        <Image src={smartPhone} width={40} height={60} alt="휴대폰" />
        휴대폰
      </p>
      <input
        placeholder="이름"
        className="h-8 text-sm bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
      />
      <div className="flex gap-1">
        <Dropdown
          options={[
            { label: "010", value: "010" },
            { label: "016", value: "016" },
            { label: "017", value: "017" },
            { label: "018", value: "018" },
            { label: "019", value: "019" },
          ]}
          style="h-8 border border-slate-300 text-black bg-white w-full"
        />
        <input className="h-8 text-sm bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded" />
        <input className="h-8 text-sm bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded" />
      </div>
      <button className="px-16 text-lg text-white whitespace-nowrap bg-[#FF5B7E] h-10 rounded">
        확인
      </button>
      <hr />
      <div>
        <ul className="text-[10px] mt-5 px-3 list-disc list-inside">
          <li>
            이메일/SNS 간편가입회원은 휴대폰번호를 통해 아이디를 찾을 수
            있습니다.
          </li>
          <li>
            SSG에서 제공드리는 방법으로 아이디/비밀번호를 찾으실 수 없는
            고객님께서는 SSG 고객센터(1577-3419)로 연락주시기 바랍니다.
          </li>
        </ul>
      </div>
    </form>
  )
}
