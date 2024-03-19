export default function EmailFrom() {
  return (
    <div className="py-4 border-b">
      <dl className="flex flex-row h-10 items-center">
        <dt className="w-20">
          <span className="text-[#FF5452]">*</span>이메일주소
        </dt>
        <dd className="grow flex flex-col gap-3">
          <input
            placeholder="이메일주소"
            className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]"
          />
        </dd>
      </dl>
    </div>
  )
}
