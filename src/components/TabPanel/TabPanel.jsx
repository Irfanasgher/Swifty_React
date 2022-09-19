import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import 'TabPanel.scss';
const TabPanel = () => {
	return (
		<div>
			<Tabs defaultActiveKey='profile' id='uncontrolled-tab-example' className='ml-3'>
				<Tab eventKey='home' title='Home' className='pl-3'>
					<h1>Hi!...</h1>
				</Tab>
				<Tab eventKey='profile' title='Profile' className='pl-3'>
					<h1>Hi!...</h1>
				</Tab>
				<Tab eventKey='contact' title='Contact' className='pl-3'>
					<h1>Hi!...</h1>
				</Tab>
			</Tabs>
		</div>
	);
};
export default TabPanel;
