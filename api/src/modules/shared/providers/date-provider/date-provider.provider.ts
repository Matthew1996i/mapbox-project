import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { DateProviderContracts } from "./contracts/date-provider";

dayjs.extend(utc);

export class DateProvider implements DateProviderContracts {
  checkIsBefore(start_date: Date, end_date: Date): boolean {
    return dayjs(start_date).isBefore(end_date);
  }

  compareInDays(start_date: Date, end_date: Date): number {
    return dayjs(this.convertToUTC(end_date)).diff(
      this.convertToUTC(start_date),
      "days"
    );
  }

  dateNow(): Date {
    return dayjs().toDate();
  }

  addMonth(months: number, reference_date: Date): Date {
    const date = reference_date ? dayjs(reference_date) : dayjs();
    return date.add(months, "month").toDate();
  }

  addDays(days: number, reference_date: Date): Date {
    const date = reference_date ? dayjs(reference_date) : dayjs();
    return date.add(days, "day").toDate();
  }

  addHours(hours: number, reference_date: Date): Date {
    const date = reference_date ? dayjs(reference_date) : dayjs();
    return date.add(hours, "hour").toDate();
  }

  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format("YYYY-MM-DD");
  }

  format(date: Date): string {
    return dayjs(date).local().format("YYYY-MM-DD");
  }

  compareInHours(start_date: Date, end_date: Date): number {
    return dayjs(this.convertToUTC(end_date)).diff(
      this.convertToUTC(start_date),
      "hours"
    );
  }
}
