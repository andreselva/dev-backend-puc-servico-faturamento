import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import RegisterPaymentUseCase from './Invoicing/RegisterPaymentUseCase';
import { ClientsModule, Transport } from '@nestjs/microservices';
import InvoicingRepository from './Invoicing/InvoicingRepository';
import InvoicingService from './Invoicing/InvoicingService';
import { DatabaseService } from './Database/DatabaseService';
import InvoicingController from './Invoicing/InvoicingController';
import SendPaymentToManagement from './Invoicing/SendPaymentToManagement';

const useCases = [
  RegisterPaymentUseCase,
]

const services = [
  InvoicingService,
]

const repositories = [
  InvoicingRepository
]

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYMENT_CREATED',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 3001 },
      },
    ]),
  ],
  controllers: [AppController, InvoicingController],
  providers: [
    AppService, 
    ...useCases,
    ...services,
    ...repositories,
    DatabaseService,
    SendPaymentToManagement
  ],
})
export class AppModule {}
