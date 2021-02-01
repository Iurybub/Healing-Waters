import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

export default function PriceIcon(props) {
    return (
        <div className="container__PriceIcon">
            <AttachMoneyIcon style={{fontSize: '16px'}}/>
            <span className="price__PriceIcon">{props.price}</span>
        </div>
    );
}