type PhoneNumberFormPropsType = {
  phoneNumber: string
}

export default function PhoneNumberForm({
  phoneNumber,
}: PhoneNumberFormPropsType) {
  return (
    <div className="py-4 border-b">
      <dl className="flex flex-row h-10 items-center">
        <dt className="w-20">
          <span className="text-[#FF5452]">*</span>휴대폰번호
        </dt>
        <dd className="flex items-center text-sm text">{phoneNumber}</dd>
      </dl>
    </div>
  )
}
