import React from 'react';

export default function FieldValidation(props) {
	return (
		<div class="field-validation-error" data-valmsg-for="UserName" data-valmsg-replace="true">
			<span for="userName" class="">
				{props.errorMessage}
			</span>
		</div>
	);
}
