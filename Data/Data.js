export const Data = {
  Titles: {
    Home: "Home | ",
    Login: "Login | ",
    Signup: "Welcome | ",
    Overview: "Dashboard | ",
    History: "History | ",
    Watchlist: "Watchlist | ",
    Insider: "Insider | ",
    Scanner: "Scanner | ",
    FillingScanner: "FillingScanner",
    Finance: "Finance | ",
  },
  NavItems: [
    {
      Name: "Features",
      ScrollTo: "Features",
    },
    {
      Name: "Plans",
      ScrollTo: "Plans",
    },
    {
      Name: "Reviews",
      ScrollTo: "Reviews",
    },
    {
      Name: "Docs",
      Route: "",
    },
    {
      Name: "Contact",
      ScrollTo: "Contact",
    },
  ],
  StatsNavItems: {
    Menu: [
      {
        Name: "Dashboard",
        Route: "/quotes/overview/aapl",
      },
      {
        Name: "History",
        Route: "/history",
      },
      {
        Name: "Watchlist",
        Route: "/watchlist",
      },
      {
        Name: "Insiders",
        Route: "/insiders",
      },
      {
        Name: "Scanner",
        Route: "/scanner",
      },
      {
        Name: "Filling",
        Route: "/scanner/filling",
      },
      {
        Name: "Finance",
        Route: "/finance",
      },
    ],
  },
  FeaturesCard: [
    {
      Icon: "/time.svg",
      Title: "Evaluation",
      color: "black-main",
      Des: "In-depth vulnerability assessments for deepfake detection systems.",
      bg: "white",
      dir: "down",
    },
    {
      Icon: "/data.svg",
      Title: "Emulation",
      color: "white",
      Des: "Sophisticated emulation of a broad spectrum of deepfake attacks including Facial Distraction Attack, FGSM, PGD, One-pixel Differential Evolution, Simulated Annealing Attack, Blur, and Noise Attack.",
      bg: "black-tertiary",
      dir: "up",
    },
    {
      Icon: "/efficiency.svg",
      Title: "Simplicity",
      color: "black-main",
      Des: "An intuitive interface that simplifies the process and interpretation of results.",
      bg: "white",
      dir: "down",
    },
  ],
  Points: {
    img: "/keypoints.svg",
    Keypoints: [
      {
        Title: "Attack Simulation",
        Des: "Emulate a wide range of deepfake attacks, encompassing both proposed and existing methods, to rigorously test the resilience of detection systems.",
      },
    ],
  },
  HistoricData: {
    img: "/historic.svg",
    Keypoints: [
      {
        Title: "User-Friendly Design",
        Des: "Experience an intuitive interface that streamlines the assessment process and facilitates clear interpretation of results.",
      },
    ],
  },
  Plans: {
    monthly: {
      package: "Basic",
      plan: "month",
      price: "50",
      Link: "",
      features: [
        "Financial",
        "Insiders",
        "Earnings",
        "Gap stats",
        "Scanners",
        "News",
        "Fillings",
        "Watchlist with E-mail alerts",
        "Charting",
        "Historical Data",
        "Access to basic stock market information",
      ],
    },
    yearly: {
      package: "Basic",
      plan: "month, Billed annually",
      price: "42",
      Link: "",
      features: [
        "Financial",
        "Insiders",
        "Earnings",
        "Gap stats",
        "Scanners",
        "News",
        "Fillings",
        "Watchlist with E-mail alerts",
        "Charting",
        "Historical Data",
        "Access to basic stock market information",
      ],
    },
  },
  PHVS: [
    {
      Type: "Market Hours (16:00 Dec 16)",
      Des: "7.50 -0.12 (-1.57%)",
    },
    {
      Type: "After Hours (16:00 DEC 12)",
      Des: "7.50 -0.12 (-1.57%)",
    },
    {
      Type: "Industry",
      Des: "Biotechnology",
    },
    {
      Type: "Sector",
      Des: "Healthcare",
    },
    {
      Type: "Country",
      Des: "Based in NL",
    },
    {
      Type: "YTD Changed",
      Des: "$-8.48 / -53.07%",
    },
    {
      Type: "Market Cap",
      Des: "$252.62M",
    },
    {
      Type: "Shares Out",
      Des: "33.15M",
    },
    {
      Type: "Shares Float",
      Des: "17.17M",
    },
    {
      Type: "SSR",
      Des: "No",
    },
    {
      Type: "Inst Own",
      Des: "30.14%",
    },
  ],
  GeneralInfo: {
    Column1: [
      {
        Title: "Market Cap",
        Value: "$252.62M",
        IsBackground: true,
        IsBorder: true,
        DotColor: "bg-[#26A69A]",
      },
      {
        Title: "Market Cap",
        Value: "$252.62M",
        IsBackground: false,
        IsBorder: false,
        DotColor: "bg-[#FFC977]",
      },
      {
        Title: "Market Cap",
        Value: "$252.62M",
        IsBackground: true,
        IsBorder: false,
        DotColor: "bg-[#E85AFF]",
      },
      {
        Title: "Market Cap",
        Value: "$252.62M",
        IsBackground: false,
        IsBorder: false,
        DotColor: "bg-[#5AFFCE]",
      },
      {
        Title: "Market Cap",
        Value: "$252.62M",
        IsBackground: true,
        IsBorder: false,
        DotColor: "bg-[#2CFF80]",
      },
      {
        Title: "Market Cap",
        Value: "$252.62M",
        IsBackground: false,
        IsBorder: false,
        DotColor: "bg-[#5AFFCE]",
      },
      {
        Title: "Market Cap",
        Value: "$252.62M",
        IsBackground: true,
        IsBorder: false,
        DotColor: "bg-[#D9DFFF]",
      },
    ],
  },
  DataGridSchema: {
    History: [
      { field: "id", headerName: "ID", width: 60, hide: true },
      { field: "ticker", headerName: "Name" },
      { field: "date", headerName: "Date", width: 100 },
      { field: "open", headerName: "Open", type: "number" },
      {
        field: "high",
        headerName: "High",
        type: "number",
      },
      {
        field: "low",
        headerName: "Low",
        type: "number",
      },
      {
        field: "close",
        headerName: "Close",
        type: "number",
      },
      {
        field: "volume",
        headerName: "Volume",
        type: "number",
      },
      {
        field: "vwap",
        headerName: "vwap",
        type: "number",
      },
    ],
    Earning: [
      { field: "id", headerName: "ID", width: 60, hide: true },
      { field: "ticker", headerName: "Name", width: 80, type: "string" },
      { field: "date", headerName: "Date", width: 100, type: "string" },
      {
        field: "time",
        headerName: "Time",
        type: "number",
      },
      {
        field: "eps",
        headerName: "EPS",
        type: "number",
      },
      {
        field: "epsEstimated",
        headerName: "epsEstimated",
        type: "number",
      },
      {
        field: "priceBefore",
        headerName: "Price Before",
        type: "number",
      },
      {
        field: "priceAfter",
        headerName: "Price After",
        type: "number",
      },
    ],
    HistoryTab: [
      { field: "ticker", headerName: "Ticker", width: 150 },
      {
        field: "date",
        headerName: "Day (1) Date",
        width: 150,
      },
      {
        field: "open",
        headerName: "Day (1) Open",
        width: 150,
      },
      {
        field: "high",
        headerName: "Day (1) HOD",
        width: 150,
      },
      {
        field: "low",
        headerName: "Day (1) Low",
        width: 150,
      },
      {
        field: "close",
        headerName: "Day (1) Close",
        width: 150,
      },
      {
        field: "changePercent",
        headerName: "Day (1) CHG%",
        width: 150,
      },
      {
        field: "volume",
        headerName: "Day (1) VOL",
        width: 150,
      },
      {
        field: "gap",
        headerName: "Day (1) GAP",
        width: 150,
      },
    ],
    WatchList: [
      {
        field: "Ticker",
        headerName: "Ticker",
        minWidth: 300,
        maxWidth: 400,
      },
      { field: "Change", headerName: "Change", minWidth: 250, maxWidth: 300 },
      { field: "Range", headerName: "Range", minWidth: 200, maxWidth: 250 },
      {
        field: "Alert",
        headerName: "Alert",
        minWidth: 150,
        maxWidth: 250,
      },
      {
        field: "Position",
        headerName: "Position",
        minWidth: 150,
        maxWidth: 200,
      },
      {
        field: "Action",
        headerName: "Action",
        minWidth: 300,
        maxWidth: 400,
      },
    ],
    InstitutionalOwnership: [
      {
        field: "Date",
        headerName: "Date",
        width: 200,
      },
      { field: "Name", headerName: "Name", width: 160 },
      { field: "Shares", headerName: "Shares", width: 160 },
      {
        field: "Chg",
        headerName: "Chg%",
        width: 160,
      },
    ],
    InsiderTransactions: [
      {
        field: "Date",
        headerName: "Date",
        width: 120,
      },
      { field: "Filter", headerName: "Filter", width: 100 },
      { field: "From", headerName: "From", width: 80 },
      {
        field: "Transaction",
        headerName: "Transaction",
        width: 100,
      },
      {
        field: "Amount",
        headerName: "Amount",
        width: 100,
      },
      {
        field: "Price",
        headerName: "Price",
        width: 100,
      },
      {
        field: "Value",
        headerName: "Value",
        width: 80,
      },
    ],
    Dividends: [
      {
        field: "XDate",
        headerName: "X Date",
        width: 200,
      },
      { field: "PaymentDate", headerName: "Payment Date", width: 150 },
      { field: "RecordDate", headerName: "Record Date", width: 150 },
      {
        field: "Declared Date",
        headerName: "Declared Date",
        width: 150,
      },
      {
        field: "Amount",
        headerName: "Amount",
        width: 150,
      },
      {
        field: "Flag",
        headerName: "Flag",
        width: 150,
      },
      {
        field: "Currency",
        headerName: "Currency",
        width: 150,
      },
      {
        field: "Description",
        headerName: "Description",
        width: 150,
      },
      {
        field: "Frequency",
        headerName: "Frequency",
        width: 150,
      },
    ],
    Scanner: [
      {
        field: "Ticker",
        headerName: "Ticker",
        width: 140,
      },
      { field: "Price", headerName: "Price", width: 140 },
      { field: "News", headerName: "News", width: 140 },
      {
        field: "Vol",
        headerName: "Vol",
        width: 140,
      },
      {
        field: "Chg",
        headerName: "Chg %",
        width: 140,
      },
      {
        field: "MarketCap",
        headerName: "Market Cap",
        width: 140,
      },
      {
        field: "SharesOut",
        headerName: "Shares Out",
        width: 140,
      },
      {
        field: "SharesFloat",
        headerName: "Shares Float",
        width: 140,
      },
      {
        field: "ShortFloat",
        headerName: "Short Float",
        width: 140,
      },
      {
        field: "Country",
        headerName: "Country",
        width: 120,
      },
    ],
  },
  History: {
    ChartSortTimes: [
      {
        Time: "D",
      },
      {
        Time: "W",
      },
      {
        Time: "M",
      },
    ],
  },
};
