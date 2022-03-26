import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/ui/atoms'

export interface CounterProps {
    min?: number
    max?: number
    step: number
    value: number
}

function Counter(props: CounterProps): JSX.Element {
    const { min, max, step, value } = props
    const [counter, setCounter] = useState(value)

    const isMinValue = min !== undefined ? counter <= min : false
    const isMaxValue = max !== undefined ? counter >= max : false

    const increment = (): void => {
        setCounter((currentVal) => {
            if (max !== undefined && currentVal + step >= max) {
                return max
            }
            return currentVal + step
        })
    }

    const decrement = (): void => {
        setCounter((currentVal) => {
            if (min !== undefined && currentVal - step <= min) {
                return min
            }
            return currentVal - step
        })
    }

    return (
        <div>
            <button
                type="button"
                onClick={() => decrement()}
                disabled={isMinValue}
            >
                <Text size="h5">-</Text>
            </button>
            <Text size="h5">{counter}</Text>
            <button
                type="button"
                onClick={() => increment()}
                disabled={isMaxValue}
            >
                <Text size="h5">+</Text>
            </button>
        </div>
    )
}

Counter.defaultProps = {
    min: undefined,
    max: undefined,
    step: 1,
    value: 0,
}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
}

export default Counter
