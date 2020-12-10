// // import { DevTool } from "@hookform/devtools";
// // import { yupResolver } from "@hookform/resolvers";
// import React, { useState, useEffect } from "react";
// // import { Controller, useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";
// // import { useSelector } from "react-redux";
// import { Images } from "../../assets";
// import { Address2Types, PersonalGuarantorRelationshipTypes, States } from "../../../../data/constants";
// import { GuarantorType, MaritalStatus, Salutations } from "../../Data/constants";
// // import NMEFTextField from "../../../nmef-text-field/nmef-text-field";
// import GuarantorRelationshipSelector from "./guarantor-relationship-selector";
// // import "./guarantor.scss";
// // import AsyncSelect from 'react-select/async';
// // import GoogleAutoCompleteText from '../../../GmapAutoComplete/GoogleMap';
// // import NMEFTextPhoneField from '../../../nmef-phone-text/nmef-phone-text';
// import Moment from 'moment';
// import Grid from '@material-ui/core/Grid';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import SaveIcon from '@material-ui/icons/Save';
// import CloseIcon from '@material-ui/icons/Close';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import Checkbox from '@material-ui/core/Checkbox';
// import EditIcon from '@material-ui/icons/Edit';
// import { SpaOutlined } from "@material-ui/icons";
// import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
// import UseStyles from "../UseStyles";

// // React Select Dropdown Styles

// const dropDownstyle = {
// 	control: (styles) => ({
// 		...styles,
// 		backgroundColor: "#f1f1f2",
// 		height: "38px",
// 		borderRadius: "0",
// 	}),
// 	indicatorSeparator: () => null,
// };

// const GuarantorForm = ({
// 	submitReference,
// 	resetReference,
// 	guarantor,
// 	submitGuarantor,
// 	guarantorType,
// 	applicantBasicInfo
// }) => {

// 	const history = useHistory();

// 	const GurantorData = history.location.state?.guarantorInfo;
// 	const type = history.location.state?.type;

// 	// const guarantors = useSelector((state) => state.appEntry.guarantors);
// 	const [guarantorInfo,setGurantorInfo]=useState([]);
// 	const [guarantorTypeInfo,setGurantorTypeInfo]=useState("");
// 	const [selectedSalutation, setselectedSalutation] = useState([]);
// 	const [selectedMaritalStatus, setselectedMaritalStatus] = useState([]); 
// 	const [selectedState, setselectedState] = useState([]);
	
// 	const [ownerShip,setownerShip] =useState(0);
// 	console.log('guarantorInfo ',guarantorInfo);
// 	const calculatePercentage = () => {
// 		const total = guarantors.reduce((acc, current) => {
// 			return parseFloat(acc) + parseFloat(current.ownership);
// 		}, 0.0);
// 		return total;
// 	};

// 	const [Errors, setErrors] = useState({
// 		salutation: 'test',
// 		maritalStatus:'test',
//         state: 'test',
// 		address: 'test',
// 		phone: '000',
// 	});
// 	const [MapState, setMapState] = useState({
//         location: '',
//         streetNumber: '',
//         street: '',
//         city: '',
//         stateCode: '',
//         zipCode: ''
//     });

// 	const { register, handleSubmit, errors, control, reset } = useForm({
// 		defaultValues: guarantor,
// 		resolver: yupResolver(PersonalGuarantorSchema),
// 	});

// 	let [
// 		selectedGuarantorRelationship,
// 		setSelectedGuarantorRelationship,
// 	] = useState(
// 		PersonalGuarantorRelationshipTypes.find(
// 			(relationType) =>
// 				guarantor && relationType.title === guarantor.relationToApplicant
// 		)
// 	);

// 	const guarantorRelationshipSelected = (selectedType) => {
// 		setSelectedGuarantorRelationship(selectedType);
// 	};

// 	useEffect(() => {
// 		setGurantorInfo(GurantorData);
// 		setGurantorTypeInfo(type);
// 		guarantorType=guarantorTypeInfo;
// 		setErrors({...Errors, phone: GurantorData ? GurantorData.phone : '000'});
// 	}, [GurantorData]);

// 	useEffect(() => {
// 		if(applicantBasicInfo){
// 			const dataList = {
// 				firstName: applicantBasicInfo.applicant_name,
// 				ssn: applicantBasicInfo.fein_ssn ,
// 				email: applicantBasicInfo.email ,
// 				state: applicantBasicInfo.state,
// 				phone: applicantBasicInfo.phone ,
// 				cell: applicantBasicInfo.cell,
// 				fax: applicantBasicInfo.fax,
// 				address: applicantBasicInfo.address,
// 				street: applicantBasicInfo.street,
// 				city: applicantBasicInfo.city,
// 				county: applicantBasicInfo.county,
// 				zip: applicantBasicInfo.zip_code,
			
// 			};
// 			setGurantorInfo(dataList);
// 		}
// 	}, [applicantBasicInfo]);

// 	useEffect(() => {
// 		if(MapState.city){
// 			console.log('Acces map',MapState);
// 			console.log('Acces map',MapState.stateCode);
// 		setselectedState(MapState.stateCode);
// 		}
// 	}, [MapState.city]);

// 	useEffect(() => {
// 		if(guarantorInfo){
// 		const selectedIcon = PersonalGuarantorRelationshipTypes.find(x => x.title === guarantorInfo.relationToApplicant);
// 		setSelectedGuarantorRelationship(selectedIcon)
// 		console.log('s data ',guarantorInfo.salutation);
// 		const setSalutation = Salutations.find(option => option.value === guarantorInfo.salutation);
// 		  setselectedSalutation(setSalutation ? setSalutation: null);
// 		  console.log('MapState-',MapState.stateCode);
// 		  const setState =States.find(option => option.value === guarantorInfo.state);
// 		  setselectedState(setState ? setState : null);
// 		  if(MapState.zipCode){
// 			  console.log('MapState.zipCode-',MapState.zipCode);
// 			setselectedState(MapState.stateCode[0]);
// 		  }
// 		  console.log('State-',setState);
// 		  const setmaritalStatus = MaritalStatus.find(option => option.value === guarantorInfo.maritalStatus);
// 		  setselectedMaritalStatus(setmaritalStatus ? setmaritalStatus: null);
// 		  setPhoneRawValue(guarantorInfo.phone);
// 		}
// 	}, [guarantorInfo]);




// 	const [phoneRawValue, setPhoneRawValue] = useState("");
//     const [mobileRawValue, setMobileRawValue] = useState("");
//     const [faxRawValue, setFaxRawValue] = useState("");

//     function onCustomPhoneValueChange(e) {
//         setPhoneRawValue(e.target.rawValue);
//     }

//     function onCustomMobileValueChange(e) {
//         setMobileRawValue(e.target.rawValue);
//     }

//     function onCustomFaxValueChange(e) {
//         setFaxRawValue(e.target.rawValue);
// 	}


// 	// const updateMapInfo = (state) => {
// 	// 	setMapState({
// 	// 		location: state.location,
// 	// 		streetNumber: state.streetNumber,
// 	// 		street: state.street,
// 	// 		city: state.city,
// 	// 		stateCode: state.stateCode,
// 	// 		zipCode: state.zipCode,
// 	// 		county: state.county
// 	// 	});
// 	// }

// 	const formSubmit = (data) => {
// 		console.log('State code',MapState);
// 		console.log('State code 2- ',MapState.stateCode[0]);
// 		let selectedStateValue = MapState ? MapState.stateCode[0] :  selectedState ? selectedState : null ;
// 		let MaritalStatusVal = selectedMaritalStatus ? selectedMaritalStatus : guarantorInfo ? MaritalStatus.find(option => option.value === guarantorInfo.maritalStatus) : null;
//         console.log('selectedStateValue',selectedStateValue?.value);
//         console.log('selectedMaritalStatus',MaritalStatusVal);
//         setErrors({ state: selectedStateValue ? selectedStateValue.value : null, maritalStatus: MaritalStatusVal ? MaritalStatusVal.value : null , phone: phoneRawValue.substr(0,10)});
// 		console.log('selectedMaritalStatus',selectedStateValue,MaritalStatusVal,phoneRawValue);
// 		if (!selectedStateValue || !MaritalStatusVal || phoneRawValue.substr(0, 10).length<10) return;
// 	  const {
// 		address_2_type,
// 		state,
// 		salutation,
// 		maritalStatus,
// 		...userData
// 	} = data;
// 		submitGuarantor({
// 			...data,
// 			salutation: selectedSalutation?.value,
// 			id:guarantorInfo ? guarantorInfo.id : null,
// 			guarantor_id:guarantorInfo ? guarantorInfo.guarantor_id : null,
// 			dob: Moment(data.dob).format('YYYY-MM-DD') ,
// 			maritalStatus:MaritalStatusVal?.value,
// 			state:selectedStateValue?.value,
// 			type:'Personal',
// 			phone: phoneRawValue.substr(0,10),
//             mobile: mobileRawValue.substr(0,10),
//             fax: faxRawValue.substr(0,10),
// 			is_personal_guarantor:true,
// 			relationToApplicant: selectedGuarantorRelationship === undefined ? null :  selectedGuarantorRelationship.title ,
// 		});
     	
// 	};

// 	const totalOwnerShipPrev=() =>{ 
// 		const totalOwnerShipPrev = guarantors.reduce((acc,current) => {
// 				return parseFloat(acc)+ parseFloat(current.ownership);
// 				}, 0.0);
// 	return totalOwnerShipPrev;

// };

// 	const formReset = () => reset();

// 	return (
// 		<Box className={classes.main_grid} p={2} bgcolor="background.paper">
// 			<Grid container >
// 				<Grid  item xs={12}>
// 					<div className="form__header">
// 					<img src={Images.GUARANTOR} alt="icon" />
// 					<h4>Guarantor Information</h4>
// 					</div>
// 				</Grid>

// 				<Grid  item xs={12}>
// 				   <div className="form__content--header">
// 					<div className="header-title">
// 						<img src={Images.PERSONAL} alt="icon" />
// 						<h4>Personal Guarantor</h4>
// 					</div>
// 					<div className="divider">|</div>
// 					<div>
// 						<input type="checkbox" name="contactOnly" ref={register} defaultChecked={guarantorInfo ? guarantorInfo.contactOnly : false} /> This Gurantor
// 						is contact only
// 					</div>
// 				   </div>
// 				</Grid>

// 				<Grid  item xs={12}>
// 					<div>
// 						{  guarantorTypeInfo === GuarantorType.PERSONAL  ? (
// 							<GuarantorRelationshipSelector
// 								relationshipTypes={PersonalGuarantorRelationshipTypes}
// 								onSelect={guarantorRelationshipSelected}
// 								selected={selectedGuarantorRelationship}
// 							/>
// 						) : null}
// 					</div>
// 				</Grid>
// 				<Grid  item xs={12}>
					
// 				</Grid>

// 			</Grid>
// 		</Box>	
// 	);
// };

// export default GuarantorForm;
