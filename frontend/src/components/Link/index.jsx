import { Link as RouterLink } from 'react-router-dom';

const Link = ({ to, children, ...props }) => (
    <RouterLink to={to} {...props}>
        {children}
    </RouterLink>
);

export default Link;