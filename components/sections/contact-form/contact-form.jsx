// IMPORTS
import { useState } from 'react';
import { Section } from 'components/layouts/section/section';
import { TextInput } from 'components/partials/text-input/text-input';
import { Textarea } from 'components/partials/textarea/textarea';
import { SubmitButton } from 'components/partials/submit-button/submit-button';
import { Icon } from 'components/partials/icon/icon';
import axios from 'axios';

// COMPONENT
const ContactForm = ({ data }) => {

	// SETUP FORM STATE
	const [formState, setFormState] = useState({
		firstname: { value: '', hasError: false },
		lastname: { value: '', hasError: false },
		phone: { value: '', hasError: false },
		email: { value: '', hasError: false },
		subject: { value: '', hasError: false },
		file: { value: '', hasError: false },
		message: { value: 'Bitte nehmen Sie mit mir Kontakt auf.', hasError: false },
	});

	// SETUP STATUS-BAR STATE
	const [statusBarState, setStatusBarState] = useState({
		visible: false,
		icon: 'error',
		message: 'Hello',
	});

	// UPDATE INPUTS
	const updateInputs = (event) => {

		// GET VALUE AND FIELD
		let value;
		const field = event.target.name;

		// CHECK FIELD TYPE
		switch (event.target.type) {
		case 'text': value = event.target.value; break;
		case 'textarea': value = event.target.value; break;
		case 'file': value = event.target.files[0]; break;
		default: value = event.target.value; break;
		}

		// UPDATE STATE
		setFormState((prevState) => ({
			...prevState,
			[field]: {
				value: value,
				hasError: prevState[field].hasError,
			},
		}));

	};

	// SET ERROR
	const setError = (field) => {

		// UPDATE STATE
		setFormState((prevState) => ({
			...prevState,
			[field]: {
				value: prevState[field].value,
				hasError: true,
			},
		}));

	};

	// CLEAR ERROR
	const clearError = (field) => {

		// UPDATE STATE
		setFormState((prevState) => ({
			...prevState,
			[field]: {
				value: prevState[field].value,
				hasError: false,
			},
		}));

	};

	// CLEAR INPUTS
	const clearInputs = () => {

		// UPDATE STATE
		setFormState(() => ({
			firstname: { value: '', hasError: false },
			lastname: { value: '', hasError: false },
			phone: { value: '', hasError: false },
			email: { value: '', hasError: false },
			subject: { value: '', hasError: false },
			file: { value: '', hasError: false },
			message: { value: 'Bitte nehmen Sie mit mir Kontakt auf', hasError: false },
		}));

	};

	// GET ERRORS
	const getErrors = () => {

		// DEFINE FIELDS
		const fields = ['firstname', 'lastname', 'phone', 'email', 'subject', 'message'];

		// SETUP ERROR ARRAY
		const errors = [];

		// CHECK FIELDS
		fields.map((field) => {
			if (!formState[field].value) {
				setError(field);
				errors.push(field);
			} else {
				clearError(field);
			};
		});

		// RETURN ERRORS
		return errors;

	};

	// SUBMIT
	const submit = async () => {

		// TRY-CATCH BLOCK
		try {

			// SEND MESSAGE
			await axios({
				method: 'post',
				url: '/api/contact-form/message',
				data: {
					firstname: formState.firstname.value,
					lastname: formState.lastname.value,
					phone: formState.phone.value,
					email: formState.email.value,
					subject: formState.subject.value,
					message: formState.message.value,
				},
			});

			// SHOW SUCCESS BANNER
			setStatusBarState({
				visible: true,
				icon: 'success',
				message: 'Das Formular wurde erfolgreich übermittelt!',
			});

		// SHOW ERROR BANNER
		} catch (error) {
			console.log('Error: inputs are not valid');
			setStatusBarState({
				visible: true,
				icon: 'failure',
				message: 'Das Formular konnte nicht übermittelt werden!',
			});
		}
	};

	// HANDLE SUBMIT
	const handleSubmit = (event) => {
		event.preventDefault();
		const errors = getErrors();
		if (errors.length) {
			console.log('Error: inputs are not valid');
		} else {
			console.log('Success: inputs are valid');
			submit();
			clearInputs();
		}
	};

	// RENDER
	return (
		<Section data={{ className: 'contact-form', anchorId: data.anchorId }}>
			<form className="contact-form__form" onSubmit={ (event) => handleSubmit(event) }>
				<TextInput data={{ className: 'contact-form__input', name: 'firstname', label: 'Vorname', value: formState.firstname.value, placeholder: 'Ihr Vorname', errorText: 'Fügen Sie Ihren Vornamen ein.', isRequired: true, hasError: formState.firstname.hasError, onChange: (event) => updateInputs(event) }} />
				<TextInput data={{ className: 'contact-form__input', name: 'lastname', label: 'Nachname', value: formState.lastname.value, placeholder: 'Ihr Nachname', errorText: 'Fügen Sie Ihren Nachnamen ein.', isRequired: true, hasError: formState.lastname.hasError, onChange: (event) => updateInputs(event) }} />
				<TextInput data={{ className: 'contact-form__input', name: 'phone', label: 'Telefonnummer', value: formState.phone.value, placeholder: 'Ihre Telefonnummer', errorText: 'Fügen Sie Ihre Telefonnummer ein.', isRequired: true, hasError: formState.phone.hasError, onChange: (event) => updateInputs(event) }} />
				<TextInput data={{ className: 'contact-form__input', name: 'email', label: 'E-Mail', value: formState.email.value, placeholder: 'Ihre Email-Adresse', errorText: 'Fügen Sie Ihre E-Mail-Adresse ein.', isRequired: true, hasError: formState.email.hasError, onChange: (event) => updateInputs(event) }} />
				<TextInput data={{ className: 'contact-form__input', name: 'subject', label: 'Betreff', value: formState.subject.value, placeholder: 'Betreff', isRequired: true, hasError: formState.subject.hasError, errorText: 'Fügen Sie den Betreff ein.', onChange: (event) => updateInputs(event) }} />
				<Textarea data={{ className: 'contact-form__input', name: 'message', label: 'Nachricht', value: formState.message.value, placeholder: 'Schreiben Sie mir...', isRequired: true, readOnly: true, hasError: formState.message.hasError, errorText: 'Fügen Sie Ihre Nachricht ein.', onChange: (event) => updateInputs(event) }} />
				<SubmitButton data={{ text: 'Senden', className: 'contact-form__submit' }} />
				<div className={`contact-form__status-bar status-bar ${ statusBarState.visible ? 'status-bar--visible' : '' } `}>
					<Icon data={{ icon: statusBarState.icon, className: 'status-bar__icon' }} />
					<p className="status-bar__text">{ statusBarState.message }</p>
				</div>
			</form>
		</Section>
	);

};

// EXPORTS
export {
	ContactForm,
};
