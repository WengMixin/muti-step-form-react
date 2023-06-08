import React, {Component} from 'react';
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

export class FormPersonalDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
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
      Enter Personal Details
							</Typography>
						</Toolbar>
					</AppBar>

					<Box marginBottom={2} marginTop={2}>
						<TextField
							placeholder='Enter Your Occupation'
							label='Occupation'
							onChange={handleChange('occupation')}
							defaultValue={values.occupation}
						>
						</TextField>
					</Box>

					<Box marginBottom={2} marginTop={2}>
						<TextField
							placeholder='Enter Your City'
							label='City'
							onChange={handleChange('city')}
							defaultValue={values.city}
						>
						</TextField>
					</Box>
					<Box marginBottom={2} marginTop={2}>
						<TextField
							placeholder='Enter Your Bio'
							label='Bio'
							onChange={handleChange('bio')}
							defaultValue={values.bio}
						>
						</TextField>
					</Box>

					<Button
						variant='contained'
						color='primary'
						style={styles.button}
						onClick={this.continue}
					>
            Continus
					</Button>

					<Button
						variant='contained'
						color='secondary'
						style={styles.button}
						onClick={this.back}
					>
            Back
					</Button>
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

export default FormPersonalDetails;
