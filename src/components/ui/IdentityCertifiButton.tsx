interface IdentityCertifiButtonProps {
  label: string
  onClick: () => void
}

export default function IdentityCertifiButton() {
  const handleClick = () => {
    console.log("Identity verification button clicked")
  }

  return (
    <section>
      <button
        type="button"
        className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-full border border-rose-500"
        onClick={handleClick}
      >
        <span className="shrink-0 w-3 h-3 bg-rose-500 rounded-full" />
        <span className="text-sm font-bold leading-4 text-neutral-800">
          본인인증
        </span>
      </button>
    </section>
  )
}
