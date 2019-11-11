export class BankModel {
    address: string = ""
    bank_id: number = -1
    bank_name: string = ""
    branch: string = ""
    city: string = ""
    district: string = ""
    ifsc: string = ""
    state: string= ""
}

export class LocationBankModel{
    location:string = ""
    banks: BankModel[] = []
}