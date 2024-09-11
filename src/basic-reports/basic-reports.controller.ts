import { Controller, Get, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

const HEADER_PDF = {
  contentType: 'Content-Type',
  application: 'application/pdf',
};
@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get()
  async hello(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.hello();

    // Seteamos que va a ser un PDF
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.pipe(response);
    pdfDoc.info.Title = 'ivanosquis pa';
    pdfDoc.end();
  }

  @Get('employement-letter')
  async employementLetter(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.employmentLetter();

    response.setHeader(HEADER_PDF.contentType, HEADER_PDF.application);
    pdfDoc.pipe(response);
    pdfDoc.info.Title = 'ivanosquis pa';
    pdfDoc.end();
  }
}
