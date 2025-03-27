import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export default class SendPaymentToManagement {
    constructor(
        @Inject('PAYMENT_CREATED')
        private readonly client: ClientProxy,
    ) {}

    send(payment: any) {
        console.log("Enviando informação para ServicoGestao:", payment);
        this.client.emit('payment_created', payment);
        console.log("Informação de pagamento enviada!");
    }
}