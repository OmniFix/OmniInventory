import React from 'react';
import { Spin } from 'antd';
import classNames from 'classnames';

interface Props {
    fullPage?: boolean;
    section?: boolean;
    styles?: React.CSSProperties;
    classes?: string[];
}

export const Spinner: React.FC<Props> = ({ fullPage = false, section = false, styles = {}, classes = [] }) => {
    return (
        <>
            {fullPage ? (
                <div className={classNames("flex items-center justify-center min-h-screen w-full pt-1", ...classes)}>
                    <Spin style={styles} />
                </div>
            ) : section ? (
                <div className={classNames("flex items-center justify-center w-full min-h-[10vh] pt-1", ...classes)}>
                    <Spin style={styles} />
                </div>
            ) : (
                <div className={classNames("flex items-center justify-center pt-1", ...classes)}>
                    <Spin style={styles} />
                </div>
            )}
        </>
    );
};

