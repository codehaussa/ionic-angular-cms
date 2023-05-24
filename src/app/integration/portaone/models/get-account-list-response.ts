export interface GetAccountListResponse {
  i_product: number;
  activation_date: string;
  product_visible_name: string;
  iso_4217: string;
  out_date_format: string;
  i_account: number;
  opening_balance: number;
  password: string;
  blocked: string;
  id: string;
  out_date_time_format: string;
  h323_password: string;
  bill_status: string;
  i_lang: string;
  life_time: any;
  login: string;
  i_role: number;
  balance: number;
  in_date_format: string;
  i_time_zone: number;
  assigned_addons: any[];
  billing_model: number;
  out_time_format: string;
  service_features: any[];
  ecommerce_enabled: string;
  i_account_role: number;
  in_time_format: string;
  expiration_date: string;
  service_flags: string;
  sip_status: number;
  included_services: any[];
  i_account_balance_control_type: number;
  issue_date: string;
  i_customer: number;
  i_acl: number;
  inactivity_expire_time: any;
  credit_limit: any;
  product_name: string;
}

export interface AccountListResponse {
  account_list: GetAccountListResponse[];
}

