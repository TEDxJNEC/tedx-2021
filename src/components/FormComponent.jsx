import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const FormComponent = () => {
	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
	return (
		<>
			<Formik
				initialValues={{
					name: "",
					phone: "",
					age: "",
					who: "",
					clgName: "",
					profession: "",
					exp: "",
					judgingParameters: "",
					bestSkill: "",
				}}
				validationSchema={yup.object({
					name: yup
						.string()
						.min(2, "Name must be at least 2 letters")
						.max(30, "Name should be less than 30 characters")
						.required("Name is required"),
					phone: yup
						.string()
						.matches(phoneRegExp, "Phone number is not valid")
						.required("Phone number is required"),
					age: yup
						.number()
						.min(8, "You must be older than 8 years")
						.max(100, "You must be younger than 100 years")
						.required("Please provide your age"),
					who: yup
						.string()
						.oneOf(
							["I'm a student", "I'm NOT a student"],
							"Please select one of the options"
						)
						.required("Selection is required"),
					clgName: yup.string().required("Please provide your college name"),
					profession: yup.string().required("Please provide your profession"),
					bestSkill: yup
						.string()
						.required("Please provide your one best skill"),
				})}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setTimeout(() => {
						console.log(JSON.stringify(values, null, 2));
						resetForm();
						setSubmitting(false);
					}, 3000);
				}}>
				{(props) => (
					<Form>
						<label htmlFor='name'>
							Name:
							<Field name='name' type='text' placeholder='Your Name' />
							<ErrorMessage name='name' />
						</label>
						<label htmlFor='phone'>
							Mobile Number:
							<Field
								name='phone'
								type='text'
								placeholder='Your Mobile Number'
							/>
							<ErrorMessage name='phone' />
						</label>
						<label htmlFor='age'>
							Age:
							<Field name='age' type='text' placeholder='Your Age' />
							<ErrorMessage name='age' />
						</label>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default FormComponent;
