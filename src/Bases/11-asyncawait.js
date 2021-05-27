//const getImagenPromesa = () =>  new Promise(resolve => resolve('http://asasdasd.com'));
//getImagenPromesa().then(console.log);
const getImagen = async () => {
    try {
        const APIKEY = '3vYK06iSmPgVgAFgGbAwFPltIpjWwbRb';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`);
        const { data } = await resp.json();
        console.log(data);
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        console.log(error);
    }
}

getImagen();


/*

peticion
.then( resp => resp.json())
.then(({data}) =>{
    const {url}=data.images.original;
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);
})
.catch(console.warn) */