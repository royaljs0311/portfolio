const CodeTag = ({
    children,
    color = "white",
}: {
    children: React.ReactNode;
    color?: string;
}) => <span className={`${color} stagger-code`}>{children}</span>;

export default CodeTag;
