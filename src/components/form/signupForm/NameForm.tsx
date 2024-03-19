type NameFormPropsType = {
  name: string
}

export default function NameForm({ name }: NameFormPropsType) {
  return (
    <div className="py-4 border-b">
      <dl className="flex flex-row h-10 items-center">
        <dt className="w-20">
          <span className="text-[#FF5452]">*</span>이름
        </dt>
        <dd className="flex items-center">{name}</dd>
      </dl>
    </div>
  )
}
