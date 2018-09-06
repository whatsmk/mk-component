import React from 'react'
import { Icon } from 'antd'
//import FA from 'react-fa'
import classNames from 'classnames'

export default function IconComponent(props) {
	if (props.visible === false)
		return null

	let {showStyle, fontFamily, ...other} = props

	if (props.disabled) {
		showStyle = 'disabled'
	}

	let className = 'mk-icon'

	/*if (fontFamily == 'awesome') {
		className = classNames({
			[className]: true,
			[`mkicon--${showStyle}`]: !!showStyle,
			[props.className]: !!props.className
		})
		return <FA {...other} className={className} name={props.type} />
	}*/

	className = classNames({
		[className]: true,
		[fontFamily]: !!fontFamily,
		[`${fontFamily}-${props.type}`]: !!fontFamily,
		[`mkicon--${showStyle}`]: !!showStyle,
		[props.className]: !!props.className
	})

	return <Icon {...other} className={className} />
}
