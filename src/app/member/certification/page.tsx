import CertificationAgreeForm from "@/components/form/CertificationAgreeForm"
import CertificationForm from "@/components/form/CertificationForm"

const CertificationAgreements = [
  { num: 0, id: "agree1", text: "개인정보 이용 및 제공 동의" },
  { num: 1, id: "agree2", text: "통신사 이용약관 동의" },
  { num: 2, id: "agree3", text: "고유식별정보 처리 동의" },
  { num: 3, id: "agree4", text: "서비스 이용약관 동의" },
  { num: 4, id: "agreeAll", text: "전체 동의" },
]

export default function CertificationPage() {
  return (
    <>
      <CertificationAgreeForm agreements={CertificationAgreements} />
      <CertificationForm />
    </>
  )
}
