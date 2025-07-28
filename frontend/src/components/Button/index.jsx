const Button = ({ children, onClick, type = 'button', disabled = false, className = '' }) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`custom-button ${className}`}
    >
        {children}
    </button>
);

const styles = `
.custom-button {
    cursor: pointer;
    transition: background 0.2s;
}
.custom-button:hover:not(:disabled) {
    background: #e0e0e0;
}
.custom-button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}
`;

if (typeof document !== 'undefined') {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
}

export default Button;