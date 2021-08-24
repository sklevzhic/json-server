// "server": "json-server  --watch db.json --routes routes.json --port 3004"
// "start": "node server.js"

import React, {useEffect, useState} from "react";

import {makeStyles} from "@material-ui/styles";
import {
    Chip,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText, Paper
} from "@material-ui/core";
import {Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import images from "../global/images";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({}))

const LastRefueling = ({printers, handlerRefills}) => {
    const classes = useStyles();
    return (
        <>
            <List>
                {
                    printers.map(el => {
                        return <ListItem component={Link} to={`/technics/${el.id}`} button>
                            <ListItemAvatar>
                                <Avatar variant={"square"} src={images[el.name]}></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={el.name} secondary={el.user}/>
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => handlerRefills(el)} color="secondary"
                                            aria-label="add an alarm">
                                    <ArrowDropDownIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    })
                }
            </List>
        </>

    )
}

export default LastRefueling






{((property === 'date') || (property === 'year'))
    ?
    : <div>
        {((property === 'invent') || (property === 'zavod')) ?

            :

        }

    </div>
}

