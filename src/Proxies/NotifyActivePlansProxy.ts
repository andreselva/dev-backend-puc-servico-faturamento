import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from '@nestjs/microservices';
import EventsPaymentProxyInterface from "./EventsPaymentProxyInterface";

@Injectable()
export default class NotifyActivePlansProxy implements EventsPaymentProxyInterface {
    constructor(
        @Inject('PAYMENT_REGISTERED')
        private readonly client: ClientProxy,
    ) {}

    send(payment: any) {
        console.log("Enviando informação para ServicoPlanosAtivos:", payment);
        this.client.emit('PAYMENT_REGISTERED', payment);
        console.log("Informação de pagamento enviada!");
    }
}   