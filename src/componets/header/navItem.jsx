import PropTypes from 'prop-types';

const NavItem = ( { item } ) => {
   
    console.log('item:'+item.name)
  return (
    <a href="#" className="navigation__item">{item.name}</a>
  )
}
NavItem.propTypes = {
    item: PropTypes.object,
  };
  
export default NavItem