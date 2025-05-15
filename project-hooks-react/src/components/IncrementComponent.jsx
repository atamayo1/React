import { memo } from 'react'

export const IncrementComponent = memo(({ increment }) => {
    console.log("I'm redrawing")
    return (
        <button type='button' className='btn btn-success' onClick={() => increment(1)}>Increment + 1</button>
    )
});
