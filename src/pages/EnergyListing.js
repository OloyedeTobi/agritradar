import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Alert
} from '@mui/material';
import { CreateListingForm } from '../components/Marketplace/energyListingForm';

const steps = ['Energy Details', 'Preview', 'Confirm'];

const CreateListing = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [listingData, setListingData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleFormSubmit = (values) => {
    setListingData(values);
    handleNext();
  };
  
  const handleListingCreation = async () => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      handleNext();
    } catch (err) {
      setError('Failed to create listing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleFinish = () => {
    navigate('/marketplace');
  };
  
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <CreateListingForm onSubmit={handleFormSubmit} />;
      case 1:
        return (
          <Paper sx={{ p: 3, my: 3 }}>
            <Typography variant="h5" gutterBottom>
              Review Your Energy Listing
            </Typography>
            <Typography variant="h6">{listingData.title}</Typography>
            <Typography variant="body1" paragraph>
              {listingData.description}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1"><strong>Energy Type:</strong> {listingData.energyType}</Typography>
              <Typography variant="body1"><strong>Amount:</strong> {listingData.amount} kWh</Typography>
              <Typography variant="body1"><strong>Price:</strong> ${listingData.price} per kWh</Typography>
              <Typography variant="body1"><strong>Location:</strong> {listingData.location}</Typography>
              <Typography variant="body1"><strong>Available From:</strong> {listingData.availableFrom}</Typography>
              {listingData.availableUntil && (
                <Typography variant="body1"><strong>Available Until:</strong> {listingData.availableUntil}</Typography>
              )}
            </Box>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                variant="contained" 
                onClick={handleBack} 
                sx={{ mr: 1 }}
              >
                Edit Listing
              </Button>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleListingCreation}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating...' : 'Confirm & Create'}
              </Button>
            </Box>
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Paper>
        );
      case 2:
        return (
          <Paper sx={{ p: 3, my: 3, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Energy Listing Created Successfully!
            </Typography>
            <Typography variant="body1" paragraph>
              Your energy listing has been created and is now available in the marketplace.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleFinish}
              sx={{ mt: 2 }}
            >
              Go to Marketplace
            </Button>
          </Paper>
        );
      default:
        return 'Unknown step';
    }
  };
  
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 3 }}>
          Create Energy Listing
        </Typography>
        
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        {getStepContent(activeStep)}
      </Container>
    </Box>
  );
};

export default CreateListing;