const ABI = [
  {
    constant: true,
    inputs: [{ name: "donoradd", type: "address" }],
    name: "getdonor",
    outputs: [
      { name: "", type: "address" },
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "bool" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "hospitalId", type: "address" }],
    name: "addHospital",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "donorid", type: "address" },
      { name: "hospitalid", type: "address" },
      { name: "organ", type: "string" },
      { name: "bloodgroup", type: "string" },
    ],
    name: "creatRequestDonar",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "gethospitalcount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "Recipients",
    outputs: [
      { name: "patientid", type: "address" },
      { name: "hospitalid", type: "address" },
      { name: "organ", type: "string" },
      { name: "bloodgroup", type: "string" },
      { name: "matchfound", type: "bool" },
      { name: "exist", type: "bool" },
      { name: "added", type: "bool" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "recipientad", type: "address" }],
    name: "transplantmatch",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getrecipientcount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "Donors",
    outputs: [
      { name: "donorid", type: "address" },
      { name: "hospitalid", type: "address" },
      { name: "organ", type: "string" },
      { name: "bloodgroup", type: "string" },
      { name: "matchfound", type: "bool" },
      { name: "exist", type: "bool" },
      { name: "added", type: "bool" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "hospitalId", type: "address" },
      { name: "name", type: "string" },
    ],
    name: "creatRequestHospital",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "patientid", type: "address" },
      { name: "hospitalid", type: "address" },
      { name: "organ", type: "string" },
      { name: "bloodgroup", type: "string" },
    ],
    name: "creatRequestRecipient",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "position", type: "uint256" }],
    name: "gettransplantDetails",
    outputs: [
      { name: "", type: "address" },
      { name: "", type: "address" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "patientid", type: "address" }],
    name: "addrecipient",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getDonorcount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "donoradd", type: "address" }],
    name: "getdonorwithtransplant",
    outputs: [
      { name: "", type: "address" },
      { name: "", type: "string" },
      { name: "", type: "string" },
      { name: "", type: "address" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "reciadd", type: "address" }],
    name: "getrecipient",
    outputs: [
      { name: "", type: "address" },
      { name: "", type: "address" },
      { name: "", type: "string" },
      { name: "", type: "string" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "gettransplantlength",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "donori", type: "address" }],
    name: "addDonar",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

export default ABI;