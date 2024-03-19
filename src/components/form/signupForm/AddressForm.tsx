export default function AddressForm() {
  return (
    <div className="py-4 border-b">
      <dl className="flex flex-row h-14 items-center">
        <dt className="w-20">
          <span className="text-[#FF5452]">*</span>주소
        </dt>
        <dd className="grow flex flex-row gap-3 justify-between">
          <input className="grow py-2.5 pl-3 text-xs whitespace-nowrap bg-white border border-solid border-[#D9D9D9]" />
          <button className="w-24 text-xs text-center text-white bg-[#666666] border border-slate-300 font-[550]">
            우편번호
          </button>
        </dd>
      </dl>
    </div>
  )
}
