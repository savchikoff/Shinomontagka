import { useEffect, useState } from "react";
import axios from "axios";
import { parseCSV } from "../utils/parseCsv";

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