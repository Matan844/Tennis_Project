import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'מספר משתתף', width: 50 },
  { field: 'firstName', headerName: 'שם פרטי', width: 130 },
  { field: 'lastName', headerName: 'שם משפחה', width: 130 },
  {
    field: 'fullName',
    headerName: 'שם מלא',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'grade', headerName: 'כיתה', width: 100 },
  { field: 'phonenumber', headerName: 'מספר טלפון', width: 130 },
  { field: 'birthday', headerName: 'תאריך לידה', width: 130, },
  { field: 'age', headerName: 'גיל', width: 70 },
  { field: 'idnumber', headerName: 'תעודת זהות', width: 130 },
  { field: 'medical', headerName: 'אישור רפואי', width: 100 },
  { field: 'catagory', headerName: 'קטגוריה', width: 130 },
  { field: 'issues', headerName: ' הערות', width: 100 },
];

const rows = [
  { id: 1, lastName: 'כהן', firstName: 'עידו', age: 35, idnumber:'22131232' },
  { id: 2, lastName: 'לוי', firstName: 'יניב', age: 42 ,idnumber:'22131232'},
  { id: 3, lastName: 'ישראלי', firstName: 'אור', age: 45 ,idnumber:'22131232',medical:'יש',birthday:'05/03/2023'},
  { id: 4, lastName: 'כהן', firstName: 'שלומי', age: 16 ,idnumber:'22131232'},
  { id: 5, lastName: 'לוי', firstName: 'חיים', age: 12 ,idnumber:'22131232'},
  { id: 6, lastName: 'ישראלי', firstName: 'ברוך', age: 15 ,idnumber:'22131232'},
];

export default function Tableparticipants() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
