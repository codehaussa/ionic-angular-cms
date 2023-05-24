export class CompanyFeaturesReqeust {
  get Company_Code(): string {
    return this.company_code;
  }
  set Company_Code(value: string) {
    this.company_code = value;
  }

  private company_code!: string;
}
