import React from 'react';
import { Tooltip, TooltipReference, useTooltipState } from 'reakit/Tooltip';
import { Box } from 'rebass';

const AbbrevSpan = (props) => <Box as="span" {...props}>{props.children}</Box>

const Abbrev = ({short, full}) => {
    const tooltip = useTooltipState({placement: 'bottom-start'});
    return (
        <>
            <TooltipReference {...tooltip} as="span" className="abbrev">
                {short} <Box as="span" fontSize="0.8em">(?)</Box>
            </TooltipReference>
            <Tooltip {...tooltip} className="tooltip">{full}</Tooltip>
        </>
    );
}

export default Abbrev;
