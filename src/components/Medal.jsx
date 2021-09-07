import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';

const Medal = (props) => {
    const{medal, country, onIncrement,onDecrement} = props;
    return (
        <Paper elevation={2} className="paper" >
            <div className="medals">
                {medal.type} medals: {country[medal.type + "MedalCount"]}
                <button onClick={ () => onIncrement(country.id, medal.type) }><ArrowUpwardIcon /></button>
                <button onClick={ () => onDecrement(country.id, medal.type)}><ArrowDownwardIcon /></button>
            </div>
        </Paper>  
        );
    }

export default Medal;

