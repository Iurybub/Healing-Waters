import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Tooltip, Zoom } from '@material-ui/core';
import PriceIcon from './PriceIcon';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 'auto',
	},
	cardHeader: {
		padding: theme.spacing(1, 2),
	},
	list: {
		width: 200,
		backgroundColor: theme.palette.background.paper,
		overflow: 'auto',
	},
	item: {
		padding: theme.spacing(0, 2),
	},
	button: {
		margin: theme.spacing(0.5, 0),
	},
}));

function not(a, b) {
	return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
	return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
	return [...a, ...not(b, a)];
}

const ServiceTransferList = ({
	allServices,
	programDefaultServices,
	totalPrice,
	selectedServices,
}) => {
	const classes = useStyles();
	const [checked, setChecked] = React.useState([]);
	const [left, setLeft] = React.useState(allServices);
	const [right, setRight] = React.useState(programDefaultServices);
	selectedServices(right);
	const leftChecked = intersection(checked, left);
	const rightChecked = intersection(checked, right);

	const handleTotalPrice = (right) => {
		{
			const price = right.reduce(
				(result, current) => result + current.price,
				0
			);
			totalPrice(price);
			return price;
		}
	};

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		setChecked(newChecked);
	};
	const numberOfChecked = (items) => intersection(checked, items).length;

	const handleToggleAll = (items) => () => {
		if (numberOfChecked(items) === items.length) {
			setChecked(not(checked, items));
		} else {
			setChecked(union(checked, items));
		}
	};

	const handleCheckedRight = () => {
		setRight(right.concat(leftChecked));
		setLeft(not(left, leftChecked));
		setChecked(not(checked, leftChecked));
	};

	const handleCheckedLeft = () => {
		setLeft(left.concat(rightChecked));
		setRight(not(right, rightChecked));
		setChecked(not(checked, rightChecked));
	};

	const customList = (title, services) => (
		<Card>
			<div
				className={classes.cardHeader}
				avatar={
					<Checkbox
						onClick={handleToggleAll(services)}
						checked={
							numberOfChecked(services) === services.length &&
							services.length !== 0
						}
						indeterminate={
							numberOfChecked(services) !== services.length &&
							numberOfChecked(services) !== 0
						}
						disabled={services.length === 0}
						inputProps={{ 'aria-label': 'all items selected' }}
					/>
				}
				title={title}
				subheader={`${numberOfChecked(services)}/${services.length} selected`}
			/>
			<Divider />
			<List className={classes.list} dense component='div' role='list'>
				{services.map((service) => {
					const labelId = `transfer-list-all-item-${service}-label`;

					return (
						<Tooltip
							arrow
							TransitionComponent={Zoom}
							title={<PriceIcon price={service.price} />}
						>
							<ListItem
								key={service.id}
								role='listitem'
								button
								onClick={handleToggle(service)}
								className={classes.item}
							>
								<ListItemIcon>
									<Checkbox
										checked={checked.indexOf(service) !== -1}
										tabIndex={-1}
										disableRipple
										inputProps={{ 'aria-labelledby': labelId }}
									/>
								</ListItemIcon>
								<ListItemText id={labelId} primary={service.name} />
							</ListItem>
						</Tooltip>
					);
				})}
				<ListItem />
			</List>
		</Card>
	);
	return (
		<div>
			<Grid
				container
				spacing={2}
				justify='center'
				alignItems='center'
				className={classes.root}
			>
				<Grid item>{customList('Extra Services', left)}</Grid>
				<Grid item>
					<Grid container direction='column' alignItems='center'>
						<Button
							variant='outlined'
							size='small'
							className={classes.button}
							onClick={handleCheckedRight}
							disabled={leftChecked.length === 0}
							aria-label='move selected right'
						>
							&gt;
						</Button>
						<Button
							variant='outlined'
							size='small'
							className={classes.button}
							onClick={handleCheckedLeft}
							disabled={rightChecked.length === 0}
							aria-label='move selected left'
						>
							&lt;
						</Button>
					</Grid>
				</Grid>
				<Grid item>{customList('Program Default Services', right)}</Grid>
			</Grid>
			<div className='Checkout'>
				<div className='total_price  '>
					Total Price: &nbsp;
					<Button
						variant={'outlined'}
						color={'secondary'}
						onClick={() => totalPrice(handleTotalPrice(right))}
					>
						&#36;&nbsp;
						{handleTotalPrice(right)}
					</Button>
				</div>
			</div>
		</div>
	);
};
export default ServiceTransferList;

