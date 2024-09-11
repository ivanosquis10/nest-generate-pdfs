import { PrinterService } from './../printer/printer.service';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { getHelloWorldReport, getEmploymentLetter } from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    console.log('connected to database');
  }

  constructor(private readonly printerService: PrinterService) {
    super();
  }

  hello() {
    const docDefinition = getHelloWorldReport({ name: 'Ivan' });

    const doc = this.printerService.createPdf({ docDefinition });
    try {
      return doc;
    } catch (error) {
      console.log(error);
    }
  }

  employmentLetter() {
    const docDefinition = getEmploymentLetter();

    const doc = this.printerService.createPdf({ docDefinition });
    try {
      return doc;
    } catch (error) {
      console.log(error);
    }
  }
}
