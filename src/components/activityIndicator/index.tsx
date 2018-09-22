import { Component} from 'react'
import { View } from "ui";
// import PropTypes from "prop-types";
import classNames from "classnames";
import { Text } from 'ui'
import Loading from 'components/loading'

import './index.scss'

interface Iprops {
    size ?: number;
    mode ?: 'center' | 'normal';
    color ?: string;
    content ?: string;
    className?: string;
}

export default class ActivityIndicator extends Component<Iprops, {}> {
    static defaultProps = {
        size: 24,
        color: '#6190E8'
    };
    render() {
        const { color, size, mode, content } = this.props

        const rootClass = classNames(
            'at-activity-indicator',
            {
                'at-activity-indicator--center': mode === 'center'
            },
            this.props.className
        )

        return (
            <View className={rootClass}>
                <View className='at-activity-indicator__body'>
                    <Loading size={size} color={color} />
                </View>
                {content && (
                    <Text className='at-activity-indicator__content'>{content}</Text>
                )}
            </View>
        )
    }
}