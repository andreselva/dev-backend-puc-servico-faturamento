import { Dependencies, Injectable } from "@nestjs/common";
import InvoicingRepository from "./InvoicingRepository";

@Injectable()
@Dependencies(InvoicingRepository)
export default class RegisterPaymentUseCase {
    constructor(
        private readonly invoicingRepository: InvoicingRepository
    ) { }

    async register(payment: any): Promise<any> {
        return await this.invoicingRepository.registerPayment(payment);
    }
}