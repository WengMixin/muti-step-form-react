import React, {Component} from 'react';
import AppBar from '@mui/material/AppBar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({// 自定义样式，让文字居中。
	components: {
		MuiListItemText: {
			styleOverrides: {
				primary: {
					textAlign: 'center',
				},
				secondary: {
					textAlign: 'center',
				},
			},
		},
	},
});

export class Confirm extends Component {
	continue = e => {
		// PROCESS FROM, such a bank-end
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const {values: {firstName, lastName, email, city, occupation, bio}} = this.props;

		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>

					<AppBar position='static'>
						<Toolbar >
							<IconButton edge='start' color='inherit' aria-label='menu'>
								<MenuIcon />
							</IconButton>
							<Typography variant='h6' style={{flexGrow: 1, textAlign: 'center'}}>
      Confirm User Data
							</Typography>
						</Toolbar>
					</AppBar>

					<Box marginBottom={2} marginTop={2} display='flex' justifyContent='center'>
						<List>
							<ListItem>
								<ListItemText
									primary='First Name'
									secondary={firstName}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary='Last Name'
									secondary={lastName}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary='Email'
									secondary={email}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary='Occupation'
									secondary={occupation}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary='City'
									secondary={city}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary='Bio'
									secondary={bio}
								/>
							</ListItem>
						</List>
					</Box>

					<Button
						variant='contained'
						color='primary'
						style={styles.button}
						onClick={this.continue}
					>
            Confirm & continue
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

export default Confirm;
