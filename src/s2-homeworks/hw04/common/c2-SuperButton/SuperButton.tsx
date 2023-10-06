import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'
import { log } from 'console'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
   
    const finalClassName = s.button + 
    //   ( xType === 'disabled' ? ' ' + s.disabled : xType === 'red' 
    //   ?  ' ' + s.red : xType === 'secondary' ? ' ' + s.secondary : ' ' + s.default)
    ' ' +( xType === 'red' ? s.red : '') + 
    ' ' + (disabled && xType==='red' ? s.disabled : '')+ 
    ' ' +( xType === 'secondary' ? s.secondary : '') +
    ' ' +(!xType ? s.default : '')
    //   xType = 'undefiend' ? ' ' + s.default :
      // + (disabled
        //         ? ...
        //         : xType === 'red'
        //             ? ...
        // + (className ? ' ' + className : '') // задачка на смешивание классов
        // (s.didisabled ? s)
    console.log(xType);
    


// + (disabled
//     ? s  + s['disabled']
//     : xType === 'red'
//         ?  + 'red'
//         : xType === 'secondary'
//             ? ' secondary ' 
//             : ' default ')
            // console.log(s);
            
            // console.log(xType);
            // console.log(finalClassName);
    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
