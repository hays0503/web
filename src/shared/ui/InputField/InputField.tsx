import {
	Flex,
	FlexProps,
	Input,
	InputGroup,
	InputProps,
	Text,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";

interface InputFieldProps {
	placeholder: string;
	name: string;
	alt?: string;
	startAddon?: React.ReactNode;
	ref?: React.Ref<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = (props) => {
	const { placeholder, startAddon, ref, alt, name } = props;
	const [value, setValue] = useState<string>("");
	const [displayPlaceholder, setDisplayPlaceholder] = useState<boolean>(false);

	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > 0) {
			setDisplayPlaceholder(true);
		} else {
			setDisplayPlaceholder(false);
		}
		setValue(e.target.value);
	}, []);

	const placeholderStyle = {
		color: "gray.400",
	};

	const InputProps: InputProps = {
		value: value,
		onChange: onChange,
		placeholder: placeholder,
		name: name,
		alt: alt,
		_placeholder: {
			...placeholderStyle,
		},
		_dark: {
			color: "white",
			bg: "gray.900",
			caretColor: "white",
		},
	};

	const ContainerProps: FlexProps = {
		smDown: {
			w: "100%",
		},
		sm: {
			w: "100%",
		},
		md: {
			w: "32.65%",
		},
		lg: {
			w: "32.65%",
		},
		xl: {
			w: "32.65%",
		},
		minHeight: "64px",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "flex-start",
	};

	if (startAddon) {
		return (
			<Flex {...ContainerProps}>
				{displayPlaceholder && <Text {...placeholderStyle}>{placeholder}</Text>}
				<InputGroup
					startAddon={startAddon}
					startAddonProps={{
						border: "none",
						borderWidth: 0,
						padding: "0px 5px",
					}}
				>
					<Input {...InputProps} ref={ref}/>
				</InputGroup>
			</Flex>
		);
	}

	return (
		<Flex {...ContainerProps}>
			{displayPlaceholder && <Text {...placeholderStyle}>{placeholder}</Text>}
			<Input {...InputProps} ref={ref}/>
		</Flex>
	);
};

export default InputField;
