const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addJoke = async () => {
    const jokeText = await getJokes(); //menunggu elementnya ready utk digenerate
    const newLI = document.createElement('LI'); // menjadikannya list
    newLI.append(jokeText); //menambahkan jokeText
    jokes.append(newLI); // ketika sdh memuat element newLI maka akan di append pada element <ul> dgn id=jokes
}

const getJokes = async () => {
    try {
        const config = {
            // penerapan API pada url dadjokes harus menerapkan headers dgn key nya accept dan valuenya antara text/hmtl, application/json, atau text plain
            // pada contoh ini menggunakan application/json
            headers: { 
                Accept: 'application/json',
            },
        };
        const res = await axios.get('https://icanhazdadjoke123.com/', config);
        return res.data.joke;
    } catch (error) {
        return 'No Jokes Available!';
    }
};

button.addEventListener('click', addJoke); // ketika button diclick maka akan memunculkan variabel addJoke