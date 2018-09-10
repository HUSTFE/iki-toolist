import * as React from 'react';
import icons from './anticon.css';

const STATUS_COLOR: {
    [key: string]: string
} = {
    'success': '',
    'error': '',
    'default': '',
    'warning': '',
    'active': ''
};

function getStatusColor(status: string) {
    return STATUS_COLOR[status] ? STATUS_COLOR[status] : status[0] === '#' ? status : STATUS_COLOR['default'];
}



export interface IToolProps {
    style?: React.CSSProperties,
    className?: string,
    key?: number,
    onClick: () => void
}

export interface IIconToolProps extends IToolProps {
    title: string | React.ReactNode;
    icon?: string;
}

export interface IStatusToolProps extends IToolProps {
    status: string;
    title: string | React.ReactNode;
}

export interface ICustomToolProps extends IToolProps {
    children: string | React.ReactNode | Array<React.ReactNode>,
}

export const IconTool: React.SFC<IIconToolProps> = ({title, icon, style, className, onClick}) => <span className={className} style={style} onClick={onClick}>
    {icon && <i className={`${icons['anticon']} ${icons[`anticon-${icon}`]}`}/>} {title}
</span>;

export const StatusTool: React.SFC<IStatusToolProps> = ({status, title, style, className, onClick}) => <span className={className} style={style} onClick={onClick}>
    <span style={{backgroundColor: getStatusColor(status)}}/> {title}
</span>;

export const CustomTool: React.SFC<ICustomToolProps> = ({children, onClick}) => <span onClick={onClick}>
    {children}
</span>;

