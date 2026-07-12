const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;
const BASE_URL = 'https://www.alphavantage.co/query?';

async function fetchJSON(queryParams){

    const url =`${BASE_URL}${new URLSearchParams(
        {
            ...queryParams,
            apikey: API_KEY
        }
    )}`;

    const response = await fetch(url);
    const json = await response.json();

    if (!response.ok) {
        throw new Error(`Alpha Vantage API request failed with status ${response.status}`);
    }

    if (json['Error Message']) {
        throw new Error(json['Error Message']);
    }

    if (json.Note) {
        throw new Error(json.Note);
    }

    if (json.Information) {
        throw new Error(json.Information);
    }

    console.log('Alpha Vantage API request successful', json);
    return json;
}

export async function getDailyPerformance(ticker){

    const json = await fetchJSON({
        function: 'TIME_SERIES_DAILY',
        symbol: ticker
    });

    const timeSeries = json['Time Series (Daily)'];
    if(!timeSeries) return null;

    const [latestDate, previousDate] = Object.keys(timeSeries);
    if(!latestDate || !previousDate) return null;

    const latestClose = parseFloat(timeSeries[latestDate]['4. close']);
    const previousClose = parseFloat(timeSeries[previousDate]['4. close']);
    const performance = ((latestClose/previousClose - 1)*100).toFixed(2);
    console.log(`2.Daily performance for ${ticker}: ${performance}%`);
    return performance;
}