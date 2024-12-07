import { useEffect, useState } from "react";
import axios from "axios";

const parseCSV = (csvText) => {
    const rows = csvText.split(/\r?\n/);
    const headers = rows[0].split(',');
    const data = [];
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(',');
        const rowObject = {};
        for (let j = 0; j < headers.length; j++) {
            rowObject[headers[j]] = rowData[j];
        }
        data.push(rowObject);
    }
    return data;
}


const useFetchCSVData = (url) => {
    const [csvData, setCsvData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchCSVData();
    }, []);

    function fetchCSVData() {
        setLoading(true);
        setError(false);

        axios.get(url)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setCsvData(parsedCsvData);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
                setError(true);
                setLoading(false);
            });
    }

    return [csvData, loading, error];
};

export { useFetchCSVData };