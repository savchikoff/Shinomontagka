import { ofType } from 'redux-observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
    sendEmailSuccess,
    sendEmailFailure
} from '../actionCreators/emailRequestActionCreators';

const sendEmailRequestEpic = (action$) =>
    action$.pipe(
        ofType("SEND_EMAIL_REQUEST"),
        switchMap((action) =>
            ajax.post(
                `http://localhost:3000/api/send-email`,
                action.payload,
                { 'Content-Type': 'application/json' }
            ).pipe(
                map((response) => {
                    if (response.status === 200) {
                        return sendEmailSuccess();
                    }
                    throw new Error('Unexpected response status');
                }),
                catchError((error) => of(sendEmailFailure(error.message)))
            )
        )
    );

export { sendEmailRequestEpic };
