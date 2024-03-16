import email from "@/asset/images/email.svg"
import Image from "next/image"

type FindPwFormProps = {
  isSimpleMember: boolean
  isFindId: boolean
}

export default function FindPwForm({
  isSimpleMember,
  isFindId,
}: FindPwFormProps) {
  //인증용 이메일 보내고 이메일에서 비밀번호 재설정 페이지로 리다이렉트
  return (
    <form
      className={`grid grid-row-5 gap-2 mx-3 ${
        isSimpleMember && !isFindId ? "" : "hidden"
      }`}
    >
      <p className="flex flex-col jutify-center items-center mb-8">
        <Image src={email} width={40} height={60} alt="휴대폰" />
        이메일
      </p>
      <input
        placeholder="이메일"
        className="h-8 text-sm bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
      />
      <input
        placeholder="이름"
        className="h-8 text-sm bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full sm:text-sm focus:ring-1 rounded"
      />
      <button className="px-16 text-lg text-white whitespace-nowrap bg-[#FF5B7E] h-10 rounded">
        확인
      </button>
      <hr />
      <div>
        <ul className="text-[10px] mt-5 px-3 list-disc list-inside">
          <li>
            이메일/SNS 간편가입회원은 이메일계정을 통해 비밀번호를 찾을 수
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
