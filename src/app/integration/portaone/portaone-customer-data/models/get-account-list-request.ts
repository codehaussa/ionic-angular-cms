export class GetAccountListRequest {
  private hostName!: string;
  get HostName() {
    return this.hostName;
  }
  set HostName(value: string) {
    this.hostName = value;
  }

  private login!: string;
  get Login() {
    return this.login;
  }
  set Login(value: string) {
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
