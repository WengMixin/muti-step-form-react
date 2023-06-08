import React, {Component} from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme();

export class FormUserDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const {values, handleChange} = this.props;

		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>

					<AppBar position='static'>
						<Toolbar >
							<IconButton edge='start' color='inherit' aria-label='menu'>
								<MenuIcon />
							</IconButton>
							<Typography variant='h6' style={{flexGrow: 1, textAlign: 'center'}}>
      Enter User Details
							</Typography>
						</Toolbar>
					</AppBar>

					<Box marginBottom={2} marginTop={2}>
						<TextField
							placeholder='Enter Your First Name'
							label='First Name'
							onChange={handleChange('firstName')}
							defaultValue={values.firstName}
						>
						</TextField>
					</Box>

					<Box marginBottom={2} marginTop={2}>
						<TextField
							placeholder='Enter Your Last Name'
							label='Last Name'
							onChange={handleChange('lastName')}
							defaultValue={values.lastName}
						>
						</TextField>
					</Box>
					<Box marginBottom={2} marginTop={2}>
						<TextField
							placeholder='Enter Your Email'
							label='Email'
							onChange={handleChange('email')}
							defaultValue={values.email}
						>
						</TextField>
					</Box>

					<Button
						variant='contained'
						primary='true'
						style={styles.button}
						onClick={this.continue}
					>Continus</Button>
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

export default FormUserDetails;
