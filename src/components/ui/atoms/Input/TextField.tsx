import React from 'react'
import PropTypes from 'prop-types'

const noop = (): false => {
    return false
}

interface TextFieldProps {
    disabled?: boolean
    id?: string
    label?: string
    name?: string
    placeholder?: string
    readonly?: boolean
    type?: string
    value: string
    onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onFocus: (event: React.ChangeEvent<HTMLInputElement>) => void
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function TextField(props: TextFieldProps): JSX.Element {
    const {
        disabled,
        label,
        id,
        name,
        placeholder,
        readonly,
        type,
        value,
        onChange,
        onInput,
        onBlur,
        onFocus,
    } = props

    const [inputValue, setInputValue] = React.useState(value)

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onBlur(event)
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(event)
    }
    const handleFocus = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onFocus(event)
    }
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onInput(event)
    }

    const classNames = ['grid', 'gap-4', 'grid-cols-3', 'mb-4']
    const labelClassNames = ['py-2', 'text-gray-500']
    const inputClassNames = [
        'col-span-2',
        'border-2',
        'border-gray-300',
        'rounded-md',
        'py-2',
        'px-3',
    ]

    return (
        <div className="grid gap-4 grid-cols-3 mb-4">
            {label && (
                <label htmlFor="email" className="py-2 text-gray-500">
                    Usuario
                </label>
            )}
            <input
                value={inputValue}
                disabled={disabled}
                readOnly={readonly}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                className="col-span-2 px-4 py-2 border-2"
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                onInput={handleInput}
                required
            />
        </div>
    )
}

TextField.defaultProps = {
    disabled: false,
    id: '',
    label: '',
    name: '',
    placeholder: '',
    readonly: false,
    type: 'text',
    onChange: noop,
    onInput: noop,
    onBlur: noop,
    onFocus: noop,
}

TextField.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    readonly: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
}

export default TextField
