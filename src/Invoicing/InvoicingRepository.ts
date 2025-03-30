import { Dependencies, Injectable } from "@nestjs/common";
import { DatabaseService } from "src/Database/DatabaseService";

@Injectable()
@Dependencies(DatabaseService)
export default class InvoicingRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async registerPayment(payment: any): Promise<any> {
        const query = `INSERT INTO pagamentos (codPlano, valorPago, dataPagamento) VALUES (?, ?, ?)`;
        const params = [payment.codAssinatura, payment.valorPago, payment.dataPagamento];
        const result = await this.databaseService.insert(query, params);

        if (result > 0) {
            return payment;
        }
        return null;
    }

}