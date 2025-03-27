import { Injectable } from "@nestjs/common";
import RegisterPaymentUseCase from "./RegisterPaymentUseCase";
import SendPaymentToManagement from "./SendPaymentToManagement";

@Injectable()
export default class InvoicingService {
    
    constructor(
        private readonly registerPaymentUseCase: RegisterPaymentUseCase,
        private readonly sendPaymentToManagement: SendPaymentToManagement
      ) {}

    async registerPayment(payment: any): Promise<any>{
        const result = await this.registerPaymentUseCase.register(payment);
        this.sendPaymentToManagement.send(payment);
        return result;
    }
        
}
