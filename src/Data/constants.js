import {Images} from '../assets'

export const AccountCategory = [
	{ label: "--None--", value: "" },
	{ label: "I", value: "I" },
	{ label: "C", value: "C" },
];

export const AccountType = [
	{ label: "--None--", value: "" },
	{ label: "C", value: "C" },
	{ label: "S", value: "S" },
];

export const ApplicationStatus = [
	"New",
	"Submitted",
	"Pre-Credit Review",
	"Credit Review",
	"Dealmaker",
	"Document Sent",
	"Funding",
	"Document Data Revicw",
	"TLO Pull",
];

export const AssetTypes = [
	{
		title: "Construction",
		icon: Images.CONSTRUCTION,
	},
	{
		title: "Farming",
		icon: Images.FARMING,
	},
	{
		title: "Trailer",
		icon: Images.TRAILER,
	},
	{
		title: "Logging",
		icon: Images.LOGGING,
	},
	{
		title: "Manufacturing",
		icon: Images.MANUFACTURING,
	},
	{
		title: "Machine Tool",
		icon: Images.MACHINE_TOOL,
	},
	{
		title: "Heavy Duty Sleeper Truck",
		icon: Images.SLEEPER_TRUCK,
	},
	{
		title: "Printing",
		icon: Images.PRINTING,
	},
	{
		title: "Vocational Transportation",
		icon: Images.VOCATIONAL_TRANSPORTATION,
	},
	{
		title: "Other Transportation",
		icon: Images.OTHER_TRANSPORTING,
	},
	{
		title: "Other",
		icon: Images.OTHER,
	},
];

export const DocumentTypes = [
	{
		title: "Credit Application",
		icon: Images.CREDIT_APPLICATION,
	},
	{
		title: "Vendor Invoice",
		icon: Images.VENDOR_INVOICE,
	},
	{
		title: "Vehicle Spec. Sheet",
		icon: Images.VEHICLE_SPEC,
	},
	{
		title: "Email Package Data Entry",
		icon: Images.EMAIL_PKG,
	},
	{
		title: "Other",
		icon: Images.OTHER_DOC,
	},
];

export const franchiseType = [
	{label: "--None--", value:""},
	{label: "Restaurant", value: "Restaurant"},
	{label: "Salon", value: "Salon"},
];

export const franchiseNameRestaurant = [
	{label: "--None--", value: ""},
	{label: "Dickey’s Barbeque Pit", value:"Dickey’s Barbeque Pit"},
	{label: "Your Pie", value:"Your Pie"},
	{label: "Salata", value:"Salata"},
	{label: "Blaze Pizza", value:"Blaze Pizza"},
	{label: "Jersey Mikes", value:"Jersey Mikes"},
	{label: "Which Wich", value:"Which Wich"},
	{label: "Krispy Kreme", value:"Krispy Kreme"},
	{label: "Taco Bell", value:"Taco Bell"},
	{label: "Burger King", value:"Burger King"},
	{label: "Subway", value:"Subway"},
	{label: "Dunkin Doughnut", value:"Dunkin Doughnut"},
	{label: "KFC", value: "KFC"},
	{label: "Dominos Pizza", value:"Dominos Pizza"},
	{label: "Papa Johns", value:"Papa Johns"},
	{label: "Pizza Hut", value: "Pizza Hut"},
	{label: "Firehouse", value:"Firehouse"},
];

export const franchiseNameSalon = [
	{label: "--None--", value: ""},
	{label: "Anytime Fitness", value: "Anytime Fitness"},
	{label: "Great Clips", value: "Great Clips"}
];

export const States = [
	{ label: "--None--", value: "" },
	{ label: "Alaska", value: "AK" },
	{ label: "Alabama", value: "AL" },
	{ label: "Arkansas", value: "AR" },
	{ label: "Arizona", value: "AZ" },
	{ label: "California", value: "CA" },
	{ label: "Colorado", value: "CO" },
	{ label: "Connecticut", value: "CT" },
	{ label: "Washington DC", value: "DC" },
	{ label: "Delaware", value: "DE" },
	{ label: "Florida", value: "FL" },
	{ label: "Georgia", value: "GA" },
	{ label: "Hawaii", value: "HI" },
	{ label: "Iowa", value: "IA" },
	{ label: "Idaho", value: "ID" },
	{ label: "Illinois", value: "IL" },
	{ label: "Indiana", value: "IN" },
	{ label: "Kansas", value: "KS" },
	{ label: "Kentucky", value: "KY" },
	{ label: "Louisiana", value: "LA" },
	{ label: "Massachusetts", value: "MA" },
	{ label: "Maryland", value: "MD" },
	{ label: "Maine", value: "ME" },
	{ label: "Michigan", value: "MI" },
	{ label: "Minnesota", value: "MN" },
	{ label: "Missouri", value: "MO" },
	{ label: "Mississippi", value: "MS" },
	{ label: "Montana", value: "MT" },
	{ label: "North Carolina", value: "NC" },
	{ label: "North Dakota", value: "ND" },
	{ label: "Nebraska", value: "NE" },
	{ label: "New Hampshire", value: "NH" },
	{ label: "New Jersey", value: "NJ" },
	{ label: "New Mexico", value: "NM" },
	{ label: "Nevada", value: "NV" },
	{ label: "New York", value: "NY" },
	{ label: "Ohio", value: "OH" },
	{ label: "Oklahoma", value: "OK" },
	{ label: "Oregon", value: "OR" },
	{ label: "Pennsylvania", value: "PA" },
	{ label: "Rhode Island", value: "RI" },
	{ label: "South Carolina", value: "SC" },
	{ label: "South Dakota", value: "SD" },
	{ label: "Tennessee", value: "TN" },
	{ label: "Texas", value: "TX" },
	{ label: "Utah", value: "UT" },
	{ label: "Virginia", value: "VA" },
	{ label: "Vermont", value: "VT" },
	{ label: "Washington", value: "WA" },
	{ label: "Wisconsin", value: "WI" },
	{ label: "West Virginia", value: "WV" },
	{ label: "Wyoming", value: "WY" },
	{ label: "MISSING", value: "ZZ" },
	{ label: "District of Columbia", value: "D2" },
];

export const SoleBusinessEntityType = [
	{ label: "--None--", value: "" },
	{ label: "Sole Proprietorship", value: "Sole Proprietorship" },
];

export const BusinessEntityType = [
	{ label: "--None--", value: "" },
	{ label: "Corporation", value: "Corporation" },
	{ label: "LLC", value: "LLC" },
	{ label: "LLP", value: "LLP" },
	{ label: "Partnership", value: "Partnership" },
	{ label: "Other", value: "Other" },
	{ lable: "Sole Proprietorship", value: "Sole Proprietorship"},
];

export const Address2Types = [
	{ label: "--None--", value: "" },
	{ label: "Apt", value: "Apt" },
	{ label: "Unit", value: "Unit" },
	{ label: "Suite", value: "Suite" },
	{ label: "Floor", value: "Floor" },
	{ label: "Building", value: "Building" },
];

export const PersonalGuarantorRelationshipTypes = [
	{
		title: "Business Partner",
		icon: Images.BUSINESS_PARTNER_LOGO,
	},
	{
		title: "Cousin",
		icon: Images.COUSIN_LOGO,
	},
	{
		title: "Employee",
		icon: Images.EMPLOYEE_LOGO,
	},
	{
		title: "Father-in-law",
		icon: Images.FATHER_IN_LAW_LOGO,
	},
	{
		title: "Friend",
		icon: Images.FRIEND_LOGO,
	},
	{
		title: "Individual",
		icon: Images.INDIVIDUAL_LOGO,
	},
	{
		title: "Other Family Member",
		icon: Images.OTHER_FAMILY_LOGO,
	},
	{
		title: "Owner",
		icon: Images.OWNER_LOGO,
	},
	{
		title: "Parent",
		icon: Images.PARENTS_LOGO,
	},
	{
		title: "Sibling",
		icon: Images.SIBLINGS_LOGO,
	},
	{
		title: "Son",
		icon: Images.SON_LOGO,
	},
	{
		title: "Spouse",
		icon: Images.SPOUSE_LOGO,
	},
];

export const CorporateGuarantorRelationshipTypes = [
	{
		title: "Business Partner",
		icon: Images.BUSINESS_PARTNER_LOGO,
	},
	{
		title: "Employee",
		icon: Images.EMPLOYEE_LOGO,
	},
	{
		title: "Individual",
		icon: Images.INDIVIDUAL_LOGO,
	},
	{
		title: "Owner",
		icon: Images.OWNER_LOGO,
	},
	{
		title: "Managing Member",
		icon: Images.OTHER_FAMILY_LOGO,
	},
	{
		title: "Member",
		icon: Images.SIBLINGS_LOGO,
	},
	{
		title: "President",
		icon: Images.SPOUSE_LOGO,
	},
];



export const ApplicantType = {
	SOLE: "Sole Proprietor",
	BUSINESS: "Business",
};

export const GuarantorType = {
	SELF: "Self",
	PERSONAL: "Personal",
	CORPORATE: "Corporate",
};

export const SideBarItems = [
	{
		title: "Applicant",
		icon: Images.APPLICANT,
		activeIcon: Images.APPLICANT_ACTIVE,
		enable: true,
		completed: false,
	},
	{
		title: "Guarantor",
		icon: Images.GUARANTOR,
		activeIcon: Images.GUARANTOR_ACTIVE,
		enable: false,
		completed: false,
	},
	{
		title: "Asset",
		icon: Images.ASSET,
		activeIcon: Images.ASSET_ACTIVE,
		enable: false,
		completed: false,
	},
	{
		title: "Document",
		icon: Images.DOCUMENT,
		activeIcon: Images.DOCUMENT_ACTIVE,
		enable: false,
		completed: false,
	},
	{
		title: "Submit",
		icon: Images.SUBMIT,
		activeIcon: Images.SUBMIT_ACTIVE,
		enable: false,
		completed: false,
	},
];

export const Salutations = [
	{ label: "Mr.", value: "Mr." },
	{ label: "Ms.", value: "Ms." },
	{ label: "Mrs.", value: "Mrs." },
	{ label: "Dr.", value: "Dr." },
	{ label: "Prof.", value: "Prof." },
];

export const MaritalStatus = [
	{ label: "Single", value: "Single" },
	{ label: "Married", value: "Married" },
	{ label: "Divorced", value: "Divorced" },
	{ label: "Widowed", value: "Widowed" },
	{ label: "Unknown", value: "Unknown" },
];
