import React from "react"
import { Slider, SliderProps } from "@mui/material"

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: "#1976d2",
                height: 8,
 // Устанавливаем ширину слайдера на 100% от родительского контейнера
                "& .MuiSlider-thumb": {
                    height: 24,
                    width: 24,
                    backgroundColor: "#fff",
                    border: "2px solid currentColor",
                    "&:hover": {
                        boxShadow: "inherit",
                    },
                },
                "& .MuiSlider-track": {
                    height: 8,
                    borderRadius: 4,
                },
                "& .MuiSlider-rail": {
                    height: 8,
                    borderRadius: 4,
                },
            }}
            {...props} // Передаем все пропсы слайдеру
        />
    )
}

export default SuperRange
