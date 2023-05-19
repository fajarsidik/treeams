import DashboardIcon from '../../styles/images/sidebar-icons/Dashboard.png'
import OperationIcon from '../../styles/images/sidebar-icons/Operations Library.png'
import TrainingIcon from '../../styles/images/sidebar-icons/Training.png'
import AuditIcon from '../../styles/images/sidebar-icons/Audits.png'
import NetworkIcon from '../../styles/images/sidebar-icons/Network.png'

interface MenuItemProps {
  isMenuShow?: boolean
}
const MenuItem = ({isMenuShow = false} : MenuItemProps) => {
  return (
    <>
      <div id="mySidenav" className={`sidenav d-none d-md-flex ${isMenuShow ? 'menu-show' : ''}`}>
        <div className="box">
          <a href="#">
            <img src={DashboardIcon} alt="" />
            <span>Dashboard </span>
          </a>
          <a href="#">
            <img src={OperationIcon} alt="" />
            <span>Manuals Library</span>
          </a>
          <a href="#">
            <img src={TrainingIcon} alt="" />
            <span>Training</span>
          </a>
          <a href="#">
            <img src={AuditIcon} alt="" />
            <span>Audits</span>
          </a>
          <a href="#">
            <img src={NetworkIcon} alt="" />
            <span>Network</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
