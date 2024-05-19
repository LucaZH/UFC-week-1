interface NavItem {
    text: string;
    link: string;
    dropdownItems?: DropdownItem[];
}
interface DropdownItem {
    text: string;
    link: string;
}
export default NavItem