import React, { useRef, useState, useEffect } from 'react';
import classes from './accordion.module.scss';

const Accordion = ({ open, children }) => {
    const childComponent = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                setHeight(childComponent.current.scrollHeight);
              }, 10);
        } else {
            setHeight(0);
        }
    },[open])
    
    return (
            <div
            style={{ height }}
            className={classes.accordion}
            ref={childComponent}
            >
                {children}
            </div>
        )
};

export default Accordion;