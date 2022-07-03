interface LabelProps {
    title?: string;
    htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({ title, htmlFor }) => {
    if (!title) {
        return <></>;
    }
    return (
        <label
            htmlFor={htmlFor}
            className='mb-1 text-base font-semibold text-dark'
        >
            {title}
        </label>
    );
};
