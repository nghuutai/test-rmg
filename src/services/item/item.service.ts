import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, RMGData } from '@prisma/client';
import { SyncDataType } from 'src/controllers/api/v1/item.controller';

const defaultData: Record<string, any> = {
  radiology: {
    nric: 'S8069276J',
    startDate: '2019-04-08',
    endDate: '2020-04-08',
    message: 'No Radiology result available.',
    radResults: [],
  },
  pa: {
    height: null,
    weight: null,
    bp: null,
  },
  lab: {
    nric: 'S9134379G',
    startDate: '2018-07-10',
    endDate: '2023-08-20',
    message: 'No data lab result',
    labResults: [],
  },
  'hs_report_list': {
    reportDetailsList: [],
  },
  'endoscopy_list': {
    statusCode: '02',
    statusDescription: 'No record found.',
    endoscopyList: null,
  },
  'endoscopy_detail': {
    statusCode: '03',
    statusDescription: 'No colonoscopy report retrived',
    reportId: null,
    binaryData: null,
  },
  'lab_report': {
    nric: 'S8069276J',
    startDate: '2019-04-08',
    endDate: '2020-04-08',
    message: 'No lab result available.',
    lab_Reports: [],
  },
  'pa_report': {
    nric: 'dummy01',
    startDate: '2023-06-01',
    endDate: '2023-06-30',
    message: 'No PA report available.',
    pa_reports: [],
  },
  retinophotography: {
    statusCode: '01',
    statusDescription: 'No record found',
    reportDetailsList: null,
  },
  emr_health_screening: {
    statusCode: '01',
    statusDescription: 'No record found',
    reportDetailsList: null,
  },
  appt_past: [],
  appt_future: [],
  visit_list: [],
  diagnosis: [],
  medication: [],
  mc: [],
  referral: [],
};

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async findAll(type: string, nric: string) {
    console.log('436347457', nric);

    let condition: Prisma.RMGDataWhereInput = {
      type,
      nric,
      isDeleted: false,
    };

    if (
      [
        SyncDataType.MC,
        SyncDataType.MEDICATION,
        SyncDataType.DIAGNOSIS,
        SyncDataType.REFERRAL,
      ].includes(type as SyncDataType)
    ) {
      condition = {
        type,
        visitNumber: nric,
        isDeleted: false,
      };
    }

    const item = await this.prisma.rMGData.findFirst({
      where: condition,
    });

    if (!item) {
      return defaultData[type];
    }

    return (item as RMGData).data;
  }
}
