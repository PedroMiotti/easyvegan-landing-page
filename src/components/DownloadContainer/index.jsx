import './style.css';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

const DownloadContainer = () => {
    return (
        <div className="download-container">
            <div>
                <PermIdentityOutlinedIcon className="input-icon"  />
                <input placeholder="Nome"/>
            </div>
            <div>
                <MailOutlineIcon className="input-icon" />
                <input placeholder="E-mail"/>
            </div>
            <button>Download</button>
        </div>
    );
}

export default DownloadContainer;