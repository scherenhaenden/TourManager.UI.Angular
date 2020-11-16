export class CSharpDateToJsDate {


  public sCdateToJsDate(cSDate: any): Date {
    // cSDate is '2017-01-24T14:14:55.807'
    // cSDate is '2020-10-16T15:27:05.8865805'

    console.log('cSDate', cSDate);



    const datestr = cSDate.toString();
    const dateAr = datestr.split('-');
    // tslint:disable-next-line:radix
    const year = parseInt(dateAr[0]);
    // tslint:disable-next-line:radix
    const month = parseInt(dateAr[1]) - 1;
    // tslint:disable-next-line:radix
    const day = parseInt(dateAr[2].substring(0, dateAr[2].indexOf('T')));
    const timestring = dateAr[2].substring(dateAr[2].indexOf('T') + 1);
    const timeAr = timestring.split(':');
    // tslint:disable-next-line:radix
    const hour = parseInt(timeAr[0]);
    // tslint:disable-next-line:radix
    const min = parseInt(timeAr[1]);
    // tslint:disable-next-line:radix
    const sek = parseInt(timeAr[2]);
    const date = new Date(year, month, day, hour, min, sek, 0);
    return date;
}
}
