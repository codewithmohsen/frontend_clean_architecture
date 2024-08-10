"use client";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function Page() {
    function renderRating(params: any) {
        return <h1>{params}</h1>;
    }
    const columns: GridColDef[] = [
        // { field: 'id', headerName: 'ID', type: 'number', disableColumnMenu: true },
        { field: 'index', headerName: 'Index', type: 'number', disableColumnMenu: true },
        {
            field: 'avatar',
            sortable: false,
            renderHeader: () => {
                return ('');
            },
            renderCell: (params) => {
                return (
                    <div>
                        <h1>{params.value}</h1>
                        {/* {/* <img src={params.row.avatar} alt='' /> */}
                        {/* {params.row.username} */}
                    </div>
                );
            }
        },
        { field: 'product', headerName: 'Product', type: 'string', flex: 1, disableColumnMenu: true },
        { field: 'count', headerName: 'Count', type: 'number', disableColumnMenu: true },
        {
            field: 'cost',
            headerName: 'Cost',
            sortable: true,
            type: "number",
            valueFormatter: (value, row) => `${value} $`,
            disableColumnMenu: true
        },
        {
            field: 'id',
            sortable: false,
            disableColumnMenu: true,
            valueFormatter: (value, row) => `${value} ${row}`,
            renderHeader: () => {
                return ('');
            },
            renderCell: (params) => {
                return (
                    <div>
                        <h1>{params.value}</h1>
                        {/* {/* <img src={params.row.avatar} alt='' /> */}
                        {/* {params.row.username} */}
                    </div>
                );
            }
        }
    ];

    const rows = [
        { id: 11, index: 1, product: 'Snow', count: 35, cost: 1, avatar: 'aaa' },
        { id: 21, index: 2, product: 'Lannister', count: 42, cost: 1000, avatar: 'sa' },
        { id: 31, index: 3, product: 'Lannister', count: 45, cost: 1000, avatar: 'sa' },
        { id: 41, index: 4, product: 'Stark', count: 16, cost: 1000, avatar: 'sa' },
        { id: 51, index: 5, product: 'Targaryen', count: 1, cost: 2, avatar: 'sa' },
        { id: 61, index: 6, product: 'Melisandre', count: 150, cost: 1000, avatar: 'sa' },
        { id: 71, index: 7, product: 'Clifford', count: 44, cost: 1000, avatar: 'sa' },
        { id: 81, index: 8, lastName: 'Frances', count: 36, cost: 1000, avatar: 'sa' },
        { id: 91, index: 9, product: 'Roxie', count: 65, cost: 1000, avatar: 'sa' },
    ];

    return (
        <>
            <div style={{ width: '100%', height: '80%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    // checkboxSelection
                    hideFooterPagination={false}
                />
            </div>
        </>

    );
}
