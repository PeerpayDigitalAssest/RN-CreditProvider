# API SCHEMA DOCUMENT

## APIs NEEDED (BASED ON THE GIVEN UI DESIGN)

### LIST OF BANKS [GET REQUEST]

This is needed for me to show the list of banks to the user selecting Credit Provider's Bank and Co-Signer's Bank.

### ACCOUNT NAME (BASED ON ACCOUNT NUMBER AND BANK NAME) [GET REQUEST]

I will need to show the account name for the user to confirm that the account number and bank selection are correctly written.

### CREDIT REQUEST [POST REQUEST]

Requesting Credit from Credit Provider - filling out necessary information.

#### CREDIT INFORMATION (1/3 CREDIT REQUEST)

- creditAmount: string (example: 100,000.00) - This is the amount they need.
- durationInMonths: number (example: 6) - This is the duration of the credit.
- monthlyPayment: string (example: 40,000) -  This is likely the amount the user is expected to pay monthly.
- creditProviderAccountNumber: number (example: 1234567890) - This is the account number of the credit provider.
- creditProviderBank: string (example Access Bank) - This is the bank of the credit provider.
- creditProviderAccountName (optional): string (example: John Doe) - This is the account name of the credit provider.

#### CO-SIGNER INFORMATION (2/3 CREDIT REQUEST)

This will be a **list** of Co-Signers will the following information: [CoSignerObject]

- accountNumber: number (example: 1234567890) - This is the account number of the co-signer.
- bank: string (example: Access Bank) - This is the bank of the co-signer.
- residentialAddress: string (example: 123 Main Street) - This is the residential address of the co-signer.
- relationshipToCoSigner: string (example: Husband) - This is the relationship of the co-signer to the credit receiver.
- occupation: string (example: Engineer) - This is the occupation of the co-signer.

#### TERMS OF SERVICE (3/3 CREDIT REQUEST)

This is an optional parameter, but it is required in the mobile side. I am adding it in case it is necessary from the backend side of things.

- acceptTermsAndConditions: boolean (example: true)

### MY RECORDS [GET REQUEST]

This is the **list** of request that returns the list of requesting for credit (and maybe also providing credit too).

- bankName: string
- accountName: string
- accountNumber: string
- amount: string
- currency: string (NGN not ₦) [might default to NGN]
- dateAndTime: ISO string || DateTime

### NOTIFICATIONS [GET REQUEST]

This is the **list** of notifications based on credit request or credit approval.
For now, it is only **"Credit Reuqest"** that I am aware of. We will likely give params for other kinds of notifications:

- notificationType: string (example: creditRequest) - This gives the frontend the kind of notification coming in for the user.
--------------- This is specifically for credit request ------------------
- nameOfRquester: string (example: John Doe) - This is the name of the person requesting for credit.
- bankName: string (example: Access Bank) - This is the bank of the person requesting for credit.
- accountNumber: string (example: 1234567890) - This is the account number of the person requesting for credit.
- dateAndTime: ISO string || DateTime
- amount: string (example: 100,000.00) - This is the amount the person requesting for credit.
- currency: string (example: NGN) - This is the currency of the person requesting for credit.
- creditID: string (example: 1234567890) - This is the credit ID of the person requesting for credit.
- duration: number (example: 6) - This is the duration (in months) of the person requesting for credit.
- interest: number (example: 10) - This is the interest rate of the person requesting for credit.
- creditScore: number (example: 700) - This is the credit score of the person requesting for credit.
- coSigners: [CoSignerObject] - This is the list of co-signers of the person requesting for credit. This is also include the credit score of each co-signer.
- totalCreditScore: number (example: 99.40) - This will be the cumulative sum of the credit receiver's credit score including all their co-signers.
- creditRemark: string (example: The borrower is qualified to get a loan approval) - This will be the remark based on the total score, if the user can get a loan or not.
- isUserQualified: boolean (example: false) - This will be true if the user can get a loan, false otherwise. This is for the (frontend) developer
--------------- This is end of credit request ------------------

## APIs SCHEMA

### LIST OF BANKS [GET /banks]

- Description: Returns a list of supported banks for selection.
- Response Example:

```json
[
  { "bankCode": "044", "bankName": "Access Bank" },
  { "bankCode": "011", "bankName": "First Bank" }
]
```

### ACCOUNT NAME LOOKUP [GET /accounts/lookup?accountNumber=...&bankCode=...]

Description: Returns the account name for a given account number and bank.
Response Example:

```json
{ "accountName": "John Doe" }
```

### CREDIT REQUEST [POST /credit-requests]

Description: Submits a new credit request.
Request Body Example:

```json
{
  "creditInformation": {
    "creditAmount": "100,000.00",
    "durationInMonths": 6,
    "monthlyPayment": "40,000",
    "creditProviderAccountNumber": 1234567890,
    "creditProviderBank": "Access Bank", // or bankCode
    "creditProviderAccountName": "John Doe"
  },
  "coSigners": [
    {
      "accountNumber": 1234567890,
      "bank": "Access Bank", // or bankCode
      "residentialAddress": "123 Main Street",
      "relationshipToCoSigner": "Husband",
      "occupation": "Engineer"
    }
  ],
  "acceptTermsAndConditions": true
}
```

### MY RECORDS [GET /records]

Description: Returns a list of credit requests and/or credits provided.
Response Example:

```json
[
  {
    "bankName": "Access Bank",
    "accountName": "John Doe",
    "accountNumber": "1234567890",
    "amount": "100,000.00",
    "currency": "NGN",
    "dateAndTime": "2025-07-24T12:00:00Z"
  }
]
```

### NOTIFICATIONS [GET /notifications]

Description: Returns a list of notifications related to credit requests or approvals.
Response Example:

```json
[
  {
    "notificationType": "creditRequest",
    "creditRequest": {
    "nameOfRequester": "John Doe",
    "bankName": "Access Bank",
    "accountNumber": "1234567890",
    "dateAndTime": "2025-07-24T12:00:00Z",
    "amount": "100,000.00",
    "currency": "NGN",
    "creditID": "1234567890",
    "duration": 6,
    "interest": 10,
    "creditScore": 700,
    "coSigners": [
      {
        "accountNumber": 1234567890,
        "bank": "Access Bank",
        "residentialAddress": "123 Main Street",
        "relationshipToCoSigner": "Husband",
        "occupation": "Engineer",
        "creditScore": 650
      }
    ],
    "totalCreditScore": 99.4,
    "creditRemark": "The borrower is qualified to get a loan approval",
    "isUserQualified": true
    },
    "creditProvider": null,
  }
]
```

### CO-SIGNER OBJECT EXAMPLE

```ts
interface CoSignerObject {
    accountNumber: number;
    bank: string;
    residentialAddress: string;
    relationshipToCoSigner: string;
    occupation: string;
    creditScore: number;
}
```
