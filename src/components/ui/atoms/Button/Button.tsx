/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'

const noop = (): false => {
    return false
}

export interface ButtonProps {
    block?: boolean
    children: string | number | JSX.Element
    className?: string
    icon?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    style?: React.CSSProperties
    type?: 'button' | 'submit' | 'reset' | undefined
    onClick: (event: React.MouseEvent) => void
    onDoubleClick: (event: React.MouseEvent) => void
    onMouseDown: (event: React.MouseEvent) => void
    onMouseUp: (event: React.MouseEvent) => void
}

const sizes = {
    xs: {
        height: 'h-6',
        width: 'w-6',
        padding: 'px-2',
        fontSize: 'text-2xs',
    },
    sm: {
        height: 'h-8',
        width: 'w-8',
        padding: 'px-3',
        fontSize: 'text-xs',
    },
    md: {
        height: 'h-10',
        width: 'w-10',
        padding: 'px-4',
        fontSize: 'text-sm',
    },
    lg: {
        height: 'h-12',
        width: 'w-12',
        padding: 'px-5',
        fontSize: 'text-base',
    },
    xl: {
        height: 'h-14',
        width: 'w-14',
        padding: 'px-6',
        fontSize: 'text-lg',
    },
}

function Button(props: ButtonProps): JSX.Element {
    const {
        block,
        children,
        className,
        icon,
        style,
        size,
        type,
        onClick,
        onDoubleClick,
        onMouseDown,
        onMouseUp,
    } = props

    const handleClick = (event: React.MouseEvent): void => {
        onClick(event)
    }
    const handleDoubleClick = (event: React.MouseEvent): void => {
        onDoubleClick(event)
    }
    const handleMouseDown = (event: React.MouseEvent): void => {
        onMouseDown(event)
    }
    const handleMouseUp = (event: React.MouseEvent): void => {
        onMouseUp(event)
    }

    const classNames = [
        'button',
        'relative',
        'flex justify-center items-center',
        'transition duration-300 ease-in-out',
        'active:shadow-none',
    ]
    const contentClassNames = [
        'button__content',
        'uppercase',
        'font-bold',
        'leading-none',
        'tracking-4wide',
        'flex items-center',
    ]

    const setSize = (): void => {
        const { height, width, padding, fontSize } = sizes[size || 'md']
        classNames.push(height, padding, fontSize)
        if (icon) {
            classNames.push(width)
        }
        if (block) {
            classNames.push('w-full')
        }
    }

    setSize()

    if (className) {
        classNames.unshift(className)
    }

    return (
        <button
            className={classNames.join(' ')}
            style={style}
            type={type}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    block: false,
    className: '',
    icon: false,
    size: 'md',
    style: {},
    type: 'button',
    onClick: noop,
    onDoubleClick: noop,
    onMouseDown: noop,
    onMouseUp: noop,
}

Button.propTypes = {
    block: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
    ]).isRequired,
    className: PropTypes.string,
    icon: PropTypes.bool,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    style: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
    ]),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
}

export default Button
