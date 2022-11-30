import { StringBasic } from '@/components/form/String/StringBasic';
import { Prism } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import text from './stringBasic.txt';

const String = () => {
	const codeString = `import { string, object } from 'yup';
	//..

	
	<Formik
	validationSchema={object({
		name: string(),
	})}
	initialValues={{ name: '' }}
>`;

	return (
		<div>
			<h1 className='text-5xl font-semibold'>String</h1>
			<hr className='my-5' />
			<p>Define a string schema. Inherits from Schema.</p>
			<Prism showLineNumbers language='jsx' style={a11yDark}>
				{codeString}
			</Prism>

			<StringBasic />
		</div>
	);
};

export default String;
