export const fetchAdminProgramme = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/concerts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

export const postAdminConcert = async (concert) => {
    try {
        const response = await fetch('http://localhost:8000/api/concerts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(concert)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export const deleteAdminConcert = async (concertID) => {
    try {
        const response = await fetch(`http://localhost:8000/api/concerts/${concertID}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
