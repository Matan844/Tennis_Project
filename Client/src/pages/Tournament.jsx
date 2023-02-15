import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function TournamentCard() {
  return (
    <Card sx={{ minWidth: "275px", width: "10px" }} dir="rtl">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          03.03.2023
        </Typography>
        <Typography variant="h5" component="div">
          אליפות תל אביב
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          מרכזי הטניס של ישראל
        </Typography>
        <Typography variant="body2">
          גילאים 6-9
          <br />
          קטגוריה: מיני טניס
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ראה עוד</Button>
      </CardActions>
    </Card>
  );
}
