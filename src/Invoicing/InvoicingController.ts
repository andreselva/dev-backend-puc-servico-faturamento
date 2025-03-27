import { Controller, Post, Body } from "@nestjs/common";
import InvoicingService from "./InvoicingService";

@Controller('/invoicing')
export default class InvoicingController {
    constructor(
        private readonly invoicingService: InvoicingService
    ) {}

    @Post()
    async registerPayment(@Body() payment: any): Promise<any> {
        return await this.invoicingService.registerPayment(payment);
    }
}
