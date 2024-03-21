import { idDuplCheck } from "@/actions/signup/idduplCheckAction"

type IdDuplCheckButtonPropsType = {
  signId: string
}

export default function IdDuplCheckButton({
  signId,
}: IdDuplCheckButtonPropsType) {
  return (
    <button
      className="w-24 text-xs text-center bg-[#F8F8F8] border border-slate-300 font-[550]"
      onClick={async (e) => {
        e.preventDefault()
        console.log("client")
        const data = await idDuplCheck(signId)
        if (data.isDuplicated) {
          alert("사용 가능한 아이디입니다.")
        } else {
          alert("이미 사용 중인 아이디입니다.")
        }
      }}
    >
      중복확인
    </button>
  )
}
