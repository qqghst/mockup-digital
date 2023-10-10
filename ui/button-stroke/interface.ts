export interface IButtonProps {
	children: React.ReactNode;
	type?: "button" | "submit" | "reset";
	onClick?: (event: React.MouseEvent) => void;
    href: string;
	padding: string;
}
