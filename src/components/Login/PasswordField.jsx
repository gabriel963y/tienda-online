import { useState } from 'react';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import FormField from './FormField';

const PasswordField = ({ value, onChange, isFocused, onFocus, onBlur }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleButton = (
        <button
            type="button"
            className="btn border-0 text-muted px-3"
            onClick={() => setShowPassword(!showPassword)}
            style={{ background: 'transparent' }}
        >
            {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
        </button>
    );

    return (
        <FormField
            icon={FiLock}
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            isFocused={isFocused}
            label="Contraseña"
            id="loginPassword"
            rightElement={toggleButton}
        />
    );
};

export default PasswordField;
