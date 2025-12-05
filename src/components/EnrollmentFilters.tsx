import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box, TextField } from "@mui/material";

type Props = {
    currentFilter: string;
    onFilterChange: (filter: string) => void;
    searchTerm?: string;
    onSearchChange?: (term: string) => void;
};

export const EnrollmentFilters: React.FC<Props> = ({
    currentFilter,
    onFilterChange,
    searchTerm = "",
    onSearchChange = () => { },
}) => {
    return (
        <Box sx={{ minWidth: 120, display: 'flex', gap: 2 }}>
            {currentFilter === 'name' && (
                <TextField
                    label="Student Name"
                    variant="outlined"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            )}
            <FormControl fullWidth>
                <InputLabel id="status-filter-label">Filter by Status</InputLabel>
                <Select
                    labelId="status-filter-label"
                    id="status-filter"
                    value={currentFilter}
                    label="Filter by Status"
                    onChange={(e) => onFilterChange(e.target.value)}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="confirmed">Confirmed</MenuItem>
                    <MenuItem value="cancelled">Cancelled</MenuItem>
                    <MenuItem value="name">Name</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
