import { I18nExceptionFilter } from '@anchan828/nest-i18n-i18next';
import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ItemService } from '../../../services/item/item.service';

export enum SyncDataType {
  HS_REPORT_LIST = 'hs_report_list', // H
  RADIOLOGY = 'radiology',
  ENDOSCOPY_LIST = 'endoscopy_list',
  ENDOSCOPY_DETAIL = 'endoscopy_detail',
  LAB = 'lab',
  PA = 'pa',
  RETINOPHOTOGRAPHY = 'retinophotography',
  PA_REPORT = 'pa_report',
  LAB_REPORT = 'lab_report',
  EMR_HEALTH_SCREENING = 'emr_health_screening',
  APPT_PAST = 'appt_past',
  APPT_FUTURE = 'appt_future',
  VISIT_LIST = 'visit_list',
  DIAGNOSIS = 'diagnosis',
  MEDICATION = 'medication',
  MC = 'mc',
  REFERRAL = 'referral',
}

@Controller('')
@UseFilters(I18nExceptionFilter)
export class ItemController {
  constructor(private readonly items: ItemService) {}

  @Post('api/PHR/RadiologyResult')
  async radiology(@Body() body: any) {
    console.log(
      `${new Date().toISOString()} - BODY RadiologyResult FROM APP`,
      body,
    );
    const item = await this.items.findAll(SyncDataType.RADIOLOGY, body.Nric);

    return item;
  }

  @Post('api/PHR/PA')
  async pa(@Body() body: any) {
    console.log(`${new Date().toISOString()} - BODY PA FROM APP`, body);
    const item = await this.items.findAll(SyncDataType.PA, body.Nric);

    return item;
  }

  @Post('/api/PHR/LabResult')
  async lab(@Body() body: any) {
    console.log(`${new Date().toISOString()} - BODY LAB_RESULT FROM APP`, body);
    const item = await this.items.findAll(SyncDataType.LAB, body.Nric);

    return item;
  }

  @Post('/api/PHR/HSReportList')
  async hsReport(@Body() body: any) {
    console.log(
      `${new Date().toISOString()} - BODY HSReportList FROM APP`,
      body,
    );
    const item = await this.items.findAll(
      SyncDataType.HS_REPORT_LIST,
      body.Nric,
    );

    return item;
  }

  @Post('/api/phr/EndoscopyReportList')
  async endosList(@Body() body: any) {
    console.log(
      `${new Date().toISOString()} - BODY EndoscopyReportList FROM APP`,
      body,
    );
    const item = await this.items.findAll(
      SyncDataType.ENDOSCOPY_LIST,
      body.Nric,
    );

    return item;
  }

  @Post('/api/phr/EndoscopyReportDetail')
  async endosDetail(@Body() body: any) {
    console.log(
      `${new Date().toISOString()} - BODY EndoscopyReportDetail FROM APP`,
      body,
    );
    const item = await this.items.findAll(
      SyncDataType.ENDOSCOPY_DETAIL,
      body.ReportId,
    );

    return item;
  }

  @Post('/api/PHR/LabReport')
  async labReport(@Body() body: any) {
    console.log(`${new Date().toISOString()} - BODY LabReport FROM APP`, body);
    const item = await this.items.findAll(SyncDataType.LAB_REPORT, body.Nric);

    return item;
  }

  @Post('/api/PHR/PAReport')
  async paReport(@Body() body: any) {
    console.log(`${new Date().toISOString()} - BODY PAReport FROM APP`, body);
    const item = await this.items.findAll(SyncDataType.PA_REPORT, body.Nric);

    return item;
  }

  @Post('/api/phr/RetinophotographyReportList')
  async rentinoReport(@Body() body: any) {
    console.log(
      `${new Date().toISOString()} - BODY RetinophotographyReportList FROM APP`,
      body,
    );
    const item = await this.items.findAll(
      SyncDataType.RETINOPHOTOGRAPHY,
      body.Nric,
    );

    return item;
  }

  @Post('/api/phr/EMRHealthScreeningAttachment')
  async EMRReport(@Body() body: any) {
    console.log(
      `${new Date().toISOString()} - BODY EMRHealthScreeningAttachment FROM APP`,
      body,
    );
    const item = await this.items.findAll(
      SyncDataType.EMR_HEALTH_SCREENING,
      body.Nric,
    );

    return item;
  }

  @Post('/visit/GetVisitList')
  async visitList(@Body() body: any) {
    console.log(`${new Date().toISOString()} - BODY VisitList FROM APP`, body);
    const item = await this.items.findAll(SyncDataType.VISIT_LIST, body.rcnric);

    return item;
  }

  @Post('/Appointment/past')
  async appointmentPast(@Body() body: any) {
    console.log(
      `${new Date().toISOString()} - BODY APPOINTMENT PAST FROM APP`,
      body,
    );
    const item = await this.items.findAll(SyncDataType.APPT_PAST, body.rcnric);

    return item;
  }

  @Post('/Appointment/future')
  async appointmentFuture(@Body() body: any) {
    console.log(
      `${new Date().toISOString()} - BODY APPOINTMENT FUTURE FROM APP`,
      body,
    );
    const item = await this.items.findAll(
      SyncDataType.APPT_FUTURE,
      body.rcnric,
    );

    return item;
  }

  @Post('/api/visit/diagnosis')
  async diagnosis(@Body() body: any) {
    console.log(`${new Date().toISOString()} - BODY DIAGNOSIS FROM APP`, body);
    const item = await this.items.findAll(
      SyncDataType.DIAGNOSIS,
      body.VisitNumber,
    );

    return item;
  }

  @Post('/api/visit/medication')
  async medication(@Body() body: any) {
    console.log(`${new Date().toISOString()} - BODY MEDICATION FROM APP`, body);
    const item = await this.items.findAll(
      SyncDataType.MEDICATION,
      body.VisitNumber,
    );

    return item;
  }

  @Post('/api/visit/mc')
  async mc(@Body() body: any) {
    console.log(`${new Date().toISOString()} - BODY MC FROM APP`, body);
    const item = await this.items.findAll(SyncDataType.MC, body.VisitNumber);

    return item;
  }

  @Post('/api/visit/referral')
  async referral(@Body() body: any) {
    console.log(`${new Date().toISOString()} - BODY REFERRAL FROM APP`, body);
    const item = await this.items.findAll(
      SyncDataType.REFERRAL,
      body.VisitNumber,
    );

    return item;
  }
}
