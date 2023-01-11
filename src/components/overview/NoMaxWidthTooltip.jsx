import { Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});
