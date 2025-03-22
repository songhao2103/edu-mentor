//danh sách code số điện thoại phổ biến
const phoneCodes = [
  { phoneCode: "+1", countryCode: "US" },
  { phoneCode: "+7", countryCode: "RU" },
  { phoneCode: "+20", countryCode: "EG" },
  { phoneCode: "+27", countryCode: "ZA" },
  { phoneCode: "+33", countryCode: "FR" },
  { phoneCode: "+39", countryCode: "IT" },
  { phoneCode: "+44", countryCode: "GB" },
  { phoneCode: "+49", countryCode: "DE" },
  { phoneCode: "+52", countryCode: "MX" },
  { phoneCode: "+54", countryCode: "AR" },
  { phoneCode: "+55", countryCode: "BR" },
  { phoneCode: "+56", countryCode: "CL" },
  { phoneCode: "+57", countryCode: "CO" },
  { phoneCode: "+60", countryCode: "MY" },
  { phoneCode: "+61", countryCode: "AU" },
  { phoneCode: "+62", countryCode: "ID" },
  { phoneCode: "+63", countryCode: "PH" },
  { phoneCode: "+65", countryCode: "SG" },
  { phoneCode: "+66", countryCode: "TH" },
  { phoneCode: "+81", countryCode: "JP" },
  { phoneCode: "+82", countryCode: "KR" },
  { phoneCode: "+84", countryCode: "VN" },
  { phoneCode: "+86", countryCode: "CN" },
  { phoneCode: "+91", countryCode: "IN" },
  { phoneCode: "+92", countryCode: "PK" },
  { phoneCode: "+234", countryCode: "NG" },
  { phoneCode: "+254", countryCode: "KE" },
  { phoneCode: "+255", countryCode: "TZ" },
  { phoneCode: "+880", countryCode: "BD" },
  { phoneCode: "+966", countryCode: "SA" },
];

export interface IPhoneCode {
  phoneCode: string;
  countryCode: string;
}
export default phoneCodes;
