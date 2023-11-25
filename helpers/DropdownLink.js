import Link from 'next/link';
import { useDropdown } from './DropdownProvider';

const DropdownLink = props => {
  let { href, children, ...rest } = props;
  const { toggleDropdown } = useDropdown();

  const handleClick = () => {
    // Reset the dropdown state when a link is clicked
    toggleDropdown();
  };

  return (
    // <DropdownProvider>
    <Link href={href} {...rest} onClick={handleClick} className="dropdown-link">
      {children}
    </Link>
    // </DropdownProvider>
  );
};
export default DropdownLink;
