import React from 'react';
import { MenuToggleButtonProps } from '@/app/types/common.types';
import { InfoGeneralData } from '@/app/hooks/data-general';

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({
	isMobile,
	onToggle,
	'aria-controls': ariaControls,
	ariaLabelOpen = InfoGeneralData.menuToggleAriaLabelOpen,
	ariaLabelClose = InfoGeneralData.menuToggleAriaLabelClose,
}) => {
	return (
		<button
			onClick={onToggle}
			aria-expanded={isMobile}
			aria-label={isMobile ? ariaLabelClose : ariaLabelOpen}
			aria-controls={ariaControls}
		>
			<i className="fa-solid fa-bars" aria-hidden="true"></i>
		</button>
	);
};

export default MenuToggleButton;
