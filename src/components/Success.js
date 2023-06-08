import React, {Component} from 'react';
import AppBar from '@mui/material/AppBar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme();

export class Success extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>

					<AppBar position='static'>
						<Toolbar >
							<IconButton edge='start' color='inherit' aria-label='menu'>
								<MenuIcon />
							</IconButton>
							<Typography variant='h6' style={{flexGrow: 1, textAlign: 'center'}}>
                Success!
							</Typography>
						</Toolbar>
					</AppBar>
					<h1>Thank Your For Your Submission </h1>
					<p>You will get an email with further instructions</p>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15,
	},
};

export default Success;
