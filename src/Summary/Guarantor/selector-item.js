import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import "./guarantor.scss";

const SelectorItem = ({ title, image, info, onSelect, selected = false, sm=false }) => {
	return (
		<div
			className={`selector-item-container${selected ? " selector-selected" : ""}${sm ? " selector-sm" : ""}`}
			onClick={onSelect}>
			<div className="selector-media">
				<img src={image} alt={title} />
				{info ? (
					<OverlayTrigger placement="top" overlay={<Tooltip>{info}</Tooltip>}>
						<span className="selector-info">i</span>
					</OverlayTrigger>
				) : null}
			</div>
			<span className="item-title">{title}</span>
		</div>
	);
};

export default SelectorItem;
