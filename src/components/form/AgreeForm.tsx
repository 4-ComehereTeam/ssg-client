import Checkbox from "../ui/Checkbox"
import CertificationForm from "./CertificationForm"

interface AgreementProps {
  key: number
  agreementText: string
}

const Agreement: React.FC<AgreementProps> = ({ key, agreementText }) => (
  <div className="flex justify-between items-start px-4 py-3.5 w-full whitespace-nowrap bg-white border-t border-solid text-zinc-600">
    <div className="flex gap-3">
      <Checkbox id="agree" />
      <label htmlFor="agree">{agreementText}</label>
    </div>
    <button className="border-slate-400 w-[50px] h-[17px] text-xs">
      내용보기
    </button>
  </div>
)

export default function AgreeForm() {
  const agreements = [
    "개인정보 이용 및 제공 동의",
    "통신사 이용약관 동의",
    "고유식별정보 처리 동의",
    "서비스 이용약관 동의",
  ]

  return (
    <section className="flex flex-col px-4 py-5 text-sm leading-4 bg-zinc-100">
      {agreements.map((agreement, index) => (
        <Agreement key={index} agreementText={agreement} />
      ))}
      <div className="flex justify-between items-start px-4 py-3.5 whitespace-nowrap bg-white border-t border-solid text-zinc-600">
        <div className="flex gap-3">
          <Checkbox id="agree-all" />
          <label htmlFor="agree-all" className="text-[#FF6967]">
            전체 동의
          </label>
        </div>
        <button className="border-slate-400 w-[50px] h-[17px] text-xs">
          내용보기
        </button>
      </div>

      <CertificationForm />

      <ul className="mt-4 ml-3 text-xs tracking-tight leading-2 text-neutral-800">
        <li className="flex items-center mt-2">
          <span className="inline-block w-[2px] h-[2px] rounded-full bg-[#FE5B5B] mr-1">
            &nbsp;
          </span>
          본인 명의의 휴대폰 정보를 정확히 입력하여 주시기 바랍니다.
        </li>
        <li className="flex items-center mt-2">
          <span className="inline-block w-[2px] h-[2px] rounded-full bg-[#FE5B5B] mr-1">
            &nbsp;
          </span>
          타인의 명의를 도용하여 부정인증을 시도한 경우 관련 법령에 따라 처벌
          받을 수 있습니다.
        </li>
        <li className="flex items-center mt-2">
          <span className="inline-block w-[2px] h-[2px] rounded-full bg-[#FE5B5B] mr-1">
            &nbsp;
          </span>
          인증문의: (주)NICE고객센터(1600-1522)
        </li>
      </ul>
    </section>
  )
}
