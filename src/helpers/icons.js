import { 
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faCirclePlus,
    faPhoneFlip,
    faEnvelope,
    faMapLocationDot,
    faLock

} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
    return library.add(
        faTrash,
        faSignOutAlt,
        faEdit,
        faSpinner,
        faCirclePlus,
        faPhoneFlip,
        faEnvelope,
        faMapLocationDot,
        faLock
    );
};

export default Icons;