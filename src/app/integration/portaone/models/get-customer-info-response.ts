export class GetCustomerInfoResponse {
    customer_info!: CustomerInfo
}

export class CustomerInfo {
    address_line_2!: string;
    baddr1!: string;
    baddr2!: string;
    baddr3!: string;
    baddr4!: string;
    baddr5!: string;
    balance!: number;
    balance_transfer_allowed!: string;
    bill_status!: string;
    bill_suspension_delayed!: number;
    billed_to!: string;
    blocked!: string;
    callshop_enabled!: string;
    city!: string;
    companyname!: string;
    cont1!: string;
    cont2!: string;
    country!: string;
    creation_date!: string;
    credit_exceed!: number;
    credit_limit!: number;
    deactivate_on!: string;
    email!: string;
    estimate_taxes!: number;
    faxnum!: string;
    firstname!: string;
    generate_invoice_earlier!: string;
    has_custom_fields!: number;
    i_acl!: number;
    i_balance_control_type!: number;
    i_billing_period!: number;
    i_commission_plan!: number;
    i_customer!: number;
    i_customer_class!: number;
    i_customer_type!: number;
    i_lang!: number;
    i_moh!: number;
    i_office_type!: number;
    i_parent!: number;
    i_role!: number;
    i_template!: number;
    i_time_zone!: number;
    i_ui_time_zone!: number;
    in_date_format!: string;
    in_time_format!: string;
    inclusive_taxation!: string;
    invoice_generation_enabled!: number;
    is_used!: number;
    iso_4217!: string;
    lastname!: string;
    login!: string;
    midinit!: string;
    name!: string;
    next_billed_to!: string;
    note!: string;
    notepad!: string;
    netime_invoice_generation_enabled!: number;
    opening_balance!: number;
    ot_i_template!: any;
    out_date_format!: string;
    out_date_time_format!: string;
    out_time_format!: string;
    override_tariffs_enabled!: string;
    password!: string;
    perm_credit_limit!: number;
    phone1!: string;
    phone2!: string;
    restore_on!: any;
    salutation!: string;
    service_features!: Array<ServiceFeatures>;
    service_flags!: string;
    state!: string;
    status!: string;
    suspend_on_insuff_funds!: any;
    suspension_delay_date!: any;
    terminate_on!: any;
    unallocated_payments!: number;
    zip!: string
}

export class ServiceFeatures {
    flag_value!: string;
    effective_flag_value!: string;
    name!: string;
    attributes!: Array<ServiceFeatureAttributes>;
}

export class ServiceFeatureAttributes {
    effective_values!: Array<any>;
    name!: string;
    values!: Array<any>;
}
