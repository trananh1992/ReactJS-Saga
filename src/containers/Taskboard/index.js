import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import style from './style';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';

class Taskboard extends Component {

    renderBroad(){
        let html = null;
        html = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status,index)=>{
                        return(
                            < Grid item md={4} xs={12} key={status.value}>
                                status.label
                            </ Grid>
                        )
                    })
                }
            </Grid>
        )

        return html;
    }

    render(){
        const {classes}= this.props;
        return(
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" className={classes.button} >
                    <AddIcon /> Thêm mới công việc
                </Button>
                {this.renderBroad()}
            </div>
        )
    }
}

export default withStyles(style)(Taskboard);