import React, { useState } from 'react';
import { useFetchAdminProgramme } from "../../Service/adminAPI/adminAPI.customHook";
import { MainContent } from "../Permanent/homeCard.component";
import { Loading } from '../Loading/Loading.component';
import { Error } from '../Error/Error.component';
import { Link } from 'react-router-dom';

import './programmation.style.css';
import { deleteAdminConcert } from '../../Service/adminAPI/adminAPI.service';

const groupConcertsByDay = (concerts) => {
    const grouped = {};
    concerts.forEach(concert => {
        const date = new Date(concert.Horaire).toLocaleDateString();
        if (!grouped[date]) {
            grouped[date] = [];
        }
        grouped[date].push(concert);
    });
    return grouped;
};

const formatTime = (time) => {
    const date = new Date(time);
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
};

export const AdminProgrammation = () => {
    const { data, loading, error, refetch } = useFetchAdminProgramme();
    const [openDate, setOpenDate] = useState(null);

    if (loading) return (<Loading />);
    if (error || !data) return (<Error />);

    const concertsByDay = groupConcertsByDay(data);

    const toggleDate = (date) => {
        setOpenDate(openDate === date ? null : date);
    };

    const handleDelete = async (concertID) => {
        await deleteAdminConcert(concertID)
        refetch()
    }

    return (
        <MainContent>
            <div className="h-full flex flex-col gap-4 p-4 overflow-y-scroll">
                <div className='w-full text-center'> <Link className='btn-primary p-2' to={"/admin/create_concert"}> Créer un concert </Link></div>
                {Object.keys(concertsByDay).map(date => (
                    <div key={date} className="mb-8">
                        <h2
                            className="programmeTitle py-2 rounded text-center cursor-pointer"
                            onClick={() => toggleDate(date)}
                        >
                            {`${date} (${concertsByDay[date].length} concerts)`}
                        </h2>
                        {openDate === date && (
                            <div className="mt-2 flex overflow-x-auto space-x-4">
                                {concertsByDay[date]
                                    .sort((a, b) => new Date(a.Horaire) - new Date(b.Horaire))
                                    .map(concert => (
                                        <>
                                        <div key={concert.id} className="h-full flex flex-col gap-2 p-4 border adminConcertContainer rounded mb-2 min-w-[200px]">
                                            <h3 className="text-lg font-bold">{concert.Groupe}</h3>
                                            <p><strong>Durée :</strong> {concert.Duree}</p>
                                            <p><strong>Horaire :</strong> {formatTime(concert.Horaire)}</p>
                                            <p><strong>Description :</strong> {concert.Descriptif}</p>
                                            <div className='w-full flex flex-col items-end place-self-end text-center'>
                                                <button onClick={() => handleDelete(concert.id)}> Supprimer </button>
                                                <Link to={"/admin/edit_concert"}> Editer le concert </Link>
                                            </div>

                                        </div>
                                        </>
                                    ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </MainContent>
    );
};
