interface addressListProps {
  addressAliase: string
  name: string
  address: string
  phone: string
}

export default function AddressList({
  addressAliase,
  name,
  address,
  phone,
}: addressListProps) {
  return (
    <div className="m-2 border-2 border-black p-4">
      <div className="flex items-center">
        <input
          type="radio"
          className="accent-red-500 w-[18px] h-[18px]"
          name="addressList"
        />
        <span className="font-bold pl-2">{addressAliase}</span>
      </div>

      <div>
        <h3 className="text-[14px] mt-2">{address}</h3>
      </div>
      <div>
        <h3 className="text-[12px] mt-1 text-[#888888]">
          {name} / {phone}
        </h3>
      </div>
    </div>
  )
}
