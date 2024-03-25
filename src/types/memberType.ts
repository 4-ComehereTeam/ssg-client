export type Member = {
  signinId: string
  password: string
  name: string
  phone: string
  email: string
  addressInfo: {
    zipcode: string
    address: string
    detailAddress: string
  }
  marketingInfoReceiveAgrees?: {
    ssgPointAgrees: {
      agrees: {
        marketingAgree: boolean
        commonAgree: boolean
      }
      methods: {
        email: boolean
        sms: boolean
        mail: boolean
        call: boolean
      }
    }
    ssgcomAgrees: {
      agrees: {
        marketingAgree: boolean
      }
      method: {
        email: boolean
        sms: boolean
      }
    }
  }
}
