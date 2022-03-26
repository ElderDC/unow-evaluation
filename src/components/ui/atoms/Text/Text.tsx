import React from 'react'
import PropTypes from 'prop-types'

export interface TextProps {
    children: string | number | JSX.Element
    size?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'caption'
        | 'button'
        | 'overline'
    style?: React.CSSProperties
    className?: string
}

const sizes = {
    h1: 'text-9xl font-bold',
    h2: 'text-8xl font-bold',
    h3: 'text-6xl font-bold',
    h4: 'text-5xl font-bold',
    h5: 'text-4xl font-bold',
    h6: 'text-2xl font-bold',
    subtitle1: 'text-xl font-semibold',
    subtitle2: 'text-lg font-semibold',
    body1: 'text-base font-normal',
    body2: 'text-sm font-normal',
    button: 'text-sm font-semibold uppercase',
    caption: 'text-xs font-normal',
    overline: 'text-xs font-semibold uppercase',
}

function Text(props: TextProps): JSX.Element {
    const { className, children, style, size } = props

    const classNames = []

    if (size) {
        classNames.push(sizes[size])
    }
    if (className) {
        classNames.push(className)
    }

    return (
        <span className={classNames.join(' ')} style={style}>
            {children}
        </span>
    )
}

Text.defaultProps = {
    className: '',
    size: 'body1',
    style: {},
}

Text.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
    ]).isRequired,
    style: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
    ]),
    size: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline',
    ]),
}

export default Text
