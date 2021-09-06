import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';

const Medal = (props) => {
    return (
        <Paper elevation={2} className="paper" >
            <div className="medals">
                {props.medal.type} medals: {props.country[props.medal.type + "MedalCount"]}
                <button onClick={ () => props.onIncrement(props.country.id, props.medal.type) }><ArrowUpwardIcon /></button>
                <button onClick={ () => props.onDecrement(props.country.id, props.medal.type)}><ArrowDownwardIcon /></button>
            </div>
        </Paper>  
        );
    }

export default Medal;

