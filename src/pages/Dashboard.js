import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardHeader,
    Divider,
    LinearProgress,
    Tabs,
    Tab,
    Tooltip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from '@mui/material';
import '../Style';
import EnergyStatusCard from '../components/Dashboard/energyStatusCard';
import { ShoppingCartIcon, BoltIcon, CurrencyDollarIcon, ArrowTrendingUpIcon, TagIcon } from '@heroicons/react/24/solid';




const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDashboardData({
        energyProduced: 450,
        energyConsumed: 320,
        energySold: 130,
        currentPrice: 0.12,
        marketTrend: '+8.2%',
        recentTransactions: [
          { id: 1, buyer: "Farm A", amount: "45 kWh", price: "$5.40", date: "2025-04-22" },
          { id: 2, buyer: "Farm B", amount: "30 kWh", price: "$3.60", date: "2025-04-21" },
          { id: 3, buyer: "Community Grid", amount: "55 kWh", price: "$6.60", date: "2025-04-20" }
        ]
      });
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <h2>Loading your energy dashboard...</h2>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    );
  }

  const EnergyStatusCard = ({ title, value, iconClass, trend, trendIconClass }) => {
    return (
      <div className="energy-status-card">
        <div className="card-content">
          <div className={`card-icon-container ${iconClass}`}>
            <i className="energy-icon"></i>
          </div>
          <div className="card-info">
            <h3 className="card-title">{title}</h3>
            <div className="card-value-container">
              <span className="card-value">{value}</span>
              {trend && (
                <div className="card-trend">
                  <i className={trendIconClass}></i>
                  <span>{trend}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="dashboard-main">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Energy Dashboard</h1>
          <div className="dashboard-tabs">
            <button 
              className={`tab-button ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <div className="tab-tooltip">
              <button 
                className={`tab-button ${activeTab === 'marketplace' ? 'active' : ''}`}
                onClick={() => setActiveTab('marketplace')}
              >
                Marketplace
              </button>
              <span className="tooltip-text">Buy Energy</span>
            </div>
            <div className="tab-tooltip">
              <button 
                className={`tab-button ${activeTab === 'energy-listing' ? 'active' : ''}`}
                onClick={() => setActiveTab('energy-listing')}
              >
                Energy Listing
              </button>
              <span className="tooltip-text">List Energy for Sale</span>
            </div>
          </div>
        </div>
        
        {activeTab === 'dashboard' && (
          <>
            <div className="status-cards-grid">
              <EnergyStatusCard
                title="Energy Produced"
                value={`${dashboardData.energyProduced} kWh`}
                iconClass="produced"
              />
              <EnergyStatusCard
                title="Energy Consumed"
                value={`${dashboardData.energyConsumed} kWh`}
                iconClass="consumed"
              />
              <EnergyStatusCard
                title="Energy Sold"
                value={`${dashboardData.energySold} kWh`}
                iconClass="sold"
              />
              <EnergyStatusCard
                title="Current Price"
                value={`$${dashboardData.currentPrice}/kWh`}
                trend={dashboardData.marketTrend}
                iconClass="price"
                trendIconClass="trend-up"
              />
            </div>

        <Card className="card">
          <CardHeader title="Recent Transactions" className="card-header" />
          <Divider />
          <CardContent className="card-content">
            <TableContainer component={Paper} className="transaction-table">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Buyer</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dashboardData.recentTransactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell>{tx.buyer}</TableCell>
                      <TableCell>{tx.amount}</TableCell>
                      <TableCell>{tx.price}</TableCell>
                      <TableCell>{tx.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>


          </>
        )}

        {activeTab === 'marketplace' && (
          <div className="placeholder-content">
            <div className="placeholder-icon">
              <i className="shopping-cart-icon"></i>
            </div>
            <h2>Energy Marketplace</h2>
            <p>Browse and purchase energy from other farms in your network</p>
            <Link to="/marketplace" className="action-button">Go to Marketplace</Link>
          </div>
        )}

        {activeTab === 'energy-listing' && (
          <div className="placeholder-content">
            <div className="placeholder-icon">
              <i className="tag-icon"></i>
            </div>
            <h2>List Your Energy</h2>
            <p>Set your price and list your excess energy for sale</p>
            <Link to="/create-listing" className="action-button">Create Listing</Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Dashboard;