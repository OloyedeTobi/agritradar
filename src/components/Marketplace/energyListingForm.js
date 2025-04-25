import { useState } from 'react';
import {
  Box,
  Button,
  CardContent,
  Divider,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  TextField,
  Typography
} from '@mui/material';


const theme = {
  colors: {
    primaryBg: '#314230',
    primaryCol: '#8ba17f',
    secondaryCol: '#18332f',
    tetiaryCol: '#f7f6f2',
    darkerPrimary: '#002a30',
    accentGreen: '#5cb85c',
    errorRed: '#d9534f',
    formBg: 'rgba(255, 255, 255, 0.9)',
    inputBg: '#f4f7f4',
    shadowColor: 'rgba(24, 51, 47, 0.15)',
    signinCol1: '#9bc48c'
  }
};

const energyTypes = [
  { value: 'solar', label: 'Solar' },
  { value: 'wind', label: 'Wind' },
  { value: 'biomass', label: 'Biomass' },
  { value: 'hydro', label: 'Hydro' },
  { value: 'other', label: 'Other' }
];

export const CreateListingForm = ({ onSubmit }) => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    energyType: '',
    amount: '',
    unit: 'kWh',
    price: '',
    location: '',
    availableFrom: '',
    availableUntil: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!values.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!values.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!values.energyType) {
      newErrors.energyType = 'Energy type is required';
    }
    
    if (!values.amount) {
      newErrors.amount = 'Amount is required';
    } else if (isNaN(values.amount) || Number(values.amount) <= 0) {
      newErrors.amount = 'Amount must be a positive number';
    }
    
    if (!values.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(values.price) || Number(values.price) <= 0) {
      newErrors.price = 'Price must be a positive number';
    }
    
    if (!values.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!values.availableFrom) {
      newErrors.availableFrom = 'Start date is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(values);
      }
    }
  };

  
  const inputStyles = {
    mb: 3,
    '& .MuiOutlinedInput-root': { 
      bgcolor: theme.colors.inputBg,
      borderRadius: 1,
      '&:hover fieldset': {
        borderColor: theme.colors.primaryCol,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.colors.primaryCol,
      }
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.colors.primaryBg
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Paper 
        elevation={3}
        sx={{
          maxWidth: 800,
          mx: 'auto',
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: theme.colors.formBg,
          boxShadow: `0 8px 24px ${theme.colors.shadowColor}`
        }}
      >
        <Box
          sx={{
            bgcolor: theme.colors.primaryBg,
            py: 3,
            px: 4,
            color: theme.colors.tetiaryCol
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Create Energy Listing
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.9 }}>
            List your surplus energy for other farmers to purchase
          </Typography>
        </Box>
        
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                fontWeight: 600, 
                color: theme.colors.primaryBg,
                display: 'inline-block',
                borderBottom: `2px solid ${theme.colors.primaryCol}`,
                pb: 0.5
              }}
            >
              Basic Information
            </Typography>
          </Box>
          
          <TextField
            fullWidth
            error={!!errors.title}
            helperText={errors.title}
            label="Listing Title"
            name="title"
            onChange={handleChange}
            required
            value={values.title}
            sx={inputStyles}
          />
          
          <TextField
            fullWidth
            error={!!errors.energyType}
            helperText={errors.energyType}
            label="Energy Type"
            name="energyType"
            onChange={handleChange}
            required
            select
            value={values.energyType}
            sx={inputStyles}
          >
            {energyTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          
          <TextField
            fullWidth
            error={!!errors.description}
            helperText={errors.description}
            label="Description"
            name="description"
            onChange={handleChange}
            required
            multiline
            rows={4}
            value={values.description}
            sx={inputStyles}
          />
          
          <Box sx={{ mt: 5, mb: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                fontWeight: 600, 
                color: theme.colors.primaryBg,
                display: 'inline-block',
                borderBottom: `2px solid ${theme.colors.primaryCol}`,
                pb: 0.5
              }}
            >
              Pricing Details
            </Typography>
          </Box>
          
          <FormControl 
            fullWidth 
            error={!!errors.amount}
            sx={inputStyles}
          >
            <InputLabel>Amount</InputLabel>
            <OutlinedInput
              endAdornment={<InputAdornment position="end">kWh</InputAdornment>}
              label="Amount"
              name="amount"
              onChange={handleChange}
              type="number"
              value={values.amount}
            />
            {errors.amount && (
              <FormHelperText error>{errors.amount}</FormHelperText>
            )}
          </FormControl>
          
          <FormControl 
            fullWidth 
            error={!!errors.price}
            sx={inputStyles}
          >
            <InputLabel>Price per kWh</InputLabel>
            <OutlinedInput
              startAdornment={<InputAdornment position="start">₦</InputAdornment>}
              label="Price per kWh"
              name="price"
              onChange={handleChange}
              type="number"
              value={values.price}
            />
            {errors.price && (
              <FormHelperText error>{errors.price}</FormHelperText>
            )}
          </FormControl>
          
          <Box sx={{ mt: 5, mb: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                fontWeight: 600, 
                color: theme.colors.primaryBg,
                display: 'inline-block',
                borderBottom: `2px solid ${theme.colors.primaryCol}`,
                pb: 0.5
              }}
            >
              Location and Availability
            </Typography>
          </Box>
          
          <TextField
            fullWidth
            error={!!errors.location}
            helperText={errors.location}
            label="Location"
            name="location"
            onChange={handleChange}
            required
            value={values.location}
            sx={inputStyles}
          />
          
          <TextField
            fullWidth
            error={!!errors.availableFrom}
            helperText={errors.availableFrom}
            label="Available From"
            name="availableFrom"
            onChange={handleChange}
            required
            type="date"
            value={values.availableFrom}
            InputLabelProps={{
              shrink: true
            }}
            sx={inputStyles}
          />
          
          <TextField
            fullWidth
            error={!!errors.availableUntil}
            helperText={errors.availableUntil}
            label="Available Until"
            name="availableUntil"
            onChange={handleChange}
            type="date"
            value={values.availableUntil}
            InputLabelProps={{
              shrink: true
            }}
            sx={inputStyles}
          />
        </CardContent>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 4,
            bgcolor: theme.colors.tetiaryCol
          }}
        >
          <Button
            variant="outlined"
            sx={{ 
              mr: 2, 
              px: 4,
              py: 1,
              borderRadius: 1,
              textTransform: 'none',
              fontWeight: 600,
              color: theme.colors.secondaryCol,
              borderColor: theme.colors.secondaryCol,
              '&:hover': {
                borderColor: theme.colors.secondaryCol,
                bgcolor: 'rgba(24, 51, 47, 0.05)'
              }
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ 
              px: 4, 
              py: 1,
              borderRadius: 1,
              textTransform: 'none',
              fontWeight: 600,
              bgcolor: theme.colors.accentGreen,
              '&:hover': {
                bgcolor: '#4ca34c'  
              }
            }}
          >
            Create Listing
          </Button>
        </Box>
      </Paper>
    </form>
  );
};