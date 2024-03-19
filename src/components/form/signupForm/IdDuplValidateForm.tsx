export default function IdDuplValidateForm() {
  return (
    <div className="py-4 border-b">
      <dl className="flex flex-row items-center">
        <dt className="w-20">
          <span className="text-[#FF5452]">*</span>아이디
        </dt>
        <dd className="grow flex flex-row gap-3 justify-between">
          <input
            placeholder="영어 또는 숫자로 6~20자리"
            className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
          />
          <button className="w-24 text-xs text-center bg-[#F8F8F8] border border-slate-300 font-[550]">
            중복확인
          </button>
        </dd>
      </dl>
    </div>
  )
}
