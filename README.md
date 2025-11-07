# 📈 Stock Management Portfolio Dashboard

A full-stack real-time stock portfolio management application that tracks your investments with live market data from Yahoo Finance API.

## 🚀 Features

- **Real-time Stock Prices** - Live data from Yahoo Finance API
- **Portfolio Analytics** - Track gains/losses, present value, and performance
- **Sector Analysis** - Investment distribution across different sectors
- **Interactive Dashboard** - Sortable tables and visual charts
- **Responsive Design** - Works on desktop and mobile devices
- **Excel Integration** - Import portfolio data from Excel files

## 🛠️ Tech Stack

### Backend
- **Node.js** + **Express.js** - REST API server
- **Yahoo Finance API** - Real-time stock prices
- **xlsx** - Excel file processing
- **CORS** - Cross-origin resource sharing

### Frontend
- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first styling
- **React Table** - Advanced table functionality
- **Recharts** - Data visualization

## 📁 Project Structure

```
stock_exchange_real_data/
├── backend/
│   ├── config/config.js          # Server configuration
│   ├── controllers/stockController.js  # Business logic
│   ├── data/8_bit_excel.xlsx     # Portfolio data
│   ├── routes/stockRoutes.js     # API endpoints
│   ├── services/
│   │   ├── excelService.js       # Excel reader
│   │   ├── symbolMap.js          # Stock symbols
│   │   └── yahooService.js       # Yahoo Finance API
│   └── server.js                 # Express server
└── frontend/
    ├── src/
    │   ├── app/                  # Next.js pages
    │   ├── components/           # React components
    │   ├── hooks/                # Custom hooks
    │   └── styles/               # CSS styles
    └── public/                   # Static assets
```

## 🚀 Quick Start

### Installation

1. **Clone the repository**
```bash
git clone `https://github.com/Ashu6622/Real_Time_Stock_Analysis.git`
```

2. **Setup Backend**
```bash
cd backend
npm install
npm run dev
```

3. **Setup Frontend**
```bash
cd ../frontend
npm install
npm run dev
```

4. **Access the application**
- Frontend: http://localhost:3001
- Backend API: http://localhost:5000

## ⚙️ Configuration

### Backend Environment (.env)
```env
PORT=5000
```

### Frontend Environment (.env)
```env
NEXT_PUBLIC_API_BASE=http://localhost:5000/api
```

## 📊 Data Sources

### Static Data (Excel File)
- Portfolio holdings (stock names, quantities, purchase prices)
- Sector classifications
- Investment amounts

### Real-time Data (Yahoo Finance API)
- Current market prices (CMP)
- Live portfolio valuations
- Gain/loss calculations

## 🔄 How It Works

1. **Data Import**: Excel file contains your portfolio holdings
2. **Symbol Mapping**: Stock names mapped to Yahoo Finance symbols
3. **Price Fetching**: Real-time prices fetched from Yahoo Finance API
4. **Calculations**: Present value and gain/loss computed automatically
5. **Visualization**: Data displayed in interactive dashboard

## 📈 Dashboard Components

- **Summary Cards**: Total investment, present value, gain/loss
- **Portfolio Table**: Detailed stock-wise breakdown with sorting
- **Sector Summary**: Investment distribution by sector
- **Pie Chart**: Visual sector allocation

## 🔧 API Endpoints

### GET /api/stocks
Returns enriched portfolio data with real-time prices

**Response Format:**
```json
[
  {
    "stock": "HDFC Bank",
    "purchasePrice": 1500,
    "qty": 10,
    "investment": 15000,
    "symbol": "HDFCBANK.NS",
    "cmp": 1650,
    "presentValue": 16500,
    "gainLoss": 1500,
    "sector": "Financial"
  }
]
```

## 📝 Adding New Stocks

1. **Update Excel File**: Add stock details in `backend/data/8_bit_excel.xlsx`
2. **Update Symbol Map**: Add symbol mapping in `backend/services/symbolMap.js`
```javascript
"Stock Name": "SYMBOL.NS"
```

## 🚀 Deployment

### Backend (Render)
```bash
cd backend
npm run build
npm start
```

### Frontend (Vercel)
```bash
cd frontend
npm run build
npm start
```
