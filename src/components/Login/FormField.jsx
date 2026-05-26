import { Form } from 'react-bootstrap';

const FormField = ({
    icon: Icon,
    type,
    placeholder,
    value,
    onChange,
    onFocus,
    onBlur,
    isFocused,
    label,
    id,
    required = true,
    rightElement,
}) => (
    <Form.Group className="mb-3" controlId={id}>
        <Form.Label className="fw-semibold small text-muted">{label}</Form.Label>
        <div
            className="input-group"
            style={{
                border: isFocused
                    ? '1px solid var(--accent-primary)'
                    : '1px solid var(--border-light)',
                boxShadow: isFocused ? '0 0 0 3px rgba(16, 185, 129, 0.08)' : 'none',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                background: 'var(--login-input-bg)',
            }}
        >
            <span className="input-group-text bg-transparent border-0 text-muted px-3">
                <Icon size={17} />
            </span>
            <Form.Control
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                required={required}
                className="bg-transparent border-0 py-2 shadow-none"
                style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-main)',
                }}
            />
            {rightElement}
        </div>
    </Form.Group>
);

export default FormField;
