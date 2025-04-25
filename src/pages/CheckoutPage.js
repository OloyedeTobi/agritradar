
import { useState, useEffect } from 'react';
import '../Style';

const CheckoutPage = () => {
  const [listing, setListing] = useState(null);
  const [loadingListing, setLoadingListing] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [activeStep, setActiveStep] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState('pending');
  const [transactionHash, setTransactionHash] = useState('');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showBlockchainDialog, setShowBlockchainDialog] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [showTransactionDetailsDialog, setShowTransactionDetailsDialog] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
  });

 
  const listingId = '12345';
  
  
  const steps = ['Review Order', 'Payment Details', 'Confirm Purchase', 'Transfer Energy'];

 
  useEffect(() => {
    const fetchListing = async () => {
      try {
        
        setTimeout(() => {
         
          const mockListing = {
            id: listingId,
            title: 'Solar Energy Surplus',
            description: 'Clean solar energy available for immediate purchase',
            price: 0.11,
            amount: 200,
            unit: 'kWh',
            type: 'solar',
            seller: {
              name: 'Green Acres Farm',
              rating: 4.8,
              location: '5.2 miles away',
              walletAddress: '0x8f23DDc3BdFe941FAA9b7D7617689caBce5b2E16'
            }
          };
          
          setListing(mockListing);
          setLoadingListing(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching listing:', error);
        setLoadingListing(false);
      }
    };

    fetchListing();
  }, [listingId]);

 
  const calculateTotal = () => {
    if (!listing) return 0;
    return (listing.price * quantity).toFixed(2);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= listing?.amount) {
      setQuantity(value);
    }
  };


  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  
  const connectToMetaMask = () => {

    setProcessingPayment(true);
    setTimeout(() => {
      const dummyAddress = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';
      setWalletAddress(dummyAddress);
      setWalletConnected(true);
      setProcessingPayment(false);
    }, 1500);
  };

  
  const generateTransactionHash = () => {
    const characters = '0123456789abcdef';
    let hash = '0x';
    for (let i = 0; i < 64; i++) {
      hash += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return hash;
  };


  const processBlockchainPayment = () => {
    setProcessingPayment(true);
    
    
    const hash = generateTransactionHash();
    setTransactionHash(hash);
    
    
    setTimeout(() => {
      setShowBlockchainDialog(true);
      
      
      const txDetails = {
        hash: hash,
        from: walletAddress,
        to: listing.seller.walletAddress,
        value: `${(calculateTotal() * 1.01).toFixed(4)} ETH`,
        gasUsed: '21000',
        blockNumber: Math.floor(Math.random() * 1000000) + 15000000,
        timestamp: new Date().toISOString(),
        status: 'Success',
        energyAmount: `${quantity} ${listing.unit}`,
        energyType: listing.type,
        meterID: formData.address || 'SM123456789'
      };
      
      setTransactionDetails(txDetails);
      setProcessingPayment(false);
    }, 3000);
  };

  
  const processCardPayment = () => {
    setProcessingPayment(true);
    
    
    const paymentRef = `PYM-${Date.now().toString().substring(5)}`;
    setTransactionHash(paymentRef);
    
    
    setTimeout(() => {
      const hash = generateTransactionHash();
      setTransactionHash(hash);
      
      
      const txDetails = {
        hash: hash,
        from: '0xPaymentProcessor1234567890abcdef1234567890abcdef',
        to: listing.seller.walletAddress,
        value: `${(calculateTotal() * 1.01).toFixed(4)} ETH`,
        gasUsed: '21000',
        blockNumber: Math.floor(Math.random() * 1000000) + 15000000,
        timestamp: new Date().toISOString(),
        status: 'Success',
        paymentReference: paymentRef,
        paymentMethod: 'Credit Card',
        energyAmount: `${quantity} ${listing.unit}`,
        energyType: listing.type,
        meterID: formData.address || 'SM123456789'
      };
      
      setTransactionDetails(txDetails);
      setTransactionStatus('confirmed');
      setActiveStep(3);
      setProcessingPayment(false);
      
     
      setTimeout(() => {
        setTransactionStatus('completed');
        setShowSuccessDialog(true);
      }, 3000);
    }, 3000);
  };
  
  
  const processPaystackPayment = () => {
    setProcessingPayment(true);
    
    
    const paymentRef = `PSK-${Date.now().toString().substring(5)}`;
    setTransactionHash(paymentRef);
    
   
    setTimeout(() => {
      
      const hash = generateTransactionHash();
      setTransactionHash(hash);
      
      
      const txDetails = {
        hash: hash,
        from: '0xPaystack85c7ff8b6de127e26c5c06715ffc027c77b6e8f',
        to: listing.seller.walletAddress,
        value: `${(calculateTotal() * 1.01).toFixed(4)} ETH`,
        gasUsed: '21000',
        blockNumber: Math.floor(Math.random() * 1000000) + 15000000,
        timestamp: new Date().toISOString(),
        status: 'Success',
        paymentReference: paymentRef,
        paymentMethod: 'Paystack',
        energyAmount: `${quantity} ${listing.unit}`,
        energyType: listing.type,
        meterID: formData.address || 'SM123456789'
      };
      
      setTransactionDetails(txDetails);
      setTransactionStatus('confirmed');
      setActiveStep(3);
      setProcessingPayment(false);
      
     
      setTimeout(() => {
        setTransactionStatus('completed');
        setShowSuccessDialog(true);
      }, 3000);
    }, 3000);
  };
  
 
  const processFlutterwavePayment = () => {
    setProcessingPayment(true);
    
   
    const paymentRef = `FLW-${Date.now().toString().substring(5)}`;
    setTransactionHash(paymentRef);
    
  
    setTimeout(() => {
     
      const hash = generateTransactionHash();
      setTransactionHash(hash);
      
   
      const txDetails = {
        hash: hash,
        from: '0xFlutterWave9a35412dd9b43d66b28ed126d742215fd',
        to: listing.seller.walletAddress,
        value: `${(calculateTotal() * 1.01).toFixed(4)} ETH`,
        gasUsed: '21000',
        blockNumber: Math.floor(Math.random() * 1000000) + 15000000,
        timestamp: new Date().toISOString(),
        status: 'Success',
        paymentReference: paymentRef,
        paymentMethod: 'Flutterwave',
        energyAmount: `${quantity} ${listing.unit}`,
        energyType: listing.type,
        meterID: formData.address || 'SM123456789'
      };
      
      setTransactionDetails(txDetails);
      setTransactionStatus('confirmed');
      setActiveStep(3);
      setProcessingPayment(false);
      
     
      setTimeout(() => {
        setTransactionStatus('completed');
        setShowSuccessDialog(true);
      }, 3000);
    }, 3000);
  };

  
  const handleBlockchainContinue = () => {
    setShowBlockchainDialog(false);
    setTransactionStatus('confirmed');
    setActiveStep(3);
    
    
    setTimeout(() => {
      setTransactionStatus('completed');
      setShowSuccessDialog(true);
    }, 3000);
  };

 
  const viewTransactionDetails = () => {
    setShowTransactionDetailsDialog(true);
  };

  
  const closeTransactionDetailsDialog = () => {
    setShowTransactionDetailsDialog(false);
  };

  
  const handleNext = () => {
    if (activeStep === 2) {
      
      if (paymentMethod === 'blockchain') {
        processBlockchainPayment();
      } else if (paymentMethod === 'card') {
        processCardPayment();
      } else if (paymentMethod === 'paystack') {
        processPaystackPayment();
      } else if (paymentMethod === 'flutterwave') {
        processFlutterwavePayment();
      }
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

 
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  
  const handleBackToMarketplace = () => {
    alert('Navigate back to marketplace - This would use navigate() in a real app');
  };

  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  
  if (loadingListing) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading listing details...</p>
      </div>
    );
  }

  
  if (!listing) {
    return (
      <div className="error-container">
        <div className="error-message">
          Listing not found. Please try again or contact support.
        </div>
        <button className="button primary" onClick={handleBackToMarketplace}>
          Return to Marketplace
        </button>
      </div>
    );
  }


  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      
      <div className="stepper">
        {steps.map((label, index) => (
          <div 
            key={label} 
            className={`step ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
          >
            <div className="step-indicator">{index + 1}</div>
            <div className="step-label">{label}</div>
          </div>
        ))}
      </div>
      
      <div className="checkout-content">

        <div className="order-details">
          <div className="card">
            <h2>Order Details</h2>
            <div className="listing-info">
              <div className="listing-image-placeholder">
                <div className="energy-icon solar"></div>
              </div>
              <div className="listing-text">
                <h3>{listing.title}</h3>
                <p>{listing.description}</p>
                <p><strong>Type:</strong> {listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}</p>
                <p><strong>Price:</strong> ${listing.price} per {listing.unit}</p>
                <p><strong>Seller:</strong> {listing.seller.name}</p>
                <p className="seller-wallet">
                  <strong>Seller Wallet:</strong> 
                  <span className="wallet-address">{listing.seller.walletAddress.substring(0, 6)}...{listing.seller.walletAddress.substring(listing.seller.walletAddress.length - 4)}</span>
                </p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="quantity-selector">
              <label>Quantity ({listing.unit}):</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={listing.amount}
              />
              <span>Available: {listing.amount} {listing.unit}</span>
            </div>
          </div>
          
         
          {activeStep === 0 && (
            <div className="card">
              <h2>Delivery Information</h2>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Delivery Address (Smart Meter ID) *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. SM123456789"
                />
                <p className="form-help">Enter your Smart Meter ID for energy delivery</p>
              </div>
            </div>
          )}
          
        
          {activeStep === 1 && (
            <div className="card">
              <h2>Payment Method</h2>
              <div className="payment-options">
                <div className="payment-option">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="card" className="payment-label">
                    <span className="payment-icon card-icon">💳</span>
                    Credit/Debit Card
                  </label>
                </div>
                <div className="divider"></div>
                <div className="payment-option">
                  <input
                    type="radio"
                    id="paystack"
                    name="paymentMethod"
                    value="paystack"
                    checked={paymentMethod === 'paystack'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="paystack" className="payment-label">
                    <span className="payment-icon paystack-icon">P</span>
                    Paystack
                  </label>
                </div>
                <div className="divider"></div>
                <div className="payment-option">
                  <input
                    type="radio"
                    id="flutterwave"
                    name="paymentMethod"
                    value="flutterwave"
                    checked={paymentMethod === 'flutterwave'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="flutterwave" className="payment-label">
                    <span className="payment-icon flutterwave-icon">F</span>
                    Flutterwave
                  </label>
                </div>
                <div className="divider"></div>
                <div className="payment-option">
                  <input
                    type="radio"
                    id="blockchain"
                    name="paymentMethod"
                    value="blockchain"
                    checked={paymentMethod === 'blockchain'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="blockchain" className="payment-label">
                    <span className="payment-icon blockchain-icon">⛓️</span>
                    Blockchain (MetaMask)
                  </label>
                </div>
              </div>
              
              {paymentMethod === 'blockchain' && (
                <div className="metamask-section">
                  {walletConnected ? (
                    <div className="wallet-connected info-box">
                      <p>
                        <span className="status-dot connected"></span>
                        Connected to MetaMask
                      </p>
                      <p className="wallet-address-display">
                        Wallet: {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
                      </p>
                    </div>
                  ) : (
                    <div className="connect-wallet">
                      <button 
                        className="button connect-metamask" 
                        onClick={connectToMetaMask}
                        disabled={processingPayment}
                      >
                        {processingPayment ? (
                          <><span className="button-spinner"></span> Connecting...</>
                        ) : (
                          <>Connect MetaMask Wallet</>
                        )}
                      </button>
                      <p className="metamask-help">
                        Connect your wallet to proceed with blockchain payment
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          
         
          {activeStep === 2 && (
            <div className="card">
              <h2>Payment Processing</h2>
              {paymentMethod === 'card' && (
                <div className="payment-form">
                  <div className="form-group">
                    <label>Card Number *</label>
                    <input type="text" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date *</label>
                      <input type="text" placeholder="MM/YY" />
                    </div>
                    <div className="form-group">
                      <label>CVV *</label>
                      <input type="text" placeholder="123" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Cardholder Name *</label>
                    <input type="text" />
                  </div>
                  <div className="secure-payment-notice">
                    <span className="secure-icon">🔒</span>
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>
              )}
              
              {paymentMethod === 'paystack' && (
                <div className="payment-button-container">
                  <p>You'll be redirected to Paystack's secure payment gateway</p>
                  <button 
                    className="payment-button paystack"
                    onClick={processPaystackPayment}
                    disabled={processingPayment}
                  >
                    {processingPayment ? (
                      <><span className="button-spinner"></span> Processing...</>
                    ) : (
                      <>Pay with Paystack</>
                    )}
                  </button>
                </div>
              )}
              
              {paymentMethod === 'flutterwave' && (
                <div className="payment-button-container">
                  <p>You'll be redirected to Flutterwave's secure payment gateway</p>
                  <button 
                    className="payment-button flutterwave"
                    onClick={processFlutterwavePayment}
                    disabled={processingPayment}
                  >
                    {processingPayment ? (
                      <><span className="button-spinner"></span> Processing...</>
                    ) : (
                      <>Pay with Flutterwave</>
                    )}
                  </button>
                </div>
              )}
              
              {paymentMethod === 'blockchain' && (
                <div className="payment-button-container">
                  <p>You will be prompted to confirm this transaction in your MetaMask wallet.</p>
                  <p className="text-secondary">Estimated gas fee: 0.002 ETH</p>
                  <div className="transaction-preview">
                    <div className="preview-row">
                      <span>From:</span>
                      <span className="wallet-address">{walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}</span>
                    </div>
                    <div className="preview-row">
                      <span>To:</span>
                      <span className="wallet-address">{listing.seller.walletAddress.substring(0, 6)}...{listing.seller.walletAddress.substring(listing.seller.walletAddress.length - 4)}</span>
                    </div>
                    <div className="preview-row">
                      <span>Amount:</span>
                      <span>{(calculateTotal() * 1.01).toFixed(4)} ETH</span>
                    </div>
                  </div>
                  <button 
                    className="payment-button blockchain"
                    onClick={processBlockchainPayment}
                    disabled={!walletConnected || processingPayment}
                  >
                    {processingPayment ? (
                      <><span className="button-spinner"></span> Processing...</>
                    ) : (
                      <>Confirm & Pay with MetaMask</>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
          
         
          {activeStep === 3 && (
            <div className="card">
              <h2>Transfer Status</h2>
              <div className="transfer-status">
                {transactionStatus === 'completed' ? (
                  <div className="status-icon completed">✓</div>
                ) : (
                  <div className="status-spinner"></div>
                )}
                
                <h3>
                  {transactionStatus === 'completed' 
                    ? 'Energy Transfer Complete!' 
                    : 'Energy Transfer In Progress...'}
                </h3>
                
                <div className="transaction-details-card">
                  <h4>Transaction Details:</h4>
                  <p><strong>Transaction ID:</strong> {transactionHash ? 
                    <span className="transaction-hash">{transactionHash.substring(0, 10)}...{transactionHash.substring(transactionHash.length - 6)}</span> 
                    : 'Processing...'}
                  </p>
                  <p><strong>Status:</strong> <span className={`status-badge ${transactionStatus}`}>{transactionStatus.charAt(0).toUpperCase() + transactionStatus.slice(1)}</span></p>
                  <p><strong>Quantity:</strong> {quantity} {listing.unit}</p>
                  <p><strong>Payment Method:</strong> {paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}</p>
                  {transactionHash && (
                    <div className="view-transaction">
                      <button 
                        className="button secondary view-details"
                        onClick={viewTransactionDetails}
                      >
                        View Transaction Details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        
        
        <div className="order-summary">
          <div className="card">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Price per {listing.unit}</span>
              <span>₦{listing.price}</span>
            </div>
            <div className="summary-row">
              <span>Quantity</span>
              <span>{quantity} {listing.unit}</span>
            </div>
            <div className="divider"></div>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₦{(listing.price * quantity).toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Network Fee</span>
              <span>₦{(0.01 * calculateTotal()).toFixed(2)}</span>
            </div>
            <div className="divider"></div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₦{(calculateTotal() * 1.01).toFixed(2)}</span>
            </div>
            
           
            <div className="action-buttons">
              <button 
                className="button secondary"
                onClick={activeStep === 0 ? handleBackToMarketplace : handleBack}
                disabled={activeStep === 3 && transactionStatus === 'completed'}
              >
                {activeStep === 0 ? 'Back to Marketplace' : 'Back'}
              </button>
              <button
                className="button primary"
                onClick={handleNext}
                disabled={(activeStep === 2 && (
                  (paymentMethod === 'blockchain' && !walletConnected) || 
                  processingPayment
                )) || 
                (activeStep === 3)}
              >
                {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
              </button>
            </div>
          </div>
          
         
          <div className="card energy-metrics">
            <h2>Energy Impact</h2>
            <div className="metric">
              <div className="metric-icon co2">🌿</div>
              <div className="metric-details">
                <div className="metric-value">{(quantity * 0.4).toFixed(2)} kg</div>
                <div className="metric-label">CO₂ Emissions Saved</div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="metric">
              <div className="metric-icon trees">🌳</div>
              <div className="metric-details">
                <div className="metric-value">{Math.round(quantity * 0.015)}</div>
                <div className="metric-label">Trees Equivalent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
   
      {showBlockchainDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <h2>Transaction Initiated</h2>
            <div className="dialog-content">
              <div className="blockchain-icon">⛓️</div>
              <p className="dialog-message">
                A blockchain transaction has been created in your wallet!
              </p>
              <div className="transaction-info">
                <p><strong>Transaction Hash:</strong></p>
                <p className="transaction-hash">{transactionHash}</p>
                <p><strong>From Wallet:</strong></p>
                <p className="wallet-address">{walletAddress}</p>
                <p><strong>Status:</strong> <span className="status-badge pending">Pending</span></p>
              </div>
              <p className="dialog-message-small">
                This transaction will create a smart contract to transfer energy to your meter.
              </p>
            </div>
            <div className="dialog-actions">
              <button className="button primary" onClick={handleBlockchainContinue}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      
     
      {showSuccessDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <h2>Energy Transfer Complete</h2>
            <div className="dialog-content">
              <div className="success-icon">✓</div>
              <p className="dialog-message">
                Your energy transfer has been successfully completed! {quantity} {listing.unit} of {listing.type} energy 
                has been delivered to your smart meter.
              </p>
              <div className="meter-info">
                <div className="meter-icon">📊</div>
                <div className="meter-details">
                  <p><strong>Smart Meter ID:</strong> {formData.address || 'SM123456789'}</p>
                  <p><strong>Current Balance:</strong> {quantity + 25} {listing.unit}</p>
                  <p><strong>Last Updated:</strong> {new Date().toLocaleString()}</p>
                </div>
              </div>
              <button 
                className="button secondary view-details"
                onClick={viewTransactionDetails}
              >
                View Blockchain Transaction
              </button>
            </div>
            <div className="dialog-actions">
              <button className="button primary" onClick={handleBackToMarketplace}>
                Return to Marketplace
              </button>
            </div>
          </div>
        </div>
      )}
      
   
{showTransactionDetailsDialog && transactionDetails && (
  <div className="dialog-overlay">
    <div className="dialog transaction-dialog">
      <div className="dialog-header">
        <h2>Transaction Details</h2>
        <button className="close-button" onClick={closeTransactionDetailsDialog}>×</button>
      </div>
      <div className="dialog-content">
        <div className="transaction-complete-icon">
          <div className="blockchain-icon-large">⛓️</div>
          <div className="status-badge success">Confirmed</div>
        </div>
        
        <div className="transaction-details-grid">
          <div className="detail-row">
            <span className="detail-label">Transaction Hash:</span>
            <span className="detail-value hash">{transactionDetails.hash}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Block Number:</span>
            <span className="detail-value">{transactionDetails.blockNumber}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">From:</span>
            <span className="detail-value address">{transactionDetails.from}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">To:</span>
            <span className="detail-value address">{transactionDetails.to}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Value:</span>
            <span className="detail-value">{transactionDetails.value}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Gas Used:</span>
            <span className="detail-value">{transactionDetails.gasUsed}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Timestamp:</span>
            <span className="detail-value">{formatDate(transactionDetails.timestamp)}</span>
          </div>
          
          <div className="divider full-width"></div>
          
          <div className="detail-row">
            <span className="detail-label">Energy Amount:</span>
            <span className="detail-value">{transactionDetails.energyAmount}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Energy Type:</span>
            <span className="detail-value">{transactionDetails.energyType.charAt(0).toUpperCase() + transactionDetails.energyType.slice(1)}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Delivery Address:</span>
            <span className="detail-value">{transactionDetails.meterID}</span>
          </div>
          
          {transactionDetails.paymentReference && (
            <div className="detail-row">
              <span className="detail-label">Payment Reference:</span>
              <span className="detail-value">{transactionDetails.paymentReference}</span>
            </div>
          )}
          
          {transactionDetails.paymentMethod && (
            <div className="detail-row">
              <span className="detail-label">Payment Method:</span>
              <span className="detail-value">{transactionDetails.paymentMethod}</span>
            </div>
          )}
        </div>
        
        <div className="blockchain-explorer-link">
          <p>View this transaction on blockchain explorer:</p>
          <a 
            href={`https://etherscan.io/tx/${transactionDetails.hash}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="explorer-button"
          >
            View on Etherscan
          </a>
        </div>
      </div>
      <div className="dialog-actions">
        <button className="button secondary" onClick={closeTransactionDetailsDialog}>
          Close
        </button>
        <button className="button primary" onClick={() => {
          closeTransactionDetailsDialog();
          if (transactionStatus === 'completed') {
            handleBackToMarketplace();
          }
        }}>
          {transactionStatus === 'completed' ? 'Return to Marketplace' : 'Back to Checkout'}
        </button>
      </div>
    </div>
  </div>

)}
</div>
)};


export default CheckoutPage;