import { useState, useEffect } from 'react';
import { 
  Box, 
  Button,
  Container, 
  Grid, 
  Typography, 
  Card,
  CardContent,
  TextField,
  MenuItem,
  InputAdornment,
  CircularProgress
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { EnergyListingCard } from '../components/Marketplace/energyListingCard';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { SvgIcon } from '@mui/material';

const sortOptions = [
  { value: 'price_asc', label: 'Price (Low to High)' },
  { value: 'price_desc', label: 'Price (High to Low)' },
  { value: 'newest', label: 'Newest First' },
  { value: 'amount_desc', label: 'Amount (High to Low)' }
];

const energyTypeOptions = [
  { value: 'all', label: 'All Types' },
  { value: 'solar', label: 'Solar' },
  { value: 'wind', label: 'Wind' },
  { value: 'biomass', label: 'Biomass' },
  { value: 'hydro', label: 'Hydro' }
];

const Marketplace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [energyType, setEnergyType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  
  useEffect(() => {
    const timer = setTimeout(() => {
      const mockListings = [
        {
          id: '1',
          title: 'Solar Energy Surplus',
          description: 'Clean solar energy available for immediate purchase',
          price: 0.11,
          amount: 200,
          unit: 'kWh',
          type: 'solar',
          seller: {
            name: 'Green Acres Farm',
            rating: 4.8,
            location: '5.2 meters away'
          },
          postedAt: '2025-04-20T14:30:00Z',
          image: '../assets/images/fish-farm.jpg'
        },
        {
          id: '2',
          title: 'Wind Energy - Community Grid',
          description: 'Excess wind energy from our turbines',
          price: 0.09,
          amount: 350,
          unit: 'kWh',
          type: 'wind',
          seller: {
            name: 'Windy Hills Co-op',
            rating: 4.5,
            location: '8.7 meters away'
          },
          postedAt: '2025-04-19T10:15:00Z',
          image: '../assets/images/fish-farm.jpg'
        },
        {
          id: '3',
          title: 'Biomass Energy Available',
          description: 'Sustainable biomass energy produced from agricultural waste',
          price: 0.10,
          amount: 150,
          unit: 'kWh',
          type: 'biomass',
          seller: {
            name: 'Sustainable Farms Inc.',
            rating: 4.6,
            location: '3.1 meters away'
          },
          postedAt: '2025-04-21T09:45:00Z',
          image: '../assets/images/fish-farm.jpg'
        },
        {
          id: '4',
          title: 'Solar - River SOL',
          description: 'Clean SOLAR power from our micro GRID',
          price: 0.12,
          amount: 250,
          unit: 'kWh',
          type: 'solar',
          seller: {
            name: 'Solart Farm',
            rating: 4.9,
            location: '7.5 meters away'
          },
          postedAt: '2025-04-18T16:20:00Z',
          image: '../assets/images/fish-farm.jpg'
        }
      ];
      
      setListings(mockListings);
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  
  const filteredListings = listings
    .filter(listing => 
      (energyType === 'all' || listing.type === energyType) &&
      (searchQuery === '' || 
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.seller.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'amount_desc':
          return b.amount - a.amount;
        case 'newest':
        default:
          return new Date(b.postedAt) - new Date(a.postedAt);
      }
    });

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4">
            Energy Marketplace
          </Typography>
          <Button
            component={RouterLink}
            to="/create-listing"
            variant="contained"
            color="primary"
          >
            Create Listing
          </Button>
        </Box>

       
        <Card sx={{ mb: 4, p: 2 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon fontSize="small">
                          <MagnifyingGlassIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="Search energy listings"
                  variant="outlined"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Energy Type"
                  name="energyType"
                  select
                  value={energyType}
                  onChange={(e) => setEnergyType(e.target.value)}
                >
                  {energyTypeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Sort By"
                  name="sortBy"
                  select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

       
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" color="text.secondary">
                {filteredListings.length} listings found
              </Typography>
            </Box>
            
            {filteredListings.length === 0 ? (
              <Card sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                  No energy listings found
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Try adjusting your search or filter criteria
                </Typography>
              </Card>
            ) : (
              <Grid container spacing={3}>
                {filteredListings.map((listing) => (
                  <Grid item key={listing.id} xs={12} sm={6} md={4} lg={3}>
                    <EnergyListingCard listing={listing} />
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}
      </Container>
    </Box>
  );
};

export default Marketplace;
