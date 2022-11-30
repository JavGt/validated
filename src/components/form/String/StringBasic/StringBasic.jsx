import { Form, Formik } from 'formik';
import { object, string } from 'yup';

const StringBasic = () => {
	return (
		<Formik
			validationSchema={object({
				name: string(),
			})}
			initialValues={{ name: '' }}
			onSubmit={values => {
				alert(JSON.stringify(values, null, 2));
			}}
		>
			{({ values, touched, errors, handleBlur, handleChange }) => (
				<Form>
					<div>
						<label htmlFor='name-id'>Name</label>
						<input
							onChange={handleChange}
							name='name'
							value={values.name}
							onBlur={handleBlur}
						/>
					</div>
					{errors.name && touched.name && <span>{errors.name}</span>}

					<button type='submit'>Enviar</button>
				</Form>
			)}
		</Formik>
	);
};

export default StringBasic;
