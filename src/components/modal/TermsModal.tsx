import Image from "next/image"
import Link from "next/link"
import close from "@/asset/images/close.svg"

interface AddressModalProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
}
function AddressModal({ modalOpen, setModalOpen }: AddressModalProps) {
  return modalOpen ? (
    <div>
      <div className="bg-black/60 absolute inset-0 z-50">
        <div className="fixed inset-x-0 top-7 bottom-0 flex flex-col border rounded-t-lg bg-white ">
          <div
            className="h-14 flex justify-center items-center"
            style={{ borderBottom: "1px solid", borderBottomColor: "#d1d1d1" }}
          >
            <h3 className="font-bold right-4 text-sm">약관 보기</h3>
            <button
              className="absolute right-4"
              onClick={() => {
                setModalOpen(false)
              }}
            >
              <Image src={close} alt="클로즈" width={30} height={30}></Image>
            </button>
          </div>

          <div className="bg-[#f7f7f7] h-full text-start tracking-[-0.3px] overflow-auto">
            <header className="text-sm p-4 font-bold border-b-4 ">
              전자금융거래 이용약관
            </header>
            <div className="p-4 pt-10 ">
              <div className="font-extrabold">
                제 1장 총칙
                <br />
                제1조 (목적)
              </div>
              <div className="pt-4 text-[#888888] text-xs">
                이 약관은 (주)에스에스지닷컴(이하 &quot;회사&quot;)이 제공하는
                선불전자지급수단의 발행 및 관리서비스, 간편결제 서비스 및
                전자지급결제대행서비스(이하&quot;서비스)를 고객이 이용함에 있어
                &quot;회사&quot;와 &quot;이용자&quot;의 권리/의무 및 책임사항을
                규정함을 목적으로 합니다.
              </div>
              <div className="font-extrabold pt-4">제2조 (정의)</div>
              <div className="pt-4 text-[#888888] text-xs">
                이 약관에서 사용하는 용어는 다음과 같으며, 본 조에서 정한 것을
                제외하고는 전자금융거래법 등 관련법령이 정한 바에 의합니다
                <br />
                <p className="py-4">
                  ①&quot;전자금융거래&quot;라 함은 &quot;회사&quot;가
                  &quot;전자적 장치&quot;를 통하여 전자금융업무를 제공하고
                  &quot;회원&quot;이 &quot;제휴사&quot;등을 통해 이용하는 거래를
                  말합니다.
                </p>
                <p className="pb-4">
                  ② &quot;전자지급거래&quot;라 함은 자금을 주는 자가
                  &quot;회사&quot;로 하여금 전자지급수단을 이용하여 자금을 받는
                  자에게 자금을 이용하게 하는 &quot;전자금융거래&quot;를
                  말합니다.
                </p>
                <p className="pb-4">
                  ③ &quot;전자적 장치&quot;라 함은
                  &quot;전자금융거래&quot;정보를 전자적 방법으로 전송하거나
                  처리하는데 이용되는 장치를 말합니다.
                </p>
                <p className="pb-4">
                  ④ &quot;접근매체&quot;라 함은 &quot;전자금융거래&quot;에
                  있어서 &quot;거래지시&quot;를 하거나 이용자 및 거래내용의
                  진실성과 정확성을 확보하기 위하여 사용되는 수단 또는 정보로서
                  &quot;전자금융거래서비스&quot;를 이용하기 위해
                  &quot;회사&quot;에 등록된 아이디 및 비밀번호, 스마트폰 등 기타
                  &quot;회사&quot;가 지정한 수단을 말합니다.
                </p>
                <p className="pb-4">
                  ⑤ &quot;회원&quot;은 &quot;회사&quot;의 &quot;서비스&quot;에
                  접속하여 본 약관에 따라 이용계약을 체결하고 &quot;회사&quot;가
                  제공하는 서비스를 이용하는 고객을 말합니다.
                </p>
                <p className="pb-4">
                  ⑥ &quot;이용자&quot;는 &quot;회사&quot;의 &quot;서비스&quot;에
                  접속하여 &quot;서비스&quot;를 이용하는 &quot;회원&quot; 및
                  가입없이 이용하는 고객 모두를 말합니다.
                </p>
                <p className="pb-4">
                  ⑦ &quot;아이디&quot;라 함은 &quot;회원&quot; 및
                  &quot;이용자&quot;를 식별하고 &quot;서비스&quot;를 이용하기
                  위하여 부여한 정보를 의미합니다.
                </p>
                <p className="pb-4">
                  ⑧ &quot;비밀번호&quot;라 함은 &quot;이용자&quot;의
                  &quot;아이디&quot;와 함께 &quot;회원&quot; 본인임을 확인하고
                  보호하기 위해 &quot;회원&quot;자신이 정한 문자 또는 숫자 혹은
                  그 조합을 의미합니다.
                </p>
                <p className="pb-4">
                  ⑨ &quot;거래지시&quot;라 함은 &quot;회원&quot;이 본 약관에
                  따라 &quot;회사&quot;에 &quot;전자금융거래&quot;의 처리를
                  지시하는 것을 말합니다.
                </p>
                <p className="pb-4">
                  ⑩ &quot;오류&quot;라 함은 &quot;이용자&quot;의 고의 또는 과실
                  없이 &quot;전자금융거래&quot;가 본 약관 또는
                  &quot;거래지시&quot;에 따라 이행되지 아니한 경우를 말합니다.
                </p>
                <p className="pb-4">
                  ⑪ &quot;가맹점&quot;이라 함은 이용자에게 상품 판매 및 용역
                  제공을 위해 회사와 서비스 이용 계약을 체결한 사업자를
                  말합니다.
                </p>
                <p className="pb-4">
                  ⑫ &quot;금융사&quot;라 함은 &quot;서비스&quot;에서
                  &quot;간편결제 서비스&quot;를 제공하기 위해 &quot;회사&quot;와
                  협의된 업체를 말합니다.
                </p>
                <p className="pb-4">
                  ⑬ &quot;SSG 사이트라 함은 &quot;회원&quot; 또는
                  &quot;이용자&quot;가 &quot;서비스&quot;를 이용할 수 있도록
                  &quot;회사&quot;가 운영하는 사이트 및 모바일
                  어플리케이션(단말기 종류와 무관)을 말합니다.
                </p>
                <p className="pb-4">
                  ⑭ &quot;간편결제 서비스&quot;라 함은 고객이 본인 명의의
                  신용카드 등 결제 정보를 &quot;SSG 사이트&quot;에 저장하고,
                  해당 정보로 &quot;가맹점&quot;에서 상품을 구매 하거나 용역을
                  제공받기 위한 대금을 지불할 때 사용하는 서비스를 말합니다. 단,
                  최종 결제 처리 및 대금 정산은 &quot;가맹점&quot;과
                  &quot;금융사&quot;간에 직접 이루어 지고, &quot;회사&quot;는 그
                  결제 정보를 중계하는 역할만 수행 합니다.
                </p>
                <p className="pb-4">
                  ⑮ &quot;전자지급결제대행서비스&quot;라 함은 전자적 방법으로
                  재화의 구입 또는 용역의 이용에 있어서 지급결제정보를
                  송신하거나 수신하는 것 또는 그 대가의 정산을 대행하거나
                  매개하는 서비스를 말합니다.
                </p>
                <p className="pb-4">
                  ⑯ &quot;닷컴&quot;이라 함은 &quot;회사&quot;가 재화 또는
                  용역을 제공하기 위하여 컴퓨터, TV, 모바일 등 정보통신설비를
                  이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의
                  영업장(
                  <Link href="http://www.ssg.com">http://www.ssg.com</Link>)을
                  말합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
export default AddressModal
