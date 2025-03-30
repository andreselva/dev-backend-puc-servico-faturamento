import { Injectable } from "@nestjs/common";
import RegisterPaymentUseCase from "./RegisterPaymentUseCase";
import SendPaymentToManagementProxy from "../Proxies/SendPaymentToManagementProxy";
import NotifyActivePlansProxy from "src/Proxies/NotifyActivePlansProxy";
import EventsPaymentProxyInterface from "src/Proxies/EventsPaymentProxyInterface";

@Injectable()
export default class InvoicingService {

    private readonly paymentEventProxies: EventsPaymentProxyInterface[];
    
    constructor(
        private readonly registerPaymentUseCase: RegisterPaymentUseCase,
        private readonly proxyManagement: SendPaymentToManagementProxy,
        private readonly proxyNotifyActivePlans: NotifyActivePlansProxy
      ) {
        this.paymentEventProxies = [this.proxyManagement, this.proxyNotifyActivePlans];
      }

    async registerPayment(payment: any): Promise<any>{
        const result = await this.registerPaymentUseCase.register(payment);
        this.paymentEventProxies.forEach(proxy => proxy.send(payment));
        return result;
    }
}
