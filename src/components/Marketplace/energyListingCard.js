import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
  Button
} from '@mui/material';
import { format } from 'date-fns';
import StarIcon from '@heroicons/react/24/solid/StarIcon';
import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon';
import BoltIcon from '@heroicons/react/24/solid/BoltIcon';
import { SvgIcon } from '@mui/material';


import SolarPowerIcon from '@mui/icons-material/SolarPower';
import AirIcon from '@mui/icons-material/Air';
import ForestIcon from '@mui/icons-material/Forest';
import WaterIcon from '@mui/icons-material/Water';


const energyTypeColors = {
  solar: 'warning',
  wind: 'info',
  biomass: 'success',
  hydro: 'primary'
};


const energyTypeIcons = {
  solar: <SolarPowerIcon />,
  wind: <AirIcon />,
  biomass: <ForestIcon />,
  hydro: <WaterIcon />
};

export const EnergyListingCard = (props) => {
  const { listing, onContact } = props;
  const {
    title,
    description,
    price,
    amount,
    unit,
    type,
    seller,
    postedAt
  } = listing;

  const formattedDate = format(new Date(postedAt), 'MMM dd, yyyy');
  const typeColor = energyTypeColors[type] || 'default';
  const typeIcon = energyTypeIcons[type] || <BoltIcon />;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      
      <Box
        sx={{
          height: 140,
          backgroundColor: '#314230', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff' 
        }}
      >
        <SvgIcon sx={{ fontSize: 80 }}>
          {typeIcon}
        </SvgIcon>
      </Box>

     
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{ mb: 1 }}
          >
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Chip
              icon={
                <SvgIcon fontSize="small">
                  {typeIcon}
                </SvgIcon>
              }
              label={type.charAt(0).toUpperCase() + type.slice(1)}
              color={typeColor}
              size="small"
            />
          </Stack>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {description}
          </Typography>
        </Box>
        
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h6" color="primary.main">
          ₦{price} / {unit}
          </Typography>
          <Typography variant="subtitle1">
            {amount} {unit}
          </Typography>
        </Stack>
        
        <Divider sx={{ my: 2 }} />
        
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              {seller.name.charAt(0)}
            </Avatar>
            <Typography variant="subtitle2">
              {seller.name}
            </Typography>
          </Stack>
          
          <Stack 
            direction="row"
            spacing={2}
          >
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
            >
              <SvgIcon
                color="warning"
                fontSize="small"
              >
                <StarIcon />
              </SvgIcon>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {seller.rating}
              </Typography>
            </Stack>
            
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
            >
              <SvgIcon
                color="action"
                fontSize="small"
              >
                <MapPinIcon />
              </SvgIcon>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {seller.location}
              </Typography>
            </Stack>
            
            <Box sx={{ flexGrow: 1 }} />
            
            <Typography
              variant="caption"
              color="text.secondary"
            >
              {formattedDate}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      
      <Box sx={{ p: 2 }}>
        <Link to="/checkout"><Button
          fullWidth
          variant="contained"
          onClick={() => onContact && onContact(listing)}
          sx={{
            backgroundColor: '#5cb85c', 
            '&:hover': {
              backgroundColor: '#4ca74c', 
            },
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 0.5
          }}
        >
          Buy Now
        </Button>
        </Link>
      </Box>
    </Card>
  );
};

EnergyListingCard.propTypes = {
  listing: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    seller: PropTypes.shape({
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      location: PropTypes.string
    }).isRequired,
    postedAt: PropTypes.string.isRequired,
    image: PropTypes.string
  }).isRequired,
  onContact: PropTypes.func
};