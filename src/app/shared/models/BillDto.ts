export class BillDto {
  id: number;
  billsName?: string; 
  description?: string;
  dueDate: Date; 
  installments?: number;
  amount?: number;
  userId?: number;
  status?: number;
  installmentBills: InstallmentBillDto[] = []; 

  constructor(
    id: number,
    billsName: string | undefined,
    description: string | undefined,
    dueDate: Date,
    installments: number | undefined,
    amount: number | undefined,
    userId: number | undefined,
    status: number | undefined,
    installmentBills: InstallmentBillDto[] = []
  ) {
    this.id = id;
    this.billsName = billsName;
    this.description = description;
    this.dueDate = dueDate;
    this.installments = installments;
    this.amount = amount;
    this.userId = userId;
    this.status = status;
    this.installmentBills = installmentBills;
  }
}

export class InstallmentBillDto {
  id: number;
  billsId?: number;
  installmentNumber?: number;
  amount?: number;
  dueDate?: Date; 
  status?: boolean;

  constructor(
    id: number,
    billsId: number | undefined,
    installmentNumber: number | undefined,
    amount: number | undefined,
    dueDate: Date | undefined,
    status: boolean | undefined
  ) {
    this.id = id;
    this.billsId = billsId;
    this.installmentNumber = installmentNumber;
    this.amount = amount;
    this.dueDate = dueDate;
    this.status = status;
  }
}
