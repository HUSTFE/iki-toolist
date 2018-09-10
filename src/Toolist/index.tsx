import * as React from 'react';
import {IconTool, StatusTool, CustomTool} from "../Tool";
import styles from './toolist.css'

export interface ITool {
    type?: 'status'|'custom';
    content?: string|React.ReactNode,
    icon?: string,
    title?: string,
    status?: string,
    style?: React.CSSProperties,
    className: string,
    onClick: () => void

}

function generateTool(tools:Array<ITool>) {
    return tools.filter(e => e).map(
        (tool, i) => {
            switch (tool.type) {
                case 'status':
                    return <StatusTool key={i} title={tool.title} status={tool.status} style={tool.style} className={tool.className} onClick={tool.onClick}/>;
                case 'custom':
                    return <CustomTool key={i} style={tool.style} className={tool.className} onClick={tool.onClick}>{tool.content}</CustomTool>;
                default:
                    return <IconTool key={i} title={tool.title} icon={tool.icon} style={tool.style} className={tool.className} onClick={tool.onClick}/>
            }
        }
    )
}

export interface IToolistProps {
    leftTools: Array<ITool>;
    rightTools: Array<ITool>
}

/**
 * Basic tool list template
 */
export class Toolist extends React.Component<IToolistProps> {
    static defaultProps:IToolistProps = {
        leftTools: [],
        rightTools: []
    };

    render() {
        const {leftTools, rightTools, children} = this.props;

        return (
            <div className={styles.toolist}>
                <div>
                    {generateTool(leftTools)}
                </div>
                <div className={styles.flex}>
                    {children}
                </div>
                <div>
                    {generateTool(rightTools)}
                </div>
            </div>
        )
    }
}