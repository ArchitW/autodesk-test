import React from 'react';

export default function FieldValidation(props) {
	console.log(props);
	return (
		<div className="field-validation-error" data-valmsg-for={props.msgfor} data-valmsg-replace="true">
			<span htmlFor="userName" className="">
				{props.errorMessage}
			</span>
		</div>
	);
}
