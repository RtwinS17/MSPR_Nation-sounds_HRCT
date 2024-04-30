import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from "../Loading/Loading.component";
import { fetchAlertes } from '../../appStore/slices/alertes.slice';
import { MainContent } from '../Permanent/homeCard.component';

export const Playground = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.alertes);

    // IMPORTANT : Il faut avoir une [] en 2nd paramètre --> Sinon 
    useEffect(() => {
        dispatch(fetchAlertes());
    },[data]);

    if (loading) {
        return <Loading />
    }
    if (error) {
        return (
            <MainContent>
                Graou Error
            </MainContent>
        )
    }
    if (data.length > 0) {
        return (
            <MainContent>
                Une réussite avec plein de data
            </MainContent>
        )
    } else return (
        <MainContent>
            Graou réussi mais pas de data obtenu
        </MainContent>
    )

};
