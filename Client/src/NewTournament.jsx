import { FormGroup, Input, Typography } from "@mui/material";

export default function NewTournament(params) {
    return(
        <FormGroup sx={{width:"250px"}}>
        <Typography variant="h5">create new tournament</Typography>
        <Input placeholder="שם הטורניר"/>
        <Input placeholder="גילאים"/>
        <Input placeholder="קטגוריה"/>
        <Input placeholder="תאריך" type="date"/>
        </FormGroup>
    )
}