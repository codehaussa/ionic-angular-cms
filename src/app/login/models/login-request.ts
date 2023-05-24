export class LoginRequest {
  get Password(): string {
    return this.password;
  }

  set Password(value: string) {
    this.password = value;
  }
  get Email(): string {
    return this.email;
  }

  set Email(value: string) {
    this.email = value;
  }
  get Company_code(): string {
    return this.company_code;
  }

  set Company_code(value: string) {
    this.company_code = value;
  }
  private company_code!: string;
  private email!: string;
  private password!: string;
}
