import { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { SearchOffSharp } from '@mui/icons-material'

const SearchExercises = () => {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '30px' }
                }}
                mb="50px"
                textAlign="center"
            >
                Great Exercises You <br /> Should Know
            </Typography>
            <Box>
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="search-btn"
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute'
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
        </Stack>
    )
}

export default SearchExercises

//48:20