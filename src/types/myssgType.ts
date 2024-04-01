export type OrderProps = OrderStatesProps & OrderStepsProps

export type OrderStepsProps = {
  orderStepCnts: {
    orderAccepted: number
    paymentCompleted: number
    preparing: number
    shipping: number
    complete: number
  }
}

export type OrderStatesProps = {
  orderStateCnts: {
    cancel: number
    exchange: number
    return: number
    confirm: number
  }
}
