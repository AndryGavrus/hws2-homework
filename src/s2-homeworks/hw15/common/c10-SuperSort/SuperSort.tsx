import React from 'react'
import s from './SuperSort.module.css'

// импортированные иконки для сортировки
import downIcon from './icons/down.svg'
import upIcon from './icons/up.svg'
import noneIcon from './icons/none.svg'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        // Сейчас отсортировано по убыванию → переключаем на возрастание
        return up
    } else if (sort === up) {
        // Сейчас отсортировано по возрастанию → сбрасываем
        return ''
    } else {
        // Нет сортировки или сортировка по другому столбцу → сортируем по убыванию
        return down
    }// пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            className={s.sortIcon}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt="sort icon"
                className={s.icon}
            />
        </span>
    )
}

export default SuperSort
