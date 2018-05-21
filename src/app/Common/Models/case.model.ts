class IncidentRefType {
    public __invalid_name__$id: string;
    public Name: string;
    public RequestAdditionalInfo: object;
    public TypeCode: string;
    public TypeQty: number;
    public TypeReference: object;
}

class Incident {
    public __invalid_name__$id: string;
    public IncidentDate: Date;
    public IncidentRef: object;
    public IncidentRefType: IncidentRefType;
}

class ReferrerOrganisation {
    public __invalid_name__$id: string;
    public AddressName: object;
    public Name: string;
    public RequestAdditionalInfo: object;
    public TypeCode: object;
    public TypeQty: number;
    public TypeReference: object;
}

class Referrer {
    public __invalid_name__$id: string;
    public ReferrerOrganisation: ReferrerOrganisation;
    public ReferrerPerson: object;
    public ReferrerReference: string;
}

class Organisation {
    public __invalid_name__$id: string;
    public AddressName: object;
    public Name: string;
    public RequestAdditionalInfo: object;
    public TypeCode: object;
    public TypeQty: number;
    public TypeReference: object;
}

class Address {
    public __invalid_name__$id: string;
    public Identification: number;
    public Line1: object;
    public Line2: object;
    public Line3: object;
    public Line4: object;
    public Line5: object;
    public Line6: object;
    public BuildingName: object;
    public BuildingNumber: object;
    public CountryCode: string;
    public DepartmentName: object;
    public DependentLocality: string;
    public DoubleDependentLocality: object;
    public OrganisationName: string;
    public PostCode: string;
    public PostTown: string;
    public SubBuildingName: object;
    public ThoroughfareName: string;
}

class InstructingParty {
    public __invalid_name__$id: string;
    public Referrer: Referrer;
    public CaseClientDataFromWCFServiceID: number;
    public CaseReference: string;
    public OPDataInd: number;
    public Organisation: Organisation;
    public TypeCode: object;
    public Address: Address;
    public Contacts: object[];
    public FirstName: string;
    public InsurancePolicies: object[];
    public MiddleName: object;
    public Notes: object[];
    public Position: object;
    public Relationship: object;
    public Surname: string;
    public Title: string;
}

class InstructionType {
    public __invalid_name__$id: string;
    public Name: string;
    public RequestAdditionalInfo: object;
    public TypeCode: string;
    public TypeQty: number;
    public TypeReference: object;
}

class Organisation2 {
    public __invalid_name__$id: string;
    public AddressName: object;
    public Name: object;
    public RequestAdditionalInfo: object;
    public TypeCode: object;
    public TypeQty: number;
    public TypeReference: object;
}

class ThirdParty {
    public __invalid_name__$id: string;
    public CaseClientDataFromWCFServiceID: number;
    public CaseReference: string;
    public OPDataInd: number;
    public Organisation: Organisation2;
    public TypeCode: object;
    public Address: object;
    public Contacts: object[];
    public FirstName: object;
    public InsurancePolicies: object[];
    public MiddleName: object;
    public Notes: object[];
    public Position: object;
    public Relationship: object;
    public Surname: object;
    public Title: object;
}

class Claim {
    public __invalid_name__$id: string;
    public Incident: Incident;
    public InstructingParty: InstructingParty;
    public InstructionType: InstructionType;
    public BillingSchemeName: object;
    public BillingSchemeOrganisationName: object;
    public CaseHandlerEmail: object;
    public CaseHandlerInitials: object;
    public CaseHandlerName: object;
    public CaseHandlerTelephone: object;
    public ClaimantRepresentative: object;
    public DocumentAttachments: object;
    public ExpertSpecialInstructions: object;
    public ExpertToSeePreviousReport: boolean;
    public ExpertType: object;
    public InjuryList: object;
    public IsAdditionalInstructionbool;
    public LitigationFriend: object;
    public MedicalConsentObtainer: object;
    public MedicalRecordsObtainer: object;
    public OPRepresentingClaimant: boolean;
    public ObtainLatestMedicalRecords: boolean;
    public PhysioRequired: boolean;
    public PreviousMedicalAgencyRef: boolean;
    public SpecialInstructions: object;
    public ThirdParty: ThirdParty;
}

class Address2 {
    public __invalid_name__$id: string;
    public Identification: number;
    public Line1: object;
    public Line2: object;
    public Line3: object;
    public Line4: object;
    public Line5: object;
    public Line6: object;
    public BuildingName: object;
    public BuildingNumber: number;
    public CountryCode: string;
    public DepartmentName: object;
    public DependentLocality: string;
    public DoubleDependentLocality: object;
    public OrganisationName: object;
    public PostCode: string;
    public PostTown: string;
    public SubBuildingName: object;
    public ThoroughfareName: string;
}

class Contact {
    public __invalid_name__$id: string;
    public Value: string;
    public Name: string;
    public RequestAdditionalInfo: object;
    public TypeCode: string;
    public TypeQty: number;
    public TypeReference: object;
    public ID: number;
}

class Note {
    public __invalid_name__$id: string;
    public Text: string;
}

class Claimant {
    public __invalid_name__$id: string;
    public DateOfBirth: Date;
    public Gender: string;
    public Address: Address2;
    public Contacts: Contact[];
    public FirstName: string;
    public InsurancePolicies: object[];
    public MiddleName: object;
    public Notes: Note[];
    public Position: object;
    public Relationship: object;
    public Surname: string;
    public Title: string;
}

class Defendant {
    public __invalid_name__$id: string;
    public DateOfBirth: Date;
    public Gender: object;
    public Address: object;
    public Contacts: object[];
    public FirstName: object;
    public InsurancePolicies: object[];
    public MiddleName: object;
    public Notes: object[];
    public Position: object;
    public Relationship: object;
    public Surname: object;
    public Title: object;
}
class InstructingParty2 {
    public __invalid_name__$ref: string;
}

class LiabilityStatus {
    public __invalid_name__$id: string;
    public Name: string;
    public RequestAdditionalInfo: object;
    public TypeCode: string;
    public TypeQty: number;
    public TypeReference: object;
}

class OtherParty {
    public __invalid_name__$id: string;
    public CaseClientDataFromWCFServiceID: number;
    public CaseReference: object;
    public OPDataInd: number;
    public Organisation: object;
    public TypeCode: object;
    public Address: object;
    public Contacts: object[];
    public FirstName: string;
    public InsurancePolicies: object[];
    public MiddleName: string;
    public Notes: object[];
    public Position: object;
    public Relationship: object;
    public Surname: object;
    public Title: object;
}

class RequestedProduct {
    public __invalid_name__$id: string;
    public Description: object;
    public Name: object;
    public RequestAdditionalInfo: object;
    public TypeCode: object;
    public TypeQty: number;
    public TypeReference: object;
}

class CaseSummaryCounters {
    public __invalid_name__$id: string;
    public Appointments: number;
    public Documents: number;
    public DocumentsReceived: number;
    public DocumentsSent: number;
    public Invoices: number;
    public LeadForCase: number;
    public MedicalRecords: number;
    public Notes: number;
    public OSReports: number;
    public Orders: number;
    public PreOrders: number;
    public PurchaseInvoices;
    public Quotes: number;
    public Reports: number;
    public Tasks: number;
    public UnRecognisedOrderForCase: number;
}

class IPExtraData {
    public __invalid_name__$id: string;
    public ClaimSeqNumber: object;
    public DCObtainRecs: boolean;
    public IPObtainRecs: boolean;
    public NoRecords: boolean;
    public UnInsured: boolean;
    public UnTraced: boolean;
}

class MIST {
    public __invalid_name__$id: string;
    public CNFPreOct2014: object;
    public ClaimantInVehicle: object;
    public History: object;
    public InjuryDetails: object;
    public MISTStatus: boolean;
    public MedCoReference: object;
}

export class CaseModel {
    public __invalid_name__$id: string;
    public CaseReference: string;
    public Claim: Claim;
    public Claimant: Claimant;
    public ClientCaseRef: string;
    public Defendant: Defendant;
    public InstructingParty: InstructingParty2;
    public LiabilityStatus: LiabilityStatus;
    public OPRepresentingClaimant: boolean;
    public OtherParty: OtherParty;
    public RequestedProducts: RequestedProduct[];
    public Appointment: object;
    public BillingSchemeID: number;
    public BrandId: number;
    public BrandName: string;
    public CaseNotes: object;
    public CaseOption: object;
    public CaseStatusBy: string;
    public CaseStatusDate: Date;
    public CaseStatusName: string;
    public CaseSummaryCounters: CaseSummaryCounters;
    public Created: Date;
    public CreatedBy: string;
    public CustomersSolicitor: object;
    public DCCloudDraftCaseId: number;
    public EmailValidationRegex: string;
    public FileMakerCase: boolean;
    public IPExtraData: IPExtraData;
    public LOIDocumentID: number;
    public LinkedCases: object[];
    public MIST: MIST;
    public MethodOfInstruction: string;
    public MobileValidationRegex: string;
    public NominationRequested: string;
    public OutstandingWebOrders: boolean;
    public RepresentingClaimant: boolean;
    public RepresentingClaimantNotSpecified: boolean;
    public RequestType: number;
    public SupplierList: object[];
}