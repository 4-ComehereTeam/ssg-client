import FindIdPwSection from "@/components/form/findIdPwForm/FindIdPwSection"
import HeaderToBackNotSticky from "@/components/ui/Headers/HeaderToBackNotSticky"

async function Page({ searchParams }: { searchParams: string }) {
  const isFindId = Object.keys(searchParams)[0] === "id" ? true : false
  return (
    <>
      <HeaderToBackNotSticky
        title="아이디/비밀번호 찾기"
        className="font-bold border-b-[#bcbcbc]"
      />
      <FindIdPwSection findId={isFindId} />
    </>
  )
}

export default Page
