import React from "react";
import { UNICODE_SYMBOLS } from "../constants";
import styles from "../styles/components/Button.module.css";

interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	type?: "primary" | "secondary" | "outlined";
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: "small" | "medium" | "large";
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
	type = "primary",
	size = "medium",
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	let mode = styles.buttonPrimary;
	let btnLabel = label;
	switch (type) {
		case "secondary":
			mode = styles.buttonSecondary;
			break;
		case "outlined":
			mode = styles.buttonOutlined;
			btnLabel += ` ${UNICODE_SYMBOLS.rightArrow}`;
			break;
	}
	const buttonSizeStyle =
		size === "small"
			? styles.buttonSmall
			: size === "medium"
			? styles.buttonMedium
			: styles.buttonLarge;
	return (
		<button
			type="button"
			className={[styles.button, buttonSizeStyle, mode].join(" ")}
			style={{ backgroundColor }}
			{...props}
		>
			{btnLabel}
		</button>
	);
};
export default Button;
