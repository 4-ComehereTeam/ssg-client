export default function PasswordValidateForm() {
  return (
    <div className="py-4 border-b">
      <dl className="flex flex-row justify-between">
        <dt className="w-20 pt-2">
          <span className="text-[#FF5452]">*</span>비밀번호
        </dt>
        <dd className="grow flex flex-col gap-3">
          <input
            placeholder="영문, 숫자 조합 8~20자리"
            className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
          />
          <input
            placeholder="비밀번호 재확인"
            className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
          />
        </dd>
      </dl>
    </div>
  )
}
