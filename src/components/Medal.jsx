
import Paper from '@material-ui/core/Paper';

const Medal = (props) => {
    return (
        <Paper elevation={2} className="paper" >
    <div className='medal'>
        Total Medals: {props.totalMedals} 
        <br></br>
        -----------------------------------
        <div className='medals'>
            Total Gold Medals = {props.goldMedals}  
            <br></br>
            Total Silver Medals= {props.silverMedals}
            <br></br>
            Total Bronze Medals = {props.bronzeMedals}
        </div>
        </div>
        </Paper>  
        );
    }

export default Medal;
