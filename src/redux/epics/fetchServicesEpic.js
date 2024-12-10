import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, catchError, switchMap, of } from "rxjs";
import { fetchServicesSuccess, fetchServicesFailure } from "../actionCreators/servicesActionCreators";
import { parseCSV } from "../../utils/parseCsv";

const fetchServicesEpic = (action$) => action$.pipe(
    ofType('FETCH_SERVICES_START'),
    switchMap(() =>
        ajax({
            url: `${import.meta.env.VITE_SHEET_URL}`,
            responseType: 'text',
        }).pipe(
            map((response) => {
                if (response.response) {
                    const parsedData = parseCSV(response.response);
                    return fetchServicesSuccess(parsedData);
                } else {
                    throw new Error("No CSV data found in the response");
                }
            }),
            catchError((error) => {
                console.error("Error fetching CSV data:", error);
                return of(fetchServicesFailure(error.message));
            })
        )
    )
);

export { fetchServicesEpic };
