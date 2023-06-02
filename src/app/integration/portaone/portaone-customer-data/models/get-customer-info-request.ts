export class GetCustomerInfoRequest {
  private hostName!: string;
  get HostName() {
    return this.hostName;
  }
  set HostName(value: string) {
    this.hostName = value;
  }

  private login!: string;
  public get Login() {
    return this.login;
  }
  public set Login(value: string) {
    this.login = value;
  }

  private password!: string;
  get Password() {
    return this.password;
  }
  set Password(value: string) {
    this.password = value;
  }
}
