import React from "react";
import SelectorItem from "./selector-item";
// import "./guarantor.scss";

const GuarantorRelationshipSelector = ({
	relationshipTypes,
	onSelect,
	selected,
}) => {
	return (
		<div className="guarantor-relationship_selector__container">
			<div className="guarantor-relationship_selector__title">
				Relationship with the Applicant (Select One) <strong>*</strong>
			</div>
			<div className="guarantor-relationship_selector__selectors">
				{relationshipTypes.map((relationType, index) => (
					<SelectorItem
						title={relationType.title}
						image={relationType.icon}
						key={index}
						selected={selected?.title === relationType.title}
						onSelect={() => onSelect(relationType)}
						sm
					/>
				))}
			</div>
		</div>
	);
};

export default GuarantorRelationshipSelector;
