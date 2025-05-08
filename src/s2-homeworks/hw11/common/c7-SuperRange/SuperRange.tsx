import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                // color: '#52af77', // Slider color
                // height: 8, // Height of the slider
                // '& .MuiSlider-thumb': {
                //     height: 24, // Thumb height
                //     width: 24, // Thumb width
                //     backgroundColor: 'white', // Thumb background color
                //     border: '2px solid currentColor', // Thumb border
                //     '&:hover': {
                //         boxShadow: 'inherit', // Shadow on hover
                //     },
                //     '&.Mui-active': {
                //         boxShadow: 'inherit', // Shadow when active
                //     },
                // },
                // '& .MuiSlider-track': {
                //     height: 8, // Track height
                //     borderRadius: 4, // Track border radius
                // },
                // '& .MuiSlider-rail': {
                //     height: 8, // Rail height
                //     borderRadius: 4, // Rail border radius
                // },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
